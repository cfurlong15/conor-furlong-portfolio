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
      <div className="mb-9" key={idx}>
        <section id="projects">
          <div className="max-w-sm w-2/3 lg:max-w-full lg:flex min-w-2/3">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <a href={project.live}>
                <img src={project.image} />
              </a>
            </div>
            <div className="bg-slate-600 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-white font-bold text-xl mb-2">
                  {project.name}
                </div>
                <p className="text-white text-base">{project.describe}</p>
              </div>
              <div className="flex items-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-violet-600 active:bg-violet-700">
                  <a href={project.live}>Visit</a>
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-violet-600 active:bg-violet-700">
                  <a href={project.git}>GitHub</a>
                </span>
                {/* <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div> */}
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
