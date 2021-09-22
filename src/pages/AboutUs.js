import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServiceSection from "../components/ServiceSection";

// here we have used fractions instead of returning it in the parent div
const AboutUs = () => {
  return (
    <>
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </>
  );
};
export default AboutUs;
