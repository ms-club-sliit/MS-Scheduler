import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth";
import { Header } from "../components";
import Router from "next/router";
import { toast } from "react-toastify";

export default function Login() {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.isLoggedIn) {
      Router.push("/");
    }
  }, [state.isLoggedIn]);

  useEffect(() => {
    if (state.isLoggedIn && !state.error) {
      toast.success("Login Successful!");
    }
    if (!state.isLoggedIn && state.error) {
      toast.error("Login failed!");
    }
  }, [state.isLoggedIn, state.error]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        userName: e.target.userName.value,
        password: e.target.password.value,
      }),
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="max-w-6xl px-8 my-10 sm:px-16 mx-auto flex flex-col flex-grow justify-center gap-12 items-center">
        <div>
          <h2 className="text-4xl leading-tight font-medium text-center">
            Log in to
            <br />
            Meeting Scheduler
          </h2>
        </div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 w-full max-w-sm">
          <input
            type="text"
            name="userName"
            className="w-full border outline-none focus:border-black border-gray-200 rounded p-3"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="w-full border outline-none focus:border-black border-gray-200 rounded p-3"
            placeholder="Password"
          />
          <button
            type="submit"
            className="w-full border text-lg bg-blue-600 hover:bg-white transition hover:text-blue-600 hover:border-blue-600 text-white font-semibold rounded p-3">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
