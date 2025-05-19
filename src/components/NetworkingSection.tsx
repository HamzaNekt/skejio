import React from "react";
import contentImg from "../assets/Content.png";

const NetworkingSection: React.FC = () => {
  return (
    <section className="w-full bg-black py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Unmatched Networking Efficiency, Proven Results
        </h2>
        <p className="text-gray-200 mb-10 text-lg">
          Transform your events into premier lead generation opportunities with our exceptional networking capabilities. Our AI-powered matchmaking consistently delivers the highest quality connections and acceptance rates in the industry, creating measurable value for all participants.
        </p>
      </div>
      {/* Image en dehors du conteneur limité */}
      <div className="w-full max-w-none flex items-center justify-center shadow-2xl mx-auto">
        <img src={contentImg} alt="Networking mobile/tablet preview" className="max-w-7xl h-full object-contain" />
      </div>
    </section>
  );
};

export default NetworkingSection; 