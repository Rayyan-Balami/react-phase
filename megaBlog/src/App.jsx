import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/slices/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(setLoading(false));
  }, []);

  if (loading) {
    return (
      <div>
        loding
      </div>
    );
  }

  return <div><div>
  <Header />
  <main>
    <Outlet />
  </main>
  <Footer />
</div></div>;
}

