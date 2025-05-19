import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const images = [
  "/gallery/im1.jpg",
  "/gallery/im2.jpeg",
  "/gallery/im3.jpeg",
  "/gallery/im4.jpeg",
  "/gallery/im5.jpeg",
  "/gallery/im6.jpeg",
  "/gallery/im7.jpeg",
  "/gallery/im8.jpeg",
  "/gallery/im9.jpeg",
  "/gallery/im10.jpeg",
  "/gallery/im11.jpeg",
  "/gallery/im12.jpeg",
  "/gallery/im13.jpeg",
  "/gallery/im14.jpeg",
  "/gallery/im15.jpeg",
  "/gallery/im16.jpeg",
  "/gallery/im17.jpeg",
  "/gallery/im18.jpeg",
  "/gallery/im19.jpeg",
  "/gallery/im20.jpeg",
  "/gallery/im21.jpeg",
  "/gallery/im22.jpeg",
  "/gallery/im23.jpeg",
  "/gallery/im24.jpeg",
  "/gallery/im25.jpeg",
  "/gallery/im26.jpeg",
  "/gallery/im27.jpeg",
  "/gallery/im28.jpeg",
  "/gallery/im29.jpeg",
  "/gallery/im30.jpeg",
  "/gallery/im31.jpeg",
  "/gallery/im32.jpeg",
  "/gallery/im33.jpeg",
  "/gallery/im34.jpeg",
  "/gallery/im35.jpeg",
  "/gallery/im36.jpeg",
  "/gallery/im37.jpeg",
  "/gallery/im38.jpeg",
  "/gallery/im39.jpeg",
  "/gallery/im40.jpeg",
  "/gallery/im41.jpeg",
  "/gallery/im42.jpeg",
  "/gallery/im43.jpeg",
  "/gallery/im44.jpeg",
  "/gallery/im45.jpeg",
  "/gallery/im46.jpeg",
  "/gallery/im47.jpeg",
  "/gallery/im48.jpeg",
  "/gallery/im49.jpeg",
  "/gallery/im50.jpeg",
  "/gallery/im51.jpeg",
  "/gallery/im52.jpeg",
  "/gallery/im53.jpeg",
  "/gallery/im54.jpeg",
  "/gallery/im55.jpeg",
  "/gallery/im56.jpeg",
  "/gallery/im57.jpeg",
  "/gallery/im58.jpeg",
  "/gallery/im59.jpeg",
  "/gallery/im60.jpeg",
  "/gallery/im61.jpeg",
  "/gallery/im62.jpeg",
  "/gallery/im63.jpeg",
  "/gallery/im64.jpeg",
  "/gallery/im65.jpeg",
  "/gallery/im66.jpeg",
  "/gallery/im67.jpeg",
  "/gallery/im68.jpeg",
  "/gallery/im69.jpeg",
  "/gallery/im70.jpeg",
  "/gallery/im71.jpeg",
  "/gallery/im72.jpeg",
  "/gallery/im73.jpeg",
  "/gallery/im74.jpeg",
  "/gallery/im75.jpeg",
  "/gallery/im76.jpeg",
  "/gallery/im77.jpeg",
  "/gallery/im78.jpeg",
  "/gallery/im79.jpeg",
  "/gallery/im80.jpeg",
  "/gallery/im81.jpeg",
  "/gallery/im82.jpeg",
  "/gallery/im83.jpeg",
  "/gallery/im84.jpeg",
  "/gallery/im85.jpeg",
  "/gallery/im86.jpeg",
  "/gallery/im87.jpeg",
  "/gallery/im88.jpeg",
];

const eventTabs = [
  { id: 'event1', label: 'Event-1', ref: null },
  { id: 'event2', label: 'Event-2', ref: null },
  { id: 'event3', label: 'Event-3', ref: null },
  { id: 'event4', label: 'Event-4', ref: null },
  { id: 'event5', label: 'Event-5', ref: null },
  { id: 'event6', label: 'Event-6', ref: null },
];

const randomHeights = [
  'h-60', 'h-72', 'h-80', 'h-96', 'h-64', 'h-52', 'h-56', 'h-44', 'h-48', 'h-36'
];

const Gallery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState('event1');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const sectionRefs = useRef({});

  useEffect(() => {
    eventTabs.forEach(tab => {
      sectionRefs.current[tab.id] = React.createRef();
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const scrollInterval = setInterval(() => {
      window.scrollBy({
        top: 1,
        behavior: "smooth"
      });
    }, 30);
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const section = sectionRefs.current[sectionId]?.current;
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between text-white relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(135deg, #5CAA47 0%, #93C572 100%)',
      }}
    >
      <div className="w-full border-b border-[#1a6a58] overflow-x-auto" style={{ background: '#1a6a58' }}>
        <div className="container mx-auto px-4 py-3 flex flex-nowrap md:flex-wrap gap-4 justify-start md:justify-center">
          {eventTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`text-lg font-semibold text-center whitespace-nowrap px-6 py-2 cursor-pointer rounded-xl transition-all duration-200 ${
                activeTab === tab.id ? 'bg-[#57BB81] text-white' : 'text-white hover:bg-[#57BB81]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="container mx-auto px-4 py-8 flex-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {eventTabs.map((tab, tabIndex) => (
            <div
              key={tab.id}
              ref={sectionRefs.current[tab.id]}
              className="break-inside-avoid"
            >
              {images
                .filter((_, index) => Math.floor(index / (images.length / 6)) === tabIndex)
                .map((image, imageIndex) => (
                <div
                  key={`${tab.id}-${imageIndex}`}
                  className={`mb-4 rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-white/10 backdrop-blur-md ${
                    randomHeights[imageIndex % randomHeights.length]
                  } transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl`}
                  style={{ boxShadow: '0 4px 32px 0 rgba(31, 162, 255, 0.10), 0 1.5px 6px 0 rgba(62,47,91,0.10)' }}
                >
                  <div className="p-4 flex flex-col h-full">
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#17594A' }}>{tab.label}</h3>
                    <img
                      src={image}
                      alt={`${tab.label} image ${imageIndex + 1}`}
                      className="w-full h-full object-cover rounded-xl shadow-md"
                      loading="lazy"
                    />
                    <div className="mt-3 text-gray-200/80">
                      <p>Event description and details go here...</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Gallery;