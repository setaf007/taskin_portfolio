import React from 'react';

const ProjectCard = ({ title, description, url, tech }) => {
  return (
    <div className="bg-[#2a2f35] border border-cyan p-4 sm:p-6 rounded-xl shadow-lg font-sans">
      <h3 className="text-xl sm:text-2xl text-cyan-500 font-bold mb-3 tracking-tight font-sans">{title}</h3>
      <p className="text-lightGrey text-base sm:text-lg mb-3 font-light font-sans">{description}</p>
      <p className="text-sm text-gray-400 mb-4 font-light font-sans tracking-wide">{tech}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-500 hover:text-white text-lg font-semibold inline-block py-2 transition-colors duration-300 font-sans tracking-tight"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
