import Home from "./pages/Home";
import About from "./pages/About";
import { HashRouter, Routes, Route } from "react-router";

import Header from "./components/Header";

import Productdetails from "./pages/products/Productdetails";
import ProductCategory from "./pages/products/Productcategory";
import Allproducts from "./pages/products/Allproducts";

import Industries from "./pages/Industries";
import Process from "./pages/Process";
import Infrastructure from "./pages/Infrastructure";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
<<<<<<< HEAD
import Header from "./components/Header";
import Productdetails from "./pages/products/Productdetails";
import ProductCategory from "./pages/products/Productcategory";
import Allproducts from "./pages/products/Allproducts";
=======
>>>>>>> 4ec5d175fd9ac05c11a16f9bd5a8d361c7dbbf3a

/* INDUSTRY DETAIL PAGES */
import Automotive from "./pages/industries/Automotive";
import Pharmaceutical from "./pages/industries/Pharmaceutical";
import EnergyUtilities from "./pages/industries/EnergyUtilities";
import LogisticsWarehouse from "./pages/industries/LogisticsWarehouse";
import OilGas from "./pages/industries/OilGas";
import Manufacturing from "./pages/industries/Manufacturing";
<<<<<<< HEAD


function App() {
  return (
    <>
      <div>
        <HashRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/category/:slug"
              element={<ProductCategory />}
            />
            <Route path="/products/all" element={<Allproducts />} />
            <Route path="/products/:slug" element={<Productdetails />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/process" element={<Process />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/caseStudies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/productsdetails" element={<Productdetails />} />
          </Routes>
        </HashRouter>
      </div>
      <HashRouter>
        <Header />
=======

function App() {
  return (
    <HashRouter>
      <Header />
>>>>>>> 4ec5d175fd9ac05c11a16f9bd5a8d361c7dbbf3a

      <Routes>
        {/* Core Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

<<<<<<< HEAD
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
      </HashRouter>
    </>
=======
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
    </HashRouter>
>>>>>>> 4ec5d175fd9ac05c11a16f9bd5a8d361c7dbbf3a
  );
}

export default App;
