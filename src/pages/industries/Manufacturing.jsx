import { motion } from "framer-motion";
import { Zap, Leaf, BatteryCharging } from "lucide-react";
import { Link } from "react-router";

export default function ManufacturingIndustry() {
  const products = [
    {
      title: "Automated Assembly Line Systems",
      description:
        "Robust automation solutions enabling efficient, precise, and continuous production operations for manufacturing plants.",
    },
    {
      title: "Industrial Robotics And Machinery",
      description:
        "High-performance robotics and machinery designed for accuracy, speed, and safety in large-scale manufacturing processes.",
    },
    {
      title: "Energy Optimization Systems Manufacturing",
      description:
        "Advanced energy management solutions to optimize power consumption and reduce operational costs in manufacturing facilities.",
    },
    {
      title: "Smart Quality Control Platforms",
      description:
        "Automated inspection and monitoring platforms ensuring high product quality, consistency, and defect reduction across lines.",
    },
    {
      title: "Industrial Safety And Compliance Solutions",
      description:
        "Integrated safety systems maintaining regulatory compliance and minimizing risks in complex manufacturing operations.",
    },
    {
      title: "Predictive Maintenance And Analytics",
      description:
        "Digital solutions providing predictive maintenance, real-time analytics, and operational insights to improve machinery uptime.",
    },
  ];

  return (
    <div className="bg-bg-primary text-primary font-lato">
      {/* HERO SECTION */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center overflow-hidden
             bg-linear-to-br from-primary via-secondary to-secondary
             pt-20
             max-sm:min-h-[46vh]
             max-sm:pt-20
             max-sm:pb-10
             max-sm:items-start"
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('/images/solarauto.jpg')] bg-cover bg-center opacity-20" />

        {/* CENTERED CONTENT */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-3xl
               max-sm:px-4 max-sm:mt-6"
        >
          <h1
            className="font-raleway text-5xl md:text-6xl font-bold text-bg-primary mb-6
                 max-sm:text-3xl max-sm:mb-3"
          >
            Manufacturing Industry
          </h1>

          <p
            className="text-lg md:text-xl text-bg-primary/80 mb-10 leading-relaxed
                 max-sm:text-sm max-sm:mb-0"
          >
            Advanced solutions for modern manufacturing, enhancing productivity,
            sustainability, and operational efficiency.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section
        className="relative py-28 overflow-hidden
             max-sm:py-16"
        style={{
          background:
            "linear-gradient(135deg, #DAF1DE 0%, #EBE7D9 50%, #BEB69B 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(190,182,155,0.08),transparent_45%)]" />

        <div
          className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center
               max-sm:grid-cols-1 max-sm:gap-12 max-sm:px-4"
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-raleway text-5xl mb-4 font-bold text-primary max-sm:text-3xl max-sm:mb-3">
              Industry Challenges
            </h2>

            <div className="w-12 h-1 bg-accent rounded-full mt-3 mb-6 max-sm:mb-4" />

            <p className="font-lato text-secondary leading-relaxed max-w-md max-sm:text-sm">
              Manufacturing industries face high production demands, energy
              consumption, equipment maintenance challenges, and the need to
              integrate smart technologies.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-sm:space-y-4"
          >
            {/* CARD 1 */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 pl-16 max-sm:p-5 max-sm:pl-12">
              <div
                className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center
                     max-sm:-left-3 max-sm:w-10 max-sm:h-10"
              >
                <Zap className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary text-sm">
                High Production Demands
              </h4>
              <p className="text-xs text-secondary-dark mt-1">
                Manufacturers must optimize output without compromising quality
                or safety.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 pl-16 ml-6 max-sm:ml-0 max-sm:p-5 max-sm:pl-12">
              <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center max-sm:-left-3 max-sm:w-10 max-sm:h-10">
                <Leaf className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary text-sm">
                Energy Efficiency
              </h4>
              <p className="text-xs text-secondary-dark mt-1">
                Reducing energy consumption while maintaining high throughput is
                critical.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 pl-16 ml-12 max-sm:ml-0 max-sm:p-5 max-sm:pl-12">
              <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center max-sm:-left-3 max-sm:w-10 max-sm:h-10">
                <BatteryCharging className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary text-sm">
                Equipment Reliability
              </h4>
              <p className="text-xs text-secondary-dark mt-1">
                Smart monitoring and predictive maintenance help prevent costly
                downtime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS OFFERED SECTION */}
      <section
        className="relative py-28 overflow-hidden
  bg-linear-to-b from-primary via-secondary to-primary
  max-sm:py-16"
      >
        <div className="relative max-w-7xl mx-auto px-6 max-sm:px-4">
          {/* SECTION HEADER */}
          <div className="text-center mb-24 max-sm:mb-14">
            <h2
              className="font-raleway text-5xl md:text-5xl font-bold tracking-wider text-bg-primary
        max-sm:text-3xl"
            >
              Solutions Offered
            </h2>

            <p className="mt-4 max-w-2xl mx-auto font-lato text-accent max-sm:text-sm max-sm:mt-3 max-sm:px-2">
              End-to-end manufacturing solutions integrating automation, energy
              efficiency, and smart factory technologies.
            </p>
          </div>

          <div className="relative hidden md:grid grid-cols-3 gap-20 items-start">
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

            <Card
              Icon={Zap}
              title="Automation Systems"
              delay={0}
              desc="High-performance automation to optimize production efficiency."
            />
            <Card
              Icon={Leaf}
              title="Energy Optimization"
              delay={0.1}
              offset
              desc="Reduce energy consumption across manufacturing processes."
            />
            <Card
              Icon={BatteryCharging}
              title="Smart Factory Solutions"
              delay={0.2}
              desc="IoT and predictive maintenance for uninterrupted operations."
            />
          </div>

          {/* MOBILE STACK */}
          <div className="md:hidden flex flex-col gap-12">
            {[
              {
                title: "Automation Systems",
                desc: "High-performance automation to optimize production efficiency.",
                Icon: Zap,
              },
              {
                title: "Energy Optimization",
                desc: "Reduce energy consumption across manufacturing processes.",
                Icon: Leaf,
              },
              {
                title: "Smart Factory Solutions",
                desc: "IoT and predictive maintenance for uninterrupted operations.",
                Icon: BatteryCharging,
              },
            ].map(({ title, desc, Icon }, i) => (
              <div key={i} className="relative px-2">
                <div className="absolute inset-0 -skew-x-6 border border-accent/60" />
                <div className="relative bg-bg-primary p-8 -skew-x-6">
                  <div className="skew-x-6">
                    <Icon className="text-primary mb-4" size={28} />
                    <h3 className="font-raleway uppercase font-semibold text-primary mb-2 text-sm">
                      {title}
                    </h3>
                    <p className="font-lato text-xs leading-relaxed text-secondary">
                      {desc}
                    </p>
                  </div>
                </div>
                {i !== 2 && (
                  <div className="absolute left-1/2 -bottom-8 h-8 w-0.5 bg-accent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="relative py-24 max-sm:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#E0F7F1] to-[#F7FFF5] z-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-6 max-sm:px-4 text-primary z-20"
        >
          <div className="text-center mb-20 max-sm:mb-12">
            <h2 className="font-raleway text-5xl font-bold max-sm:text-3xl">
              Related Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-sm:gap-10">
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
                {/* Static Offset Border */}
                <div className="absolute -top-3 -left-3 w-[94%] h-[94%] border-4 border-accent z-0 rounded-xl max-sm:-top-2 max-sm:-left-2 max-sm:w-[96%] max-sm:h-[96%]" />

                <motion.div
                  className="relative bg-white z-10 p-10 max-sm:p-6 shadow-xl rounded-xl overflow-hidden cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                  <h3 className="font-raleway font-semibold text-xl mb-4 text-primary max-sm:text-lg max-sm:mb-3">
                    {item.title}
                  </h3>
                  <p className="font-lato text-sm text-secondary leading-relaxed max-sm:text-xs">
                    {item.description}
                  </p>
                  <motion.div
                    className="absolute inset-0 bg-accent opacity-0"
                    whileHover={{ opacity: 0.03 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* BACK BUTTON */}
          <div className="mt-16 text-center max-sm:mt-12">
            <Link
              to="/industries"
              className="inline-block px-8 py-3 bg-primary text-accent font-semibold rounded-xl shadow-lg hover:bg-accent/80 hover:text-primary transition-colors duration-300 mt-6 max-sm:px-6 max-sm:py-2 max-sm:text-sm"
            >
              BACK
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/* Inline Card */
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
