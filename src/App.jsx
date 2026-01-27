import Home from "./pages/Home";
import About from "./pages/About";
import { HashRouter, Routes, Route } from "react-router";

import Productdetails from "./pages/products/Productdetails";
import ProductCategory from "./pages/products/Productcategory";
import Allproducts from "./pages/products/Allproducts";

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
    <HashRouter>
      <Header />

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          {/* INDUSTRY DETAIL ROUTES */}

        {/* Products */}
        <Route path="/products/all" element={<Allproducts />} />
        <Route path="/products/category/:slug" element={<ProductCategory />} />
        <Route path="/products/:slug" element={<Productdetails />} />

        {/* Industries */}
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/pharmaceutical" element={<Pharmaceutical />} />
        <Route
          path="/industries/energy-utilities"
          element={<EnergyUtilities />}
        />
        <Route
          path="/industries/logistics-warehouse"
          element={<LogisticsWarehouse />}
        />
        <Route path="/industries/oil-gas" element={<OilGas />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />

        {/* Other Pages */}
        <Route path="/process" element={<Process />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/caseStudies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </HashRouter>

  );
}

export default App;
