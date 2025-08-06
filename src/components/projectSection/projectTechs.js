import myProjects from './projectsData';

// Extract unique technologies from all projects
const techSet = new Set();
myProjects.forEach(project => {
  if (project.tech) {
    project.tech.split(',').forEach(t => techSet.add(t.trim()));
  }
});

const techs = Array.from(techSet);

export default techs;
