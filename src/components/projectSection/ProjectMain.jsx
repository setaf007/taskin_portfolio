import React, { useState } from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';
import myProjects from './projectsData';

const ProjectMain = () => {
    const [selectedTech, setSelectedTech] = useState('');
    const handleTechChange = (tech) => { setSelectedTech(tech); };


    const filteredProjects = selectedTech
        ? myProjects.filter((project) => project.tech.includes(selectedTech))
        : myProjects;

    // Show only up to 6 projects, scroll if more
    const maxVisible = 6;
    const showScroll = filteredProjects.length > maxVisible;
    // If scrolling, show all projects in scrollable area; else, just show all
    const visibleProjects = showScroll ? filteredProjects : filteredProjects;

    return (
        <div id="projects" className="container mx-auto py-16 px-4 sm:px-6">
            <div className="flex flex-col items-center mt-24 cursor-default">
                <h2 className="text-4xl sm:text-5xl font-bold text-lightGrey flex items-center gap-4 mb-8 cursor-default justify-center">
                  <span className="inline-block w-2 h-8 bg-cyan-400 rounded-full"></span>
                  My Projects
                </h2>

                <ProjectFilter onTechChange={handleTechChange} selectedTech={selectedTech} />

                {showScroll && (
                  <div className="flex justify-center mb-2 w-full">
                    <span className="text-xs text-darkGrey">Scroll within Project Section to see more projects</span>
                  </div>
                )}
                <div
                  className={`w-full ${showScroll ? 'overflow-y-scroll pr-2 pl-2 custom-scrollbar max-h-[1100px] md:max-h-[700px]' : ''} bg-black shadow-lg`}
                  style={{ minHeight: '400px', WebkitOverflowScrolling: 'touch' }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 w-full">
                    {visibleProjects.map((project, index) => (
                        <div key={index} className="w-full flex">
                            <ProjectCard
                              title={project.title}
                              description={project.description}
                              url={project.url}
                              tech={project.tech}
                            />
                        </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectMain;
