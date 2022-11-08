import React from "react";
const CV = require("../../../assets/docs/cv.pdf");

const HomeButton = () => {
  return (
    <div className='home__button'>
      <a href={CV} download className='btn'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Reach Me
      </a>
    </div>
  );
};

export default HomeButton;
