import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

function Header() {
  const location = useLocation();
  console.log(location);
  const currentLocation = location.pathname.slice(1); 
  const [currentPage, setCurrentPage] = useState(currentLocation || 'about');
  const handleClick = (newPage) => {
    setCurrentPage(newPage)
  }
  return (
    <header className="header">
      <nav>
        <ul>
          <li className={currentPage === "about" ? "navLinkSelected" : ""} onClick={() => handleClick("about")}><Link to="/about">About</Link></li>
          <li className={currentPage === "portfolio" ? "navLinkSelected" : ""} onClick={() => handleClick("portfolio")}><Link to="/portfolio">Portfolio</Link></li>
          <li className={currentPage === "resume" ? "navLinkSelected" : ""} onClick={() => handleClick("resume")}><Link to="/resume">Resume</Link></li>
          <li className={currentPage === "contact" ? "navLinkSelected" : ""} onClick={() => handleClick("contact")}><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;