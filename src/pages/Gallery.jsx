import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Gallery = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  // Auto-scroll vertically for the grid
  useEffect(() => {
    let scrollInterval;
    const scrollStep = 1; // px per tick
    const scrollDelay = 20; // ms per tick

    function startScroll() {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            container.scrollTop = 0; // Loop to top
          } else {
            container.scrollTop += scrollStep;
          }
        }
      }, scrollDelay);
    }
    startScroll();
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

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

  return (
    <StyledGallery>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">IISPPR Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of impactful moments and achievements in environmental conservation.
          </p>
        </motion.div>
        <div
          className="grid-scroll-container"
          ref={scrollContainerRef}
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setIsPaused(false)}
        >
          <div className="gallery-grid">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="grid-item"
                whileHover={{ scale: 1.04 }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                  style={{ width: '100%' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </StyledGallery>
  );
};

const StyledGallery = styled.div`
  .grid-scroll-container {
    height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    background: #7a8f6a;
    border-radius: 1rem;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
    padding: 2rem 0;
    transition: box-shadow 0.3s;
  }
  .grid-scroll-container:focus {
    outline: none;
    box-shadow: 0 0 0 3px #4ade80;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }
  @media (max-width: 900px) {
    .gallery-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }
  }
  .grid-item {
    border-radius: 0.75rem;
    overflow: hidden;
    background: #d2e6b5;
    box-shadow: 0 2px 8px 0 rgba(31, 38, 135, 0.10);
    transition: transform 0.2s;
    cursor: pointer;
    display: block;
  }
  .gallery-image {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: transform 0.3s;
  }
  .grid-item:hover .gallery-image {
    transform: scale(1.07);
  }
`;

export default Gallery;
