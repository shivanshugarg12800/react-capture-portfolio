import React from "react";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import home2 from "../img/home2.png";
const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>Quality</span> services
        </h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="icon">
            <img src={clock} alt="" />
            <h3>Efficient</h3>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={money} alt="" />
            <h3>Affordable</h3>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={teamwork} alt="" />
            <h3>Teamwork</h3>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="card">
          <div className="icon">
            <img src={diaphragm} alt="" />
            <h3>Diaphragm</h3>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  );
};
export default ServiceSection;
