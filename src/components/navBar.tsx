import "../styles/navBar.css";
import { BiUser, BiSearchAlt, BiCart } from "react-icons/bi";

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
  return (
    <div className="navBarContainer">
      <section className="topNav">
        <img src={require("../assets/logo.png")} alt="logo" />
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
          <li className={props.page === "home" ? "active" : "li"}>Home</li>
          <li className={props.page === "shop" ? "active" : "li"}>Shop</li>
          <li className={props.page === "account" ? "active" : "li"}>
            Account
          </li>
          <li className={props.page === "category" ? "active" : "li"}>
            Categories
          </li>
          <li className={props.page === "about" ? "active" : "li"}>About Us</li>
          <li className={props.page === "subscription" ? "active" : "li"}>
            Subscription
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
