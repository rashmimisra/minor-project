import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
      <p>{project.description}</p>
      {/* The edit button has been removed */}
    </div>
  );
};

export default ProjectCard;