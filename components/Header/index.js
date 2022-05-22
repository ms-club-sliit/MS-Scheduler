import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth";

export default function Header() {
  const state = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    setIsLoggedIn(state.isLoggedIn);
  }, [state.isLoggedIn]);

  return (
    <div className="w-full border-b border-black/10 ">
      <div className="max-w-6xl mx-auto flex justify-between gap-8 px-8 sm:px-16 items-center h-16 text-md">
        <div>MS CLUB</div>
        <div className="flex items-center gap-8">
          <Link href="https://msclub-admin-panel.web.app/">
            <a className="hover:text-purple-700 cursor-pointer transition-all duration-300">
              Admin Panel
            </a>
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-purple-700 border border-purple-700 transition hover:text-purple-700 hover:bg-white rounded text-white py-1 px-3">
              Logout
            </button>
          ) : (
            <div className="flex items-center gap-8">
              <Link href="/login">
                <a className="hover:text-purple-700 cursor-pointer transition-all duration-300">
                  Login
                </a>
              </Link>
              <Link href="/signup">
                <a className="bg-purple-700 border border-purple-700 transition hover:text-purple-700 hover:bg-white rounded text-white py-1 px-3">
                  Signup
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
