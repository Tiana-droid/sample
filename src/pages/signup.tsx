import React, { ChangeEvent } from "react"
import NavBar from "../components/navBar"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/signup.css"
import { Link } from "react-router-dom"
import { FiEye, FiEyeOff } from "react-icons/fi"
import { RegisterApi, EmailVerify } from "../apis"
import { GoMailRead } from "react-icons/go"
// import { BsCheck2Square } from "react-icons/bs";

type FormErrors = {
  fullName?: string
  email?: string
  password?: string
  checkbox?: string
}

type SignUpFormT = {
  fullName: string
  email: string
  password: string
  checkbox: string
}

const SignUp = () => {
  const location = useLocation()
  // console.log(location);
  const [type, setType] = useState(location.state)
  const [passwordType, setPasswordType] = useState<string>("")
  const [form, setForm] = useState<SignUpFormT>({
    fullName: "",
    email: "",
    password: "",
    checkbox: "",
  })
  const [btnDisable, setBtnDisable] = useState<boolean>(false)
  const [verifyBtnDisable, setVerifyBtnDisable] = useState<boolean>(false)
  const [verifyEmailModal, setVerifyEmailModal] = useState<boolean>(false)
  const [token, setToken] = useState<string>("")

  const [formErrors, setFormErrors] = useState<FormErrors>({})

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const toggleCheckbox = () =>
    setForm((prevState) => ({
      ...prevState,
      checkbox: prevState.checkbox === "true" ? "false" : "true",
    }))

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const formErrors: FormErrors = {}
    const { fullName, email, password, checkbox } = form

    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    )

    if (fullName === "" || fullName.length < 6) {
      formErrors.fullName =
        "Full name is required and must be six characters and more"
    }
    if (email === "" || !email.includes(".") || !email.includes("@")) {
      formErrors.email =
        "Please enter your email in this format 'example@gmail.com'"
    }
    if (password === "" || password.length < 8 || !pattern.test(password)) {
      formErrors.password =
        "Password must have at least 8 character that include at least 1 lowercase, 1 uppercase, 1 digit and 1 special character"
    }

    if (!checkbox) {
      formErrors.checkbox = "You must agree to our terms in order to continue"
    }
    setFormErrors(formErrors)
    if (!Object.keys(formErrors).length) {
      submitRegister()
    }
  }

  const submitRegister = async () => {
    const { fullName, email, password } = form
    let result = await RegisterApi(fullName, email, password)
    console.log(result)
    setBtnDisable(false)

    if (result.status === 200) {
      setToken(result.data.token)
      localStorage.setItem("cityXplorer_user", JSON.stringify(result.data))
      setVerifyEmailModal(true)
      focusInputsAuto(0)
    } else {
      if (result.response.data === undefined) {
        console.log("An error occurred, please try again!")
      } else {
        console.log("error")
      }
    }
  }

  const verifyEmail = async () => {
    setVerifyBtnDisable(true)
    let verifyCode = ""

    const verifyInputs: any = document.querySelectorAll(
      ".verifyInput"
    ) as NodeListOf<HTMLInputElement>
    for (let i = 0; i < verifyInputs.length; i++) {
      if (verifyInputs[i].value === "") {
        verifyInputs[i].style.borderColor = "red"
        setVerifyBtnDisable(false)
        return
      } else {
        verifyCode += String(verifyInputs[i].value)
      }
    }
    console.log(verifyCode)
    const { fullName, email, password } = form
    let result: any = await EmailVerify(
      fullName,
      email,
      password,
      verifyCode,
      token
    )
    console.log(result)
    setVerifyBtnDisable(false)
    if (result.status === 200) {
      console.log("verified")
    } else {
      console.log("error verify")
    }
  }

  const changePasswordType = () => {
    if (passwordType === "password") return setPasswordType("text")
    setPasswordType("password")
  }

  const focusInputsAuto = (index: number) => {
    const verifyInputs: any = document.querySelectorAll(
      ".verifyInput"
    ) as NodeListOf<HTMLInputElement>
    try {
      if (index > 0) {
        if (isNaN(verifyInputs[index - 1].value))
          verifyInputs[index - 1].value = ""
        if (verifyInputs[index - 1].value) verifyInputs[index].focus()
      } else {
        verifyInputs[index].focus()
      }
    } catch (error) {
      //console.log(error);
      for (let input of verifyInputs) {
        input.blur()
      }
    }
  }

  useEffect(() => {
    if (location.state === null) {
      setType("buyer")
    } else {
      setType(location.state)
    } // console.log(type);
  }, [location.state])

  return (
    <>
      <div>
        <NavBar page={"account"} />
        <div className="signUpContainer">
          <h2>Create an account</h2>
          <br />
          <p>
            We offer African restaurant and grocery services which
            <br /> includes pre-cooked, cooked and raw food.
          </p>
          <br />
          <Link to="/register" state={"buyer"}>
            <button
              className={type === "buyer" ? "btnActive" : "btnNotActive"}
              disabled={type === "buyer" ? true : false}
            >
              Sign Up As a Buyer
            </button>
          </Link>
          <br />
          <Link to="/register" state={"merchant"}>
            <button
              className={type === "merchant" ? "btnActive" : "btnNotActive"}
              disabled={type === "merchant" ? true : false}
            >
              Sign Up As a Merchant
            </button>
          </Link>
          <form onSubmit={submitForm}>
            <div className="input-group">
              <label htmlFor="fullName">Full name</label>
              <input
                className="formInput"
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleInputChange}
              />
              {formErrors.fullName && (
                <span className="inputError">{formErrors.fullName}</span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                className="formInput"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email-address"
                value={form.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <span className="inputError emailError">
                  {formErrors.email}
                </span>
              )}
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div>
                <input
                  className="formInput"
                  type={passwordType === "password" ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleInputChange}
                />
                {passwordType === "password" ? (
                  <FiEyeOff
                    id="eyePassword1"
                    className="eyePassword"
                    onClick={changePasswordType}
                  />
                ) : (
                  <FiEye
                    id="eyePassword2"
                    className="eyePassword"
                    onClick={changePasswordType}
                  />
                )}
              </div>
              {formErrors.password && (
                <span className="inputError passwordError">
                  {formErrors.password}
                </span>
              )}
            </div>
            <div className="input-group">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                value={form.checkbox}
                onChange={toggleCheckbox}
              />
              <label htmlFor="checkbox" id="checkboxLabel">
                Creating an account means you're okay with our{" "}
                <span>Terms and Services, Privacy Policy</span> and our default{" "}
                <span>Notification Settings</span>
              </label>
            </div>
            <br />
            <br />
            {formErrors.checkbox && (
              <span className="inputError">{formErrors.checkbox}</span>
            )}
            <input
              className="formInput"
              type="submit"
              name="submit"
              id="submit"
              value={btnDisable ? "Loading" : "Sign Up"}
              style={
                btnDisable
                  ? {
                      backgroundColor: "var(--button-active)",
                      cursor: "not-allowed",
                    }
                  : { backgroundColor: "var(--primary)", cursor: "pointer" }
              }
              disabled={btnDisable}
            />
            <p>
              <b>
                Already have an account?{" "}
                <Link to="/login">
                  <span>Sign In</span>
                </Link>
              </b>
            </p>
          </form>
        </div>
      </div>

      <div
        className="verifyEmailModalContainer"
        style={
          verifyEmailModal
            ? { opacity: 1, zIndex: 999 }
            : { opacity: 0, zIndex: -999 }
        }
      >
        <div className="verifyEmailModal">
          <GoMailRead size={40} color={"var(--primary)"} />
          <div>
            <p>
              <b>To complete sign up</b>
            </p>
            <h3>Please verify your email</h3>
          </div>
          <div>
            <p>You are almost there! We sent a verification code to</p>
            <p>
              <b>{form.email}</b>
            </p>
          </div>
          <div>
            <p>
              Plesae check your inbox and enter the verification code below to
              verify your email address. This code expires in 10 minutes.
            </p>
          </div>
          <div className="verifyInputContainer">
            <input
              type="text"
              className="verifyInput"
              maxLength={1}
              onChange={() => focusInputsAuto(1)}
            />
            <input
              type="text"
              className="verifyInput"
              maxLength={1}
              onChange={() => focusInputsAuto(2)}
            />
            <input
              type="text"
              className="verifyInput"
              maxLength={1}
              onChange={() => focusInputsAuto(3)}
            />
            <input
              type="text"
              className="verifyInput"
              maxLength={1}
              onChange={() => focusInputsAuto(4)}
            />
            <input
              type="text"
              className="verifyInput"
              maxLength={1}
              onChange={() => focusInputsAuto(5)}
            />
            <input
              type="text"
              className="verifyInput"
              maxLength={1}
              onChange={() => focusInputsAuto(6)}
            />
          </div>
          <div>
            <button
              style={
                verifyBtnDisable
                  ? {
                      backgroundColor: "var(--button-active)",
                      cursor: "not-allowed",
                    }
                  : { backgroundColor: "var(--primary)", cursor: "pointer" }
              }
              disabled={verifyBtnDisable}
              onClick={() => verifyEmail()}
            >
              {verifyBtnDisable ? <>Loading</> : <>Verify your mail</>}
            </button>
          </div>
          <div>
            <p style={{ color: "var(--primary)", cursor: "pointer" }}>
              Resend Code?
            </p>
          </div>
        </div>
        {/* <div className="welcomeModal">
          <BsCheck2Square size={40} color={"var(--primary)"} />
          <h3>Verified!</h3>
          <p>
            You have successfully verified your account, Sign in to continue.
          </p>
          <button>Sign In</button>
        </div> */}
      </div>
    </>
  )
}

export default SignUp
