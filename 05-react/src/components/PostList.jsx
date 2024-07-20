import React from 'react';
import PostCard from './PostCard';
import { usePost } from '../contexts/PostContext';

function PostList() {
  const { postList } = usePost();

  return (
    <div className="flex flex-col gap-6">
      {postList.map((post,index) => (
        <PostCard
          key={index}
          {...post}
          index={index}
        />
      ))}
    </div>
  );
}

export default PostList;