import React from "react";
import "../styles/footer.css";
import { BiPhoneCall, BiMailSend, BiLocationPlus } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footerContainer">
      <section>
        <div>
          <h2>Want To Know More?</h2>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Privacy & Return Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>
            <BiPhoneCall
              size={20}
              style={{
                color: "var(--primary)",
                marginRight: 10,
                marginBottom: -5,
              }}
            />
            931-26-1138
          </p>
          <p>
            <BiMailSend
              size={20}
              style={{
                color: "var(--primary)",
                marginRight: 10,
                marginBottom: -5,
              }}
            />
            atfahina@gmail.com
          </p>
          <p>
            <BiLocationPlus
              size={20}
              style={{
                color: "var(--primary)",
                marginRight: 10,
                marginBottom: -5,
              }}
            />
            Nashville City, Tennessee State
          </p>
        </div>
        <div>
          <h2>Newsletter</h2>
          <p>Subscribe To Our Newsletter Today!</p>
          <p className="active">Enjoy our update and top deals frequently.</p>
          <p>
            <input placeholder="Email Address" type="email" />
            <button>Subscribe</button>
          </p>
        </div>
      </section>
      <section>
        <p>
          © 2022 Copyright{" "}
          <span style={{ color: "var(--black)", fontFamily: "cursive" }}>
            City
          </span>
          <span style={{ fontFamily: "cursive" }}>Xplorer</span>, All Rights
          Reserved.
        </p>
        <img src={require("../assets/image 47.png")} alt="cards" />
      </section>
    </div>
  );
};

export default Footer;
