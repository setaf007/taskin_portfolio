import React from 'react';

const ProjectFilter = ({ onTechChange, selectedTech }) => {
  return (
    <div className="mb-4">
      <label className="text-white font-semibold mr-2">Filter by Technology:</label>
      <select
        className="p-2 bg-darkGrey text-lightGrey rounded-md"
        value={selectedTech}
        onChange={(e) => onTechChange(e.target.value)}
      >
        <option value="">All Technologies</option>
        <option value="Python">Python</option>
        <option value="Machine Learning">Machine Learning</option>
        <option value="AI">AI</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Node.js">Node.js</option>
      </select>
    </div>
  );
};

export default ProjectFilter;