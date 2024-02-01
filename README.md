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



<div className="max-w-sm bg-slate-700 rounded overflow-hidden shadow-lg">
            <img className="w-full" src={project.image} alt={project.name} />
            <div className="py-4">
              <div className="font-bold text-xl mb-2">{project.name}</div>
              <p className="text-white text-base">{project.describe}</p>
            </div>
            <div className="pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-violet-600 active:bg-violet-700">
                <a href={project.live}>Visit</a>
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-violet-600 active:bg-violet-700">
                <a href={project.git}>GitHub</a>
              </span>
            </div>
          </div>