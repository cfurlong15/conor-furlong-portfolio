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
    <div className="About">
      <h1 className="aboutMe">About Me</h1>

      <p className="Bio">{about.bio}</p>
      <p className="Email">Contact me at {about.email}</p>
      <div className="Socials">
        <a className="Linkedin" href={about.linkedin}>
          <button>LinkedIn</button>
        </a>
        <a className="Github" href={about.github}>
          <button>GitHub</button>
        </a>
      </div>
    </div>
  );

  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;