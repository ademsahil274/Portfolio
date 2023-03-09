import { AiFillGithub } from "react-icons/ai";
import React from "react";

const PortfolioCard = ({ project }) => {
  return (
    <div class="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
      {/* Card Image */}
      <img
        class="object-cover w-full h-60"
        // src="https://source.unsplash.com/random/?veg"
        src={`./images/${project.image}`}
        alt={project.name}
      />

      <div class="absolute bg-black opacity-70 top-0 invisible group-hover:visible h-full w-full left-0 px-6 py-4">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="flex justify-center items-center gap-4">
            {/* Name Or Title  */}
            <h4 className="mb-1 text-base font-semibold text-white">
              {project.name} -
            </h4>

            <a href={project.link} target="_blank">
              <AiFillGithub className="mb-1 text-2xl font-semibold text-white hover:text-indigo-500" />
            </a>
          </div>
          {/* Technology */}
          <p className="text-left tracking-widest mb-3 text-sm font-semibold text-gray-300">
            Mern
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;