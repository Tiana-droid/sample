import React, { useState, useEffect } from "react"
import "../styles/howWeOperate.css"

import slide1 from "../assets/stepsSlide1.png"
import slide2 from "../assets/stepsSlide2.png"
import slide3 from "../assets/slider3.png"

function ImageSlider() {
  const [index, setIndex] = useState(0)
  const images = [slide1, slide2, slide3]

  const interval = 6000 // 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index) => (index >= images.length - 1 ? 0 : index + 1))
    }, interval)
    return () => clearInterval(timer)
  }, [index, interval, images.length])

  return (
    <div className="carousel">
      <img src={images[index]} alt="slider-img" />
    </div>
  )
}

export default ImageSlider
