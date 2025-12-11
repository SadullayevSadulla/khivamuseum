import React from 'react';
import './elonlar.css';
import img from "../../assets/_1759731797457.png";
import img1 from "../../assets/khiva.jpg";
import img2 from "../../assets/_1756636849768.jpeg"; 
import img3 from "../../assets/art-2.jpg";
const Elonlar = () => {
  return <>
    <section>
      <div className="ikki">
        <div className="about container">
          <h1>E’lonlar</h1>
          <p>Bosh sahifa----- E’lonlar</p>
        </div>
      </div>
      <div className="bit container">
        <div className="bit1">
          <img src={img} alt="img" />
          <h1>Keksalar oyligida chegirmalar</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7" stroke-width="1" /></svg>        </div>
        <div className="bit1">
          <img src={img1} alt="img" />
          <h1>SAYYOR QABUL</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7" stroke-width="1" /></svg>

        </div>
        <div className="bit1">
          <img src={img2} alt="img" />
          <h1>2-8-sentabr ochiq eshiklar kuni</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7" stroke-width="1" /></svg>
        </div>
        <div className="bit1">
          <img src={img3} alt="img" />
          <h1>Keksalar oyligida chegirmalar</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 12.013L20.789 12m-6.776 7L21 12l-6.988-7" stroke-width="1" /></svg>
        </div>
      </div>
    </section>
  </>
}

export default Elonlar;