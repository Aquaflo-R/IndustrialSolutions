import React from "react";
import { Link } from "react-router";
const Header = () => {
  return (
    <>
      <div className="flex justify-between p-7">
        <Link className="text-xl font-bold" to="/">
          Airneb
        </Link>
        <div className="flex gap-5">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/process">Process</Link>
          <Link to="/infrastructure">Infrastructure</Link>
          <Link to="/caseStudies">CaseStudies</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
