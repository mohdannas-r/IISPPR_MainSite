import React from 'react';

const Mission = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-8">
            At Prakriti, we are dedicated to preserving and protecting our environment while empowering communities through sustainable development initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Environmental Conservation</h3>
              <p className="text-gray-600">
                Protecting natural resources and promoting sustainable practices for a greener future.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Community Development</h3>
              <p className="text-gray-600">
                Empowering local communities through education, training, and sustainable initiatives.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Research & Innovation</h3>
              <p className="text-gray-600">
                Conducting research and implementing innovative solutions for environmental challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
