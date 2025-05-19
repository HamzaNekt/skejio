import React from "react";
import logomark from "../assets/Logomark.png";
import google from "../assets/google.png";

const Login: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center justify-center pt-36 pb-20 px-4">
      <div className="flex flex-col items-center w-full max-w-sm mx-auto">
        <img src={logomark} alt="SKEJIO logomark" className="mb-10 h-32 object-contain mx-auto" />
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2 text-center">Log in to your account</h1>
        <p className="text-[#1F2EFF] text-sm mb-8 text-center">Welcome back! Please enter your details.</p>
        <form className="w-full flex flex-col gap-4 mb-2">
          <div className="flex flex-col items-start w-full">
            <label htmlFor="email" className="text-white text-sm mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F2EFF] text-base"
            />
          </div>
          <div className="flex flex-col items-start w-full">
            <label htmlFor="password" className="text-white text-sm mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F2EFF] text-base"
            />
          </div>
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-2">
              <input id="remember" type="checkbox" className="accent-[#1F2EFF] w-4 h-4" />
              <label htmlFor="remember" className="text-white text-xs">Remember for 30 days</label>
            </div>
            <a href="#" className="text-green-400 text-xs hover:underline">Forgot password</a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1F2EFF] text-white font-semibold rounded-lg py-3 text-base shadow-lg hover:brightness-110 transition mb-2"
          >
            Sign in
          </button>
        </form>
        <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium rounded-lg py-3 mb-6 shadow hover:bg-gray-100 transition">
          <img src={google} alt="Google" className="w-6 h-6" />
          Sign in with Google
        </button>
        <p className="text-gray-300 text-sm text-center">
          Don't have an account?{' '}
          <a href="/signup" className="text-green-400 hover:underline">Sign up</a>
        </p>
      </div>
    </main>
  );
};

export default Login; 