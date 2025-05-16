import React,{useEffect} from "react";

const Gallery = () => {
  const events = ["Event-1", "Event-2", "Event-3", "Event-4", "Event-5", "Event-6"];

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
 useEffect(()=>{
  const scrollInterval=setInterval(()=>{
    window.scrollBy({
    top:5,
    behavior:"smooth"});
  },30);
  return ()=>clearInterval(scrollInterval);
},[]);
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#202d1a] to-[#202d1a] text-white flex flex-col">
      {/* Sticky Headerrr */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-[#202d1a]">
        <div className="text-xl font-bold text-lime-400">Qive Life</div>
        <nav className="space-x-10 hidden md:flex">
          <a href="#" className="hover:text-lime-400">Home</a>
          <a href="#" className="hover:text-lime-400">About</a>
          <a href="#" className="hover:text-lime-400">Testimonials</a>
          <a href="#" className="hover:text-lime-400">Gallery</a>
          <a href="#" className="hover:text-lime-400">Projects</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-lime-400 px-4 py-2 rounded-full text-black font-medium hover:bg-lime-500">Contact</button>
        </div>
      </header>

      {/* Masonry Gallery Grid */}
      <div className="flex-1 p-8 bg-[#5a734b] pb-10 px-4 px-4 md:px-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full mb-4 rounded-xl object-cover shadow-lg break-inside-avoid rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg "
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-bold text-lime-400 mb-2">Qive Life</h4>
            <p>1234 Life St.<br />Peaceful City, 45678</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Useful Links</h4>
            <ul>
              <li><a href="#" className="hover:text-lime-400">Contact</a></li>
              <li><a href="#" className="hover:text-lime-400">FAQs</a></li>
              <li><a href="#" className="hover:text-lime-400">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Resources</h4>
            <ul>
              <li><a href="#" className="hover:text-lime-400">Gallery</a></li>
              <li><a href="#" className="hover:text-lime-400">Events</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Subscribe</h4>
            <input type="email" placeholder="Enter your email" className="px-3 py-1 rounded text-black w-full mb-2" />
            <button className="bg-lime-400 text-black px-4 py-1 rounded w-full hover:bg-lime-500">Subscribe</button>
            
          </div>
        </div>
        <div className="text-center mt-6 text-xs text-gray-400">
          © 2025 Qive Life. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
