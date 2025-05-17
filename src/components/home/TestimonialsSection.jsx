import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      imageSrc: '/home/t8.webp',
      text: "I must say that it was an enriching experience. The program has provided me with hands-on training in data analytics and its applications in public policy. The faculty and mentors were indeed very supportive and guided us.",
      author: "Alafiatayo Christopher Kehinde",
    },
    {
      imageSrc: '/home/t2.webp',
      text: "The IISPPR Data Analytics and Public Policy Fellowship was a great learning experience for me. I learned how to use tools like R, Power BI, stata and SPSS to analyze data and make better decisions in public policy.",
      author: "Latifa Mustafa",
    },
    {
      imageSrc: '/home/t3.webp',
      text: "The knowledge is unprecedented! I also want to appreciate the management of this awesome fellowship for providing access to the recordings of the lessons. I am still learning through them! Thank you so much.",
      author: "Adebayo Samson Akinade ",
    },
    {
      imageSrc: '/home/t4.webp',
      text: "The mentorship and interactive sessions provided by the facilitators created a collaborative learning environment that fostered my innovation and critical thinking. I am now able and better equipped to use data as a powerful tool.",
      author: "Derrick Byamungu",
    },
    {
      imageSrc: '/home/t5.webp',
      text: "I look forward to staying connected with the IISPPR organization and hope to contribute to its initiatives in the future.Lastly, I sincerely thank the mentors, organizers, and fellow participants for their dedication and support throughout this journey.",
      author: "Utsab Bhattarai",
    },
    {
      imageSrc: '/home/t6.webp',
      text: "The sessions were practical and engaging, helping me see how data can improve public service delivery, especially in refugee humanitarian contexts. I'm thankful to the mentors and peers for their support",
      author: "Shariff Mohamed Abdi",
    },
    {
      imageSrc: '/home/t7.webp',
      text: "With the knowledge imparted in me, I will not only use these new skills for career or personal growth, I will use it to create positive impact in the data analysis industry, and also use it to educate my peers and youths in my community..",
      author: "Umaru Jack Kamara",
    },
    {
      imageSrc: '/home/t1.webp',
      text: "My experienced during the time of our program with IISPPR-FELLOWSHIP was a wounderfull one..I have no regret of getting the knowledge I got from the program. And also I have no regret of getting the knowledge I got from the program.",
      author: "Anthony Mark Kamara jr.",
    },
    {
      imageSrc: '/home/t9.webp',
      text: "I gained valuable insights into data-driven decision-making and evidence-based policy formulation. The fellowship has not only enhanced my technical skills in data analysis but also broadened my perspective on the role of data in public service.",
      author: "Mohamed Omar Qasim",
    },
    {
      imageSrc: '/home/t10.webp',
      text: "The fellowship immersed me in hands-on data analysis tools, enhancing my skills in statistical methods and visualization techniques. I gained practical experience with suitable datasets.",
      author: "Zahra Mohamed Abdul",
    },
    {
      imageSrc: '/home/t11.webp',
      text: " An incredibly eye-opening experience. The fellowship broadened my perspective on how data can be used not just to interpret the world, but to change it. I particularly enjoyed collaborating with fellow participants from diverse backgrounds",
      author: "Gilbert Kipkoech Too",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  return (
    <section className="bg-[#11160e] text-white pt-0 lg:h-screen pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">

        {/* Headings and CTA */}
        <div className="text-center mb-12 lg:mb-0 lg:absolute lg:top-[280px] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full lg:max-w-2xl z-20">
          <h3 className="text-lg font-semibold font-[Playfair Display] text-[28px] sm:text-[32px] text-gray-300 mb-1">
            — Testimonials —
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug my-2 lg:mt-[7vh]">
            Trusted by leaders <br />
            <span className="text-lime-400">from various industries</span>
          </h2>
          <p className="text-gray-300 mb-5">
            Learn why professionals trust our solutions to
            <br className="hidden sm:inline" />
            complete their customer journeys.
          </p>
          <button className="bg-lime-400 text-black font-semibold py-3 px-6 rounded-full hover:bg-black hover:text-white transition duration-300">
            Read Success Stories →
          </button>
        </div>

        {/* Mobile Carousel Layout */}
        <div className="block sm:hidden mt-12">
          <Card {...testimonials[currentIndex]} />
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:grid md:grid-cols-3 sm:grid-cols-2 gap-6 lg:hidden mt-12">
          {testimonials.map((t, i) => (
            <Card key={i} imageSrc={t.imageSrc} text={t.text} author={t.author} />
          ))}
        </div>

        {/* Large Screen Layout */}
        <div className="hidden lg:grid grid-cols-5 justify-items-center min-h-[280px] mt-12 gap-y-6">
          <div className="flex flex-col gap-6 lg:gap-[10vh] lg:mt-[50vh] lg:ml-[20vh] xl:ml-0">
            <Card {...testimonials[1]} />
          </div>
          <div className="flex flex-col lg:gap-[10vh] gap-6 lg:mt-[2vh] lg:mr-[15vw] xl:mr-[17vw]">
            <Card {...testimonials[2]} />
          </div>
          <div className="flex flex-col ">
            <Card {...testimonials[5]} />
          </div>
          <div className="flex flex-col gap-6 lg:gap-[10vh] lg:mt-[2vh] lg:ml-[15vw] xl:ml-[17vw]">
            <Card {...testimonials[7]} />
          </div>
          <div className="flex flex-col gap-6 lg:mt-[50vh] lg:gap-[10vh] lg:mr-[20vh] xl:mr-0">
            <Card {...testimonials[10]} />
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Updated Card component with Framer Motion
const Card = ({ imageSrc, text, author }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="xl:w-[23vw] lg:w-[25vw] lg:h-[40vh] w-[60vw] h-[50vh] sm:w-[40vw] md:w-[30vw] bg-gray-300 rounded-xl flex flex-col items-center justify-start shadow-md mx-auto p-3 relative text-black"
  >
    <div className="w-16 h-16 mt-4 mb-2 bg-white rounded-full overflow-hidden flex items-center justify-center 
                    lg:absolute lg:top-[-9vh] lg:left-1/2 lg:transform lg:-translate-x-1/2">
      {imageSrc && (
        <img
          src={imageSrc}
          alt="testimonial"
          className="w-full h-full object-cover"
        />
      )}
    </div>
    <p className="text-[14px] sm:text-sm mt-2 px-2 text-center font-medium">
      <span className="text-red-500 text-[30px]">“</span>
      {text}
      <span className="text-red-500 text-[30px]">”</span>
    </p>
    {author && (
      <p className="text-[16px] mt-2 px-2 text-center font-semibold text-green-600">
        <span className="text-red-500 text-[30px] mr-1">~</span>{author}
      </p>
    )}
  </motion.div>
);

export default TestimonialsSection;