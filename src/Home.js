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
        <Product
          title="The Lean Startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product />
      </div>
      <div className="home__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="home__row">
        <Product />
      </div>
    </div>
  );
}

export default Home;
