import React, { useState } from 'react'
import "./Testimonials.css"
import { testimonialsData } from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
const Testimonials = () => {
    const [selector, setSelector] = useState(0);
    const testimonialsLength = testimonialsData.length;


  return (
   <div className="Testimonials">
   <div className="left-testimonials">
    <span>Testimonials</span>
    <span className='transparent-text'>what they</span>
    <span>say about us</span>
    <span>
        {testimonialsData[selector].review}
    </span>
    <span>
        <span style={{color: 'var(--blue)'}}>
            {testimonialsData[selector].name}
        </span>{" "}
        - {testimonialsData[selector].status}
    </span>
   </div>
   <div className="right-testimonials">
    <div></div>
    <div></div>
    <img src={testimonialsData[selector].image} alt="" />
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