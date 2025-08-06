import React, { useState } from 'react';
import techs from './projectTechs';

const ProjectFilter = ({ onTechChange, selectedTech }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

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
        overflow-y-auto transition-all duration-300 ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ scrollbarWidth: 'thin' }}
      >
        {/* Search box */}
        <div className="sticky top-0 bg-darkGrey z-10 p-2 border-b border-[#23232a]">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search technology..."
            className="w-full px-2 py-1 rounded bg-[#23232a] text-lightGrey placeholder:text-darkGrey focus:outline-none focus:ring-2 focus:ring-cyan text-sm"
            autoFocus={isOpen}
          />
        </div>
        {(() => {
          const sortedTechs = techs.slice().sort((a, b) => a.localeCompare(b));
          const filteredTechs = search.trim() === "" 
            ? sortedTechs 
            : sortedTechs.filter(t => t.toLowerCase().includes(search.toLowerCase()));
          const allTechs = ['All Technologies', ...filteredTechs];
          return allTechs.length > 0 ? allTechs.map((tech) => (
            <div
              key={tech}
              onClick={() => {
                onTechChange(tech === "All Technologies" ? "" : tech);
                setIsOpen(false);
                setSearch("");
              }}
              className="p-3 cursor-pointer hover:bg-cyan transition-all duration-300 text-center"
            >
              {tech}
            </div>
          )) : (
            <div className="p-3 text-center text-darkGrey select-none">No results</div>
          );
        })()}
      </div>
    </div>
  );
};

export default ProjectFilter;
