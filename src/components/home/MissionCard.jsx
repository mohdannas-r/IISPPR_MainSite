import React from "react";
import { Link } from "react-router-dom";

const MissionCard = ({ learn_more }) => {
  return (
    <div className="bg-white/20 backdrop-blur-lg text-white rounded-[2rem] p-8 max-w-md w-full mx-auto shadow-lg border border-white/30">
      <h2 className="text-4xl font-bold mb-4 text-center">Our Mission</h2>
      <p className="text-base leading-relaxed text-center mb-6">
        Creating a better future through impactful public policy, focusing on
        evidence-based research and analysis to address global challenges.
      </p>
      {learn_more && (
        <div className="text-center">
          <Link
            to="/about"
            className="text-white underline text-base font-semibold hover:text-lime-300 transition"
          >
            Learn More →
          </Link>
        </div>
      )}
    </div>
  );
};

export default MissionCard;
