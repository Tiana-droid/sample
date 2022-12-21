import React from "react"
import "../styles/heroSection.css"

const HeroSection = () => {
  return (
    <div className="heroSectionContainer">
      <div>
        <h1>COMING SOON!!!</h1>
        <h1>Be the first to order your African food when we launch...</h1>
        <p>Join our wait-list and enjoy a free delivery on your first order.</p>
        <div>
          <input />
          <input />
        </div>
      </div>
      <div>
        <img src={require("../assets/hero image.png")} alt="Food" />
      </div>
    </div>
  )
}

export default HeroSection
