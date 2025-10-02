// src/components/Layout.jsx
import React from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

const Layout = ({ children, isMetric, setIsMetric }) => {
  return (
    <div className="app">
      <TopNav isMetric={isMetric} setIsMetric={setIsMetric} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
