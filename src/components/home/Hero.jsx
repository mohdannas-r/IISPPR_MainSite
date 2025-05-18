import React from "react";
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
    <div className={`${className} min-h-[4rem] sm:min-h-[6rem]`}>
      {lines.map((_, i) => (
        <h1
          key={i}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
        >
          {displayedText[i]}
          {i === lineIndex && <span className="animate-pulse">|</span>}
        </h1>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative z-20 flex-grow w-full min-h-[85vh] bg-[url('/home/herobg.webp')] bg-cover bg-center">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 w-full h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 gap-8 lg:gap-12">
        {/* Hero Left Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInUp}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <button className="mb-4 px-4 py-2 border border-accent rounded-full text-xs sm:text-sm text-white hover:bg-accent hover:text-primary transition-colors">
            Sustainable Environment
          </button>

          <div className="text-white mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-2">
              We're On A Mission
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              To Save Our Planet
            </h1>
          </div>

          <div className="space-y-2 mb-6">
            <p className="text-sm sm:text-base md:text-lg max-w-xl text-white">
              Join us in creating a greener, more sustainable world. Together we can make a difference
              through conservation, renewable energy, and eco-friendly practices.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-accent text-primary font-semibold px-5 sm:px-6 py-2 rounded-full hover:bg-white hover:text-primary transition text-xs sm:text-sm md:text-base">
              Our Projects
            </button>
            <button className="border border-white text-white font-semibold px-5 sm:px-6 py-2 rounded-full hover:bg-white hover:text-primary transition text-xs sm:text-sm md:text-base">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          custom={1}
          variants={fadeInUp}
          className="w-full sm:w-4/5 md:w-3/4 lg:w-1/2 mt-8 lg:mt-0"
        >
          <MissionCard />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
