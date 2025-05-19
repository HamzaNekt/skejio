import React from "react";
import { Link } from "react-router-dom";
import play from "../assets/play.png";
import dashboard from "../assets/dashboard.png";

const Hero: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-black pt-32 pb-12 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
        Elevate Your Events, Effortlessly
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#1F2EFF' }}>
        Powerful planning tools, actionable insights, and strategic matchmaking in one solution
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          <img src={play} alt="Play" className="w-5 h-5" />
          Demo
        </button>
        <Link
          to="/signup"
          className="px-6 py-3 text-white font-semibold rounded-lg shadow transition flex items-center justify-center"
          style={{ backgroundColor: '#1F2EFF' }}
        >
          Sign up
        </Link>
      </div>
      {/* Dashboard image placeholder */}
      <div className="w-full max-w-5xl mx-auto shadow-2xl flex items-center justify-center">
        <img src={dashboard} alt="Dashboard preview" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Hero; 