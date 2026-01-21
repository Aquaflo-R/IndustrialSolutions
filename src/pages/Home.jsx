import React from "react";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router";
import { Sun } from "lucide-react";
import AnimatedHeading from "../components/Animatedheading";

const Home = () => {
  const MotionLink = motion(Link);
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden  h-150 content-center bg-[url('images/solarheroimg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#100e12] opacity-70 z-0"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-20">
          <motion.h1
            initial={{ opacity: 0, scale: 0.70 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-3xl md:text-6xl font-primary font-bold text-white mb-6">
              Innovative Clean Energy Solutions  <br />
              <span className="text-white font-primary text-3xl md:text-5xl">for a Sustainable Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.105 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl font-secondary text-white max-w-2xl mx-auto mb-10">
              Delivering efficient, scalable energy solutions for a greener tomorrow.
          </motion.p>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }} 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MotionLink to="/contact" whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-primary bg-[#DAF1DE] hover:bg-[#235347] shadow-2xl text-black 
                  hover:text-white font-semibold inline-block">
                Request a Quote
            </MotionLink>
            <MotionLink to="/" whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-primary bg-[#235347] hover:bg-[#DAF1DE] text-white 
                  hover:text-black font-semibold inline-block">
                View Products
            </MotionLink>
          </motion.div>
        </div>
        {/* Floating Avatars (optional decorative circles) */}
        <div>
          {/* <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
            className="absolute top-10 left-20 w-30 h-30 rounded-full bg-[url('images/hero1.png')] bg-cover bg-center ">
          </motion.div> */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
            className="absolute top-30 right-24 w-26 h-14 rounded-full bg-[url('images/hero4.png')] bg-cover bg-center ">
          </motion.div>
          <motion.div
            animate={{ x: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }} 
            className="absolute bottom-10 left-32 w-20 h-20 rounded-full bg-[url('images/hero1.png')] bg-cover bg-center ">
          </motion.div>
          {/* <motion.div
            animate={{ x: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }} 
            className="absolute bottom-5 right-24 w-20 h-14 rounded-full bg-[url('images/hero4.png')] bg-cover bg-center ">
          </motion.div> */}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-26 grid md:grid-cols-2 gap-16 items-center">
        {/* image div */}
        <div className="relative w-full max-w-xl">
          {/* main image */}
          <img src="images/habout1.jpg" alt="about" className="w-full rounded-3xl object-cover"/>
          {/* experience badge */}
          <div className="absolute bottom-8 left-10 bg-[#163832] text-white w-40 h-28 rounded-2xl flex flex-col
            items-center justify-center shadow-lg">
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-sm mt-1">Years of Experience</p>
          </div>
          {/* second image */}
          <img src="images/habout2.jpg" alt="Solarpanelhouse" className="absolute -bottom-20 -right-8 w-[40%]
            rounded-3xl object-cover shadow-xl border-4 border-white" />
        </div>

        {/* text div */}
        <div>
          <div className="flex gap-2 items-center">
            <Sun strokeWidth={3} className="text-[#235347]"/><h2 className="text-3xl font-primary font-bold text-[#235347]">About Us</h2>
          </div>
          <AnimatedHeading text="Smart Energy Solutions for a | Greener Tomorrow." 
              className="text-2xl md:text-4xl mb-6 font-primary text-left" 
          />
          <p className="text-gray-600 mb-8 text-xl font-secondary text-justify leading-relaxed">
              We deliver smart, efficient, and reliable energy systems tailored to modern needs.
              Our solutions harness renewable technologies to reduce environmental impact and costs.
              Together, we empower businesses and communities to build a cleaner, greener tomorrow.
          </p>
          <Link to="/about" className="relative inline-block group">
            {/* Dashed Border */}
            <span className="absolute inset-0 border-2 border-[#235347] border-dashed rounded-lg"></span>
            {/* Moving Button */}
            <div className="relative transition-transform duration-300 bg-[#235347] border-2 border-[#235347] rounded-lg 
                group-hover:translate-x-3 group-hover:-translate-y-3"
            >
            <div className="py-2 px-8">
              <p className="text-xl font-medium text-white font-primary">
                About Us
              </p>
            </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home