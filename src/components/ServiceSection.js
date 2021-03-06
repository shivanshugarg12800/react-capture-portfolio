import React from "react";
// svgs
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import home2 from "../img/home2.png";

// styles
import { About, Hide, Image, StyledDescription } from "../Styles";
import styled from "styled-components";

const ServiceSection = () => {
  return (
    <Services>
      <StyledDescription>
        <h2>
          High <span>Quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Card>
        </Cards>
      </StyledDescription>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};
// ------------------STYLED COMPONENTS ---------------------

// with this we can use the styling of some other component.
const Services = styled(About)`
  h2 {
    padding-bottom: 4rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rems;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;
export default ServiceSection;
