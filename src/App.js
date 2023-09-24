import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Header from "./components/Header/Header";
import { Dropdown1, Dropdown2, Dropdown3 } from "./components/Pages/index.js";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/destination" element={<Dropdown1 />} />
        <Route path="/bookings" element={<Dropdown2 />} />
        <Route path="/guides" element={<Dropdown3 />} />
      </Routes>
    </Router>
  );
};

export default App;
