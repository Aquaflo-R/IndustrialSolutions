import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin, Minus } from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";

function Footer() {
    const MotionPhone = motion(Phone);
    const MotionMail = motion(Mail);
    const MotionMapPin = motion(MapPin);
    return(
        <footer className="py-6 text-center bg-[#163832] text-white relative">
            {/* © {new Date().getFullYear()} Your Company. All rights reserved. */}
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-8 grid gap-10 md:grid-cols-4" >
                {/* Brand Section */}
                <div className="justify-items-center">
                    <img  src="images/logo.png" alt="Brand Logo" className="h-10 md:h-12 w-auto" />
                    <p className="text-gray-400 text-base mb-6 font-secondary">
                        Delivering efficient, scalable energy solutions for a greener tomorrow.
                    </p>
                    {/* social icons */}
                    <div className="flex gap-4">
                        <a href="#" className="p-2 rounded hover:bg-white hover:text-[#0B2B26]">
                            <Facebook size={24}/>
                        </a>
                        <a href="#" className="p-2 rounded hover:bg-white hover:text-[#0B2B26]">
                            <Instagram size={24}/>
                        </a>
                        <a href="#" className="p-2 rounded hover:bg-white hover:text-[#0B2B26]">
                            <Linkedin size={24}/>
                        </a>
                        <a href="#" className="p-2 rounded hover:bg-white hover:text-[#0B2B26]">
                            <Youtube size={24}/>
                        </a>    
                    </div>
                </div>
                {/* Pages div*/}
                <div className="justify-items-center">
                    <h4 className="text-2xl text-[#DAF1DE] font-primary font-semibold pb-2 mb-2 border-b 
                        border-[#DAF1DE] inline-block">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 mt-4">
                        <li>
                            <Link to="/" className="flex items-center gap-1 font-secondary hover:text-[#DAF1DE]">
                            <Minus />
                            <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="flex items-center gap-1 font-secondary hover:text-[#DAF1DE]">
                            <Minus />
                            <span>About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="flex items-center gap-1 font-secondary hover:text-[#DAF1DE]">
                            <Minus />
                            <span>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Products div */}
                <div className=" text-left pl-4">
                    <h4 className="text-2xl text-[#DAF1DE] font-primary font-semibold pb-2 mb-2 border-b 
                        ml-8 border-[#DAF1DE] inline-block">
                        Products
                    </h4>
                    <ul className="space-y-3 mt-4">
                        <li>
                            <Link to="/" className="flex items-center gap-1 font-secondary hover:text-[#DAF1DE]">
                            <Minus />
                            <span>Solar Inverters</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center gap-1 font-secondary hover:text-[#DAF1DE]">
                            <Minus />
                            <span>Solar Panels</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center gap-1 font-secondary hover:text-[#DAF1DE]">
                            <Minus />
                            <span>Energy Storage Systems</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center gap-1 font-secondary hover:text-[#DAF1DE]">
                            <Minus />
                            <span>Solar Monitoring & Control</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Contact div */}
                <div className="text-left pl-4">
                    <h4 className="text-2xl text-[#DAF1DE] font-primary font-semibold pb-2 mb-2 border-b 
                          ml-8 border-[#DAF1DE] inline-block">
                        Contact Us
                    </h4>
                    <ul className="space-y-4 mt-4 text-gray-400 ">
                        <li className="flex gap-2 items-center font-secondary">
                            <MotionPhone size={24} className="text-[#DAF1DE]"
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}    
                            />
                            <div>
                                <p>+91-9900999009</p>
                            </div>
                        </li>
                        <li className="flex gap-2 items-center font-secondary">
                            <MotionMail size={24} className="text-[#DAF1DE]"
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                            <p>demo@gmail.com</p>
                        </li>
                        <li className="flex gap-2 items-center font-secondary">
                            <MotionMapPin size={42} className="text-[#DAF1DE]"
                                initial={{ rotate: 0 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                            <p>307 Hill Crest Lane, Irving California, Washington DC 1234</p>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="bg-[#235347] flex flex-col md:flex-row justify-evenly items-center gap-3 
                py-4 text-[#BEB69B] font-primary text-center text-sm -mb-6">
  
              {/* Copyright */}
              <div className="flex flex-col md:flex-row gap-1">
                © {new Date().getFullYear()}{" "}
                <a href="#" className="font-semibold hover:text-[#0B2B26]">
                  IndustrialSolutions
                </a> {" "}All Rights Reserved | Designed & Developed by{" "}
                <a href="#" className="font-semibold hover:text-[#0B2B26]">
                  DarkELiteCreations
                </a>
              </div>

              {/* Terms & Privacy */}
              <div className="flex gap-4">
                <a href="#" className="font-semibold hover:text-[#0B2B26]">
                  Terms & Conditions
                </a>
                <a href="#" className="font-semibold hover:text-[#0B2B26]">
                  Privacy Policy
                </a>
              </div>

            </div>

        </footer>
    )
}

export default Footer