import React from "react";
import { useParams } from "react-router-dom";
import { usePost } from "../contexts/PostContext";

function PostRead() {
  const { id } = useParams();
  const { postList } = usePost();
  const post = postList[id];

  if (post === undefined) return <p>no post with this id</p>;
  else
    return (
      <div className="bg-white w-full shadow rounded-lg p-5">
        <p
          href="#"
          className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
        >
          {post.visibility}
        </p>
        <h2 className="text-4xl font-semibold  leading-tight">{post.title}</h2>
        <p className="font-semibold text-gray-700 text-sm">@username</p>
        <p className="font-semibold text-gray-600 text-xs">
          {post.postTime.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          })}
        </p>

        <p className="mt-6">{post.description}</p>
      </div>
    );
}

export default PostRead;
