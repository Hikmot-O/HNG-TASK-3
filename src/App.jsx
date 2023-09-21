import React from "react";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./components/HomePage";
import { Suspense } from "react";
import './App.css'
// import Login from "./auth/Login";
// import SignUp from "./auth/SignUp";

const HomePage = React.lazy(() => import("./components/HomePage"));
const Login = React.lazy(() => import("./auth/Login"));
const SignUp = React.lazy(() => import("./auth/SignUp"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/gallery" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
