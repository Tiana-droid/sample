import HeroSection from "../components/heroSection";
import NavBar from "../components/navBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar page="home" />
      <HeroSection />
    </div>
  );
};

export default LandingPage;
