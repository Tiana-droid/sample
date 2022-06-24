import React from "react";
import "../styles/exploreGrocery.css";

const LandingPageProductCard = (props: any) => {
  // console.log(props.product);
  return (
    <div className="landingPageProductCardContainer">
      {props.type === "grocery" ? (
        <img
          src={props.product.image}
          alt={props.product.lable}
          className="img1"
        />
      ) : (
        <div className="imageCon">
          <img
            src={props.product.image}
            alt={props.product.lable}
            className="img2"
          />
        </div>
      )}

      <p>{props.product.label}</p>
      <p className="active">{props.product.category}</p>
      <p className="active">$5.0</p>
      <button>Add To Cart</button>
    </div>
  );
};

export default LandingPageProductCard;
