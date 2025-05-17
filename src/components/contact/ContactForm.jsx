import React from "react";

export default function ContactPage() {
  return (
    <div className="bg-white text-black fontans">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/src/assets/download (2).jpg" // Replace with your actual image path
          alt="Scenic Landscape"
          className="w-full h-80 md:h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white"></h1>
        </div>
      </div>

      {/* Form Section with Triangle Background */}
      <div className="relative bg-white">
        {/* Top Triangle */}
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[100vw] border-l-transparent border-b-[60px] border-b-[#22330D] z-0"></div>

        {/* Bottom Triangle */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[100vw] border-l-transparent border-t-[60px] border-t-[#22330D] z-0"></div>

        <div className="relative z-10 bg-[#22330D] py-12 px-6 lg:px-24">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Form Fields */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full md:w-1/2 p-3 bg-[#7A9164] placeholder-white text-white rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full md:w-1/2 p-3 bg-[#7A9164] placeholder-white text-white rounded-md"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full md:w-1/2 p-3 bg-[#7A9164] placeholder-white text-white rounded-md"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full md:w-1/2 p-3 bg-[#7A9164] placeholder-white text-white rounded-md"
                />
              </div>
              <textarea
                placeholder="Message"
                className="w-full p-3 bg-[#7A9164] placeholder-white text-white rounded-md h-40"
              ></textarea>
              <button className="bg-[#23291C] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#1b1f16] w-fit">
                Send Message
              </button>
            </div>

            {/* Address Info */}
            <div className="bg-[#7A9164] p-6 rounded-md text-white">
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <p className="mb-2 font-semibold">Location:</p>
              <p className="mb-2 font-semibold">Phone No:</p>
              <p className="mb-2 font-semibold">E-mail:</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 lg:px-24 text-sm text-gray-400">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-2">Give Life</h3>
            <p>Yok</p>
            <p>Online Blood Bank</p>
            <p>Monthly Connected</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Link</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Address</h4>
            <p>Location</p>
            <p>House No:</p>
            <p>Phone No:</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Newsletter</h4>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-2 bg-gray-800 text-white rounded-md"
            />
            <button className="bg-lime-500 text-black px-4 py-1 rounded-md">
              Subscribe
            </button>
            <div className="flex space-x-2 mt-4">
              <div className="bg-gray-800 text-white p-2 rounded-full">F</div>
              <div className="bg-gray-800 text-white p-2 rounded-full">T</div>
              <div className="bg-gray-800 text-white p-2 rounded-full">I</div>
              <div className="bg-gray-800 text-white p-2 rounded-full">L</div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs mt-8">
          <p>Copyright &copy; Give Life. Developed by Yok</p>
        </div>
      </footer>
    </div>
  );
}