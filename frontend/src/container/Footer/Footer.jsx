import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from 'framer-motion';
import "./Footer.scss";

const Footer = () => {
  const [activeFilter, setactiveFilter] = useState("pmartand7@gmail.com");
  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        Have a <span>Coffee</span> & Let's Chat☕{" "}
      </h2>

      <motion.div
        whileInView= {{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.9}}
      >
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.email} alt="Email" />
            <a href="mailto:pmartand7@gmail.com" className="p-text">
              pmartand7@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="Mobile" />
            <a href="tel: +91 7903945426" className="p-text">
              Call Me at +917903945426
            </a>
          </div>
        </div>
      </motion.div>
      <br />
    </>
  );
};

export default Footer;
