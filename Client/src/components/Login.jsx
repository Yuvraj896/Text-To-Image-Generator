import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Login = () => {
  const [state, setState] = useState(false);
  const { setShowLogin } = useContext(AppContext);

  useEffect(function () {
    document.body.style.overflow = "hidden";
    return function () {
      document.body.style.overflow = "unset";
    };
  }, []);

  function changeState() {
    setState(!state);
  }

  function renderLoginMessage() {
    if (state) {
      return (
        <>
          Don't have an account?{" "}
          <span
            onClick={changeState}
            className="text-blue-600 underline cursor-pointer"
          >
            Sign Up
          </span>
        </>
      );
    } else {
      return (
        <>
          Already have an account?{" "}
          <span
            onClick={changeState}
            className="text-blue-600 underline cursor-pointer"
          >
            Login
          </span>
        </>
      );
    }
  }

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <img
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt=""
        />

        <h1 className=" text-2xl text-neutral-700 font-medium text-center">
          {state ? "Login" : "Sign up"} !
        </h1>
        <p className="text-center">
          {state
            ? "Welcome back! Please sign in to continue"
            : "Please sign up to continue "}
        </p>

        {!state && (
          <div className=" border px-6 py-2 flex gap-2 rounded-full mt-5">
            <img className="blur-[0.5px]" width={15} src={assets.user} alt="" />
            <input type="text" name="" placeholder="Username" />
          </div>
        )}

        <div className="border px-6 py-2 flex gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="" />
          <input type="email" name="" placeholder="Email id" />
        </div>

        <div className="border px-6 py-2 flex gap-2 rounded-full mt-3">
          <img src={assets.lock_icon} alt="" />
          <input type="password" name="" placeholder="Password" />
        </div>

        <p
          className={`${
            !state ? "hidden" : ""
          } cursor-pointer text-sm text-blue-500 mt-4 px-5 `}
        >
          {" "}
          Forget password?{" "}
        </p>

        <button className="py-2 mt-4 bg-blue-600 text-white w-full rounded-full">
          {state ? "Login" : "Register"}{" "}
        </button>

        {/* Just wanted to try creating function */}

        <p className="mt-5 text-md text-center">{renderLoginMessage()}</p>
      </motion.form>
    </div>
  );
};

export default Login;
