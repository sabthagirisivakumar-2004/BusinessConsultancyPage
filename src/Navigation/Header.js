import React from "react";
import "./navigation.css";
const Navigation = () => {
  return (
    <>
      <div>
        <h1 className="logo">SABS</h1>
      </div>
      <center>
        <nav className="centerpart">
          <a href="#" className="nav1">
            <b>HOME</b>
          </a>
          <a href="#" className="nav2">
            <b>ABOUT</b>
          </a>
          <a href="#" className="nav3">
            <b>PRICING</b>
          </a>
          <a href="#" className="nav4">
            <b>CONTACT</b>
          </a>
        </nav>
      </center>
      <button className="Glowsticky">Contact Us</button>
    </>
  );
};

export default Navigation;
