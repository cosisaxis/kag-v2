import React from 'react'
import './Services.css'
import Image1 from "../../assets/image1.jpg"
import Image2 from "../../assets/image2.jpg"
import Image3 from "../../assets/image3.jpg"
import Image4 from "../../assets/image4.jpg"
import Tick from "../../assets/tick.png"


const Services = () => {
  return (
    <div className='Services' id='services'>
        <div className="left-service">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" width="500" />
            <img src={Image3} alt="" width="250"/>
            <img src={Image4} alt="" width="150" />
        </div>
        <div className="right-service">
            right
        </div>
    </div>
  )
}

export default Services