import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const abouts = [
  {title: 'Web Develeopment', description: 'I make a link look cool when opened.', imgUrl: images.about04},
  {title: 'Ethical Hacker', description: 'I maybe into your PC.', imgUrl: images.skype},
  {title: 'Speaker', description: 'You know I speak well.', imgUrl: images.speaker},
  {title: 'Product Manager', description: 'I manage things good.', imgUrl: images.productme}
];
const About = () => {
  return (
    <>
   
    <h2 className='head-text'>I love my <span> 127.0.0.1</span><br />There is no place<span> better</span></h2>
    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.6, type: 'tween' }}
        className='app__profile-item'
        key={about.title + index}
        >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
  );