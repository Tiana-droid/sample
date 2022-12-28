import "../styles/dualShoppingRestaurant.css"
import google from "../assets/Googleplay.png"
import apple from "../assets/App.png"
const downloadSection = () => {
  return (
    <div className="downloadSection-container">
      <h1>Download our app on:</h1>
      <div className="downloadSection-base">
        <img src={google} alt="google-button" />
        <img src={apple} alt="google-button" />
      </div>
    </div>
  )
}

export default downloadSection
