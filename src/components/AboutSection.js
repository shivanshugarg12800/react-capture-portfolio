import React from "react";
import home1 from "../img/home1.png";
import { About, Hide, Image, StyledDescription } from "../Styles";

// importing styled components
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <StyledDescription>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true</h2>
          </Hide>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eos
          incidunt libero dolorem explicabo dolore consequuntur quis quos iusto
          facilis!
        </p>
        <button> contact us</button>
      </StyledDescription>
      <Image>
        <img src={home1} alt="" />
      </Image>
    </About>
  );
};

// ---------------------STYLED COMPONENTS--------------------

export default AboutSection;
