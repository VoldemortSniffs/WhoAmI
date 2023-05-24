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
        <h4 className=" head-text bold-text">Event Name</h4>
        <img src={images.about03} alt="test1" />
        <div className="app__testimonials-content">
          <div>
            <h5 className="p-text">Company name</h5>
          </div>
          <p className="p-text">This is event Description</p>
        </div>
      </div>
      <div className="app__testimonials-item app__flex">
        <h4 className=" head-text bold-text">Event Name</h4>
        <img src={images.about03} alt="test1" />
        <div className="app__testimonials-content">
          <div>
            <h5 className="p-text">Company name</h5>
          </div>
          <p className="p-text">This is event Description</p>
        </div>
      </div>
      <div className="app__testimonials-item app__flex">
        <h4 className=" head-text bold-text">Event Name</h4>
        <img src={images.about03} alt="test1" />
        <div className="app__testimonials-content">
          <div>
            <h5 className="p-text">Company name</h5>
          </div>
          <p className="p-text">This is event Description</p>
        </div>
      </div>
      <div className="app__testimonials-item app__flex">
        <h4 className=" head-text bold-text">Event Name</h4>
        <img src={images.about03} alt="test1" />
        <div className="app__testimonials-content">
          <div>
            <h5 className="p-text">Company name</h5>
          </div>
          <p className="p-text">This is event Description</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AppWrap(Testimonial, "events");
