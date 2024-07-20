import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNav() {
  const personName = 'Rayyan Balami'
  return (
    <div className="w-1/4 lg:w-1/5 h-screen overflow-y-hidden bg-white shadow-lg">
    <div className="p-5 bg-white sticky top-0">
      <img
        className="border rounded-full border-indigo-100 shadow-lg"
        src="https://i.pinimg.com/564x/94/c1/e7/94c1e708fad9e13c8bcd7848a0f40a33.jpg"
      />
      <div className="pt-2 border-t mt-5 w-full text-center text-xl text-gray-600">
        {personName}
      </div>
    </div>
    <div className="w-full h-screen antialiased flex flex-col hover:cursor-pointer divide-y">
      <NavLink to="/"
        className={({isActive})=>`${isActive?'bg-indigo-600 text-white':'hover:bg-gray-200 bg-gray-100'} p-3 w-full text-xl text-left text-gray-600 font-semibold`}
        href="#"
      >
        Posts
      </NavLink>
      <NavLink to="/post/add"
        className={({isActive})=>`${isActive?'bg-indigo-600 text-white':'hover:bg-gray-200 bg-gray-100'} p-3 w-full text-xl text-left text-gray-600 font-semibold`}
        href="#"
      >
        Add Post
      </NavLink>
    </div>
  </div>
  )
}

export default SideNav