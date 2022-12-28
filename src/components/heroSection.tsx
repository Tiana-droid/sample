import React from "react"
import "../styles/heroSection.css"
import CustomTextInput from "./CustomTextInput"
import axios from "axios"
import toast from "react-hot-toast"

const HeroSection = () => {
  const [inputValue, setInputValue] = React.useState("")
  const [inputValue2, setInputValue2] = React.useState("")

  function handleChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setInputValue(event.target.value)
  }
  function handleChange2(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setInputValue2(event.target.value)
  }

  const handleSubmit = () => {
    const data = {
      name: inputValue,
      email: inputValue2,
    }
    if (inputValue === "" || inputValue2 === "") {
      toast.error("Entered all required fields", {
        position: "top-right",
        style: {
          width: "600",
          height: "100px",
          backgroundColor: "#fff",
          color: "#61181E",
          fontSize: 18,
          fontWeight: "bold",
        },
      })
    }
    axios
      .post(
        "https://city-xplorer-api.herokuapp.com/api/v1/waitlist/join-waitlist",
        {
          name: inputValue,
          email: inputValue2,
        }
      )
      .then((response) => {
        if (
          response.data.message ===
          "Congratulations, you have been added to our waitlist"
        ) {
          toast.success(response.data.message, {
            position: "top-right",
            style: {
              width: "320px",
              height: "100px",
              backgroundColor: "#fff",
              color: "#61181E",
              fontSize: 18,
              fontWeight: "bold",
            },
            icon: "👏",
            duration: 3000,
            iconTheme: {
              primary: "#000",
              secondary: "#61181E",
            },
          })
        }
      })
      .catch((error) => {
        toast.error("You are already on the waitlist", {
          position: "top-right",
          style: {
            width: "600",
            height: "100px",
            backgroundColor: "#fff",
            color: "#61181E",
            fontSize: 18,
            fontWeight: "bold",
          },
        })
      })
  }
  console.log({ inputValue, inputValue2 })
  return (
    <div className="heroSectionContainer">
      <div>
        <h2>COMING SOON!!!</h2>
        <h1>Be the first to order your African food when we launch...</h1>
        <p>Join our wait-list and enjoy a free delivery on your first order.</p>
        <div>
          <CustomTextInput
            placeholder="City"
            width="400"
            height="68"
            borderColor="#E9E9E9"
            inputValue={inputValue}
            handleChange={handleChange}
          />
          <div style={{ marginTop: "24px" }}>
            <CustomTextInput
              placeholder="Email Address"
              width="400"
              height="68"
              borderColor="#E9E9E9"
              inputValue={inputValue2}
              handleChange={handleChange2}
            />
            <button onClick={handleSubmit}>Join Waitlist</button>
          </div>
        </div>
      </div>
      <div>
        <img src={require("../assets/hero image.png")} alt="Food" />
        <div className="chatbot-container">
          <img src={require("../assets/Chatbot.png")} alt="chat" />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
