import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo2.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {open === false && mobile == true ? (
        <div
        style={{
          backgroundColor: "var(--blue)",
          padding:"0.5rem",
          borderRadius: "5px",
        }}

        onClick={()=> setOpen(true)}
        >
          <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
        </div>
      ) : (
        <ul className="header-menu">
          
          <li><Link 
          onClick={()=>setOpen(false)}
          to="home"
          span={true}
          smooth={true}
          >Home</Link></li>
          <li><Link 
          onClick={()=>setOpen(false)}
          to="programs"
          span={true}
          smooth={true}
          >Why us</Link></li>
          <li><Link 
          onClick={()=>setOpen(false)}
          to="services"
          span={true}
          smooth={true}
          >Services</Link></li>
          <li><Link 
          onClick={()=>setOpen(false)}
          to="testimonials"
          span={true}
          smooth={true}
          >Testimonials</Link></li>
          <li><Link 
          onClick={()=>setOpen(false)}
          to="join-now"
          span={true}
          smooth={true}
          >Join us</Link></li>
          <li><Link 
          onClick={()=>setOpen(false)}
          to="footer"
          span={true}
          smooth={true}
          >Footer</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
