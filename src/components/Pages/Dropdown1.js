import TitlePage from "./TitlePage";
import B1 from "../Homepage/B1.jpg";
import Destination from "../Destination/Destination";
import Footer from "../Footer/Footer";

const Dropdown1 = () => {
  return (
    <>
      <img src={B1} alt="background-click" className="bg-image" />
      <div className="pages-container">
        <h1>Destination</h1>
        <TitlePage title="Destination" />
      </div>

      <Destination />

      <Footer />
    </>
  );
};

export default Dropdown1;
