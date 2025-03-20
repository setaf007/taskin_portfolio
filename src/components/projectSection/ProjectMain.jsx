import React, { useState } from 'react'
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

const myProjects = [
    {
        title:"AI Image Classifier",
        description:"A deep learning project using ",
        url:"https://github.com/yourusername/ai-image-classifier",
        tech:"AI, Machine Learning, Python",
    },
    {
        title:"Web Scraping Tool",
        description:"A web scraping tool built with Python to g",
        url:"https://github.com/yourusername/web-scraping-tool",
        tech:"Python, Web Scraping",
    },
];


const ProjectMain = () => {
    const [selectedTech, setSelectedTech] = useState('');
    const handleTechChange = (tech) => {setSelectedTech(tech);};


    
    const filteredProjects = selectedTech
    ? myProjects.filter((myProjects) => 
    myProjects.tech.includes(selectedTech)): myProjects;
  
    return (
    <div id='project' className='container mx-auto py-16 px-6'>
        <div className='flex flex-col items-center mt-[100px] cursor-default'>
            <h2 className="text-6xl underline text-white mb-8 text-center">My Projects</h2>    

            <ProjectFilter onTechChange={handleTechChange} selectedTech={selectedTech} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            gap-4 mt-8">{filteredProjects.map((project, index) => (
                <ProjectCard key={index} title={project.title} 
                description={project.description} url={project.url} 
                tech={project.tech}/>))}
            </div>
        </div>
    </div>
  )
}

export default ProjectMain