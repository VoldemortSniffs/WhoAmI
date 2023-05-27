import React from 'react';
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaBeer, FaGithub, FaGithubSquare} from 'react-icons/fa';
import { HiAcademicCap } from "react-icons/hi";
const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/VoldemortSniffs/WhoAmI">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/prakhar-martand-b91a311b9/" target='_blank'>
            <BsLinkedin />
          </a>
        </div>
        <div>

          <a href='https://drive.google.com/file/d/1e7jHzcrtFRfWQqbHk4atIwx1XWUcfA22/view?usp=sharing'>
            <HiAcademicCap />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia