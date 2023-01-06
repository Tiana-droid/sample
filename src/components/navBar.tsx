import React, { useRef, useEffect, useState } from "react"
import "../styles/navBar.css"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { TextField } from "@mui/material"
import axios from "axios"
import toast from "react-hot-toast"
import { GiHamburgerMenu } from "react-icons/gi"
import "../styles/navbar.scss"
import { motion } from "framer-motion"
import { BsPerson } from "react-icons/bs"
import { BsQuestionLg } from "react-icons/bs"
import { RiErrorWarningLine, RiHomeLine } from "react-icons/ri"
import { MdPrivacyTip } from "react-icons/md"

interface Props {
  page:
    | "home"
    | "shop"
    | "account"
    | "category"
    | "about"
    | "subscription"
    | "contact"
    | "merchant"

  type: string
}

const NavBar = (props: Props) => {
  const [showDiv, setshowDiv] = useState("none")
  const [toggle, setToggle] = useState(false)

  const [names, setNames] = React.useState("")
  const [city, setCity] = React.useState("")
  const [emails, setEmails] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
    setToggle(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const shop = useRef<HTMLLIElement | null>(null)
  const account = useRef<HTMLLIElement | null>(null)
  const category = useRef<HTMLLIElement | null>(null)
  const subscription = useRef<HTMLLIElement | null>(null)
  useEffect(() => {
    shop.current?.addEventListener("mouseover", () => {
      setshowDiv("shop")
    })
    shop.current?.addEventListener("mouseout", () => {
      setshowDiv("none")
    })
    account.current?.addEventListener("mouseover", () => {
      setshowDiv("account")
    })
    account.current?.addEventListener("mouseout", () => {
      setshowDiv("none")
    })
    category.current?.addEventListener("mouseover", () => {
      setshowDiv("category")
    })
    category.current?.addEventListener("mouseout", () => {
      setshowDiv("none")
    })
    subscription.current?.addEventListener("mouseover", () => {
      setshowDiv("subscription")
    })
    subscription.current?.addEventListener("mouseout", () => {
      setshowDiv("none")
    })
  }, [])

  const styles = {
    well: {
      boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.2)",
    },
  }

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  }
  const handleSubmit = async () => {
    const data = { name: names, email: emails, city: city }
    if (city === "" || emails === "" || names === "") {
      toast.error("Enter all required fields", {
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
    } else {
      try {
        const res = await axios({
          url: "https://city-xplorer-api.herokuapp.com/api/v1/suggestion/suggest-store",
          method: "POST",
          data: data,
        })
        if (res.data.message === "Suggestion recieved") {
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
      setOpen(false)
      setNames("")
      setCity("")
      setEmails("")
    }
  }

  return (
    <div>
      <div className="navBarContainer">
        <section className="bottomNav" style={styles.well}>
          <div className="bottomNavImg">
            <Link to="/">
              <img src={require("../assets/logo.png")} alt="logo" />
            </Link>
          </div>

          <ul className="links-wrapper">
            <li className={props.page === "home" ? "active" : "li"}>
              <Link to="/">Home</Link>
            </li>

            <li className={props.page === "shop" ? "active" : "li"} ref={shop}>
              <a href={`#howWeOperate`}>How it works</a>
            </li>
            <li
              className={props.page === "account" ? "active" : "li"}
              ref={account}
            >
              <Link to="/merchant">Merchants</Link>
            </li>

            <li
              className={props.page === "category" ? "active" : "li"}
              ref={category}
            >
              <a href="#faqs"> FAQs</a>
            </li>
            <li
              className={props.page === "about" ? "active" : "li"}
              onClick={handleOpen}
              id="sugestAStore"
            >
              Suggest a store
            </li>
          </ul>

          <div className="app__navbar-menu">
            <GiHamburgerMenu onClick={() => setToggle(true)} />

            {toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                <img
                  src={require("../assets/logo.png")}
                  alt="logo"
                  className="top-image"
                />
                <ul>
                  <li className={props.page === "home" ? "active" : "li"}>
                    <Link to="/">
                      <h6>
                        <RiHomeLine />
                      </h6>
                      <h6> Home</h6>
                    </Link>
                  </li>

                  <li className={props.page === "home" ? "active" : "li"}>
                    <a href={`#howWeOperate`} onClick={() => setToggle(false)}>
                      <h6>
                        <RiErrorWarningLine />
                      </h6>
                      <h6> How we work</h6>
                    </a>
                  </li>
                  <li
                    className={props.page === "account" ? "active" : "li"}
                    ref={account}
                  >
                    <Link to="/merchant">
                      <h6>
                        <BsPerson />
                      </h6>
                      <h6> Merchants</h6>
                    </Link>
                  </li>

                  <li className={props.page === "home" ? "active" : "li"}>
                    <a href={`#faqs`} onClick={() => setToggle(false)}>
                      <h6>
                        <BsQuestionLg />
                      </h6>
                      <h6>FAQS</h6>
                    </a>
                  </li>
                  <hr
                    style={{ width: "100%", height: "1px", color: "#ABACA5" }}
                  />

                  <li
                    className={props.page === "about" ? "active" : "li"}
                    onClick={handleOpen}
                    id="mobile-suggest-store"
                  >
                    Suggest a store
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </section>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Suggest a store
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Suggest your preferreed store to help bring a store close to you.
          </Typography>
          <TextField
            id="outlined-basic"
            label="Name of store"
            variant="outlined"
            fullWidth
            style={{ marginTop: "32px" }}
            value={names}
            onChange={(event) => setNames(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="City of store"
            variant="outlined"
            fullWidth
            style={{ marginTop: "32px" }}
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Enter your email address"
            variant="outlined"
            fullWidth
            style={{ marginTop: "32px", marginBottom: "32px" }}
            value={emails}
            onChange={(event) => setEmails(event.target.value)}
          />
          <button
            style={{
              width: "235px",
              height: "50px",
              backgroundColor: "rgba(255, 125, 5, 1)",
              border: "0px",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "24px",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Box>
      </Modal>
    </div>
  )
}

export default NavBar
