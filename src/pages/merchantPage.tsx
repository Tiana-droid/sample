import React from "react"
import Footer from "../components/footer"
import MerchantBottomPanel from "../components/MerchantBottomPanel"
import MerchantTopPanel from "../components/MerchantTopPanel"
import NavBar from "../components/navBar"
import "../styles/merchantpage.css"

const MerchantPage = () => {
  return (
    <div>
      <NavBar page={"account"} type="primary" />
      <MerchantTopPanel />
      <MerchantBottomPanel />
      <Footer />
    </div>
  )
}

export default MerchantPage
