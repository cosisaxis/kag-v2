import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo2.png";
import Bars from "../../assets/bars.png";

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
          <li onClick={()=>setOpen(false)}>Home</li>
          <li onClick={()=>setOpen(false)}>Programs</li>
          <li onClick={()=>setOpen(false)}>Why us</li>
          <li onClick={()=>setOpen(false)}>Plans</li>
          <li onClick={()=>setOpen(false)}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
