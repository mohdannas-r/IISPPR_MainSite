import React from 'react';
import Hero from '../components/home/Hero';
import ProjectsHighlight from '../components/home/ProjectsHighlight';
import Gallery from '../components/home/Gallery';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AboutSection from '../components/home/AboutSection';

const Home = () => {
  return (
    <div className="h-[663vh]">
		{/* This is the main div*/}
		
		
			{/* Section 1 : Hero*/}
			<Hero />			
			
			
			{/* Section 2 About*/}
			<AboutSection />
			
			
			{/* Left blank intentionaly*/}
			<div className="bg-white h-[22vh]"></div>
			
			
			{/* Section 3  Gallery*/}
			<Gallery />
			
			
			{/* Left blank intentionaly*/}
			<div className="bg-white h-[14.7vh]"></div>
			
			{/* Section 4  Projects*/}
			<ProjectsHighlight />
			
			
			
			{/* Section 5  (Testimonials)*/}
			<TestimonialsSection />
			
			
			
			{/* Section 6 (Stats)*/}
			<StatsSection />
			
			
			
			{/* Left blank intentionaly*/}
			<div className="bg-white h-[14vh]"></div>
			

		</div>

  );
};

export default Home;
