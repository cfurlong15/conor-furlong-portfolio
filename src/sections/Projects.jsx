import { useState, useEffect } from "react";
import "./Projects.css";

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
      <div className="ml-12 mb-20" key={idx}>
        <section id="projects">
          <div className="max-w-sm w-2/3 lg:max-w-full lg:flex min-w-2/3">
            <div className="h-72 lg:h-72 lg:w-72 flex-none bg-cover rounded-lg lg:rounded-2xl overflow-hidden">
              <a href={project.live}>
                <img src={project.image} className="w-full h-full object-cover" />
              </a>
            </div>
            <div className="projectBox mt-10 lg:ml-20 lg:mt-10">
              <div className="mb-8">
                <div className="text-white font-bold text-4xl mb-6">
                  {project.name}
                </div>
                <p className="text-white text-base text-2xl">{project.describe}</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="">
                  <a className="projectButton inline-block bg-gray-200 rounded-full text-md font-extrabold text-gray-700 mr-6 mb-2 hover:bg-indigo-100" href={project.live}>Visit</a>
                </span>
                <span className="">
                  <a className="projectButton inline-block bg-gray-200 rounded-full text-md font-extrabold text-gray-700 mr-6 mb-2 hover:bg-indigo-100" href={project.git}>GitHub</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    ));
  };
  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
