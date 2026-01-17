import Home from "./pages/Home";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router";
import About from "./pages/About";
import Products from "./pages/products/Products";
import Industries from "./pages/Industries";
import Process from "./pages/Process";
import Infrastructure from "./pages/Infrastructure";
import CaseStudies from "./pages/CaseStudies";
import { Contact } from "lucide-react";
import Header from "./components/Header";
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
            <Route path="/industries" element={<Industries />} />
            <Route path="/process" element={<Process />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/caseStudies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
