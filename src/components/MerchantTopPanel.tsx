import React from "react"
import "../styles/merchantpage.scss"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
const MerchantTopPanel = () => {
  const [expanded, setExpanded] = React.useState(true)

  const [isMobile, setIsMobile] = React.useState(false)

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 910) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  console.log(isMobile)
  // create an event listener
  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const expand = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="topPanelContainer">
      <div className="topPanelRight">
        <img src={require("../assets/COURIERIMAGE.png")} alt="delivery man" />
        <div className="topPanelCard">
          <div className="card-top-first">
            <h2>Restaurants</h2>
            <div>
              <img src={require("../assets/card1.png")} alt="card" />
              <img src={require("../assets/card2.png")} alt="card" />
              <img src={require("../assets/card3.png")} alt="card" />
              <img src={require("../assets/card4.png")} alt="card" />
              <img src={require("../assets/card4.png")} alt="card" />
              <img src={require("../assets/card4.png")} alt="card" />
              <img src={require("../assets/card4.png")} alt="card" />
            </div>
          </div>
          <div className="card-top-second">
            <h2>Groceries products</h2>
            <div>
              <img src={require("../assets/groc1.png")} alt="card" />
              <img src={require("../assets/groc2.png")} alt="card" />
              <img src={require("../assets/groc3.png")} alt="card" />
              <img src={require("../assets/groc4.png")} alt="card" />
              <img src={require("../assets/groc5.png")} alt="card" />
              <img src={require("../assets/groc6.png")} alt="card" />
              <img src={require("../assets/groc7.png")} alt="card" />
            </div>
          </div>
        </div>
        <div className="card-bottom flex-even">
          <div className="card-bottom-single-card">
            <img src={require("../assets/cardbelow1.png")} alt="card" />
            <h4>Dry Shrimp</h4>
            <h5>1kg</h5>
            <div className="price-rating flex-center">
              <div className="flex-center">
                <img src={require("../assets/star.png")} alt="rating" />
                <h6>4.5</h6>
              </div>
              <div>
                <h5>$8.9</h5>
              </div>
            </div>
          </div>
          <div className="card-bottom-single-card">
            <img src={require("../assets/cardbelow2.png")} alt="card" />
            <h4>Dry Shrimp</h4>
            <h5>1kg</h5>
            <div className="price-rating flex-center">
              <div className="flex-center">
                <img src={require("../assets/star.png")} alt="rating" />
                <h6>4.5</h6>
              </div>
              <h5>$8.9</h5>
            </div>
          </div>
          <div className="card-bottom-single-card">
            <img src={require("../assets/cardbelow3.png")} alt="card" />
            <h4>Dry Shrimp</h4>
            <h5>1kg</h5>
            <div className="price-rating flex-center">
              <div className="flex-center">
                <img src={require("../assets/star.png")} alt="rating" />
                <h6>4.5</h6>
              </div>
              <h5>$8.9</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="topPanelLeft">
        <h1>
          CityXplorer makes managing your stores easy to reach your target
          customers...
        </h1>
        <h2>Relax and enjoy more sales.</h2>
        <h3>What you can expect:</h3>

        <ul>
          <li>Increased sales with online ordering and delivery ,</li>
          <li>
            Fast onboarding and simple administration so that you can focus on
            selling groceries
          </li>
          {!expanded && (
            <>
              <li>
                Online marketing and social media promotion to attract new
                customers and enhance your online visibility.
              </li>
              <li>
                Responsive delivery drivers committed to excellent customer
                service.
              </li>
              <li>
                Lasting customers experience with exceptional delivery and pickp
                services.
              </li>
              <li>
                Responsive delivery drivers committed to excellent customer
                service.
              </li>
              <li>
                Lastly, enjoy seamless product management app from CityXplorer-
                Inventory management software. Simple onboarding and
                registration and boom!!! Start managing all your products on one
                single platform,
              </li>
            </>
          )}
          {!isMobile && (
            <>
              <li>
                Online marketing and social media promotion to attract new
                customers and enhance your online visibility.
              </li>
              <li>
                Responsive delivery drivers committed to excellent customer
                service.
              </li>
              <li>
                Lasting customers experience with exceptional delivery and pickp
                services.
              </li>
              <li>
                Responsive delivery drivers committed to excellent customer
                service.
              </li>
              <li>
                Lastly, enjoy seamless product management app from CityXplorer-
                Inventory management software. Simple onboarding and
                registration and boom!!! Start managing all your products on one
                single platform,
              </li>
            </>
          )}
        </ul>
        <button onClick={expand}>
          {expanded ? "Read More" : "Show Less"}{" "}
          {expanded ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
    </div>
  )
}

export default MerchantTopPanel
