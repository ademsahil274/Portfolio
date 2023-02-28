import React from "react";
import Project from "./Project";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <p>
        Welcome to my portfolio! Here, you can find some of my recent projects
        and learn more about my skills and experience.
      </p>
      <h2>Projects</h2>
      <ul>
        <li>
          <Project name="5 Day Weather Forcast API" link="https://google.com" linkName="GOOGLE" image="https://blog.hubspot.com/hubfs/image8-2.jpg"/>
        </li>
        <li>
          <Project name="Upload and search for Art" link="https://github.com" linkName="GitHub Test"/>
        </li>
        <li>
          <Project name="3rd Project" link="https://facebook.com" linkName="Facbook"/>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
