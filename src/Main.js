import HomePage from "./components/Homepage/HomePage";
import About from "./components/Homepage/About";
import Services from "./components/Services/Services";
import Destination from "./components/Destination/Destination";
import Packages from "./components/Packages/Packages";
import Process from "./components/Process/Process";
import TravelGuide from "./components/TravelGuide/TravelGuide";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

const Main = () => {
  return (
    <>
      <HomePage />
      <About />
      <Services />
      <Destination />
      <Packages />
      <Process />
      <TravelGuide />
      <Reviews />
      <Footer />
    </>
  );
};

export default Main;
