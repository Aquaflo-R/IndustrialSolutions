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
import Productdetails from "./pages/products/Productdetails";
import ProductCategory from "./pages/products/Productcategory";
import Allproducts from "./pages/products/Allproducts";

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
    </>
  );
}

export default App;
