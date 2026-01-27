import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "../components/Animatedheading";
import { Sun } from "lucide-react";

const About = () => {
  return (
    <main>
      {/* Hero section */}
      <section className="max-w-9xl mt-20 h-90 mx-auto bg-[url('/images/aboutpagehero.jpg')] 
          bg-cover bg-center pt-12 pb-14 text-center content-center relative ">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-5xl text-white font-primary font-bold mb-8 pt-10"
            >
              About Us
            </motion.h1>
          </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 pb-10 grid md:grid-cols-2 gap-16 items-center">
        {/* image div */}
        <div className="relative w-full max-w-xl flex gap-2">
          {/* main image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.80 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }} 
            src="images/solar-panel-forest.jpg" alt="about" className="w-[55%] mb-10 rounded-3xl object-cover"/>
          
          {/* second image */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95 }} 
            src="images/water-tank-storage.jpg" alt="Solarpanelhouse" className="mt-24 w-[44%] md:w-[52%]
            rounded-3xl object-cover" />
        </div>

        {/* text div */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.9 }}
        >
          <div className="flex gap-2 items-center pt-8">
            <Sun strokeWidth={3} size={20} className="text-[#235347]"/>
            <h2 className="text-2xl font-primary font-bold text-[#235347]">About Us</h2>
          </div>
          <AnimatedHeading text="Smart Energy Solutions for a | Greener Tomorrow." 
              className="text-2xl md:text-4xl mb-6 font-primary text-left" 
          />
          <p className="text-gray-600 text-lg font-secondary text-justify leading-relaxed">
              We are a clean energy solutions company delivering reliable, efficient, and sustainable power systems 
              for diverse applications. Focused on innovation and quality, we design and deploy advanced solar and 
              energy solutions tailored to modern needs. Backed by an experienced team and strong infrastructure, 
              we execute projects of all scales while empowering businesses and communities to achieve a greener, 
              more energy-independent future.
          </p>
        </motion.div>
        </div>
      </section>

      {/* vision mission section */}
      <section className="pb-20 bg-[#DAF1DE]">
        <div className="max-w-7xl mx-auto px-6 text-center pt-6">
          {/* heading */}
            <AnimatedHeading text="Clean Energy For | Homes & Businesses." 
              className="text-2xl md:text-4xl mb-6 font-primary text-left pl-0 md:pl-50" 
          />

          {/* content wrapper */}
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
            {/* mission card */}
            <div className="w-full max-w-sm md:w-72 md:absolute md:left-28 top-10 bg-slate-50 shadow-md rounded-2xl p-6 text-left">
              <h3 className="text-xl font-primary font-semibold text-slate-800 mb-3">
              Mission
            </h3>
            <p className="text-sm font-secondary text-justify text-slate-600 leading-relaxed">
              To accelerate the transition to a greener planet by delivering
              high-quality, cost-effective solar solutions.
            </p>
            </div>

            {/* image card */}
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src="images/missionabout.png" alt="vission&mission" 
                className="w-full md:w-[520px] h-[260px] md:h-[440px] object-cover"
              />
            </div>

            {/* Vision Card */}
            <div className=" w-full max-w-sm md:w-72 md:absolute md:right-28 bottom-10 bg-[#235347] text-white 
                shadow-md rounded-2xl p-6 text-left">
              <h3 className="text-xl font-primary font-semibold mb-3">
                Vision
              </h3>
              <p className="text-sm font-secondary text-justify leading-relaxed">
                To be a global leader in renewable energy, empowering communities
                with sustainable and intelligent energy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
};

export default About;
