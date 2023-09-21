import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      if (email === "" || password === "") {
        return;
      }
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <section className="px-5 flex flex-col justify-center items-center w-screen h-screen overflow-y-auto bg-blue-950">
      <h1 className="mb-3 font-bold text-4xl text-blue-50">Sign Up!</h1>
      <form
        onSubmit={loginHandler}
        action="submit"
        className="w-full md:w-[500px]"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-blue-50 text-lg">
            Email
          </label>
          <input
            onChange={emailHandler}
            value={email}
            id="email"
            type="email"
            placeholder="Enter Email"
            className="auth-input"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="password" className="text-blue-50">
            Password
          </label>
          <input
            onChange={passwordHandler}
            value={password}
            id="password"
            type="password"
            placeholder="Enter Password"
            className="auth-input"
          />
        </div>
        <button className="text-blue-950 bg-blue-300 text-lg font-[500] rounded-md w-full mt-10 h-14">
          Sigup
        </button>
      </form>
      <p className="mt-2 text-blue-50">
        Already have an account?{" "}
        <Link to="/gallery" className="text-blue-300 cursor-pointer">
          Login
        </Link>
      </p>
    </section>
  );
};

export default SignUp;
