import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Page404 from "./pages/404Page"
import LandingPage from "./pages/landingPage"
import { ProductsProvider } from "./context/products"
import SignUp from "./pages/signup"
import { Toaster } from "react-hot-toast"
import MerchantPage from "./pages/merchantPage"
import SuggestStorePage from "./styles/SuggestStorePage"

const App = () => {
  return (
    <ProductsProvider>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/merchant" element={<MerchantPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/*" element={<Page404 />} />
          <Route path="/suggestStore" element={<SuggestStorePage />} />
        </Routes>
      </Router>
    </ProductsProvider>
  )
}

export default App
