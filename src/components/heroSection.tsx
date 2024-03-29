import React from "react"
import "../styles/heroSection.scss"
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

  const handleSubmit = async () => {
    const data = {
      name: inputValue,
      email: inputValue2,
    }
    if (inputValue === "" || inputValue2 === "") {
      toast.error("Enter all required fields", {
        position: "top-right",
        style: {
          width: "600",
          height: "60px",
          backgroundColor: "#fff",
          color: "#61181E",
          fontSize: 18,
          fontWeight: "bold",
        },
      })
    } else {
      try {
        const res = await axios({
          url: "https://city-xplorer-api.herokuapp.com/api/v1/waitlist/join-waitlist",
          method: "POST",
          data: data,
        })
        if (
          res.data.message ===
          "Congratulations, you have been added to our waitlist"
        ) {
          toast.success(res.data.message, {
            position: "top-right",
            style: {
              width: "320px",
              height: "60px",
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
      } catch (error: any) {
        toast.error(error.message, {
          position: "top-right",
          style: {
            width: "600",
            height: "60px",
            backgroundColor: "#fff",
            color: "#61181E",
            fontSize: 18,
            fontWeight: "bold",
          },
        })
      }
    }
    setInputValue("")
    setInputValue2("")
  }
  return (
    <div className="heroSectionContainer">
      <div className="content">
        <h2>COMING SOON!!!</h2>
        <h1>Be the first to order your African food when we launch...</h1>
        <p>
          Join our wait-list and enjoy a free delivery <br /> on your first
          order.
        </p>
        <div style={{ marginLeft: "20px" }}>
          <CustomTextInput
            placeholder="City"
            width="200"
            height="52"
            borderColor="#E9E9E9"
            inputValue={inputValue}
            handleChange={handleChange}
          />
          <div className="input" style={{ marginTop: "24px" }}>
            <CustomTextInput
              placeholder="Email Address"
              width="200"
              height="52"
              borderColor="#E9E9E9"
              inputValue={inputValue2}
              handleChange={handleChange2}
            />
            <button type="button" onClick={handleSubmit}>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      <div className="down-container" >
        <img src={require("../assets/heroimage.png")} alt="Food" />
        {/* <div className="chatbot-container" onClick={handleClick}>
          <img src={require("../assets/Chatbot.png")} alt="chat" />
        </div> */}
      </div>
    </div>
  )
}

export default HeroSection
