import axios from "axios";

const apiUrl = process.env.REACT_APP_URL;

export const RegisterApi = async (
  fullNameValue: String,
  emailValue: String,
  passwordValue: String
) => {
  let data = JSON.stringify({
    fullName: fullNameValue,
    email: emailValue,
    password: passwordValue,
  });

  // console.log(data)
  try {
    const returnData = await axios({
      method: "post",
      url: `${apiUrl}auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log("api error", error);
        return error;
      });

    //console.log(returnData);
    return returnData;
  } catch (error) {
    console.log("code error", error);
    return error;
  }
};

export const EmailVerify = async (
  fullNameValue: String,
  emailValue: String,
  passwordValue: String,
  verificationCodeValue: String,
  tokenValue: String
) => {
  let data = JSON.stringify({
    fullName: fullNameValue,
    email: emailValue,
    password: passwordValue,
    verificationCode: verificationCodeValue,
  });
  try {
    const returnData = await axios({
      method: "patch",
      url: `${apiUrl}auth/verifyEmail`,
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer: ${tokenValue}`,
      },
      data: data,
    }).then((data) => {
      return data;
    });

    //console.log(returnData);
    return returnData;
  } catch (error) {
    return error;
  }
};

export const loginApi = async (
  fullNameValue: String,
  emailValue: String,
  passwordValue: String,
  verificationCodeValue: String,
  tokenValue: String
) => {
  let data = JSON.stringify({
    fullName: fullNameValue,
    email: emailValue,
    password: passwordValue,
    verificationCode: verificationCodeValue,
  });
  try {
    const returnData = await axios({
      method: "post",
      url: `${apiUrl}auth/login`,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer: ${tokenValue}`,
      },
      data: data,
    }).then((data) => {
      return data;
    });

    //console.log(returnData);
    return returnData;
  } catch (error) {
    return error;
  }
};