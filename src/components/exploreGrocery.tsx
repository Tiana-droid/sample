import "../styles/exploreGrocery.css";
import React, { useContext } from "react";
import { ProductsContext } from "../context/products";
import LandingPageProductCard from "./landingPageProductCard";

const ExploreGrocery = () => {
  const [products] = useContext(ProductsContext);
  // console.log(products);
  return (
    <div className="exploreGroceryContainer">
      <h1>Explore Our Grocery Products</h1>
      <div className="firstDiv">
        {products.length !== 0 ? (
          products.slice(0, 5).map((product: any) => {
            return <LandingPageProductCard product={product.food} type={"grocery"} />;
          })
        ) : (
          <p style={{ textAlign: "center", margin: "50px 0px" }}>
            Loading Products...
          </p>
        )}
      </div>
      <h4 className="active">View More</h4>
    </div>
  );
};

export default ExploreGrocery;
