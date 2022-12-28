import React from "react"
import "../styles/merchantpage.css"
import CustomTextInput from "./CustomTextInput"
import Checkbox from "@mui/material/Checkbox"
const MerchantBottomPanel = () => {
  const [active, setActive] = React.useState(false)
  const [name, setName] = React.useState("")
  const [checked, setChecked] = React.useState(false)
  function handleChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setName(event.target.value)
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
        <h2>Grt Started Today!</h2>
        <h3>Take advantage of our inventory management software:</h3>
        <ul>
          <li>
            Powerful and easy to use state-of-art inventory management software
          </li>
          <li>Free in-store product photography</li>
          <li>Free online store set up on our mobile app</li>
          <li>Free order system integration</li>
          <li>Free online marketing promotion</li>
          <li>
            Responsive delivery drivers committed to excellent customer service.
          </li>
        </ul>
        <h5>
          Take charge of your store, manage your products like a pro and reach
          more customers online. What are your waiting for? Simply fill out the
          form and become a member of our dedicated business.
        </h5>
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
                width="282"
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
                placeholder="Title"
                width="282"
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
                width="282"
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
                width="282"
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
              width="595"
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
              width="595"
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
                width="282"
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
                width="282"
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
