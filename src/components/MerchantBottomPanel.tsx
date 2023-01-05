import React from "react"
import "../styles/merchantpage.scss"
import CustomTextInput from "./CustomTextInput"
import Checkbox from "@mui/material/Checkbox"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
const MerchantBottomPanel = () => {
  const [active, setActive] = React.useState(false)
  const [name, setName] = React.useState("")
  const [checked, setChecked] = React.useState(false)
  function handleChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setName(event.target.value)
  }
  const [expanded2, setExpanded2] = React.useState(true)
  const [isMobile, setIsMobile] = React.useState(false)

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
            <div>
              <CustomTextInput
                placeholder="Name"
                width="330"
                height="52"
                borderColor={
                  active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
                }
                inputValue={name}
                handleChange={handleChange}
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
                inputValue={name}
                handleChange={handleChange}
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
                inputValue={name}
                handleChange={handleChange}
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
                inputValue={name}
                handleChange={handleChange}
              />
            </div>
          </div>
          <h6>Business information</h6>

          <div style={{ marginTop: "24px", marginBottom: "24px" }}>
            <CustomTextInput
              placeholder="Email address"
              width="330"
              height="52"
              borderColor={
                active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
              }
              inputValue={name}
              handleChange={handleChange}
            />
          </div>

          <div style={{ marginTop: "24px", marginBottom: "24px" }}>
            <CustomTextInput
              placeholder="Enter store address"
              width="330"
              height="52"
              borderColor={
                active ? "rgba(251, 223, 195, 1)" : "rgba(233, 233, 233, 1)"
              }
              inputValue={name}
              handleChange={handleChange}
            />
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
                inputValue={name}
                handleChange={handleChange}
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
                inputValue={name}
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="flex-checkbox">
            <Checkbox {...label} />
            <p>I agree to the terms of service & privacy policy.</p>
          </div>
          <div className="buttonContainer">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantBottomPanel
