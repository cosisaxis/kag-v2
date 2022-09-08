import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Telephone from "../../assets/telephone.png"
import Hero1 from "../../assets/hero5.jpeg"
import Open from "../../assets/open.png"
const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <Header />
        {/* advertisement */}
        <div className="advertisement">
          <div></div>
          <span>The best glass installation company in Florida</span>
        </div>
        {/* header */}
        <div className="hero-text">
          <div>
            <span className="transparent-text">lets </span>
            <span>get</span>
          </div>
          <div>
            <span>Started </span>
            <span className="transparent-text">today</span>
          </div>
          <div>
            <span>
              We are the premier glass installation service in the entire
              Florida state, we'll ensure your vehicle is in top condition
            </span>
          </div>
        </div>
        {/* company stats */}
        <div className="stats">
          <div>
            <span>+15</span>
            <span>years of experience</span>
          </div>
          <div>
            <span>+100</span>
            <span>Finished Jobs</span>
          </div>
          <div>
            <span>+3</span>
            <span>Number of employees</span>
          </div>
        </div>
        {/* buttons for hero */}
        <div className="hero-buttons">
        <a  href="tel:+8763019218">
          <button className="btn" id="call-us">call us</button>
        </a>
        <a  href="tel:+8763019218">
          <button className="btn" id="email-us">email us</button>
        </a>
        </div>
      </div>
      {/* right side */}
      <div className="right">
      <a  href="tel:+8763019218">
          <button className="btn" id="header-call">call us</button>
        </a>
        {/* contact */}
       <div className="telephone-number">
        <img src={Telephone} alt="" width='40px'/>
        <span>Contact:</span>
        <span>8763019218</span>
       </div>
       {/* hero images */}
       {/* <img src={Hero1} alt="" className="hero-images" /> */}
       {/* opening hours */} 
       <div className="hours">
        <img src={Open} alt="" />
        <div>
        <span>Everyday:</span>
        <span>8:30am 5:30pm</span>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Hero;
