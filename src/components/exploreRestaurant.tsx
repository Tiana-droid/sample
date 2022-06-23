import "../styles/exploreGrocery.css";
import React, { useContext } from "react";
import { ProductsContext } from "../context/products";
import LandingPageProductCard from "./landingPageProductCard";

const ExploreRestaurant = () => {
  const [products] = useContext(ProductsContext);
  // console.log(products);
  return (
    <div className="exploreGroceryContainer">
      <h1>Explore Our Restaurant Products</h1>
      {products.length !== 0 ? (
        <>
          <div className="firstDiv">
            {products.slice(4, 9).map((product: any) => {
              return (
                <LandingPageProductCard
                  product={product.food}
                  type={"restaurant"}
                />
              );
            })}
          </div>
          <h4 className="active">View More</h4>{" "}
        </>
      ) : (
        <p style={{ textAlign: "center", margin: "50px 0px" }}>
          Loading Products...
        </p>
      )}
    </div>
  );
};

export default ExploreRestaurant;
