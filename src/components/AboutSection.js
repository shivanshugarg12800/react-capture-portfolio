import React from "react";
import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true</h2>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eos
          incidunt libero dolorem explicabo dolore consequuntur quis quos iusto
          facilis!
        </p>
        <button> contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="" />
      </div>
    </div>
  );
};
export default AboutSection;
