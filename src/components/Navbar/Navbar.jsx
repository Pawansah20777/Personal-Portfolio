import React, { useState, useContext } from "react";
import { themeContext } from "../../Context"; 
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useContext(themeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Pawan's Web Creation</div>
        <Toggle />
        <div
          className={`n-hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {/* right */}
      <div className={`n-right ${isMenuOpen ? "show" : ""}`}>
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Education
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Certifications
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
