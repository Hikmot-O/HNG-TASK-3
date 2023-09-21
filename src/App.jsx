import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/gallery" element={<HomePage />} />
      
    </Routes>
  );
}

export default App;
