import React from "react";
import twitter from "../assets/socials/twitter.png";
import linkedin from "../assets/socials/linkedin.png";
import facebook from "../assets/socials/facebook.png";
import github from "../assets/socials/github.png";
import dribbble from "../assets/socials/dribbble.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black mt-20">
      <div className="max-w-7xl mx-auto px-8 pt-2 pb-20 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        {/* Logo + slogan */}
        <div className="flex flex-col items-start md:w-1/2">
          <img src={logo} alt="SKEJIO logo" className="w-56 h-56 mb-2 -mt-4 object-contain" />
          <p className="text-gray-300 text-base max-w-sm leading-relaxed">
            Powerful planning tools, actionable insights,<br />
            and strategic matchmaking in one solution
          </p>
        </div>
        {/* Liens */}
        <div className="flex flex-row gap-16 md:gap-20 md:w-1/2 justify-end items-start">
          <div>
            <h4 className="text-white font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Overview</a></li>
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Features</a></li>
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Releases</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><Link to="/about" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>About us</Link></li>
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>News</a></li>
              <li><Link to="/contact" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Cookies</a></li>
              <li><a href="#" className="text-gray-400 hover:underline" style={{ transition: 'color 0.2s' }} onMouseOver={e => (e.currentTarget.style.color = '#1F2EFF')} onMouseOut={e => (e.currentTarget.style.color = '')}>Licenses</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Barre du bas */}
      <div className="w-full bg-[#232328] border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">© 2025 SKEJIO. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Icônes réseaux sociaux en images */}
            <a href="#" className="transition hover:brightness-125" aria-label="X">
              <img src={twitter} alt="X" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" className="transition hover:brightness-125" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" className="transition hover:brightness-125" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" className="transition hover:brightness-125" aria-label="GitHub">
              <img src={github} alt="GitHub" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" className="transition hover:brightness-125" aria-label="Dribbble">
              <img src={dribbble} alt="Dribbble" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 