import React, { useState, useEffect } from "react"
import "../styles/howWeOperate.scss"
import ReactCSSTransitionGroup from "react-transition-group"
import slide1 from "../assets/stepsSlide1.png"
import slide2 from "../assets/slide3.png"
import slide3 from "../assets/slider3.png"
import { CSSTransition } from "react-transition-group"

function ImageSlider() {
  const [index, setIndex] = useState(0)
  const images = [slide1, slide2, slide3]

  const interval = 5000 // 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index) => (index >= images.length - 1 ? 0 : index + 1))
    }, interval)
    return () => clearInterval(timer)
  }, [index, interval, images.length])

  return (
    <div className="slideshow">
      <CSSTransition
        key={index}
        in={index === index}
        timeout={5000}
        classNames="slide"
      >
        <img src={images[index]} alt="slider-img" />
      </CSSTransition>
    </div>
  )
}

export default ImageSlider
