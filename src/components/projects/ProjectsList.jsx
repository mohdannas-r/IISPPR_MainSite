import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsList = ({ projects }) => {
  // Always show 9 cards (fill with empty if needed)
  const cards = [...projects].slice(0, 9);
  while (cards.length < 9) cards.push(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {cards.map((project, idx) => (
        <div key={idx} className="h-64">
          {project ? (
            <ProjectCard project={project} />
          ) : (
            <div className="rounded-xl h-full bg-[#b6c197] opacity-50" />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
