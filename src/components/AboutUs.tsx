import React from "react";
import desk from "../assets/desk.png";
import candice from "../assets/team/candice.png";
import drew from "../assets/team/drew.png";
import lana from "../assets/team/lana.png";
import natali from "../assets/team/natali.png";
import orlando from "../assets/team/orlando.png";
import phoenix from "../assets/team/phoenix.png";
import olivia from "../assets/team/olivya.png";
import demi from "../assets/team/demi.png";
import linkedin from "../assets/socials/linkedin.png";
import twitter from "../assets/socials/twitter.png";
import dribbble from "../assets/socials/dribbble.png";

const stats = [
  { value: "400+", label: "Projects completed" },
  { value: "600%", label: "Return on investment" },
  { value: "10k", label: "Global downloads" },
  { value: "200+", label: "5-star reviews" },
];

const team = [
  { name: "Olivia Rhye", role: "Founder & CEO", roleColor: "text-[#1F2EFF]", desc: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.", img: olivia, socials: [twitter, linkedin, dribbble] },
  { name: "Phoenix Baker", role: "Engineering Manager", roleColor: "text-[#1F2EFF]", desc: "Lead engineering teams at Figma, Pitch, and Protocol Labs.", img: phoenix, socials: [twitter, linkedin, dribbble] },
  { name: "Lana Steiner", role: "Product Manager", roleColor: "text-[#1F2EFF]", desc: "Former PM for Linear, Lambda School, and On Deck.", img: lana, socials: [twitter, linkedin, dribbble] },
  { name: "Demi Wilkinson", role: "Frontend Developer", roleColor: "text-[#1F2EFF]", desc: "Former frontend dev for Linear, Coinbase, and Postscript.", img: demi, socials: [twitter, linkedin, dribbble] },
  { name: "Candice Wu", role: "Backend Developer", roleColor: "text-[#1F2EFF]", desc: "Lead backend dev at Clearbit. Former Clearbit and Loom.", img: candice, socials: [twitter, linkedin, dribbble] },
  { name: "Natali Craig", role: "Product Designer", roleColor: "text-[#1F2EFF]", desc: "Founding design team at Figma. Former Pleo, Stripe, and Tile.", img: natali, socials: [twitter, linkedin, dribbble] },
  { name: "Drew Cano", role: "UX Researcher", roleColor: "text-[#1F2EFF]", desc: "Lead user research for Slack. Contractor for Netflix and Udacity.", img: drew, socials: [twitter, linkedin, dribbble] },
  { name: "Orlando Diggs", role: "Customer Success", roleColor: "text-[#1F2EFF]", desc: "Lead CX at Wealthsimple. Former PagerDuty and Sqreen.", img: orlando, socials: [twitter, linkedin, dribbble] },
];

const AboutUs: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-black text-white pt-36 pb-20 px-4">
      {/* Header section */}
      <div className="max-w-4xl mx-auto text-center mb-40">
        <a className="text-[#1F2EFF] text-xl mb-6 inline-block">About us</a>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About the company</h1>
        <p className="text-lg text-gray-200 mb-2">Learn more about the company and the team behind it.</p>
      </div>
      {/* Stats section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-20 mb-44">
        <img
          src={desk}
          alt="Office desk"
          className="w-full max-w-lg rounded-2xl object-cover shadow-xl flex-shrink-0"
        />
        <div className="flex-1 flex flex-col justify-center items-start lg:pl-12 w-full">
          <span className="text-[#1F2EFF] text-base md:text-xl font-semibold mb-4">We've helped hundreds of companies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-left leading-tight">
            We're only just getting<br />started on our journey
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-20 gap-y-8 mt-10 w-full">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <span className="text-4xl md:text-5xl font-extrabold text-[#1F2EFF] leading-none">{stat.value}</span>
                <span className="text-base text-white mt-2 leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team section */}
      <div className="max-w-6xl mx-auto mb-10 flex flex-col items-center text-center">
        <span className="text-[#1F2EFF] text-base md:text-lg font-semibold mb-2 block">We're hiring!</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Meet our team</h2>
        <p className="text-gray-200 mb-8 text-lg max-w-4xl">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
        <div className="flex gap-4 mb-32 justify-center">
          <button className="px-6 py-2 rounded-lg border border-[#1F2EFF] text-[#1F2EFF] font-semibold bg-transparent hover:bg-[#1F2EFF] hover:text-white transition">About us</button>
          <button className="px-6 py-2 rounded-lg bg-[#1F2EFF] text-white font-semibold hover:brightness-110 transition">Open positions</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-[#10153B] rounded-xl p-8 flex flex-col items-center shadow-lg">
              <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-4" />
              <div className="text-white text-lg font-semibold mb-1">{member.name}</div>
              <div className={"text-sm font-medium mb-1 " + member.roleColor}>{member.role}</div>
              <div className="text-gray-300 text-sm mb-4 text-center">{member.desc}</div>
              <div className="flex gap-3 mt-auto">
                {member.socials.map((social, i) => (
                  <img src={social} alt={member.name} className="w-6 h-6 object-cover" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutUs; 