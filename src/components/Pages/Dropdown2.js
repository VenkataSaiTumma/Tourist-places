import B1 from "../Homepage/B1.jpg";
import Footer from "../Footer/Footer";
import Process from "../Process/Process";
import TitlePage from "./TitlePage";

const Dropdown2 = () => {
  return (
    <>
      <img src={B1} alt="background-click" className="bg-image" />
      <div className="pages-container">
        <h1 className="pages-title">Bookings</h1>
        <TitlePage title="Bookings" />
      </div>
      <Process />
      <Footer />
    </>
  );
};

export default Dropdown2;
