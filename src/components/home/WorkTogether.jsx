import React from "react";

const WorkTogether = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-16 p-6 pt-12 md:pb-36 w-full">
      {/* Image Block */}
      <div className="relative w-full max-w-lg flex-shrink-0 mt-[10vh]">
        <div className="w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[28rem] md:h-[28rem] rounded-xl overflow-hidden shadow-lg">
          <img
            src="/home/about1.webp"
            loading="lazy"
            width="448"
            height="448"
            alt="People helping each other"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-28 right-5 sm:-right-5 w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] rounded-xl overflow-hidden shadow-md">
          <img
            src="/gallery_carousel/gi1.webp"
            loading="lazy"
            width="320"
            height="320"
            alt="Volunteer activity"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text Block */}
      <div className="max-w-xl text-center lg:text-left lg:mt-10 mt-20 px-4">
        <h2 className="text-[18px] font-semibold font-[Montserrat] text-gray-900 mt-[8vh]">About Us</h2>
        <h3 className="text-4xl font-bold text-gray-900">Your Support is Really</h3>
        <h3 className="text-4xl font-bold text-gray-900 mb-6">Powerful</h3>
        <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto lg:mx-0">
          The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the
          lives of the poor, the abused and the helpless.
        </p>
      </div>
    </section>
  );
};

export default WorkTogether;
