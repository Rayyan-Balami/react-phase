import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="p-6 bg-white text-sm rounded-xl text-center mb-3 ">
      <Link className="text-xl font-semibold hover:text-gray-600" to="/">Bobie Blogs</Link>
</header>
  )
}

export default Header