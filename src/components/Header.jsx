import React from "react";

const Header = ({ isMetric, setIsMetric }) => {
  return (
    <header className="header">
      <h1>Weather App</h1>
      <button onClick={() => setIsMetric(!isMetric)}>
        Units: {isMetric ? "Metric (°C)" : "Imperial (°F)"}
      </button>
    </header>
  );
};

export default Header;
