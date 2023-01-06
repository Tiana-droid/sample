import React from "react"
import "../styles/merchantpage.scss"
import CustomTextInput from "./CustomTextInput"
import Checkbox from "@mui/material/Checkbox"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { Renderable, Toast, toast, ValueFunction } from "react-hot-toast"
import axios from "axios"
const MerchantBottomPanel = () => {
  const [active, setActive] = React.useState(false)
  const [name, setName] = React.useState("")
  const [checked, setChecked] = React.useState(false)
  const [fullName, setFullName] = React.useState("")
  const [title, setTitle] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [storeAddress, setStoreAddress] = React.useState("")
  const [businessEmail, setBusinessEmail] = React.useState("")
  const [businessPhone, setBusinessPhone] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  function handleFullName(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setFullName(event.target.value)
  }

  function handleTitle(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setTitle(event.target.value)
  }
  function handleEmail(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setEmail(event.target.value)
  }
  function handlePhone(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setPhone(event.target.value)
  }

  function handleStoreAddress(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setStoreAddress(event.target.value)
  }
  function handleBusinessEmail(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setBusinessEmail(event.target.value)
  }

  function handleBusinessPhone(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setBusinessPhone(event.target.value)
  }

  function handleChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setName(event.target.value)
  }
  const [expanded2, setExpanded2] = React.useState(true)
  const [isMobile, setIsMobile] = React.useState(false)

  const handleSubmit = () => {
    setLoading(true) //
    const data = {
      fullName,
      title,
      email,
      phone,
      storeAddress,
      businessEmail,
      businessPhone,
    }
    console.log(data)
    if (
      fullName === "" ||
      title === "" ||
      email === "" ||
      phone === "" ||
      storeAddress === "" ||
      businessPhone === "" ||
      businessEmail === ""
    ) {
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
      axios
        .post(
          "https://city-xplorer-api.herokuapp.com/api/v1/merchant/merchant-intent",
          data
        )
        .then(
          (response: {
            data: { message: Renderable | ValueFunction<Renderable, Toast> }
          }) => {
            if (response.data.message === "Successful") {
              toast.success(response.data.message, {
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
          }
        )
        .catch((error) => {
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
        })
    }
    setLoading(false)
    setFullName("")
    setTitle("")
    setEmail("")
    setPhone("")
    setStoreAddress("")
    setBusinessEmail("")
    setBusinessPhone("")
  }

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 910) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  React.useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const expand = () => {
    setExpanded2(!expanded2)
  }

  const label = { inputProps: { "aria-label": "Checkbox demo" } }
  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) }
  }) => {
    setChecked(event.target.checked)
  }
  return (
    <div className="topPanelContainer">
      <div className="bottompanel-left">
        <h2>Get Started Today!</h2>
        <h3>Take advantage of our inventory management software:</h3>
        <ul>
          <li>
            Powerful and easy to use state-of-art inventory management software
          </li>
          <li>Free in-store product photography</li>

          {!expanded2 && (
            <>
              <li>Free online store set up on our mobile app</li>
              <li>Free order system integration</li>
              <li>Free online marketing promotion</li>
              <li>
                Responsive delivery drivers committed to excellent customer
                service.
              </li>
            </>
          )}

          {!isMobile && (
            <>
              <li>Free online store set up on our mobile app</li>
              <li>Free order system integration</li>
              <li>Free online marketing promotion</li>
              <li>
                Responsive delivery drivers committed to excellent customer
                service.
              </li>
            </>
          )}
        </ul>
        <h5>
          Take charge of your store, manage your products like a pro and reach
          more customers online. What are your waiting for? Simply fill out the
          form and become a member of our dedicated business.
        </h5>
        <button onClick={expand}>
          {expanded2 ? "Read More" : "Show Less"}{" "}
          {expanded2 ? <FiChevronUp /> : <FiChevronDown />}
        </button>
      </div>
      <div className="bottompanel-right">
        <h3>Sign up to create an online store</h3>
        <h4>
          Bring your store closer to <br />
          your customers online.
        </h4>
        <div className="form-container">
          <h6>Personal Information</h6>
          <div className="form-top">
            <div style={{ marginBottom: "20px" }}>
              <CustomTextInput
                placeholder="Name"
                width="330"
                height="52"
                borderColor={
                  active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
                }
                inputValue={fullName}
                handleChange={handleFullName}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <CustomTextInput
                placeholder="Title"
                width="330"
                height="52"
                borderColor={
                  active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
                }
                inputValue={title}
                handleChange={handleTitle}
              />
            </div>
          </div>
          <div className="form-top">
            <div>
              <CustomTextInput
                placeholder="Phone number"
                width="330"
                height="52"
                borderColor={
                  active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
                }
                inputValue={phone}
                handleChange={handlePhone}
              />
            </div>
            <div>
              <CustomTextInput
                placeholder="Email address"
                width="330"
                height="52"
                borderColor={
                  active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
                }
                inputValue={email}
                handleChange={handleEmail}
              />
            </div>
          </div>
          <h6>Business information</h6>

          <div style={{ marginTop: "24px", marginBottom: "24px" }}>
            <CustomTextInput
              placeholder="Business Email address"
              width={isMobile ? "330" : "680"}
              height="52"
              borderColor={
                active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
              }
              inputValue={businessEmail}
              handleChange={handleBusinessEmail}
            />
          </div>

          <div style={{ marginTop: "24px", marginBottom: "24px" }}>
            <CustomTextInput
              placeholder="Enter store address"
              width={isMobile ? "330" : "680"}
              height="52"
              borderColor={
                active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
              }
              inputValue={storeAddress}
              handleChange={handleStoreAddress}
            />
          </div>

          <div className="form-top">
            <div>
              <CustomTextInput
                placeholder="Phone number"
                width={isMobile ? "330" : "680"}
                height="52"
                borderColor={
                  active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
                }
                inputValue={businessPhone}
                handleChange={handleBusinessPhone}
              />
            </div>
          </div>
          <div className="flex-checkbox">
            <Checkbox {...label} />
            <p>I agree to the terms of service & privacy policy.</p>
          </div>
          <div className="buttonContainer">
            <button onClick={handleSubmit}>
              {loading ? (
                <div className="lds-roller">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantBottomPanel
