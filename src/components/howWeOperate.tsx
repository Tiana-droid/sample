import "../styles/howWeOperate.scss"

import img2 from "../assets/slide2.png"
import img17 from "../assets/slide17.png"
import img16 from "../assets/slide16.png"
import img15 from "../assets/slide15.png"
import img14 from "../assets/slide14.png"
import img13 from "../assets/slide13.png"
import img12 from "../assets/slide12.png"
import img11 from "../assets/slide11.png"
import img10 from "../assets/slide10.png"
import img9 from "../assets/slide9.png"
import img8 from "../assets/slide8.png"
import img7 from "../assets/slide7.png"
import img6 from "../assets/slide6.png"
import img5 from "../assets/slide5.png"
import img4 from "../assets/slide4.png"
import img3 from "../assets/slide3.png"
import ImageSlider from "./slider"

const products = [
  { _id: 1, image: img2 },
  { _id: 2, image: img3 },
  { _id: 3, image: img4 },
  { _id: 4, image: img5 },
  { _id: 5, image: img6 },
  { _id: 6, image: img7 },
  { _id: 7, image: img8 },
  { _id: 8, image: img9 },
  { _id: 9, image: img10 },
  { _id: 10, image: img11 },
  { _id: 11, image: img12 },
  { _id: 12, image: img13 },
  { _id: 13, image: img14 },
  { _id: 14, image: img15 },
  { _id: 15, image: img16 },
  { _id: 16, image: img17 },
]

const steps = [
  {
    step: "1",
    title: "Download  the application",
    action: "Get our moble application on playstore or applestore.",
  },
  {
    step: "2",
    title: "Start shopping",
    action: "Shop from our groceries and resturants stores.",
  },
  {
    step: "3",
    title: "Get a doorstep delivery",
    action: "Enjoy our fast and reliable delivery services.",
  },
]
const HowWeOperate = () => {
  return (
    <div className="howWeOperateContainer">
      <div className="topLayer flex-around">
        <h1>Ibex MiniMart</h1>
        <img src={require("../assets/nico.png")} alt="ibex" />
        <h4>&lots more...</h4>
      </div>
      <div className="howWeOperateCardsContainer">
        <div className="maylike-products-wrapper">
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <div key={item._id}>
                  <div className="product-card">
                    <img
                      src={item.image}
                      className="product-image"
                      alt="product"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="howWeOperateBottomLayer" id="howWeOperate">
          <div>
            <h1>
              How we operate with just <br /> three seamless steps
            </h1>
            <p>
              For quick and easy access to our mobile <br /> application, follow
              this three steps:
            </p>
          </div>
          <div className="howWeOperateBottomLayerflex">
            <div className="stages-description">
              {steps.map((step, index) => (
                <div key={step.step} className="flex">
                  <div className="stage">
                    <div className="stage-container">
                      <h6 style={{ position: "relative" }}>{step.step}</h6>
                    </div>
                    {index !== 2 && (
                      <div
                        className="border__stage__description"
                        style={{
                          borderLeft: "2px dashed #000",
                          height: "13.5%",
                          position: "absolute",
                          left: "8.5%",
                        }}
                      />
                    )}
                    {index !== 2 && (
                      <div
                        className="mobile__border__stage__description"
                        style={{
                          borderLeft: "2px dashed #000",
                          height: "68px",
                          position: "absolute",
                          left: "11vw",
                        }}
                      />
                    )}
                  </div>
                  <div className="details">
                    <h1>{step.title}</h1>
                    <h3>{step.action}</h3>
                  </div>
                </div>
              ))}
            </div>

            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeOperate

// .dotted-line::before {
//   content: "";
//   border-top: 1px dotted black;
//   width: 100%;
//   position: absolute;
//   top: 50%;
//   left: 0;
// }
