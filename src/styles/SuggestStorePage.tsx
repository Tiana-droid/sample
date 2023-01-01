import React from "react"
import NavBar from "../components/navBar"

const SuggestStorePage = () => {
  return (
    <div>
      <NavBar page={"account"} type="primary" />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "140px",
        }}
      >
        <img
          style={{ width: "186px", height: "186px" }}
          src={require("../assets/plane.png")}
          alt="success plane"
        />
        <div style={{ width: "286px", height: "48px", textAlign: "center" }}>
          <p>
            Thank you for suggesting a store to us. We will make sure we bring a
            store close to you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SuggestStorePage
