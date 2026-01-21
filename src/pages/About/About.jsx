import React from "react";
import "./About.css";
import xiva from "../../assets/xiva.webp";
import Main from "../Main/main";

const About = () => {
  return (
    <div className="about-page">
      <div className="ikki">
        <div className="about container">
          <h1>Muzey haqida</h1>
          <p>Bosh sahifa <div class="line"></div>Muzey haqida</p>
        </div>
      </div>
      <Main />
    </div>
  );
};

export default About;
