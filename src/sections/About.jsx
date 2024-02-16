import { useState, useEffect } from "react";
import "./Projects.css";

function About() {
  const [about, setAbout] = useState(null);

  const resume = "file:///Users/conorfurlong/Downloads/Resume%20-%20Conor%20Furlong.pdf"

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <section id="about" className="mt-10">
    <div className="About">
      <div className="flex justify-center mb-5">
      <img className="h-60 lg:w-80 lg:w-80 lg:h-full rounded-full border-4" src={about.headshot} alt="Conor Furlong Headshot" />
      </div>
      <h1 className="aboutMe">I&apos;m Conor Furlong,</h1>
      <h1 className="aboutMe mb-20">Welcome!</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
      <p className="Bio flex justify-start text-2xl ml-8 mr-8 mb-6 lg:text-left">{about.bio}</p>
      </div>
      <div className="md:w-1/2 lg:mt-80">
      <p className="Bio flex justify-end text-2xl ml-8 mr-8 lg:text-right">{about.bio2}</p>
      </div>
      </div>
      <a className="projectButton inline-block bg-gray-200 rounded-full text-md font-extrabold text-gray-700 mt-16 mr-10 hover:bg-indigo-100" href={`mailto:${about.email}`}>Contact Me!</a>
      <a className="projectButton inline-block bg-gray-200 rounded-full text-md font-extrabold text-gray-700 mt-16 mr-10 hover:bg-indigo-100" href={resume} download>Download Resume</a>
      <div className="Socials mt-8">
        <a className="projectButton inline-block bg-gray-200 rounded-full text-md font-extrabold text-gray-700 mb-2 mr-32 hover:bg-indigo-100" href={about.linkedin}>
          LinkedIn
        </a>
        <a className="projectButton inline-block bg-gray-200 rounded-full text-md font-extrabold text-gray-700 mb-2 mr-12 hover:bg-indigo-100" href={about.github}>
          GitHub
        </a>
      </div>
    </div>
    </section>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;