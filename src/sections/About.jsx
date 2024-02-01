import { useState, useEffect } from "react";
//import "./About.css";

function About() {
  const [about, setAbout] = useState(null);

  const getAboutData = async () => {
    const response = await fetch("./about.json");
    const data = await response.json();
    setAbout(data);
  };

  useEffect(() => {
    getAboutData();
  }, []);

  const loaded = () => (
    <section id="about">
    <div className="About">
      <h1 className="aboutMe mb-5">About Me</h1>

      <p className="Bio">{about.bio}</p>
      <p className="Email">Contact me at {about.email}</p>
      <div className="Socials mb-5 mt-5">
        <a className="Linkedin mr-4" href={about.linkedin}>
          <button>LinkedIn</button>
        </a>
        <a className="Github" href={about.github}>
          <button>GitHub</button>
        </a>
      </div>
    </div>
    </section>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;