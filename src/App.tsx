import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page404 from "./pages/404Page";
import LandingPage from "./pages/landingPage";
import { ProductsProvider } from "./context/products";
import SignUp from "./pages/signup";
const App = () => {
  return (
    <ProductsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
    </ProductsProvider>
  );
};

export default App;
