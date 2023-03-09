import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header className="text-gray-600 body-font border-b-2">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font items-center text-gray-900 mb-4 md:mb-0 font-bold text-xl font-serif"
          >
            Adem Sahil
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center font-bold text-xl font-serif">
            <NavLink to="/" className="mr-5 hover:text-indigo-500">
              About Me
            </NavLink>
            <NavLink to="/portfolio" className="mr-5 hover:text-indigo-500">
              Portfolio
            </NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-indigo-500">
              Contact
            </NavLink>
            <NavLink to="/resume" className="mr-5 hover:text-indigo-500">
              Resume
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;