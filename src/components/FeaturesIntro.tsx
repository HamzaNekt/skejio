import React from "react";



const FeaturesIntro: React.FC = () => {
  return (
    <section className="w-full bg-black py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="font-medium mb-2 block" style={{ color: '#1F2EFF' }}>Features</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Guidance That Transforms Events</h2>
        <p className="text-gray-200 mb-12 text-lg">
          Our event specialists act as your strategic partners rather than just another support resource. Through personalized attention and proactive collaboration, we ensure you maximize platform value to achieve significant impact and long-term success.
        </p>
      </div>
    </section>
  );
};

export default FeaturesIntro; 