import { motion } from "framer-motion";
import { Zap, Leaf, BatteryCharging, Sun, Wind, Battery } from "lucide-react";

export default function AutomotiveIndustry() {
  const products = [
    {
      title: "Industrial Solar Inverter System",
      description:
        "High-performance solar inverters delivering stable output and long-term reliability for large-scale solar installations.",
    },
    {
      title: "Precision Wind Turbine Components",
      description:
        "Precision-engineered wind turbine components ensuring consistent power generation and operational safety.",
    },
    {
      title: "Mounting Structures and BOS Kits",
      description:
        "Robust mounting structures and balance-of-system components for stability, alignment, and long service life.",
    },
    {
      title: "EV Charging Infrastructure Solutions",
      description:
        "Smart, scalable EV charging solutions supporting automotive plants, fleet charging, and mobility hubs.",
    },
    {
      title: "Hybrid Solar & Wind Energy Systems",
      description:
        "Integrated solar & wind hybrid systems powering automotive production facilities with lower emissions.",
    },
    {
      title: "Energy Storage Systems for Facilities",
      description:
        "Advanced battery storage enabling peak shaving, load balancing, and uninterrupted power supply.",
    },
  ];

  return (
    <div className="bg-bg-primary text-primary font-lato">
      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary via-secondary to-secondary">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('/images/solarauto.jpeg')] bg-cover bg-center opacity-20" />

        {/* CENTERED CONTENT */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="font-raleway text-5xl md:text-6xl font-bold text-bg-primary mb-6">
            Automotive Industry
          </h1>

          <p className="text-lg md:text-xl text-bg-primary/80 mb-10 leading-relaxed">
            Clean, resilient and scalable renewable energy systems supporting
            next-generation automotive manufacturing.
          </p>
        </motion.div>
      </section>

      {/* PREMIUM ANIMATED DIVIDER */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="origin-left h-px bg-linear-to-r from-transparent via-secondary-dark to-transparent max-w-5xl mx-auto"
      />

      {/* CONTENT SECTION */}
      <section
        className="relative py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #DAF1DE 0%, #EBE7D9 50%, #BEB69B 100%)",
        }}
      >
        {/* VERY SOFT OVERLAY TOUCH */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(190,182,155,0.08),transparent_45%)]" />

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-raleway text-5xl mb-4 font-bold text-primary">
              Industry Challenges
            </h2>

            {/* SMALL DESIGN TOUCH */}
            <div className="w-12 h-1 bg-accent rounded-full mt-3 mb-6" />

            <p className="font-lato text-secondary leading-relaxed max-w-md">
              Automotive manufacturing faces high energy demands, strict
              emission regulations, and power reliability challenges that impact
              operational efficiency.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* CARD 1 */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 pl-16">
              <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Zap className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary">
                High Energy Consumption
              </h4>
              <p className="text-sm text-secondary-dark">
                Automotive plants require continuous power for robotics,
                assembly lines, and testing operations.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 pl-16 ml-6">
              <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Leaf className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary">
                Emission Reduction Pressure
              </h4>
              <p className="text-sm text-secondary-dark">
                Manufacturers must meet strict sustainability regulations and
                global carbon reduction targets.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 pl-16 ml-12">
              <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <BatteryCharging className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary">
                Power Reliability Challenges
              </h4>
              <p className="text-sm text-secondary-dark">
                Automated production demands uninterrupted, stable energy to
                prevent costly operational downtime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="relative py-28 overflow-hidden
      bg-linear-to-b from-primary via-secondary to-primary"
      >
        <div className="relative max-w-7xl mx-auto px-6">
          {/* SECTION HEADER */}
          <div className="text-center mb-24">
            <h2 className="font-raleway text-5xl md:text-5xl font-bold tracking-wider text-bg-primary">
              Solutions Offered
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-lato text-accent">
              End-to-end renewable energy solutions engineered as an integrated,
              system-driven infrastructure.
            </p>
          </div>

          {/* DESKTOP / TABLET INFOGRAPHIC */}
          <div className="relative hidden md:grid grid-cols-3 gap-20 items-start">
            {/* CONNECTOR LINES */}
            <svg
              className="absolute top-1/2 left-0 w-full h-40 -translate-y-1/2 pointer-events-none"
              viewBox="0 0 1200 200"
              fill="none"
            >
              <motion.path
                d="M260 100 L520 100 L560 80"
                stroke="#BEB69B"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ strokeDashoffset: 24 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              <motion.path
                d="M700 60 L740 100 L960 100"
                stroke="#BEB69B"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ strokeDashoffset: 24 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              />
            </svg>

            {/* SOLAR */}
            <Card
              Icon={Sun}
              title="Solar Power Systems"
              delay={0}
              desc="High-efficiency solar solutions engineered for industrial and commercial energy demands."
            />

            {/* WIND */}
            <Card
              Icon={Wind}
              title="Wind Energy Integration"
              delay={0.1}
              offset
              desc="Scalable wind components designed for consistent and reliable power generation."
            />

            {/* STORAGE */}
            <Card
              Icon={BatteryCharging}
              title="Energy Storage Solutions"
              delay={0.2}
              desc="Advanced battery systems ensuring energy availability and long-term grid stability."
            />
          </div>

          {/* MOBILE STACK */}
          <div className="md:hidden flex flex-col gap-16">
            {[
              {
                title: "Solar Power Systems",
                desc: "High-efficiency solar solutions engineered for industrial and commercial energy demands.",
                Icon: Sun,
              },
              {
                title: "Wind Energy Integration",
                desc: "Scalable wind components designed for consistent and reliable power generation.",
                Icon: Wind,
              },
              {
                title: "Energy Storage Solutions",
                desc: "Advanced battery systems ensuring energy availability and grid stability.",
                Icon: BatteryCharging,
              },
            ].map(({ title, desc, Icon }, i) => (
              <div key={i} className="relative">
                <div className="absolute inset-0 -skew-x-6 border border-accent/60" />
                <div className="relative bg-bg-primary p-8 -skew-x-6">
                  <div className="skew-x-6">
                    <Icon className="text-primary mb-5" size={32} />
                    <h3 className="font-raleway uppercase font-semibold text-primary mb-2">
                      {title}
                    </h3>
                    <p className="font-lato text-sm text-secondary">{desc}</p>
                  </div>
                </div>

                {i !== 2 && (
                  <div className="absolute left-1/2 -bottom-12 h-12 w-0.5 bg-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        {" "}
        {/* Gradient Background */}{" "}
        <div className="absolute inset-0 bg-linear-to-br from-[#E0F7F1] to-[#F7FFF5] z-0" />{" "}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-6 text-primary z-20"
        >
          {" "}
          {/* Section Heading */}{" "}
          <div className="text-center mb-20">
            {" "}
            <h2 className="font-raleway text-5xl font-bold">
              {" "}
              Related Products{" "}
            </h2>{" "}
          </div>{" "}
          {/* Cards */}{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {" "}
            {products.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative"
              >
                {" "}
                {/* Static Offset Border */}{" "}
                <div className="absolute -top-3 -left-3 w-[94%] h-[94%] border-4 border-accent z-0 rounded-xl" />{" "}
                {/* Card with Motion */}{" "}
                <motion.div
                  className="relative bg-white z-10 p-10 shadow-xl rounded-xl overflow-hidden cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                  {" "}
                  {/* Card Content */}{" "}
                  <h3 className="font-raleway font-semibold text-xl mb-4 text-primary">
                    {" "}
                    {item.title}{" "}
                  </h3>{" "}
                  <p className="font-lato text-sm text-secondary leading-relaxed">
                    {" "}
                    {item.description}{" "}
                  </p>{" "}
                  {/* Optional subtle hover overlay */}{" "}
                  <motion.div
                    className="absolute inset-0 bg-accent opacity-0"
                    whileHover={{ opacity: 0.03 }}
                    transition={{ duration: 0.3 }}
                  />{" "}
                </motion.div>{" "}
              </motion.div>
            ))}{" "}
          </div>{" "}
        </motion.div>{" "}
      </section>
    </div>
  );
}

/* Inline Card (same file) */
function Card({ Icon, title, desc, delay, offset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative ${offset ? "mt-8" : ""}`}
    >
      <div className="absolute inset-0 -skew-x-6 border-2 border-accent shadow-[0_0_24px_rgba(190,182,155,0.15)]" />
      <div
        className="relative bg-bg-primary p-9 -skew-x-6 
        hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
      >
        <div className="skew-x-6">
          <Icon className="text-primary mb-6" size={36} strokeWidth={1.5} />
          <h3 className="font-raleway font-semibold uppercase text-primary mb-3">
            {title}
          </h3>
          <p className="font-lato text-sm text-secondary leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
