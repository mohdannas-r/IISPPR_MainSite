import React from "react";
import { Link } from "react-router-dom";

const MissionCard = () => {
  return (
    <div className="bg-white/20 backdrop-blur-lg text-white rounded-xl sm:rounded-2xl md:rounded-[1.5rem] p-5 sm:p-6 md:p-8 max-w-md w-full mx-auto shadow-lg border border-white/30">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-3 sm:mb-4">IISPPR Mission</h2>
      <p className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
        We believe in a future where humanity lives in harmony with nature. Our mission is to protect ecosystems, combat climate change, and promote sustainable practices that benefit both people and planet.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 p-3 rounded-lg text-center">
          <div className="text-accent text-2xl font-bold mb-1">200+</div>
          <div className="text-xs">Projects Completed</div>
        </div>
        <div className="bg-white/10 p-3 rounded-lg text-center">
          <div className="text-accent text-2xl font-bold mb-1">50K+</div>
          <div className="text-xs">Trees Planted</div>
        </div>
      </div>
      <div className="text-center sm:text-left">
        <Link
          to="/about"
          className="inline-flex items-center gap-1 bg-accent text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors"
        >
          Our Story <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
};

export default MissionCard;
