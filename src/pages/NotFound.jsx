import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary-light to-primary">
      <main className="flex-grow flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="bg-white/20 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-xl max-w-2xl w-full">
          <div className="flex justify-center mb-6">
            <svg
              viewBox="0 0 64 64"
              className="w-24 h-24 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Magnifying glass */}
              <circle cx="27" cy="27" r="16" strokeWidth="3" />
              <line x1="39" y1="39" x2="58" y2="58" strokeWidth="3" />

              {/* Sad face inside */}
              <circle cx="22" cy="24" r="1.5" fill="currentColor" />
              <circle cx="32" cy="24" r="1.5" fill="currentColor" />
              <path
                d="M22 32 Q27 28 32 32"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Page Not Found</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="bg-accent text-primary font-medium px-6 py-3 rounded-full hover:bg-white transition-colors"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
            <button
              className="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white hover:text-primary transition-colors"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
