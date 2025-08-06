import React from 'react';

const ProjectCard = ({ title, description, url, tech }) => {
  return (
        <div className="bg-[#23232a] rounded-xl shadow-md p-6 flex flex-col min-h-[340px] sm:h-[320px] w-full border border-[#23232a] hover:border-cyan transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">{title}</h3>
            <p className="text-sm text-lightGrey mb-4 flex-1 line-clamp-4">{description}</p>
            <div className="hidden md:flex flex-wrap gap-2 mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-cyan scrollbar-track-[#23232a] whitespace-nowrap">
                {tech && tech.split(',').map((t, i) => (
                    <span key={i} className="bg-cyan-900 text-cyan-300 px-2 py-1 rounded text-xs font-medium inline-block">{t.trim()}</span>
                ))}
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block bg-cyan text-[#18181b] px-4 py-2 rounded font-semibold text-sm hover:bg-cyan-700 transition-all duration-300">View Project</a>
    </div>
  );
};

export default ProjectCard;
