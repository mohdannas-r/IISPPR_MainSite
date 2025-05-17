import React, { useRef, useState, useEffect } from 'react';
import { FaHandsHelping, FaUsers, FaDove, FaGlobe } from 'react-icons/fa';
import { IoWomanOutline } from "react-icons/io5";
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    icon: <FaHandsHelping className="text-green-700 text-4xl" />,
    number: 21,
    label: 'Active States',
  },
  {
    icon: <FaGlobe className="text-green-700 text-4xl" />,
    number: 53,
    label: 'Countries Research Community',
  },
  {
    icon: <FaUsers className="text-green-700 text-4xl" />,
    number: 10000,
    label: 'People Reach',
    isMillion: true,
  },
  {
    icon: <IoWomanOutline className="text-green-700 text-4xl" />,
    number: 8000,
    label: 'Women Reach',
  },
  {
    icon: <FaDove className="text-green-700 text-4xl" />,
    number: 50000,
    label: 'People on Social Media',
  },
];

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartCount(true);
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-12 text-gray-900"
          >
            We Believe That We Can Save More Lives With You
          </motion.h2>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-green-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="mb-4 bg-white rounded-full p-4 shadow-md inline-block"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl font-bold text-black">
                  {startCount ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2}
                      separator=","
                      suffix={stat.isMillion ? '+' : '+'}
                    />
                  ) : (
                    0
                  )}
                </div>
                <div className="text-sm text-gray-700 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Image */}
      <img src="/home/statsbottom.jpg" alt="Bottom Decoration" className="w-full object-cover" />
    </section>
  );
};

export default StatsSection;