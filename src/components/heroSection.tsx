import React from "react";
import "../styles/heroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSectionContainer">
      <div>
        <h1>
          <span className="active">Explore</span> An Online African Restaurant
          And Store.
        </h1>
        <p>
          Explore rour African foods and experience the advantage of an online
          restaurant and grocery delivery services with{" "}
          <span className="black"> City</span>
          <span className="primary">Xplorer.</span>
              </p>
              
        <button>Shop For Grocery Now</button>
        <button>Shop For Restaurant Now</button>
      </div>
      <div>
        <img src={require("../assets/hero image.png")} alt="Food" />
      </div>
    </div>
  );
};

export default HeroSection;
