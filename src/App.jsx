import React from "react";
import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router";

import About from "./pages/About";
import Products from "./pages/products/Products";
import Industries from "./pages/Industries";
import Process from "./pages/Process";
import Infrastructure from "./pages/Infrastructure";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* INDUSTRY DETAIL PAGES */
import Automotive from "./pages/industries/Automotive";
import Pharmaceutical from "./pages/industries/Pharmaceutical";
import EnergyUtilities from "./pages/industries/EnergyUtilities";
import LogisticsWarehouse from "./pages/industries/LogisticsWarehouse";
import OilGas from "./pages/industries/OilGas";
import Manufacturing from "./pages/industries/Manufacturing";

function App() {
  return (
    <>
      <HashRouter>
        <Header />

        <Routes>
          {/* MAIN PAGES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/process" element={<Process />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/caseStudies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />

          {/* INDUSTRY DETAIL ROUTES */}
          <Route path="/industries/Automotive" element={<Automotive />} />
          <Route
            path="/industries/Pharmaceutical"
            element={<Pharmaceutical />}
          />
          <Route
            path="/industries/EnergyUtilities"
            element={<EnergyUtilities />}
          />
          <Route
            path="/industries/LogisticsWarehouse"
            element={<LogisticsWarehouse />}
          />
          <Route path="/industries/OilGas" element={<OilGas />} />
          <Route path="/industries/Manufacturing" element={<Manufacturing />} />
        </Routes>

        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
