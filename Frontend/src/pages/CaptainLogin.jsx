import React, { useState } from "react";
import { Link } from "react-router-dom";

export const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password,
    });

    setEmail("");
    setPassword("");
  };

  return (
    <>
      {/* Container to remove scrollbar */}
      <div className="h-screen w-full flex flex-col overflow-hidden">
        {/* Logo Section */}
        <div className="bg-black w-full flex items-center py-4">
          <img
            className="w-32 ml-8"
            src="https://cdn.mos.cms.futurecdn.net/M4hbiWhoo8n3bQQ2hKg5s3.jpg"
            alt="Uber Logo" 
          />
        </div>

        {/* Form Section */}
        <div className="flex flex-col justify-center items-center flex-grow px-7">
          <form
            onSubmit={submitHandler}
            className="w-full max-w-md"
          >
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              required
              type="password"
              placeholder="password"
            />
            <button className="bg-[#111] text-[#fff] font-semibold mb-4 rounded px-4 py-2 w-full text-lg">
              Login
            </button>
          </form>

          <p className="text-center">
            Join a fleet?{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a captain
            </Link>
          </p>
        </div>

        {/* Sign in as User Section */}
        <div className="w-full max-w-[490px] mb-5 mx-auto px-4 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <Link
            to="/login"
            className="bg-[#5282f3] flex items-center justify-center text-[#fff] font-semibold rounded px-4 py-2 w-full text-lg"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </>
  );
};
