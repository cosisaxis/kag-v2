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
            <img src={Image2} alt=""  />
            <img src={Image3} alt="" />
            <img src={Image4} alt=""  />
        </div>
        <div className="right-service">
            <span>kag services</span>
            <div>
                <span className='transparent-text'>our</span>
                <span> services</span>
            </div>

            <div className='services-detail'>
                <div>
                    <img src={Tick} alt="" width='30px' />
                    <span>Windshield replacement</span>
                </div>
                <div>
                    <img src={Tick} alt="" width='30' />
                    <span>Rear window replacement</span>
                </div>
                <div>
                    <img src={Tick} alt="" width='30px' />
                    <span>Side window replacement</span>
                </div>
                <div>
                    <img src={Tick} alt="" width='30px' />
                    <span>tinting all windows</span>
                </div>
                <div>
                    <img src={Tick} alt="" width='30px' />
                    <span>windshield repair</span>
                </div>
                <div>
                    <img src={Tick} alt="" width='30px' />
                    <span>power window repair</span>
                </div>
                <div>
                    <img src={Tick} alt="" width='30px' />
                    <span>rv window installation</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services