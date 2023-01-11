import DualShoppingGrocery from "../components/FAQ"
import DownloadSection from "../components/downloadSection"
import Footer from "../components/footer"
import HeroSection from "../components/heroSection"
import HowWeOperate from "../components/howWeOperate"
import NavBar from "../components/navBar"

const LandingPage = () => {
  return (
    <>
      <NavBar page="home" type="primary" />
      <HeroSection />
      <HowWeOperate />
      <DualShoppingGrocery />
      <DownloadSection />
      <Footer />
    </>
  )
}

export default LandingPage
