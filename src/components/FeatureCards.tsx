import React from "react";
import precision from "../assets/precision.png";
import streamlined from "../assets/streamlined.png";
import quality from "../assets/quality.png";

const features = [
  {
    icon: <img src={precision} alt="Precision Matchmaking" className="w-14 h-14 mb-4" />,
    title: "Precision Matchmaking",
    desc: "Customizable, intent-driven connection system that aligns perfectly with attendee objectives and interests for meaningful engagement.",
  },
  {
    icon: <img src={streamlined} alt="Streamlined Lead Capture" className="w-14 h-14 mb-4" />,
    title: "Streamlined Lead Capture",
    desc: "Integrated contact and lead scanning technology to efficiently track event interactions and maximize return on investment.",
  },
  {
    icon: <img src={quality} alt="Quality Assessment Tools" className="w-14 h-14 mb-4" />,
    title: "Quality Assessment Tools",
    desc: "Gather critical feedback on meeting effectiveness to quantify event success and continuously enhance connection quality.",
  },
];

const FeatureCards: React.FC = () => {
  return (
    <section className="w-full bg-black pt-2 pb-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div key={i} className="bg-transparent flex flex-col items-center text-center h-full">
            {f.icon}
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{f.title}</h3>
            <p className="text-gray-300 text-base mb-2">{f.desc}</p>
            <a href="#" className="text-cyan-400 font-medium flex items-center gap-1 hover:underline mt-auto mb-2 md:mb-0">
              Learn more <span className="text-lg">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards; 