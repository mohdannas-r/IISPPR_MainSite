import React from 'react';
import Mission from '../components/about/Mission';
import Team from '../components/about/Team';
import WorkProcess from '../components/about/WorkProcess';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Learn about our mission, our team, and how we work to make a difference in environmental conservation and community development.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Team Section */}
      <Team />

      {/* Work Process Section */}
      <WorkProcess />
    </div>
  );
};

export default About;
