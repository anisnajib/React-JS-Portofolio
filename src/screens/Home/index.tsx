import React from "react";
import "./index.css";
import ME from "../../assets/picture/me.png";
import HomeButton from "./component/HomeButton";
import HomeSocial from "./component/HomeSocial";

const Headers = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi, My name is</h5>
        <h1>Anis Najib</h1>
        <h5 className='text-light'>Mobile and Web Developer</h5>
        <HomeButton />
        <HomeSocial />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
      </div>
    </header>
  );
};

export default Headers;
