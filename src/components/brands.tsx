import React from "react";
import "../styles/brands.css";

const Brands = () => {
  return (
    <div className="brandsContainer">
      <h1>OUR BRANDS</h1>
      <div>
        <section>
          <img src={require("../assets/image 43.png")} alt="number 1 brand" />
        </section>
        <section>
          <img src={require("../assets/image 44.png")} alt="number 2 brand" />
        </section>
        <section>
          <img src={require("../assets/image 45.png")} alt="number 3 brand" />
        </section>
        <section>
          <img src={require("../assets/image 46.png")} alt="number 4 brand" />
        </section>
      </div>
    </div>
  );
};

export default Brands;
