import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
// import {urlFor , client } from '../../client';
import "./Work.scss";

const Work = () => {
  const [activeFilter, setactiveFilter] = useState("👈Tags");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {};
  return (
    <>
      <h2 className="head-text">
        This is my <span>Creative Workstation</span> <br /> I keep my{" "}
        <span>Active works</span> here
      </h2>
      <div className="app__work-filter">
        {["HackStuff", "Web App", "Product-Management", "Events", "👈Tags"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.6, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        <div className="app__work-item app__flex">
          <div className="app__work-img app__flex">
            <img src={images.about01} alt="about01" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">Title of the project</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
              Work Description for the project
            </p>
            <div className="app__work-tag app__flex">
              <p className="p-text">Work tags like tech used</p>
            </div>
          </div>
        </div>
        <div className="app__work-item app__flex">
          <div className="app__work-img app__flex">
            <img src={images.about04} alt="about04" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">Title of the project</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
              Work Description for the project
            </p>
            <div className="app__work-tag app__flex">
              <p className="p-text">Work tags like tech used</p>
            </div>
          </div>
        </div>
        <div className="app__work-item app__flex">
          <div className="app__work-img app__flex">
            <img src={images.about02} alt="about02" />

            <motion.div
              whileHover={{ opacity: [0, 1] }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                staggerChildren: 0.5,
              }}
              className="app__work-hover app__flex"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  whileHover={{ scale: [1, 0.9] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__flex"
                >
                  <AiFillGithub />
                </motion.div>
              </a>
            </motion.div>
          </div>
          <div className="app__work-content app__flex">
            <h4 className="bold-text">Title of the project</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
              Work Description for the project
            </p>
            <div className="app__work-tag app__flex">
              <p className="p-text">Work tags like tech used</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
