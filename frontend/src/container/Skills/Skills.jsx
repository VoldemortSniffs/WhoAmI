import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">
        I know these <span>Skills</span>{" "}
      </h2>
<br />
      <div className="app__skills">
        <div className="app__skills-slide">
          <img src={images.flutter} alt="flutter" />
          <img src={images.figma} alt="flutter" />
          <img src={images.graphql} alt="flutter" />
          <img src={images.git} alt="flutter" />
          <img src={images.html} alt="flutter" />
          <img src={images.css} alt="flutter" />
          <img src={images.javascript} alt="flutter" />
          <img src={images.cpp} alt="flutter" />
          <p> </p>
        </div>
        <div className="app__skills-slide">
          <img src={images.flutter} alt="flutter" />
          <img src={images.figma} alt="flutter" />
          <img src={images.graphql} alt="flutter" />
          <img src={images.git} alt="flutter" />
          <img src={images.html} alt="flutter" />
          <img src={images.css} alt="flutter" />
          <img src={images.javascript} alt="flutter" />
          <img src={images.cpp} alt="flutter" />
        </div>
      </div>
      <br />
      
    </>
  );
};

export default Skills;
