import React from "react";
import universal from "../assets/universal.png";
import ai from "../assets/ai.png";
import dynamic from "../assets/dynamic.png";
import enhanced from "../assets/enhanced.png";
import comprehensive from "../assets/comprehensive.png";
import predictive from "../assets/predictive.png";

const features = [
  {
    icon: <img src={universal} alt="Universal Platform Access" className="w-14 h-14 mb-4" />,
    title: "Universal Platform Access",
    desc: "Seamless experience across native iOS and Android apps, responsive web platform, embeddable widgets, and specialized admin and sponsor portals for comprehensive management.",
  },
  {
    icon: <img src={ai} alt="AI Powered Connection Ecosystem" className="w-14 h-14 mb-4" />,
    title: "AI Powered Connection Ecosystem",
    desc: "Foster meaningful relationships through AI-powered matchmaking, versatile meeting formats, efficient lead capture, and quality-focused meeting assessment tools.",
  },
  {
    icon: <img src={dynamic} alt="Dynamic Content Management" className="w-14 h-14 mb-4" />,
    title: "Dynamic Content Management",
    desc: "Create engaging event experiences with flexible agenda layouts, multi-track scheduling, immersive stories, customizable navigation, and synchronized calendaring across spaces.",
  },
  {
    icon: <img src={enhanced} alt="Enhanced Attendee Journey" className="w-14 h-14 mb-4" />,
    title: "Enhanced Attendee Journey",
    desc: "Elevate participant satisfaction through interactive mapping, personalized scheduling options, targeted communications, and tailored email notifications.",
  },
  {
    icon: <img src={comprehensive} alt="Comprehensive Performance Insights" className="w-14 h-14 mb-4" />,
    title: "Comprehensive Performance Insights",
    desc: "Track success with detailed networking analytics, real-time engagement metrics, satisfaction ratings, and in-depth attendee and content performance analysis.",
  },
  {
    icon: <img src={predictive} alt="Predictive Market Intelligence" className="w-14 h-14 mb-4" />,
    title: "Predictive Market Intelligence",
    desc: "Gain strategic advantage through supply and demand indicators, attendee interest tracking, emerging trend identification.",
  },
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="w-full bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div key={i} className="bg-transparent flex flex-col items-center text-center">
            {f.icon}
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{f.title}</h3>
            <p className="text-gray-300 text-base mb-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid; 