import React from "react";
import NavBar from "../components/navBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { RegisterApi } from "../apis";
import { GoMailRead } from "react-icons/go";
import { BsCheck2Square } from "react-icons/bs";

const SignUp = () => {
  const location = useLocation();
  // console.log(location);
  const [type, setType] = useState(location.state);
  const [passwordType, setPasswordType] = useState("password");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [verifyBtnDisable, setVerifyBtnDisable] = useState(false);

  const [verifyEmailModal, setVerifyEmailModal] = useState(false);

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setBtnDisable(true);
    setVerifyEmailModal(true);
    focusInputsAuto(0);
    let nameErr = document.getElementsByClassName(
      "nameError"
    )[0] as HTMLFormElement;
    let nameInputErr = document.getElementById("fullName") as HTMLFormElement;
    let emailErr = document.getElementsByClassName(
      "emailError"
    )[0] as HTMLFormElement;
    let emailInputErr = document.getElementById("email") as HTMLFormElement;
    let passwordErr = document.getElementsByClassName(
      "passwordError"
    )[0] as HTMLFormElement;
    let passwordInputErr = document.getElementById(
      "password"
    ) as HTMLFormElement;
    let checkboxErr = document.getElementsByClassName(
      "checkboxError"
    )[0] as HTMLFormElement;
    let checkboxInputErr = document.getElementById(
      "checkbox"
    ) as HTMLFormElement;

    let NameError = false;
    let PasswordError = false;
    let EmailError = false;
    let CheckError = false;

    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    if (name === "" || name.length < 6) {
      nameErr.style.display = "block";
      nameInputErr.style.borderColor = "red";
      NameError = false;
    } else {
      nameErr.style.display = "none";
      nameInputErr.style.borderColor = "#aaa";
      NameError = true;
    }

    if (email === "" || !email.includes(".") || !email.includes("@")) {
      emailErr.style.display = "block";
      emailInputErr.style.borderColor = "red";
      EmailError = false;
    } else {
      emailErr.style.display = "none";
      emailInputErr.style.borderColor = "#aaa";
      EmailError = true;
    }

    if (password === "" || password.length < 8 || !pattern.test(password)) {
      passwordErr.style.display = "block";
      passwordInputErr.style.borderColor = "red";
      PasswordError = false;
    } else {
      passwordErr.style.display = "none";
      passwordInputErr.style.borderColor = "#aaa";
      PasswordError = true;
    }

    if (!checkboxInputErr.checked) {
      checkboxErr.style.display = "block";
      CheckError = false;
    } else {
      checkboxErr.style.display = "none";
      CheckError = true;
    }

    if (EmailError && PasswordError && NameError && CheckError)
      return submitRegister();

    setBtnDisable(false);
  };

  const submitRegister = async () => {
    let result = await RegisterApi(name, email, password);
    console.log(result);
    setBtnDisable(false);
  };

  const changePasswordType = () => {
    if (passwordType === "password") return setPasswordType("text");
    setPasswordType("password");
  };

  const focusInputsAuto = (index: number) => {
    const verifyInputs: any = document.querySelectorAll(
      ".verifyInput"
    ) as NodeListOf<HTMLInputElement>;
    try {
      if (index > 0) {
        if (isNaN(verifyInputs[index - 1].value))
          verifyInputs[index - 1].value = "";
        if (verifyInputs[index - 1].value) verifyInputs[index].focus();
      } else {
        verifyInputs[index].focus();
      }
    } catch (error) {
      //console.log(error);
      for (let input of verifyInputs) {
        input.blur();
      }
    }
  };

  useEffect(() => {
    if (location.state === null) {
      setType("buyer");
    } else {
      setType(location.state);
    } // console.log(type);
  }, [location.state]);

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
            <label htmlFor="fullName">Full name</label>
            <input
              className="formInput"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your full name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <span className="inputError nameError">
              Full name is required and must be six characters and more
            </span>
            <label htmlFor="email">Email</label>
            <input
              className="formInput"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email-address"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <span className="inputError emailError">
              Please enter your email in this format 'example@gmail.com'
            </span>
            <label htmlFor="password">Password</label>
            <div>
              <input
                className="formInput"
                type={passwordType === "password" ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
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
            <span className="inputError passwordError">
              Password must have at least 8 character that include at least 1
              lowercase, 1 uppercase, 1 digit and 1 special character
            </span>

            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox" id="checkboxLabel">
              Creating an account means you're okay with our{" "}
              <span>Terms and Services, Privacy Policy</span> and our default{" "}
              <span>Notification Settings</span>
            </label>
            <br />
            <br />
            <span className="inputError checkboxError">
              You must agree to our terms in order to continue
            </span>
            <input
              className="formInput"
              type="submit"
              name="submit"
              id="submit"
              value="Sign Up"
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
              <b>{email}</b>
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
              onClick={() => setVerifyBtnDisable(true)}
            >
              Verify your mail
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
  );
};

export default SignUp;
