import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "../data/categories";

function Header() {
  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-bg-primary/40 z-50 border-b-2"
    >
      <div className=" mx-auto px-10 py-4  flex  justify-between items-center">
        {/* Logo */}
        {/* <h1 className="text-xl font-bold text-indigo-600">Brand</h1> */}
        <Link to="/" className="flex items-center">
          <img
            src="images/logo.png"
            alt="Brand Logo"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-base font-medium">
          <Link to="/" className="hover:text-secondary-dark">
            Home
          </Link>
          <Link to="/about" className="hover:text-secondary-dark">
            About Us
          </Link>
          {/* <Link to="/product" className="hover:text-indigo-900">Products</Link> */}
          {/* Products dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-secondary-dark">
              Products
              <ChevronDown size={16} />
            </button>
            {/* submenu */}
            {/* <div className="absolute left-0 top-full mt-3 w-58 bg-white text-black rounded-lg shadow-lg
                            overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all 
                            duration-200"
                        >
                            <Link
                                to="/products/SolarPanel" 
                                className="block px-4 py-2 hover:bg-gray-200 hover:text-secondary-dark">
                                Solar Panel
                            </Link>
                            <Link
                                to="/products/rechargeablebatteries" 
                                className="block px-4 py-2 hover:bg-gray-200 hover:text-secondary-dark">
                                Rechargeable Batteries
                            </Link>
                            <Link
                                to="/products/powerelectricalplug" 
                                className="block px-4 py-2 hover:bg-gray-200 hover:text-secondary-dark">
                                Power Electrical Plug
                            </Link>
                        </div> */}
            <div
              className="absolute left-0 top-full mt-3 w-58 bg-white text-black rounded-lg shadow-lg
              overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all 
              duration-200"
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/category/${cat.slug}`}
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-secondary-dark"
                >
                  {cat.title}
                </Link>
              ))}
              <Link
                to="/products/all"
                className="block px-4 py-2 font-medium border-t hover:bg-gray-200 hover:text-secondary-dark"
              >
                All Products
              </Link>
            </div>
          </div>
          <Link to="/industries" className="hover:text-secondary-dark">
            Industries
          </Link>
          <Link to="/process" className="hover:text-secondary-dark">
            Process
          </Link>
          <Link to="/infrastructure" className="hover:text-secondary-dark">
            Infrastructure
          </Link>
          <Link to="/caseStudies" className="hover:text-secondary-dark">
            Case Studies
          </Link>
          <Link to="/contact" className="hover:text-secondary-dark">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary-dark"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col gap-4 px-6 py-6 text-base font-medium">
              <Link to="/" onClick={() => setOpen(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setOpen(false)}>
                About Us
              </Link>

              {/* Products Dropdown (Mobile) */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex w-full items-center justify-between"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="ml-4 mt-2 flex flex-col gap-2 text-sm"
                    >
                      {categories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/products/category/${cat.slug}`}
                          onClick={() => {
                            setOpen(false);
                            setMobileProductsOpen(false);
                          }}
                          className="hover:text-secondary-dark"
                        >
                          {cat.title}
                        </Link>
                      ))}

                      <Link
                        to="/products/all"
                        onClick={() => {
                          setOpen(false);
                          setMobileProductsOpen(false);
                        }}
                        className="mt-2 font-medium border-t pt-2"
                      >
                        All Products
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/industries" onClick={() => setOpen(false)}>
                Industries
              </Link>
              <Link to="/process" onClick={() => setOpen(false)}>
                Process
              </Link>
              <Link to="/infrastructure" onClick={() => setOpen(false)}>
                Infrastructure
              </Link>
              <Link to="/caseStudies" onClick={() => setOpen(false)}>
                Case Studies
              </Link>
              <Link to="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Header;
