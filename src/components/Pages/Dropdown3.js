import B1 from "../Homepage/B1.jpg";
import Footer from "../Footer/Footer";
import TitlePage from "./TitlePage";
import TravelGuide from "../TravelGuide/TravelGuide";

const Dropdown3 = () => {
  return (
    <div>
      <img src={B1} alt="background-click" className="bg-image" />
      <div className="pages-container">
        <h1 className="pages-title">Guides</h1>
        <TitlePage title="Guides" />
      </div>
      <TravelGuide />
      <Footer />
    </div>
  );
};

export default Dropdown3;
