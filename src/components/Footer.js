import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { AiOutlineMinus } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t-2">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <a className=" w-8 h-8 rounded-full overflow-hidden flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src="./images/profile.jpg" />
          <span className="ml-3 text-xl">Adem_Sahil</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Adem Sahil —
          <a
            href="https://twitter.com/SahilAdem"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @SahilAdem
          </a>
        </p>
        <span className="inline-flex gap-1 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* Github LINK */}
          <a
            href="https://github.com/ademsahil274"
            target="_blank"
            className="text-gray-500 hover:text-indigo-600 cursor-pointer"
          >
            <BsGithub className="text-lg" />
          </a>
          {/* Twitter LINK */}
          <a
            href="https://twitter.com/SahilAdem"
            target="_blank"
            className="ml-3 text-gray-500 hover:text-indigo-600 cursor-pointer"
          >
            <BsTwitter className="text-lg" />
          </a>
          {/* Lindedin LINK */}
          <a
            href="https://www.linkedin.com/in/adem-sahil/"
            target="_blank"
            className="ml-3 text-gray-500 hover:text-indigo-600 cursor-pointer"
          >
            <TfiLinkedin className="text-lg" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
