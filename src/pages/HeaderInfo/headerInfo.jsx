import React from "react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import kalta from "../../assets/xiva.webp";
import xiva from "../../assets/nzpkfm5qgjmve2v6b69y6a4b5ka66erc.jpg";
import arda from "../../assets/DJI_0001.00_01_05_18.Still001.jpg";

import "./headerInfo.css";

const HeaderInfo = () => {
  const { t } = useTranslation();

  return (
    <section className="headerInfo container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: false }}
        loop
        className="heroSwiper"
      >
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${kalta})` }}
          >
            <div className="hero-content">
              <h1>Kalta Minor – Xivaning tugallanmagan ramzi</h1>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg> Xorazm viloyati, Xiva shahri</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${xiva})` }}
          >
            <div className="hero-content">
              <h1>ICHAN QALA</h1>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg> Xorazim viloyati Xiva shahri</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${arda})` }}
          >
            <div className="hero-content">
              <h1>ARDA KHIVA – MADANIY MEROS MARKAZI</h1>
              <p><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg> Xorazm viloyati Xiva shahri</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeaderInfo;
