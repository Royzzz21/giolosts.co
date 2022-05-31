import "./App.css";
import HomePage from "./Pages/HomePage/index";
import EngineersPage from "./Pages/EngineersPage/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Layouts/Menu";
import ForCompanies from "./Pages/ForCompanies";
import Footer from "./Layouts/Footer/Index";

import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Engineers" element={<EngineersPage />} />
          <Route path="/Companies" element={<ForCompanies />} />
          <Route path="/About-us" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;
