import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedHeading from "../components/Animatedheading";
import { Sun, ShieldCheck, Lightbulb, Trophy } from "lucide-react";
import ModelForm from "../components/ModelForm";
import solarcta from "/icons/solarcta.png";

function CountUp({ end, duration = 3000, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return <span>{count}</span>;
}

const About = () => {
  const factsRef = useRef(null);
  const factsInView = useInView(factsRef, { once: true, margin: "-100px" });
  const [isModalOpen, setModalOpen] = useState(false);

  const timeline = [
    {
      year: "2021",
      title: "Foundation",
      desc: "Vision to deliver reliable clean energy.",
    },
    {
      year: "2022",
      title: "Early Projects",
      desc: "Early installations built trust and expertise.",
    },
    {
      year: "2023",
      title: "Growth & Expansion",
      desc: "Scaled operations for commercial and industrial.",
    },
    {
      year: "2024",
      title: "Technology Advancement",
      desc: "Integrated advanced solar and energy-efficient technologies.",
    },
    {
      year: "2025",
      title: "Quality & Standards",
      desc: "Implemented processes meeting industry safety standards.",
    },
    {
      year: "2026",
      title: "Today",
      desc: "Trusted partner driving sustainable energy independence.",
    },
  ];

  const certificate = [
    {
      title: "Trust & Warranty",
      desc: "Panel installation involves the professional installation expert panel maintenance.",
      icon: ShieldCheck,
    },
    {
      title: "Efficiency & Power",
      desc: "Intelligent energy monitoring to control costs effectively wind turbines powering.",
      icon: Lightbulb,
    },
    {
      title: "High Quality Work",
      desc: "Store sunlight effectively with innovative battery tech incentives explained.",
      icon: Trophy,
    },
  ];

  const facts = [
    { value: 10, label: "Years of Experience", suffix: "+" },
    { value: 200, label: "Clients", suffix: "+" },
    { value: 40, label: "Countries", suffix: "+" },
  ];
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto pb-10 grid md:grid-cols-2 gap-16 items-center">
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
            <motion.div 
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95 }}
              className="w-full max-w-sm md:w-72 md:absolute md:left-28 top-10 bg-slate-50 shadow-md rounded-2xl p-6 text-left">
              <h3 className="text-xl font-primary font-semibold text-slate-800 mb-3">
                Mission
              </h3>
              <p className="text-sm font-secondary text-justify text-slate-600 leading-relaxed">
                To accelerate the transition to a greener planet by delivering
                high-quality, cost-effective solar solutions.
              </p>
            </motion.div>

            {/* image card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.80 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="rounded-3xl overflow-hidden shadow-lg">
              <img src="images/missionabout.png" alt="vission&mission" 
                className="w-full md:w-[520px] h-[260px] md:h-[440px] object-cover"
              />
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.95 }}
              className=" w-full max-w-sm md:w-72 md:absolute md:right-28 bottom-10 bg-[#235347] text-white 
                shadow-md rounded-2xl p-6 text-left">
              <h3 className="text-xl font-primary font-semibold mb-3">
                Vision
              </h3>
              <p className="text-sm font-secondary text-justify leading-relaxed">
                To be a global leader in renewable energy, empowering communities
                with sustainable and intelligent energy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey & Milestones Section */}
      <section className="py-20 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* heading */}
            <AnimatedHeading text="Our Journey & Milestones." 
              className="text-2xl md:text-4xl mb-4 font-primary" 
          />
          <p className="text-lg font-secondary">Our growth, milestones, and commitment to clean energy.</p>
          </div>

          {/* timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-zinc-800"></div>

            {timeline.map((item, index) => (
              <div key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"}`}
                >
                  <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-lg hover:shadow-xl 
                    transition-shadow duration-300 border border-gray-300"
                  >
                    <div className={`inline-block px-3 py-1 rounded-full text-white bg-[#163832] text-sm font-semibold mb-2 `}>
                        {item.year}
                    </div>
                      <h3 className="text-2xl font-bold font-primary text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-secondary dark:text-gray-400 mb-2">
                        {item.desc}
                      </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white 
                  dark:bg-black border-4 border-[#235347] rounded-full z-10">
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* certification section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="flex gap-2 items-center justify-center mb-12">
            <Sun strokeWidth={3} size={30} className="text-[#235347] "/>
            <AnimatedHeading text="Certifications & compliance " 
              className="text-2xl md:text-4xl font-primary text-left" 
          /></div>
          {/* content */}
          <div className="grid grid:cols-1 md:grid-cols-3 gap-8">
            {certificate.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -8, boxShadow: "0 25px 40px rgba(0,0,0,0.15)",
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  className="bg-[#DAF1DE] rounded-3xl p-8 "
                >
                  <Icon className="w-10 h-10 text-[#235347]" strokeWidth={1.8}/>

                  <h3 className="text-2xl font-primary font-semibold text-[#235347] mt-6 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 font-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* key facts section */}
      <section ref={factsRef} className="pt-14 pb-20 px-6 bg-[#0B2B26]">
        <div className="max-w-7xl mx-auto px-6  py-20 rounded-3xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0">
            {/* Left Title */}
            <h2 className="text-white text-3xl md:text-4xl text-center font-primary font-semibold tracking-wide md:w-1/4">
              Key Facts
            </h2>
            {/* Stats */}
            <div className="flex flex-col md:flex-row md:w-3/4 w-full gap-6 justify-between relative">

              {facts.map((item, index) => (
                <div
                  key={index}
                  className="relative flex-1 text-center px-6"
                >
                  {/* Vertical Divider */}
                  {index !== 0 && (
                    <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-22 w-px bg-[#BEB69B]"></span>
                  )}

                  <motion.h3
                    className="text-accent font-primary text-4xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    <CountUp end={item.value} start={factsInView}/>
                    {item.suffix}
                  </motion.h3>
                  <p className="text-gray-300 font-primary text-2xl leading-snug">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.80 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.9 }}
          className="max-w-7xl mx-auto justify-items-center px-6 py-10 rounded-4xl grid md:grid-cols-2 
              gap-2 items-center bg-[#163832]">
          {/* text */}
          <div>
            <h2 className="font-primary text-5xl font-bold text-white mb-6">
              Ready to power your future?
            </h2>
          <p className="text-sm font-secondary text-white leading-relaxed mb-6">
            Request a personalized quote today and take the first step toward clean, reliable energy.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-2 rounded-full font-primary bg-[#235347] hover:bg-[#DAF1DE] shadow-2xl text-white 
                hover:text-black border border-transparent hover:border-[#235347] font-semibold inline-block cursor-pointer"
          >
            Request A Quote
          </button>
          </div>
          {/* image */}
          <div className="justify-items-center">
            <img src={solarcta} alt="" className=" w-[70%] object-cover"/>
          </div>
        </motion.div>
      </section>
      {/* MODAL */}
      {isModalOpen && (
        <ModelForm
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}

    </main>
  )
};

export default About;
