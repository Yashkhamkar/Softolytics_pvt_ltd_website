import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Slider from "./components/Slider";
import Social from "./components/Social";
import OneService from "./components/eachService/Web";
import Web from "./components/eachService/Web";
import Erp from "./components/eachService/Erp";
import Crm from "./components/eachService/Crm";
import Bmp from "./components/eachService/Bmp";
import Mobile from "./components/eachService/Mobile";
import Data from "./components/eachService/Data";
import Carrers from "./components/Carrers";
import AboutPage from "./components/AboutPage";
import ServicePage from "./components/ServicePage";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Slider />
              <About />
              <Services />
              <Clients />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div>
              <Navbar />
              <Contact />
            </div>
          }
        />
        <Route path="/web" element={<Web />} />
        <Route path="/erp" element={<Erp />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/bpm" element={<Bmp />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/data" element={<Data />} />
        <Route path="/carrers" element={<Carrers />} />
        <Route path="/Aboutpage" element={<AboutPage />} />
        <Route path="/Servicepage" element={<ServicePage />} />
      </Routes>
      <Social />
      <Footer />
    </div>
  );
}

export default App;
