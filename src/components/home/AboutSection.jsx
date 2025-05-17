import React from "react";
import { motion } from "framer-motion";
import WorkTogether from "./WorkTogether";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutSection = () => {
  return (
    <div className="mt-0">
      <section className="text-center text-[20px]">
        {/* About Section */}
        <section className="relative bg-[#f4f6f3] overflow-hidden">


          {/* Animated WorkTogether Component */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            custom={0}
            viewport={{ once: false, amount: 0.5 }} // 👈 replay animation on every scroll into view
            className="relative z-10"
          >
            <WorkTogether />
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default AboutSection;
