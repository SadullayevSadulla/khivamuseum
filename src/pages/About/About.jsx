import React from "react";
import "./About.css";
import xiva from "../../assets/xiva.webp";

const About = () => {
  return (
    <div className="about-page">
      <div className="ikki">
        <div className="about container">
          <h1>Muzey haqida</h1>
          <p>Bosh sahifa ----- Muzey haqida</p>
        </div>
      </div>
      <div className="main_card container">
        <div className="main_left">
          <h1>Xiva muzeyi – 1970 yildan beri tarix merosi</h1>

          <p>
            Xiva muzeyi 1970 yilda tashkil etilgan bo'lib, Xiva va uning atrofi
            hududning boy tarixiy merosini saqlash va namoyish etishga
            bag'ishlangan nufuzli madaniy va ta'lim muassasasidir. Ko’p
            tarmoqli markaz sifatida muzey tadqiqot, konservatsiya va omma
            ta’limida muhim rol o‘ynaydi...
          </p>

          <div className="main_btnnn">
            <button type="button" className="main_btn">
              Galereya
            </button>
          </div>
        </div>
        <div className="main_right">
          <img src={xiva} alt="" />
        </div>
      </div>
    </div>

  );
};

export default About;
