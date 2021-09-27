import React from "react";
// Global styles
import GlobalStyled from "./components/GlobalStyled";

// components
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <div className="App">
      <GlobalStyled />
      <AboutUs />
    </div>
  );
}

export default App;
