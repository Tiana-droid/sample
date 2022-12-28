import React, { useRef, useEffect, useState } from "react"
import "../styles/navBar.css"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { TextField } from "@mui/material"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

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
}

const NavBar = (props: Props) => {
  const [showDiv, setshowDiv] = useState("none")

  const [name, setName] = React.useState("")
  const [city, setCity] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)

  const navigate = useNavigate()
  const [overflow, setOverflow] = React.useState(true)

  const handleClose = () => setOpen(false)

  //   const shopRef = useRef<HTMLDivElement | null>(null);
  //   const accountRef = useRef<HTMLDivElement | null>(null);
  //   const categoryRef = useRef<HTMLDivElement | null>(null);
  //   const subscriptionRef = useRef<HTMLDivElement | null>(null);
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
    width: 399,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  }
  const handleSubmit = () => {
    axios
      .post(
        "https://city-xplorer-api.herokuapp.com/api/v1/suggestion/suggest-store",
        { name, email, city }
      )
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-right",
          style: {
            width: "320px",
            height: "100px",
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
        setOpen(false)
      })
      .catch((error) => {
        toast.error("You are already on the waitlist", {
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
      })
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

          <ul>
            <li className={props.page === "home" ? "active" : "li"}>
              <Link to="/">Home</Link>
            </li>

            <li className={props.page === "shop" ? "active" : "li"} ref={shop}>
              How it works
              <div className={showDiv === "shop" ? "showDiv" : "hideDiv"}>
                <ol>
                  <li>Restaurant</li>
                  <li>Grocery</li>
                </ol>
              </div>
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
              FAQs
              <div className={showDiv === "category" ? "showDiv" : "hideDiv"}>
                <ol>
                  <li>Cereal Grain</li>
                  <li>Cooking Oil</li>
                  <li>Seasoning And Spices</li>
                  <li>Vegetables And Fruits</li>
                  <li>Protein (Fish $ Meat)</li>
                  <li>Tubers</li>
                  <li>Floor</li>
                  <li>Canned Food</li>
                  <li>Snacks</li>
                  <li>Cooked Food</li>
                </ol>
              </div>
            </li>
            <li
              className={props.page === "about" ? "active" : "li"}
              id="sugestAStore"
              onClick={handleOpen}
            >
              Suggest a store
            </li>
          </ul>
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
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            style={{
              width: "335px",
              height: "58px",
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
