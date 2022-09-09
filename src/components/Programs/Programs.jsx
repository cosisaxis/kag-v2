import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import Heart from "../../assets/heart.png";
import Credit from "../../assets/credit.png";
import Insurance from "../../assets/health-insurance.png";
import Delivery from "../../assets/delivery.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-heading">
        <span>Why</span>
        <span className="transparent-text">Choose</span>
        <span>KAG?</span>
      </div>

      <div className="program-categories">
        <div className="categories">
          <img src={Heart} alt="" width="30px" />
          <h3>Passion</h3>
          <p>we'll always go the extra mile for our valued customers</p>
          <a href="tel:+8763019218">
            <button className="btn" id="call-us">
              call us
            </button>
          </a>
        </div>
        <div className="categories">
          <img src={Credit} alt="" width="30px" />
          <h3>Credit</h3>
          <p>
            We accept every major credit/debit cards for our payment process.
          </p>
          <a href="tel:+8763019218">
            <button className="btn" id="call-us">
              call us
            </button>
          </a>
        </div>
        <div className="categories">
          <img src={Delivery} alt="" width="30px" />
          <h3>Mobile Service</h3>
          <p>
            We offer our customers free mobile service in the state of florida
          </p>
          <a href="tel:+8763019218">
            <button className="btn" id="call-us">
              call us
            </button>
          </a>
        </div>
        <div className="categories">
          <img src={Insurance} alt="" width="30px" />
          <h3>Insurance</h3>
          <p>We accept all insurance policies, Directly from providers.</p>
          <a href="tel:+8763019218">
            <button className="btn" id="call-us">
              call us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Programs;
