import React from 'react';
import Hero from '../components/home/Hero';
import Impact from '../components/home/Impact';
import ProjectsHighlight from '../components/home/ProjectsHighlight';
import Gallery from '../components/home/Gallery';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Impact />
      <ProjectsHighlight />
      <StatsSection />
      <Gallery />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
