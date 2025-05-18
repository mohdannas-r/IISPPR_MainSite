import React, { useCallback, useRef } from "react";

const Gallery = () => {
  const images = [
    "/gallery/im1.jpg", "/gallery/im2.jpeg", "/gallery/im3.jpeg", "/gallery/im4.jpg",
    "/gallery/im5.jpeg", "/gallery/im6.jpg", "/gallery/im7.jpg", "/gallery/im8.jpg",
    "/gallery/im9.jpg", "/gallery/im10.jpg", "/gallery/im12.jpg",
    "/gallery/im13.jpg", "/gallery/im14.jpg", "/gallery/im15.jpg", "/gallery/im16.jpg",
    "/gallery/im17.jpg", "/gallery/im18.jpg", "/gallery/im19.jpg", "/gallery/im20.jpg",
    "/gallery/im21.jpg", "/gallery/im22.jpeg", "/gallery/im23.jpeg", "/gallery/im24.jpg",
    "/gallery/im25.jpg", "/gallery/im26.jpeg", "/gallery/im27.jpeg", "/gallery/im28.jpeg",
    "/gallery/im29.jpeg", "/gallery/im30.jpg", "/gallery/im31.jpg", "/gallery/im32.jpeg",
    "/gallery/im33.jpeg", "/gallery/im34.jpeg", "/gallery/im35.jpeg", "/gallery/im36.jpeg",
    "/gallery/im37.jpeg", "/gallery/im38.jpg", "/gallery/im39.jpg", "/gallery/im40.jpg",
    "/gallery/im41.jpg", "/gallery/im42.jpg", "/gallery/im43.jpeg", "/gallery/im44.jpeg",
    "/gallery/im45.jpeg", "/gallery/im46.jpg", "/gallery/im47.jpg", "/gallery/im48.jpg", 
    "/gallery/im49.jpg", "/gallery/im50.jpg", "/gallery/im51.jpg", "/gallery/im52.jpg",
    "/gallery/im53.jpg", "/gallery/im54.jpg", "/gallery/im55.jpg", "/gallery/im56.jpg",
    "/gallery/im57.jpg", "/gallery/im58.jpeg", "/gallery/im59.jpg", "/gallery/im60.jpg",
    "/gallery/im61.jpg", "/gallery/im62.jpg", "/gallery/im63.jpg", "/gallery/im64.jpg",
    "/gallery/im65.jpg", "/gallery/im66.jpg", "/gallery/im67.jpg", "/gallery/im68.jpg",
    "/gallery/im69.jpg", "/gallery/im70.jpg", "/gallery/im71.jpg", "/gallery/im72.jpg",
    "/gallery/im73.jpg", "/gallery/im74.jpg", "/gallery/im75.jpg", "/gallery/im76.jpg",
    "/gallery/im77.jpeg", "/gallery/im78.jpg", "/gallery/im79.jpg", "/gallery/im80.jpeg",
    "/gallery/im82.jpeg", "/gallery/im83.jpeg", "/gallery/im84.jpeg", "/gallery/im85.jpeg",
    "/gallery/im86.jpg", "/gallery/im87.jpeg", "/gallery/im88.jpeg" 
  ];

  // Split the images into batches to optimize rendering
  const initialBatchSize = 20;
  const [displayedImages, setDisplayedImages] = React.useState(images.slice(0, initialBatchSize));
  const loaderRef = useRef(null);

  // Implement intersection observer for lazy loading
  const observerCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && displayedImages.length < images.length) {
        const nextBatch = images.slice(
          displayedImages.length,
          displayedImages.length + initialBatchSize
        );
        setDisplayedImages(prev => [...prev, ...nextBatch]);
      }
    },
    [displayedImages, images]
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [observerCallback]);

  return (
    <div className="min-h-screen bg-[#5a734b] text-white flex flex-col">
      {/* Page Title */}
      <div className="bg-gradient-to-r from-primary to-primary-dark py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">IISPPR Gallery</h1>
          <p className="text-center text-white/80 mt-4 max-w-2xl mx-auto">
            Explore our collection of images showcasing our environmental initiatives, 
            community projects, and the beautiful nature we're working to preserve.
          </p>
        </div>
      </div>

      {/* Masonry Gallery Grid */}
      <div className="flex-1 p-6 md:p-12 container mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {displayedImages.map((img, idx) => (
            <div 
              key={idx} 
              className="mb-4 rounded-xl overflow-hidden shadow-lg break-inside-avoid"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                loading="lazy"
                className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                width="600"
                height="400"
              />
            </div>
          ))}
        </div>
        
        {/* Loading trigger element */}
        {displayedImages.length < images.length && (
          <div 
            ref={loaderRef} 
            className="h-10 w-full flex justify-center items-center my-8"
          >
            <div className="animate-pulse bg-white/20 rounded-full h-8 w-8"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
