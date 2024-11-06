import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import './DashBoard.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    image: 'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    image: 'https://via.placeholder.com/400',
    category: 'Mobile App',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    image: 'https://via.placeholder.com/400',
    category: 'Data Science',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is a brief description of Project Four.',
    image: 'https://via.placeholder.com/400',
    category: 'Machine Learning',
  },
];

const Dashboard = () => {
  const [isModelOpen,setIsModalOpen]= useState(false);
  const[selectedProject,setSelectedProject]=useState(null);
  const handleCardClick=(project)=>{
    setSelectedProject(project);
    setIsModalOpen(true);
  };
  const handleCloseModal=()=>{
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <div className="ml-64 p-4">
      <h2 className="text-2xl font-bold mb-4">Projects Dashboard</h2>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <div key={project.id} onClick={()=>handleCardClick(project)}>
            
          <ProjectCard  project={project} />
          </div>
        ))}
      </div>
      <Modal isOpen={isModelOpen} onClose={handleCloseModal} project={selectedProject}/>
    </div>
  );
};

export default Dashboard;