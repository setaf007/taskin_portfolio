import React, { useState } from 'react';

const ProjectFilter = ({ onTechChange, selectedTech }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-4 w-full sm:w-60">
      <button
        className="p-3 bg-darkGrey text-lightGrey rounded-md font-semibold flex items-center justify-between w-full sm:w-60"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedTech ? selectedTech : 'Filter by Technology'}
        <span className={`ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          ▼
        </span>
      </button>

      <div
        className={`absolute left-0 mt-2 w-full sm:w-60 bg-darkGrey text-lightGrey rounded-md shadow-lg 
        overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        {['All Technologies', 'Python', 'Machine Learning', 'AI', 'JavaScript', 'Node.js'].map((tech) => (
          <div
            key={tech}
            onClick={() => {
              onTechChange(tech === "All Technologies" ? "" : tech);
              setIsOpen(false);
            }}
            className="p-3 cursor-pointer hover:bg-cyan transition-all duration-300 text-center"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
