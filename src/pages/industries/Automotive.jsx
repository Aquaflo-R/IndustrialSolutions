import { motion } from "framer-motion";
import { Zap, Leaf, BatteryCharging, Sun, Wind, Battery } from "lucide-react";

const solutions = [
  {
    icon: Sun,
    title: "Solar Power Systems",
    desc: "Efficient, scalable solar solutions for homes and industries.",
  },
  {
    icon: Wind,
    title: "Wind Energy Integration",
    desc: "Seamless integration of wind turbines with minimal disruption.",
  },
  {
    icon: Battery,
    title: "Energy Storage",
    desc: "Reliable storage systems to maximize renewable energy usage.",
  },
];
export default function AutomotiveIndustry() {
  const radius = 100; // distance from hub in left schematic
  const center = 120; // center position

  return (
    <div className="bg-bg-primary text-primary font-lato">
      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary via-secondary to-secondary">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('images/solar-panel.jpg')] bg-cover bg-center opacity-20" />

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

    

      <section className="relative py-28 bg-bg-primary overflow-hidden">
        {/* Background solar grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <pattern
            id="solarGrid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="80"
              height="80"
              fill="none"
              stroke="#235347"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#solarGrid)" />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto px-6 text-primary"
        >
          <h2 className="font-raleway text-4xl font-bold mb-16">
            Related Products
          </h2>

          <div className="relative flex flex-wrap justify-center gap-10">
            {[
              "Industrial Solar Inverters",
              "Wind Turbine Components",
              "Mounting Structures & BOS",
            ].map((product, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl shadow-2xl p-8 w-72 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
              >
                <h3 className="font-raleway font-semibold text-xl mb-2">
                  {product}
                </h3>
                <p className="text-sm text-secondary">
                  High-quality renewable energy components built for industrial
                  reliability and efficiency.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
