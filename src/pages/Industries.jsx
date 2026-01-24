import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";
import { Car, Hospital, Bolt, Factory, Warehouse, Amphora } from "lucide-react";

const industries = [
  {
    title: "Automotive",
    icon: <Car />,
    description:
      "Energy-efficient solutions for automotive manufacturing and assembly plants.",
    link: "/industries/Automotive",
    image: "public/images/solar-panel.jpg",
  },
  {
    title: "Pharmaceutical",
    icon: <Hospital />,
    description:
      "Reliable and clean power systems for pharma production and research facilities.",
    link: "/industries/Pharmaceutical",
    image: "public/images/solar-panel.jpg",
  },
  {
    title: "Energy & Utilities",
    icon: <Bolt />,
    description:
      "Scalable renewable energy solutions supporting utility-scale operations.",
    link: "/industries/EnergyUtilities",
    image: "public/images/solar-panel.jpg",
  },
  {
    title: "Manufacturing",
    icon: <Factory />,
    description:
      "Optimized solar and wind systems for heavy and light manufacturing units.",
    link: "/industries/Manufacturing",
    image: "public/images/solar-panel.jpg",
  },
  {
    title: "Logistics & Warehousing",
    icon: <Warehouse />,
    description:
      "Cost-effective renewable energy for warehouses and logistics hubs.",
    link: "/industries/LogisticsWarehouse",
    image: "public/images/solar-panel.jpg",
  },
  {
    title: "Oil & Gas (Transition)",
    icon: <Amphora />,
    description:
      "Hybrid renewable systems supporting energy transition initiatives.",
    link: "/industries/OilGas",
    image: "public/images/solar-panel.jpg",
  },
];


export default function Industries() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], ["0%", "20%"]);

  return (
    <div className="min-h-screen" style={{ fontFamily: "Raleway" }}>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
        {/* Background image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            y: bgY,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1800&q=80')",
          }}
        />

        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/90 via-secondary/80 to-primary/70" />

        {/* Decorative accent circle */}
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-accent/20 animate-pulse" />
        <div className="absolute bottom-16 -right-24 w-64 h-64 rounded-full bg-bg-primary/10 animate-pulse" />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-widest text-accent text-center font-lato mb-4">
              Industrial Clean Energy
            </p>

            {/* Heading */}
            <h1 className="text-6xl md:text-[4.8rem] font-bold text-center text-bg-primary leading-[1.1] mb-6 font-raleway">
              Powering Industries <br /> with Solar & Wind Energy
            </h1>

            {/* Description */}
            <p className="text-lg text-center text-bg-primary/80 leading-relaxed font-lato mb-8">
              Scalable, reliable, and sustainable clean energy solutions
              engineered for modern industries.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center ">
              <Link
                to="/industries"
                className="px-6 py-3 bg-primary rounded-full border border-accent text-white font-semibold hover:bg-accent hover:border-primary hover:text-primary transition"
              >
                Explore Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative overflow-hidden bg-[#F6FBF9] py-24 pb-36 font-lato">
        {/* Abstract background shapes */}
        <div className="absolute -top-24 -left-24 w-105 h-105 bg-linear-to-br from-[#9FE870]/40 to-[#4CAF50]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-130 h-130 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl" />

        {/* Giant outline text */}
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[15rem] font-extrabold font-lato text-transparent stroke-[1px] stroke-primary/10 pointer-events-none">
          ENERGY
        </h2>

        {/* MAIN CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          {/* TEXT BLOCK – 50% */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1 text-xs font-Lato uppercase tracking-widest bg-primary/10 text-primary rounded-full">
              Credible Facts
            </span>

            <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight font-raleway">
              Redefining Industrial <br /> Clean Energy
            </h3>

            <p className="text-secondary-dark text-lg font-Lato max-w-xl">
              We engineer high-performance solar and wind solutions that power
              industries with reliability, scalability, and sustainability at
              the core.
            </p>

            {/* Glass stats */}
            <div className="flex gap-6 pt-4">
              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl px-6 py-5 shadow-lg">
                <p className="text-3xl font-bold text-primary">18K+</p>
                <p className="text-xs uppercase text-secondary-dark tracking-wide">
                  MW Installed
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl px-6 py-5 shadow-lg">
                <p className="text-3xl font-bold text-primary">2.4K+</p>
                <p className="text-xs uppercase text-secondary-dark tracking-wide">
                  Clients Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* IMAGE BLOCK – 50% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              {/* MAIN IMAGE */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80"
                  alt="Solar installation"
                  className="w-full h-100 object-cover"
                />

                {/* EXPERIENCE BADGE */}
                <div className="absolute bottom-6 right-6 bg-primary text-bg-primary rounded-2xl px-6 py-5 shadow-xl">
                  <p className="text-3xl font-bold font-raleway">120+</p>
                  <p className="text-sm font-lato opacity-90">
                    Solar & Wind <br /> Projects Completed
                  </p>
                </div>
              </div>

              {/* SECONDARY OVERLAPPING IMAGE */}
              <div className="absolute -bottom-16 -left-12 w-64">
                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"
                    alt="Solar powered home"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="relative py-20 bg-linear-to-b from-bg-primary to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-2 font-raleway text-primary">
            Driving Industries with Clean Energy
          </h2>

          <p className="text-2xl md:text-xl opacity-90 mb-20 font-lato text-secondary-dark">
            Smart solar and wind solutions for every sector
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 25px 40px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="relative rounded-2xl p-6 pt-10 bg-white shadow-md
                     flex flex-col min-h-57.5
                     border-t-2 border-accent overflow-visible"
              >
                {/* Hover Image Overlay */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-cover bg-center
                       opacity-0 pointer-events-none rounded-2xl z-0"
                  style={{ backgroundImage: `url(${industry.image})` }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating Icon */}
                <motion.div
                  className="absolute -top-5 left-1/2 -translate-x-1/2
                       w-12 h-12 flex items-center justify-center
                       rounded-full bg-secondary text-white text-2xl
                       shadow-sm z-10"
                  whileHover={{
                    scale: 1.3,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                >
                  {industry.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-bold mt-4 mb-3 font-raleway text-primary relative z-10">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-sm mb-4 grow font-lato text-secondary-dark relative z-10">
                  {industry.description}
                </p>

                {/* CTA */}
                <Link
                  to={industry.link}
                  className="mt-auto font-semibold text-accent relative z-10 hover:text-primary"
                >
                  Explore →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
