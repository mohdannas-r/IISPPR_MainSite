import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const ProjectsHighlight = () => {
  const projects = [
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum sem quis eros posuere.',
    },
    {
      title: 'Project 2',
      description:
        'Sed ultricies libero quis sem porttitor lacinia. Nunc a ultrices ex. Nulla facilisi.',
    },
    {
      title: 'Project 3',
      description:
        'Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus.',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#1a1f1c] via-[#1a1f1c] to-[#fff8e7]">
      {/* Content */}
      <div className="relative z-10 pt-20 pb-16 max-w-7xl mx-auto px-6 text-white">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
          className="text-[48px] md:text-[80px] font-playfair font-medium leading-tight"
        >
          Projects
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
          custom={1}
          className="mt-6 max-w-3xl text-lg font-montserrat leading-relaxed"
        >
          Explore our impactful projects driving positive change in communities worldwide.
        </motion.p>

        {/* Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
          custom={2}
          className="mt-6"
        >
          <Link to="/projects">
            <button className="bg-lime-400 text-black font-semibold font-montserrat px-6 py-3 rounded-full flex items-center gap-2 transition duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl">
              See More <span className="text-xl">→</span>
            </button>
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index + 3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
              className="relative group"
            >
              {/* Glow on Hover */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-lime-400 opacity-0 group-hover:opacity-100 blur transition duration-300"></div>

              {/* Card Content */}
              <div className="relative bg-white/80 backdrop-blur-md rounded-2xl p-6 text-black shadow-lg border border-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl hover:rotate-[1deg]">
                <h3 className="text-2xl font-playfair mb-4">{project.title}</h3>
                <p className="text-sm font-montserrat mb-6">{project.description}</p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1 font-semibold font-montserrat hover:underline"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsHighlight;
