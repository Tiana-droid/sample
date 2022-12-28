import React from "react"
import Footer from "../components/footer"
import MerchantBottomPanel from "../components/MerchantBottomPanel"
import MerchantTopPanel from "../components/MerchantTopPanel"
import NavBar from "../components/navBar"
import "../styles/merchantpage.css"

const MerchantPage = () => {
  return (
    <>
      <NavBar page={"account"} />
      <MerchantTopPanel />
      <MerchantBottomPanel />
      <Footer />
    </>
  )
}

export default MerchantPage
