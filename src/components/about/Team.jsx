import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Executive Director',
      image: '/src/assets/images/team/member1.jpg',
      bio: 'Environmental scientist with 15+ years of experience in conservation.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Program Manager',
      image: '/src/assets/images/team/member2.jpg',
      bio: 'Specializes in community development and sustainable practices.'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'Research Coordinator',
      image: '/src/assets/images/team/member3.jpg',
      bio: 'Expert in environmental research and data analysis.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who drive our mission forward with their expertise and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
