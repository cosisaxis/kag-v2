import React, { useState } from 'react'
import "./Testimonials.css"
import { testimonialsData } from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import {motion} from "framer-motion";
const Testimonials = () => {
    const transition = {type: 'spring', duration: 3};
    const [selector, setSelector] = useState(0);
    const testimonialsLength = testimonialsData.length;


  return (
   <div className="Testimonials">
   <div className="left-testimonials">
    <span>Testimonials</span>
    <span className='transparent-text'>what they</span>
    <span>say about us</span>
    <motion.span
    key={selector}
    initial={{opacity:0, x:-100}}
    animate={{opacity: 1, x:0}}
    exit={{opacity:0, x:100}}
    transition={transition}
    >
        {testimonialsData[selector].review}
    </motion.span>
    <span>
        <span style={{color: 'var(--blue)'}}>
            {testimonialsData[selector].name}
        </span>{" "}
        - {testimonialsData[selector].status}
    </span>
   </div>
   <div className="right-testimonials">
    <motion.div
    initial={{ opacity: 0, x: -100 }}
    transition={{ ...transition, duration: 2 }}
    whileInView={{ opacity: 1, x:0} }
    ></motion.div>
    <motion.div
    initial={{ opacity: 0, x: 100 }}
    transition={{ ...transition, duration: 2 }}
    whileInView={{opacity: 1, x:0}}
    ></motion.div>
    <motion.img
    key={selector}
    initial={{opacity:0, x:100}}
    animate={{opacity: 1, x:0}}
    exit={{opacity:0, x:-100}}
    transition={transition}
     src={testimonialsData[selector].image} alt="" />
    <div className="arrows">
        <img
        onClick={() => {
            selector === 0
            ? setSelector(testimonialsLength -1)
            : setSelector((prev) => prev -1);
        }}
         src={leftArrow} alt="" />
        <img 
        onClick={() => {
            selector === testimonialsLength -1
            ? setSelector(0)
            : setSelector((prev) => prev + 1);
        }}
        src={rightArrow} alt="" />
    </div>
   </div>
   </div>
  )
}

export default Testimonials