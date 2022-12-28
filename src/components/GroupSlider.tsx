import React, { useState } from "react"

import img1 from "../assets/slide10.png"
import img2 from "../assets/slide11.png"
import img3 from "../assets/slide10.png"

const images = [img1, img2, img3]

function GroupSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  setInterval(() => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }, 3000)

  return (
    <div>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Slideshow"
          style={{
            position: "absolute",
            left: index * 100,
            top: 0,
            transition: "left 3s linear",
            visibility: index === currentImageIndex ? "visible" : "hidden",
          }}
        />
      ))}
    </div>
  )
}

export default GroupSlider
