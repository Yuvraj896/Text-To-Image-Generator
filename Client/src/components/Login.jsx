import React from "react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-2xl text-neutral-700 font-medium text-center">
          Sign In !
        </h1>
        <p>Welcome back! Please sign in to continue</p>

        <div className="border px-6 py-2 flex gap-2 rounded-full mt-5">
          <img src={assets.email_icon} alt="" />
          <input type="email" name="" placeholder="Email id" />
        </div>
        <div className="border px-6 py-2 flex gap-2 rounded-full mt-3">
          <img src={assets.lock_icon} alt="" />
          <input type="password" name="" placeholder="Password" />
        </div>

        <p className="cursor-pointer text-sm text-blue-500 my-4 px-5 " > Forget password? </p>

        <button className="py-2 bg-blue-600 text-white w-full rounded-full" >Login</button>

        <p className="mt-5 text-md text-center">Don't have an account? <span className="text-blue-600 underline cursor-pointer " >Sign Up</span></p>
      </form>
    </div>
  );
};

export default Login;
