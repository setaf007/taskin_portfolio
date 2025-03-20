import React from 'react';

const ProjectCard = ({ title, description, url, tech }) => {
  return (
    <div className="bg-[#2a2f35] border border-cyan p-6 rounded-lg 
    shadow-lg transition-all duration-500 hover:shadow-cyanShadow">
      <h3 className="text-2xl text-cyan-500 font-semibold mb-4">{title}</h3>
      <p className="text-lightGrey mb-4">{description}</p>
      <p className="text-sm text-gray-400 mb-4">{tech}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-500 hover:text-cyan-600 text-lg font-semibold"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;