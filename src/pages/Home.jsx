import React from 'react';
import Hero from '../components/home/Hero';
import ProjectsHighlight from '../components/home/ProjectsHighlight';
import Gallery from '../components/home/Gallery';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Projects Section */}
      <ProjectsHighlight />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Stats Section */}
      <StatsSection />
    </div>
  );
};

export default Home;
