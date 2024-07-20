import React from "react";
import SideNav from "./components/SideNav";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import PostProvider from "./contexts/PostContext";

function Layout() {
  return (
    <div className="w-full bg-indigo-100 h-screen flex flex-row justify-center ">
      <SideNav />
      <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
        <Header />
        <PostProvider>
        <Outlet />
    </PostProvider>
      </div>
    </div>
  );
}

export default Layout;
