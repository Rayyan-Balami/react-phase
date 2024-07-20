import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout";
import Post from "./pages/Post";
import PostView from "./pages/PostView";
import AddPost from "./pages/AddPost";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Post />} />
      <Route path="post/:id" element={<PostView />} />
      <Route path="post/add" element={<AddPost />} />
    </Route>
  )
);