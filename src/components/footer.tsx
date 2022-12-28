import React from "react"
import "../styles/footer.css"
import { BiPhoneCall, BiMailSend, BiLocationPlus } from "react-icons/bi"
import phone from "../assets/Phone.png"
import location from "../assets/location.png"
import mail from "../assets/mail.png"
import masterCard from "../assets/mastercard.png"
import visa from "../assets/visa.png"
import payPal from "../assets/paypal.png"
import stripe from "../assets/stripe.png"
const Footer = () => {
  return (
    <div className="footerContainer">
      <section>
        <div>
          <h2>Contact Info:</h2>
          <p>
            <img
              src={phone}
              alt="phone"
              style={{
                marginRight: 10,
                marginBottom: -5,
                height: 18,
                width: 18,
              }}
            />
            +1 (615) 668-7715
          </p>

          <p>
            <img
              src={location}
              alt="phone"
              style={{
                marginRight: 10,
                marginBottom: -5,
                height: 18,
                width: 18,
              }}
            />
            US
          </p>
          <p>
            <img
              src={mail}
              alt="phone"
              style={{
                marginRight: 10,
                marginBottom: -5,
                height: 18,
                width: 18,
              }}
            />
            info@cityxplorer.io
          </p>
        </div>
        <div>
          <h2>Stores We Serve</h2>
          <p>African & carribbean</p>
          <p>Indian </p>
          <p>Middle Eastern</p>
          <p>Asian</p>
          <p>Hispanic</p>
          <p>European</p>
        </div>

        <div>
          <h2>Payment Methods</h2>
          <div className="payment-method">
            <img src={masterCard} alt="mastercard" />
            <img src={visa} alt="visa" />
            <img src={payPal} alt="payPal" />
            <img src={stripe} alt="stripe" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
