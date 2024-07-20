import React, { useEffect } from "react";
import { post as postService } from "../appwrite/post";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function AllPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    postService.getPostByStatus().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <Container>
      <Container>
        {posts.length === 0 ? (
          'Login to read posts'
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default AllPost;


