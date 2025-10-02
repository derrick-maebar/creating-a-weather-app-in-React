// src/components/TopNav.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"; // adjust path if needed

const TopNav = ({ isMetric, setIsMetric }) => {
  return (
    <header className="topnav">
      <div className="logo">
        <img src={logo} alt="Weather App Logo" />
      </div>

      <button
        className="units-btn"
        onClick={() => setIsMetric(!isMetric)}
      >
        {isMetric ? "°C" : "°F"}
      </button>
    </header>
  );
};

export default TopNav;

