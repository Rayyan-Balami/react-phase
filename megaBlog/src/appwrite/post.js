import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Post {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, content, featuredImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(), //postId
        {
          title,
          content,
          featuredImg,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(postId, { title, content, featuredImg, status }) {
    try {
      return await this.databases.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId,
        { title, content, featuredImg, status }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(postId) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        postId
      );
      return true;
    } catch (error) {
      throw error;
    }
  }

  async getPostByStatus(status='active') {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId, // databaseId
        conf.appwriteCollectionId, // collectionId
        [Query.equal("status", status)], // Adjusted to use the function parameter directly
        "$createdAt", // Order field
        "ASC" // Order type ('ASC' for ascending, 'DESC' for descending)
      );
    } catch (error) {
      throw error;
    }
  }

  async getPostById(postId) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId, // databaseId
        conf.appwriteCollectionId, // collectionId
        [Query.equal("$id", postId)] // queries (optional)
      );
    } catch (error) {
      throw error;
    }
  }

  async uploadFile(file) {
    try {
      await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
    }
  }

  getFilePreview(fileId) {
    try {
      return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
    } catch (error) {
      throw error;
    }
  }
}

const post = new Post();
export default post;
