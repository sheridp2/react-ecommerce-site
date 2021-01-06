import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="hero_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3195_SVOD_DiamondFallBack2/Amazon_GW_DesktopTallHero_3P_ENG_RB-3195_SVOD_DiamondFallback2_v4_1500x600._CB414747170_.jpg"
        />
      </div>
      <div className="home__row">
        <Product />
        <div className="product"></div>
      </div>
      <div className="home__row">
        <div className="product"></div>
        <div className="product"></div>
        <div className="product"></div>
      </div>
      <div className="home__row">
        <div className="product"></div>
      </div>
    </div>
  );
}

export default Home;
