import React from 'react';

const WorkProcess = () => {
  const processes = [
    {
      id: 1,
      title: 'Research & Analysis',
      description: 'We begin by conducting thorough research and analysis of environmental challenges and community needs.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'Planning & Strategy',
      description: 'Based on our findings, we develop comprehensive strategies and action plans.',
      icon: '📋'
    },
    {
      id: 3,
      title: 'Implementation',
      description: 'We work closely with communities to implement sustainable solutions and initiatives.',
      icon: '🚀'
    },
    {
      id: 4,
      title: 'Monitoring & Evaluation',
      description: 'We continuously monitor progress and evaluate the impact of our programs.',
      icon: '📊'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure effective implementation of our environmental and community development initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={process.id} className="relative">
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <div className="text-4xl mb-4">{process.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
              {index < processes.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <span className="text-2xl text-gray-400">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
