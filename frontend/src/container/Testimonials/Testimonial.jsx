import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Testimonial.scss";

const Testimonial = () => {
  // const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const query = '*[_type == "experiences"]';
  //   const skillsQuery = '*[_type == "skills"]';
  // })

  return (
    <>
      <h2 className="head-text">
        These are some Speaker<span>Milestones</span> <br /> of my life
        <span>Event</span> here
      </h2>
    <div className="app__testimonials app__flex">
      <div className="app__testimonials-item app__flex">
        <h4 className=" head-text bold-text">Aic: Startup Mela</h4>
        <img src={images.AicG} alt="test1" />
        <div className="app__testimonials-content">
          <div>
            <h5 className="p-text">AIC & CyberSpaceClub</h5>
          </div>
          <p className="p-text bold-text">A fabulous start-up exhibition with title sponsor CSC-MUJ</p>
        </div>
      </div>
      <div className="app__testimonials-item app__flex">
        <h4 className=" head-text bold-text">Cyber-Savy</h4>
        <img src={images.Savy} alt="test1" />
        <div className="app__testimonials-content">
          <div>
            <h5 className="p-text">Cyber Space Club</h5>
          </div>
          <p className="p-text bold-text">Workshop on cyber-security and how to protect yourself online</p>
        </div>
      </div>
      <div className="app__testimonials-item app__flex">
        <h4 className=" head-text bold-text">Cyber-Revive</h4>
        <img src={images.Revive} alt="test1" />
        <div className="app__testimonials-content">
          <div>
            <h5 className="p-text">Manipal University, Jaipur, India</h5>
          </div>
          <p className="p-text bold-text">Hands-on workshop on active target pentesting with Mr. Aditya Shende</p>
        </div>
      </div>
      <div className="app__testimonials-item app__flex">
        <h4 className=" head-text bold-text">Bug Bash</h4>
        <img src={images.BugBash} alt="test1" />
        <div className="app__testimonials-content">
          <div>
            <h5 className="p-text">MDS University Ajmer, India</h5>
          </div>
          <p className="p-text bold-text">Two days and 13 hour hands-on workshop on ethical hacking</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AppWrap(Testimonial, "events");
