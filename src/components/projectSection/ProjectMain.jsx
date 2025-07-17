import React, { useState } from 'react';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

const myProjects = [
    {
        title: "AI Image Classifier",
        description: "A deep learning project using TensorFlow and Python.",
        url: "https://github.com/yourusername/ai-image-classifier",
        tech: "AI, Machine Learning, Python",
    },
    {
        title: "Web Scraping Tool",
        description: "A web scraping tool built with Python to gather data.",
        url: "https://github.com/yourusername/web-scraping-tool",
        tech: "Python, Web Scraping",
    },
];

const ProjectMain = () => {
    const [selectedTech, setSelectedTech] = useState('');
    const handleTechChange = (tech) => { setSelectedTech(tech); };

    const filteredProjects = selectedTech
        ? myProjects.filter((project) => project.tech.includes(selectedTech))
        : myProjects;

    return (
        <div id="projects" className="container mx-auto py-16 px-4 sm:px-6">
            <div className="flex flex-col items-center mt-24 cursor-default">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold underline decoration-cyan-500 text-white mb-6 text-center">
                    My Projects
                </h2>

                <ProjectFilter onTechChange={handleTechChange} selectedTech={selectedTech} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 w-full">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="w-full flex">
                            <ProjectCard title={project.title} description={project.description} url={project.url} tech={project.tech} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectMain;
