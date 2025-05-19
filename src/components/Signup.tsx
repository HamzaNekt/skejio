import React from "react";
import logomark from "../assets/Logomark.png";
import google from "../assets/google.png";
import mac from "../assets/mac.png";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-black flex flex-col items-center justify-center pt-36 pb-20 px-4">
      <div className="flex flex-col items-center w-full max-w-sm mx-auto">
        <img src={logomark} alt="SKEJIO logomark" className="mb-10 h-32 object-contain mx-auto" />
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2 text-center">Create an account</h1>
        <p className="text-[#1F2EFF] text-base mb-8 text-center">Start your 30-day free trial.</p>
        <form className="w-full flex flex-col gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg px-4 py-3 bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1F2EFF] text-base"
          />
          <button
            type="submit"
            className="w-full bg-[#1F2EFF] text-white font-semibold rounded-lg py-3 text-base shadow-lg hover:brightness-110 transition"
          >
            Get started
          </button>
        </form>
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-gray-700" />
          <span className="mx-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-700" />
        </div>
        <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium rounded-lg py-3 mb-3 shadow hover:bg-gray-100 transition">
          <img src={google} alt="Google" className="w-6 h-6" />
          Sign up with Google
        </button>
        <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-medium rounded-lg py-3 mb-6 shadow hover:bg-gray-100 transition">
          <img src={mac} alt="Apple" className="w-6 h-6" />
          Sign up with Apple
        </button>
        <p className="text-gray-300 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-[#1F2EFF] hover:underline">Log in</Link>
        </p>
      </div>
    </main>
  );
};

export default Signup; 