import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [firebaseError, setFirebaseError] = useState('')
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email Address is required")
      .email("Email is invalid"),

    password: Yup.string()
      .required("Password is Required")
      // .min(7, "Password should be more than 7 characters"),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const loginHandler = async (data) => {
    // e.preventDefault();
    try {
      // if (email === "" || password === "") {
      //   return;
      // }
      console.log(data)
      const user = await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/gallery");
      console.log(user);
    } catch (err) {
      console.log(err);
      setFirebaseError(err.message)
    }
  };

  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };

  // const passwordHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <section className="px-5 flex flex-col justify-center items-center w-screen h-screen overflow-y-auto bg-blue-950">
      <h1 className="mb-3 font-bold text-4xl text-blue-50">Welcome!</h1>
      <form
        onSubmit={handleSubmit(loginHandler)}
        // onSubmit={loginHandler}
        action="submit"
        className="w-full md:w-[500px]"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-blue-50 text-lg">
            Email
          </label>
          <input
            // onChange={emailHandler}
            // value={email}
            id="email"
            type="email"
            placeholder="Enter Email"
            className="auth-input"
            {...register("email")}
          />
          <p className="text-red-500 mt-3">{errors.email?.message}</p>
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="password" className="text-blue-50">
            Password
          </label>
          <input
            {...register("password")}
            // onChange={passwordHandler}
            // value={password}
            id="password"
            type="password"
            placeholder="Enter Password"
            className="auth-input"
          />
        </div>
        <p className="text-red-500 mt-3">{errors.password?.message}</p>
        <button className="text-blue-950 bg-blue-300 text-lg font-[500] rounded-md w-full mt-10 h-14">
          Login
        </button>
        <p className="text-red-500 mt-3">{firebaseError}</p>
      </form>
      <p className="mt-2 text-blue-50">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-300 cursor-pointer">
          Signup
        </Link>
      </p>
    </section>
  );
};

export default Login;
