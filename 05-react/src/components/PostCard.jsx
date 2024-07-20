import React from 'react'
import { usePost } from '../contexts/PostContext';
import { Link } from 'react-router-dom';

function PostCard({ title, description, visibility, postTime, index }) {


  const {deletePost} = usePost();

  const month = postTime.toLocaleString('default', { month: 'long' }); // "January", "February", etc.
  const date = postTime.getDate(); // 1-31
  const year = postTime.getFullYear(); // e.g., 2023
  const time = postTime.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true // Ensure AM/PM
  });
  
  return (
    <div className="flex flex-row gap-4 bg-white w-full shadow rounded-lg p-5">
    <div className="flex flex-col p-4 font-bold leading-none uppercase bg-gray-200 rounded items-center justify-center w-1/4">
      <div className="text-3xl">{month}</div>
      <div className="text-6xl">{date}</div>
      <div className="text-xl">{year}</div>
      <div className="text-sm">{time}</div>
    </div>
    <div className="w-3/4 space-y-4">
      <h1 className="text-2xl font-bold tracking-tight text-gray-800 line-clamp-1">
        {title}
      </h1>
      <p className="line-clamp-4">
        {description}
      </p>
      <div className="p-1.5 rounded-lg border grid grid-cols-4 gap-1.5">
        <a
          href="#"
          className="py-1 px-2 block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors"
        >
          @username
        </a>
      

        <div className="text-center text-indigo-600 font-semibold rounded-lg py-1 px-2 text-sm"
        >
          {visibility}
        </div>
       
      
        <button className=" text-red-600 hover:bg-red-100 text-center font-semibold rounded-lg py-1 px-2 text-sm cursor-pointer"onClick={()=>deletePost(index)}>
          Delete
        </button>
        <Link to={`/post/${index}`} className="text-white bg-indigo-600 hover:bg-indigo-900 text-center font-semibold rounded-lg py-1 px-2 text-sm cursor-pointer">
          Read More
        </Link>
      </div>
    </div>
  </div>
  )
}

export default PostCard