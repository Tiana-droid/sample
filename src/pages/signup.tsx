import React from "react";
import NavBar from "../components/navBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignUp = () => {
  const location = useLocation();
  // console.log(location);
  const [type, setType] = useState(location.state);
  const [passwordType, setPasswordType] = useState("password");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
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

    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    if (name === "") {
      nameErr.style.display = "block";
      nameInputErr.style.borderColor = "red";
    } else {
      nameErr.style.display = "none";
      nameInputErr.style.borderColor = "#aaa";
    }

    if (email === "" || !email.includes(".") || !email.includes("@")) {
      emailErr.style.display = "block";
      emailInputErr.style.borderColor = "red";
    } else {
      emailErr.style.display = "none";
      emailInputErr.style.borderColor = "#aaa";
    }

    if (password === "" || password.length < 8 || !pattern.test(password)) {
      passwordErr.style.display = "block";
      passwordInputErr.style.borderColor = "red";
    } else {
      passwordErr.style.display = "none";
      passwordInputErr.style.borderColor = "#aaa";
    }

    if (!checkboxInputErr.checked) {
      checkboxErr.style.display = "block";
    } else {
      checkboxErr.style.display = "none";
    }
  };

  const changePasswordType = () => {
    if (passwordType === "password") return setPasswordType("text");
    setPasswordType("password");
  };

  useEffect(() => {
    if (location.state === null) {
      setType("buyer");
    } else {
      setType(location.state);
    } // console.log(type);
  }, [location.state]);

  return (
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
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your full name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
          <span className="inputError nameError">Full name is required</span>
          <label htmlFor="email">Email</label>
          <input
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
          <input type="submit" name="submit" id="submit" value="Sign Up" />
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
  );
};

export default SignUp;
