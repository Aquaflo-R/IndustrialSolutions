import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import { Sun, ArrowUpRight, Users, MessageSquare, Puzzle, Building2, CheckCheck } from "lucide-react";
import AnimatedHeading from "../components/Animatedheading";
import ModelForm from "../components/ModelForm";
import solarcta from "/icons/solarcta.png";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const MotionLink = motion(Link);
  // products categories
  const productcategory = [
    {
      id: 1, image: "images/solarinverter.png", title: "Solar Inverters", link: "/products/solar-panels",
    },
    {
      id: 2, image: "images/spanels.png", title: "Solar Panels", link: "/products/solar-panels",
    },
    {
      id: 3, image: "images/energystorage.png", title: "Energy Storage System", link: "/products/solar-panels",
    },
    {
      id: 4, image: "images/solarcontrol.png", title: "Solar Monitoring & Control", link: "/products/solar-panels",
    },
  ]
  // industries we serve
  const industries = [
    { title: "Automotive", image: "images/automobile.png" },
    { title: "Pharmaceutical", image: "images/pharma.png" },
    { title: "Energy & Utilities", image: "images/energyutility.png" },
    { title: "Manufacturing", image: "images/manufacturing.png" },
    { title: "Logistics & Warehousing", image: "images/logistic.png" },
    { title: "Oil & Gas", image: "images/oilgas.png" },
  ];
  // manufacturing process
  const steps = [
    {
      title: "MEET",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.",
      icon: Users,
    },
    {
      title: "DISCUSSION",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.",
      icon: MessageSquare,
    },
    {
      title: "IDEAL",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.",
      icon: Puzzle,
    },
    {
      title: "CONSTRUCT",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accuntium.",
      icon: Building2,
    },
  ];

  // why choose us
  const benefits = [
    {
      title: "Quality :",
      desc: "Delivering high-quality, reliable energy solutions built to meet global standards."
    },
    {
      title: "Experience :",
      desc: "Backed by proven expertise and industry knowledge across diverse energy projects."
    },
    {
      title: "Capacity :",
      desc: "Equipped with the resources and capability to handle projects of any scale efficiently."
    },
  ];
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-20 h-150 content-center bg-[url('/images/solarheroimg.png')] 
          bg-cover bg-center">
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
                Request Quote
            </MotionLink>
            <MotionLink to="/" whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-primary bg-[#235347] hover:bg-[#DAF1DE] shadow-2xl text-white 
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
            className="absolute top-30 right-24 w-26 h-14 rounded-full bg-[url('/images/hero4.png')] bg-cover bg-center ">
          </motion.div>
          <motion.div
            animate={{ x: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }} 
            className="absolute bottom-10 left-32 w-20 h-20 rounded-full bg-[url('/images/hero1.png')] bg-cover bg-center ">
          </motion.div>
          {/* <motion.div
            animate={{ x: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }} 
            className="absolute bottom-5 right-24 w-20 h-14 rounded-full bg-[url('images/hero4.png')] bg-cover bg-center ">
          </motion.div> */}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-22 grid md:grid-cols-2 gap-16 items-center">
        {/* image div */}
        <div className="relative w-full max-w-xl">
          {/* main image */}
          <motion.img
            initial={{ opacity: 0, scale: 0.80 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }} 
            src="images/habout1.jpg" alt="about" className="w-full px-2 rounded-3xl object-cover"/>
          {/* experience badge */}
          <motion.div 
            initial={{ opacity: 0, x: -95 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95 }}
            className="absolute bottom-8 left-10 bg-[#163832] text-white w-40 h-28 rounded-2xl flex flex-col
            items-center justify-center shadow-lg">
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-sm mt-1">Years of Experience</p>
          </motion.div>
          {/* second image */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95 }} 
            src="images/habout2.jpg" alt="Solarpanelhouse" className="absolute -bottom-20 -right-0 w-[40%]
           md:-right-8 rounded-3xl object-cover shadow-xl border-4 border-white" />
        </div>

        {/* text div */}
        <motion.div
          initial={{ opacity: 0, x: 95 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.9 }}
        >
          <div className="flex gap-2 items-center">
            <Sun strokeWidth={3} size={20} className="text-[#235347]"/>
            <h2 className="text-2xl font-primary font-bold text-[#235347]">About Us</h2>
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
                Know More
              </p>
            </div>
            </div>
          </Link>
        </motion.div>
        </div>
      </section>

      {/* Products Categories */}
      <section className="pt-4 pb-20">
        <div className="max-w-9xl mx-auto px-6">
          {/* heading */}
          <div className="flex gap-2 items-center justify-center mb-4">
            <Sun strokeWidth={3} size={30} className="text-[#235347] "/>
            <AnimatedHeading text="Products Categories " 
              className="text-2xl md:text-4xl  font-primary text-left" 
          />
          </div>
          <div className="grid sm:grid:cols-1 md:grid-cols-4 gap-4 justify-items-center py-8 relative">
            {productcategory.map((pcategory) => (
              <motion.div
                key={pcategory.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl w-80 shadow-lg  "
              >
                <Link to={pcategory.link}
                  className="group block rounded-xl overflow-hidden"
                >
                {/* image */}
                <div className="relative">
                  <img src={pcategory.image} alt={pcategory.title} className="w-full h-80 object-cover"/>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-t from-[#0b1d3a]/90 via-[#0b1d3a]/60 to-transparent"
                  />
                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#235347] backdrop-blur
                                  flex items-center justify-center">
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </div>
                  {/* Content */}
                <div className="absolute pt-4 pb-6 text-center bottom-0 left-0 right-0 text-white 
                      bg-gradient-to-t from-[#0b1d3a]/90 via-[#0b1d3a]/60 to-transparent ">
                  <h3 className="text-xl font-semibold font-primary">{pcategory.title}</h3>
                </div>
                </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we serve section */}
      <section className="relative pt-14 pb-10 bg-[url('/images/industrybghome.jpg')] bg-cover bg-center">
        {/* overlay */}
        <div className="absolute inset-0 bg-white/20" />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* heading */}
          <div className="flex gap-2 items-center justify-center mb-12">
            <Sun strokeWidth={3} size={30} className="text-[#235347] "/>
            <AnimatedHeading text="Industries We Serve" 
              className="text-2xl md:text-4xl font-primary text-left" 
          /></div>
          {/* grid list */}
          <div className="grid md:grid-cols-3 gap-8 rounded-xl py-20 bg-black/70">
            {industries.map((item, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ transition: { type: "spring", stiffness: 400, damping: 20 },}}
                className="flex flex-col items-center text-center text-white"
              >
                {/* image */}
                <img src={item.image} alt={item.title} 
                  className="w-16 h-16 mb-4 object-cover"
                />
                {/* underline */}
                <span className="w-10 h-[2px] bg-white mb-3" />
                {/* title */}
                <h3 className="text-xl tracking-wide">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            <MotionLink to="/" whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-2 rounded-full font-primary bg-[#235347] hover:bg-[#DAF1DE] shadow-2xl text-white 
                  hover:text-black border border-transparent hover:border-[#235347] font-semibold inline-block">
                See More
            </MotionLink>
          </div>
        </div>
      </section>

      {/* Manufacturing process section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 pb-6">
          {/* Heading */}
          <div className="flex gap-2 items-center justify-center mb-12">
            <Sun strokeWidth={3} size={30} className="text-[#235347] "/>
            <AnimatedHeading text="Manufacturing Process " 
              className="text-2xl md:text-4xl font-primary text-left" 
          /></div>
          {/* cards steps section*/}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* dashed lines desktop only */}
            <div className="hidden md:block absolute inset-0">
              <div className="absolute top-1/2 left-[12%] right-[12%] border-t-2 border-dashed border-gray-700 -z-10"/>
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return(
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 25px 40px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="bg-[#235347] text-white p-8 min-h-[220px] rounded-lg flex flex-col justify-center"
              >
                <Icon className="text-white mb-6" size={36} />

                <h3 className="text-xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-[#163832]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* content div */}
          <motion.div  initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.95 }}>
            <div className="flex gap-2 items-center mb-4">
            <Sun strokeWidth={2} size={16} className="text-white"/>
            <h2 className="text-sm font-primary font-semibold text-white tracking-wider">Trusted & Affordable</h2>
            </div>
            <h2 className="font-primary text-5xl font-bold text-white mb-6">Why Choose Us</h2>
            <ul className="space-y-5">
              {benefits.map((item, index) => (
                <li key={index} className="flex gap-3 items-center">
                  <CheckCheck size={30} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold font-primary text-xl text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm font-secondary text-white leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* image div */}
          <div className="justify-items-center">
            <motion.img src="images/homechooseus.png" alt="whychooseus" 
              className="w-[90%] px-2 rounded-3xl object-cover"
              initial={{ opacity: 0, scale: 0.80 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            />
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
}

export default Home