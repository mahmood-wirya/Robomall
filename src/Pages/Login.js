import { ArrowLeftIcon } from "@heroicons/react/outline";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { login } from '../app/slices/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    dispatch(login(form.username));
    navigate('/', { replace: true });
  }
  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));

    console.log(form);
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-gray-300/30">
      {/* Arrow button to home */}
      <Link to="/" className="p-6">
        <ArrowLeftIcon className="h-8 w-8 text-[#2DBCB7] rounded-full" />
      </Link>
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-black/40  ring-2 ring-black-600 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-[#2DBCB7] uppercase decoration-wavy">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={submitHandler}>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-[#2DBCB7]"
            >
              Username
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#2DBCB7] focus:ring-[#9ededc] focus:outline-none focus:ring focus:ring-opacity-40"
              name="username"
              id="username"
              value={form.username || ''}
              onChange={onChangeHandler}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-[#2DBCB7]"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#2DBCB7] focus:ring-[#9ededc] focus:outline-none focus:ring focus:ring-opacity-40"
              name="password"
              id="password"
              value={form.password || ''}
              onChange={onChangeHandler}
            />
          </div>
          <a href="#" className="text-xs text-[#437D7B] hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              className="text-xl w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#2DBCB7] rounded-md hover:bg-[#437D7B] focus:outline-none focus:bg-[#437D7B]"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="/" className="font-medium text-[#437D7B] hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
