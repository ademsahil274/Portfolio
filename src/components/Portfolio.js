import React from "react";
import PortfolioCard from "./PortfolioCard";
import projects from "../Projects";

const Portfolio = () => {
  return (
    <div className="grid p-40 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {/* // Portfolio Card */}
      {projects.map((project) => (
        <PortfolioCard project={project} />
      ))}
    </div>
  );
};

export default Portfolio;













// import React from "react";
// import Project from "./Project";

// function Portfolio() {
//   return (
//     <div className="portfolio">
//       <h1>My Portfolio</h1>
//       <p>
//         Welcome to my portfolio! Here, you can find some of my recent projects.
//       </p>
//       <h2>Projects</h2>
//       <ul>
//         <li>
//           <Project name="5 Day Weather Forcast API" link="https://github.com/ZBerkley88/flycast-trip-planner" linkName="GitHub" image=""/>
//         </li>
//         <li>
//           <Project name="Upload and search for Art" link="https://github.com" linkName="GitHub Test"/>
//         </li>
//         <li>
//           <Project name="3rd Project" link="https://github.com" linkName="Github Test 2"/>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Portfolio;
