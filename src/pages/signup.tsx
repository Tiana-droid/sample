import React from "react";
import NavBar from "../components/navBar";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const SignUp = () => {
  const location = useLocation();
  // console.log(location);
  const [type, setType] = useState(location.state);
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
      {type === "merchant" ? (
        <div>Merchant Sign Up</div>
      ) : (
        <div>Buyer Sign Up</div>
      )}
    </div>
  );
};

export default SignUp;
