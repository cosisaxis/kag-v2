import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Telephone from "../../assets/telephone.png"
import Hero1 from "../../assets/hero5.jpeg"
import Open from "../../assets/open.png"
import {motion} from 'framer-motion'
import NumberCounter from "number-counter"

const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768? true: false;

  return (
    <div className="hero" id="home">
      <div className="blurriness hero-blurriness"></div>
      <div className="left">
        <Header />
        {/* advertisement */}
        <div className="advertisement">
          <motion.div initial={{left: mobile? "178px": "338px" }}
          whileInView={{left: '8px'}}
          transition ={{...transition, type: 'tween'}}
            >
            
          </motion.div>
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
            <span>
              <NumberCounter end={30} start={10} delay='2' preFix='+'/>
            </span>
            <span>Experience</span>
          </div>
          <div>
            <span><NumberCounter end={1000} start={888} delay='2' preFix='+'/></span>
            <span>Finished Jobs</span>
          </div>
          <div>
          <span><NumberCounter end={6} start={1} delay='2' preFix='+'/></span>
            <span>Employees</span>
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
       <motion.div 
       initial={{right: "-1rem"}}
       whileInView={{ right: "4rem"}}
       transition={transition}
       className="telephone-number">
        <img src={Telephone} alt="" width='40px'/>
        <span>Contact:</span>
        <span>8763019218</span>
       </motion.div>
       {/* hero images */}
       {/* <img src={Hero1} alt="" className="hero-images" /> */}
       {/* opening hours */} 
       <motion.div 
       initial={{right: "37rem"}}
       whileInView={{right: "28rem"}}
       transition={transition}
       className="hours">
        <img src={Open} alt="" />
        <div>
        <span>Everyday:</span>
        <span>8:30am 5:30pm</span>
        </div>
       </motion.div>
      </div>
    </div>
  );
};

export default Hero;
