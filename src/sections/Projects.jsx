import { useState, useEffect } from "react";
//import "./Projects.css";

function Projects() {
  const [projects, setProjects] = useState(null);

  const getProjectsData = async () => {
    const response = await fetch("./projects.json");
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    getProjectsData();
  }, []);

  const loaded = () => {
    return projects.map((project, idx) => (
      <div className="projectBox" key={idx}>
        <section id="projects">
        <h3 className="projectName">{project.name}</h3>
        <img className="projectImage" src={project.image} />
        <p className="projectDescribe">{project.describe}</p>
        <div className="projectLinks">
          <a href={project.git}>
            <button className="github">Github</button>
          </a>
          <a href={project.live}>
            <button className="liveSite">Live Site</button>
          </a>
        </div>
        </section>
      </div>
    ));
  };
  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;