import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/a.png";
import Fiverr from "../../img/b.png";
import Amazon from "../../img/c.png";
import Shopify from "../../img/d.png";
import Facebook from "../../img/e.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Technologies
          </span>
          <span> Programming Skills</span>
          <spane>
            Building full-stack applications with the MERN stack.
            <br />
            Proficient in HTML, CSS, JavaScript, and Redux 
            <br />
            for creating dynamic, responsive web applications.
            <br />
            Crafting stunning cross-platform apps with Flutter's fast and 
            flexible framework.
            <br />
            Possess basic knowledge of Java, Python, and C 
            <br />
            for foundational programming and application development.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>

      
    </div>
  );
};

export default Works;
