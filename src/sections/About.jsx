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
    <section id="about" className="mt-10">
    <div className="About">
      <h1 className="aboutMe mb-5">Conor Furlong</h1>

      <p className="Bio text-2xl ml-8 mr-8">{about.bio}</p>
      <p className="Email text-2xl mt-8">Contact me at {about.email}</p>
      <div className="Socials mt-8">
        <a className="Linkedin mr-10" href={about.linkedin}>
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