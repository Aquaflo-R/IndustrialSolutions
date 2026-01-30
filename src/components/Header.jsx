import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { categories } from "../data/categories";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [open, setOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        isScrolled
          ? "bg-[#163832]/70 backdrop-blur-md text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
    >

      <div className="mx-auto px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="images/logo.png"
            alt="Brand Logo"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-base font-medium">
          <Link to="/" className="hover:text-accent">Home</Link>
          <Link to="/about" className="hover:text-accent">About Us</Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-2 hover:text-accent">
              Products <ChevronDown size={16} />
            </button>

            <div className="absolute left-0 top-full mt-3 w-60 bg-white text-black rounded-lg shadow-lg
              overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/category/${cat.slug}`}
                  className="block px-4 py-2 hover:bg-gray-100 hover:text-accent"
                >
                  {cat.title}
                </Link>
              ))}
              <Link
                to="/products/all"
                className="block px-4 py-2 font-medium border-t hover:bg-gray-100 hover:text-accent"
              >
                All Products
              </Link>
            </div>
          </div>

          <Link to="/industries" className="hover:text-accent">Industries</Link>
          <Link to="/process" className="hover:text-accent">Process</Link>
          <Link to="/infrastructure" className="hover:text-accent">Infrastructure</Link>
          <Link to="/caseStudies" className="hover:text-accent">Case Studies</Link>
          <Link to="/contact" className="hover:text-accent">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
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
            <div className="flex flex-col gap-4 px-6 py-6 text-secondary-dark text-base font-medium">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>

              {/* Mobile Products Dropdown */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex w-full items-center justify-between"
                >
                  <span>Products</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
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
                        className="mt-2 font-medium border-t pt-2"
                        onClick={() => {
                          setOpen(false);
                          setMobileProductsOpen(false);
                        }}
                      >
                        All Products
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/industries" onClick={() => setOpen(false)}>Industries</Link>
              <Link to="/process" onClick={() => setOpen(false)}>Process</Link>
              <Link to="/infrastructure" onClick={() => setOpen(false)}>Infrastructure</Link>
              <Link to="/caseStudies" onClick={() => setOpen(false)}>Case Studies</Link>
              <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Header;
