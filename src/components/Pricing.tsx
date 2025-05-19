import React, { useState } from "react";
import business from "../assets/buisness.png";
import basic from "../assets/basic.png";



const DocumentIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="4" fill="#fff" />
    <rect x="7" y="7" width="10" height="10" rx="2" fill="#1F2EFF" fillOpacity="0.12" />
    <rect x="9" y="9" width="6" height="2" rx="1" fill="#1F2EFF" />
    <rect x="9" y="13" width="4" height="2" rx="1" fill="#1F2EFF" />
  </svg>
);

const Pricing: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <main className="w-full min-h-screen bg-black text-white pt-36 pb-20 px-4">
      {/* Titre et sous-titre */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Plans for all sizes</h1>
        <p className="text-lg md:text-xl mb-10 text-[#1F2EFF]">Simple, transparent pricing that grows with you. Try any plan free for 30 days.</p>
        {/* Switch annuel */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            className={`relative w-12 h-6 rounded-full flex items-center transition-all duration-200 focus:outline-none ${annual ? 'bg-[#1F2EFF]/80' : 'bg-[#181A2A]'}`}
            onClick={() => setAnnual(a => !a)}
            aria-pressed={annual}
            aria-label="Toggle annual pricing"
            type="button"
          >
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all duration-200 ${annual ? 'left-7' : 'left-1'}`}
              style={{ left: annual ? '28px' : '4px' }}
            />
          </button>
          <span className="text-sm text-white">Annual pricing <span className="text-[#1F2EFF]">(save 20%)</span></span>
        </div>
      </div>
      {/* Cartes de plans */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-28">
        {/* Basic */}
        <div className="bg-[#0A0E2A] rounded-3xl p-10 flex flex-col h-full items-center border-2 border-[#181A2A] shadow-xl w-full min-w-[420px]">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-md overflow-hidden">
            <img src={basic} alt="Basic plan icon" className="w-12 h-12 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-[#1F2EFF] mb-4">Basic plan</h3>
          <div className="text-4xl font-extrabold mb-2">$10/mth</div>
          <div className="text-base text-gray-300 mb-8">Billed annually.</div>
          <ul className="text-left space-y-4 mb-10 w-full">
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Access to all basic features</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Basic reporting and analytics</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Up to 10 individual users</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>20GB individual data each user</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Basic chat and email support</span></li>
          </ul>
          <div className="w-full bg-[#000000] rounded-3xl -mx-10 p-10 mt-auto">
            <button className="w-full bg-[#1F2EFF] text-white font-semibold rounded-xl py-4 text-lg shadow-lg hover:brightness-110 transition">Get started</button>
          </div>
        </div>
        {/* Business */}
        <div className="bg-[#0A0E2A] rounded-3xl p-10 flex flex-col h-full items-center border-2 border-[#181A2A] shadow-xl w-full min-w-[420px]">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-md overflow-hidden">
            <img src={business} alt="Business plan icon" className="w-12 h-12 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-[#1F2EFF] mb-4">Business plan</h3>
          <div className="text-4xl font-extrabold mb-2">$20/mth</div>
          <div className="text-base text-gray-300 mb-8">Billed annually.</div>
          <ul className="text-left space-y-4 mb-10 w-full">
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>200+ integrations</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Advanced reporting and analytics</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Up to 20 individual users</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>40GB individual data each user</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Priority chat and email support</span></li>
          </ul>
          <div className="w-full bg-[#000000] rounded-3xl -mx-10 p-10 mt-auto">
            <button className="w-full bg-[#1F2EFF] text-white font-semibold rounded-xl py-4 text-lg shadow-lg hover:brightness-110 transition">Get started</button>
          </div>
        </div>
        {/* Enterprise */}
        <div className="bg-[#0A0E2A] rounded-3xl p-10 flex flex-col h-full items-center border-2 border-[#181A2A] shadow-xl w-full min-w-[420px]">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-8 shadow-md overflow-hidden">
            <img src={business} alt="Enterprise plan icon" className="w-12 h-12 object-contain" />
          </div>
          <h3 className="text-xl font-bold text-[#1F2EFF] mb-4">Enterprise plan</h3>
          <div className="text-4xl font-extrabold mb-2">$40/mth</div>
          <div className="text-base text-gray-300 mb-8">Billed annually.</div>
          <ul className="text-left space-y-4 mb-10 w-full">
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Advanced custom fields</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Audit log and data history</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Unlimited individual users</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Unlimited individual data</span></li>
            <li className="flex items-center gap-2"><span className="text-green-400 text-xl">✔</span> <span>Personalised+priority service</span></li>
          </ul>
          <div className="w-full bg-[#000000] rounded-3xl -mx-10 p-10 mt-auto">
            <button className="w-full bg-[#1F2EFF] text-white font-semibold rounded-xl py-4 text-lg shadow-lg hover:brightness-110 transition">Get started</button>
          </div>
        </div>
      </div>
      {/* FAQ */}
      <div className="max-w-7xl mx-auto mt-32">
        <h2 className="text-4xl mb-10">FAQs</h2>
        <p className="text-lg text-gray-200 mb-16">Everything you need to know about the product and billing. Can't find the answer you're looking for? Please <a href="#" className="underline text-[#1F2EFF]">chat to our friendly team</a>.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div>
            <h3 className="font-semibold mb-4">Is there a free trial available?</h3>
            <p className="text-gray-300">Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Can I change my plan later?</h3>
            <p className="text-gray-300">Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">What is your cancellation policy?</h3>
            <p className="text-gray-300">We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Can other info be added to an invoice?</h3>
            <p className="text-gray-300">Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">How does billing work?</h3>
            <p className="text-gray-300">Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">How do I change my account email?</h3>
            <p className="text-gray-300">You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.</p>
          </div>
        </div>
        {/* Encart final */}
        <div className="bg-[#f6f7ff] rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-4">Still have questions?</h3>
            <p className="text-gray-700 text-lg">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          </div>
          <button className="bg-[#1F2EFF] text-white font-semibold rounded-lg px-10 py-4 text-lg">Get in touch</button>
        </div>
      </div>
    </main>
  );
};

export default Pricing; 