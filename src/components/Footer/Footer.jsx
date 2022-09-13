import React from "react";
import "./Footer.css";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo2.png";
import Facebook from "../../assets/facebook.png";
import Directory from "../../assets/directory.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="socials-footer">
          <a href="">
            <img className="test1" src={Instagram} alt="" />
          </a>
          <a href="">
            <img className="test1" src={Facebook} alt="" />
          </a>
          <a href="">
            <img className="test1" src={Directory} alt="" />
          </a>
        </div>
        <div className="footer-logo">
          <img className="test2" src={Logo} alt="" />
        </div>
      </div>
      <div className="blurriness footer-blurriness1"></div>
      <div className="blurriness footer-blurriness2"></div>
    </div>
  );
};

export default Footer;
