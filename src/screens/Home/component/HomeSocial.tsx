import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

import { FiMail } from "react-icons/fi";

const HomeSocial = () => {
  return (
    <>
      <div className='home__social_left'>
        <a href='https://linkedin.com' target='_blank'>
          <BsLinkedin />
        </a>
        <a href='https://github.com' target='_blank'>
          <BsGithub />
        </a>
      </div>
      <div className='home__social_right'>
        <a href='https://linkedin.com' target='_blank'>
          <BsInstagram />
        </a>
        <a href='mailto:anis.najib@outlook.com' target='_blank'>
          <FiMail />
        </a>
      </div>
    </>
  );
};

export default HomeSocial;
