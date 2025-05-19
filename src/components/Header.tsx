import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/90 backdrop-blur  shadow-[0_4px_24px_0_rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="SKEJIO logo" className="w-32 h-32 object-contain -my-8" />
        </div>
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium">
          <Link to="/" className="hover:text-[#1F2EFF] transition">Home</Link>
          <a href="#" className="hover:text-[#1F2EFF] transition flex items-center gap-1">Products
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block"><path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#" className="hover:text-[#1F2EFF] transition flex items-center gap-1">Resources
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block"><path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <Link to="/pricing" className="hover:text-[#1F2EFF] transition">Pricing</Link>
        </nav>
        {/* Actions */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/login" className="text-[#1F2EFF] hover:underline">Log in</Link>
          <Link
            to="/signup"
            className="px-5 py-2 rounded-lg font-semibold transition"
            style={{ backgroundColor: '#1F2EFF', color: 'white' }}
          >
            Sign up
          </Link>
        </div>
        {/* Mobile burger */}
        <button className="md:hidden flex items-center text-white focus:outline-none">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 