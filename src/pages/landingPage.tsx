import Brands from "../components/brands";
import DualShoppingGrocery from "../components/dualShoppingGrocery";
import DualShoppingRestaurant from "../components/dualShoppingRestaurant";
import ExploreGrocery from "../components/exploreGrocery";
import ExploreRestaurant from "../components/exploreRestaurant";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import HowWeOperate from "../components/howWeOperate";
import NavBar from "../components/navBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar page="home" />
      <HeroSection />
      <HowWeOperate />
      <DualShoppingGrocery />
      <DualShoppingRestaurant />
      <ExploreGrocery />
      <ExploreRestaurant />
      <Brands />
      <Footer />
    </div>
  );
};

export default LandingPage;
