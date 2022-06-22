import "../styles/exploreGrocery.css";
import React, { useContext } from "react";
import { ProductsContext } from "../context/products";

const ExploreGrocery = () => {
  const [products, setProducts] = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="exploreGroceryContainer">
      <h1>Explore Our Grocery Products</h1>
      <div>
        {products?.map((product: any) => {
          return <p key={product.id}>{product.name}</p>;
        })}
      </div>
    </div>
  );
};

export default ExploreGrocery;
