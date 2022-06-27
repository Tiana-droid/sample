import React, { useRef, useEffect, useState } from "react";
import "../styles/navBar.css";
import { BiUser, BiSearchAlt, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

interface Props {
  page:
    | "home"
    | "shop"
    | "account"
    | "category"
    | "about"
    | "subscription"
    | "contact";
}

const NavBar = (props: Props) => {
  const [showDiv, setshowDiv] = useState("none");

  //   const shopRef = useRef<HTMLDivElement | null>(null);
  //   const accountRef = useRef<HTMLDivElement | null>(null);
  //   const categoryRef = useRef<HTMLDivElement | null>(null);
  //   const subscriptionRef = useRef<HTMLDivElement | null>(null);
  const shop = useRef<HTMLLIElement | null>(null);
  const account = useRef<HTMLLIElement | null>(null);
  const category = useRef<HTMLLIElement | null>(null);
  const subscription = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    shop.current?.addEventListener("mouseover", () => {
      setshowDiv("shop");
    });
    shop.current?.addEventListener("mouseout", () => {
      setshowDiv("none");
    });
    account.current?.addEventListener("mouseover", () => {
      setshowDiv("account");
    });
    account.current?.addEventListener("mouseout", () => {
      setshowDiv("none");
    });
    category.current?.addEventListener("mouseover", () => {
      setshowDiv("category");
    });
    category.current?.addEventListener("mouseout", () => {
      setshowDiv("none");
    });
    subscription.current?.addEventListener("mouseover", () => {
      setshowDiv("subscription");
    });
    subscription.current?.addEventListener("mouseout", () => {
      setshowDiv("none");
    });
  }, []);

  return (
    <div className="navBarContainer">
      <section className="topNav">
        <Link to="/">
          <img src={require("../assets/logo.png")} alt="logo" />
        </Link>
        <p>
          WE OFFER FREE DELIVERY SERVICES ON MONTHLY SUBSCRIPTION BASED ON YOUR
          LOCATION
        </p>
        <section>
          <span>
            <BiSearchAlt size={25} />
          </span>
          <span>
            <BiCart size={25} />
          </span>
          <span>
            <BiUser size={25} />
          </span>
        </section>
      </section>
      <section className="bottomNav">
        <ul>
          <li className={props.page === "home" ? "active" : "li"}>
            <Link to="/">Home</Link>
          </li>

          <li className={props.page === "shop" ? "active" : "li"} ref={shop}>
            Shop
            <div className={showDiv === "shop" ? "showDiv" : "hideDiv"}>
              <ol>
                <li>Restaurant</li>
                <li>Grocery</li>
              </ol>
            </div>
          </li>
          <li
            className={props.page === "account" ? "active" : "li"}
            ref={account}
          >
            Account
            <div className={showDiv === "account" ? "showDiv" : "hideDiv"}>
              <ol>
                <Link to="/register" state={"buyer"}>
                  <li>Sign Up As A Buyer</li>
                </Link>
                <Link to="/register" state={"merchant"}>
                  <li>Sign Up As A Merchant</li>
                </Link>
                <li>Sign In</li>
                <li>My Account</li>
              </ol>
            </div>
          </li>
          <li
            className={props.page === "category" ? "active" : "li"}
            ref={category}
          >
            Categories
            <div className={showDiv === "category" ? "showDiv" : "hideDiv"}>
              <ol>
                <li>Cereal Grain</li>
                <li>Cooking Oil</li>
                <li>Seasoning And Spices</li>
                <li>Vegetables And Fruits</li>
                <li>Protein (Fish $ Meat)</li>
                <li>Tubers</li>
                <li>Floor</li>
                <li>Canned Food</li>
                <li>Snacks</li>
                <li>Cooked Food</li>
              </ol>
            </div>
          </li>
          <li className={props.page === "about" ? "active" : "li"}>About Us</li>
          <li
            className={props.page === "subscription" ? "active" : "li"}
            ref={subscription}
          >
            Subscription
            <div className={showDiv === "subscription" ? "showDiv" : "hideDiv"}>
              <ol>
                <li>Monthly subscription</li>
              </ol>
            </div>
          </li>
          <li className={props.page === "contact" ? "active" : "li"}>
            Contact Us
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NavBar;
