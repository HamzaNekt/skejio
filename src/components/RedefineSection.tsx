import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const RedefineSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-black py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Logo placeholder */}
        <img src={logo} alt="SKEJIO logo" className="w-40 h-40 mb-6 mx-auto rounded-lg object-contain" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Redefine What Events Can Achieve</h2>
        <p className="text-gray-200 mb-10 text-lg">
          Leverage our comprehensive event solution to craft extraordinary in-person experiences that create lasting impressions for both attendees and sponsors.
        </p>
        <button
          className="px-8 py-3 text-white font-semibold rounded-lg shadow transition"
          style={{ backgroundColor: '#1F2EFF' }}
          onClick={() => navigate('/contact')}
        >
          Contact Sales
        </button>
      </div>
    </section>
  );
};

export default RedefineSection; 