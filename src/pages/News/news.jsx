import React from "react";
import MainCard from "../MainCard/mainCard";
import "./news.css"

const News = () => {
  return <>
    <section>
      <div className="ikki">
        <div className="about container">
          <h1>Yangiliklar</h1>
          <p>Bosh sahifa<div class="line"></div>Yangiliklar</p>
        </div>
      </div>
      <MainCard />
    </section>
  </>
};

export default News;