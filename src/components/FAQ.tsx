import React, { useState } from "react"
import "../styles/faq.scss"
import caret from "../assets/caretDown.png"
import close from "../assets/caretUp.png"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [open, setOpen] = useState(false)
  const [checker, setChecker] = useState(false)

  // React.useEffect(() => {
  //   if (checker) {
  //     setOpen(true)
  //   } else {
  //     setOpen(false)
  //   }
  // }, [checker])

  const handleClick = (index: any) => {
    setOpenIndex(index === openIndex ? null : index)
    setOpen(!open)
  }

  const questions = [
    {
      question: "How Does CityXplorer Work?",
      answer: [
        { ans: "1. Download the app on the app store" },
        { ans: "2. Enter your address " },
        { ans: "3. Start shopping at your favourite stores" },
        { ans: "4. Checkout" },
        { ans: "5. Get your order deliver to your doorstep" },
      ],
    },
    {
      question: "Does CityXplorer Deliver in My Area?",
      answer: [
        {
          ans: "To check whether we deliver to your address, open CityXplorer App and Enter your address. We will display stores that are closer to you.",
        },
      ],
    },
    {
      question: "What are CityXplorer’s Delivery Hours?",
      answer: [
        {
          ans: "Now, we deliver all orders in the evening between Monday – Friday from 5PM – 10PM. Saturday and Sunday, we deliver from 8AM – 9PM.",
        },
      ],
    },
    {
      question: "How Do I Contact You for Help?",
      answer: [
        {
          ans: "Email us at info@cityxplorer.io, +1 (615) 668-7715 (WhatsApp only) or you can DM us on our Social Channels!",
        },
      ],
    },
    {
      question: "I'm Having Issues with The Website or App.",
      answer: [{ ans: "Email us at info@cityxplorer.io " }],
    },
    {
      question: "Is There Minimum Order?",
      answer: [{ ans: "The minimum order is $25." }],
    },
    {
      question:
        "How are Items Priced on CityXplorer Compared to The Local Store?",
      answer: [
        {
          ans: "All items on our app carry the same price as in-store, because at CityXplorer, we want you to relax and enjoy your family while we run the errand for you.",
        },
      ],
    },
  ]

  return (
    <div className="FAQ-container" id="faqs">
      <h1>Frequently Asked Questions</h1>
      {questions.map((question, index) => (
        <div key={index} className="form-group">
          <button style={{ borderWidth: open ? "0.1px" : "1px" }}>
            <p>{question.question}</p>
            <img
              src={!open ? close : caret}
              alt="caret-down"
              onClick={() => handleClick(index)}
            />
          </button>
          {openIndex === index && (
            <ul>
              {question.answer.map((ans, i) => (
                <li key={i}>{ans.ans}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
