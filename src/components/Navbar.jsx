import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Weather App Logo" />
      </div>
      


      <button className="units">
        Units <span className="down">▼</span>
      </button>
    </header>
  );
};

export default Navbar;

