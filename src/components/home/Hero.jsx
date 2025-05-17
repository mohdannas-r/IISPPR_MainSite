import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MissionCard from "./MissionCard";

// Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

// Typing Text Component
const TypingText = ({ lines, className }) => {
  const [displayedText, setDisplayedText] = useState(["", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentLine = lines[lineIndex];
    if (charIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex);
          return updated;
        });
        setCharIndex((c) => c + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      // Move to next line
      const timeout = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, lines]);

  return (
    <div className={`${className} min-h-[6rem]`}>
      {lines.map((_, i) => (
        <h1
          key={i}
          className="text-3xl md:text-5xl font-extrabold leading-tight"
        >
          {displayedText[i]}
          {i === lineIndex && <span className="animate-pulse">|</span>}
        </h1>
      ))}
    </div>
  );
};

const Hero = () => {
  const learn_more = true;

  return (
    <section className="relative z-20 flex-grow w-full min-h-[82vh] bg-[url('/home/herobg.webp')] bg-cover bg-center text-white">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 w-full flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 py-12 gap-12">
        {/* Hero Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <button className="mb-4 px-4 py-2 border border-white rounded-full text-sm text-white hover:bg-white hover:text-black">
            Give Hope For Homeless
          </button>

          <TypingText
            lines={["Helping Each Other.", "One Step At A Time"]}
            className="mb-4"
          />

          <p className="text-sm md:text-lg max-w-xl">
            We seek out world changers and difference makers around the
          </p>
          <p className="text-sm md:text-lg mb-6 max-w-xl">
            globe, and equip them to fulfill their unique purpose.
          </p>

          <button className="bg-lime-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-black hover:text-white transition text-sm md:text-base">
            Read more →
          </button>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={1}
          variants={fadeInUp}
          className="w-full lg:w-1/2"
        >
          <MissionCard learn_more />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
