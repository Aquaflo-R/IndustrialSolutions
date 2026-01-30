import { motion } from "framer-motion";
import { BatteryCharging, Truck, Package, Warehouse } from "lucide-react";
import { Link } from "react-router";

export default function LogisticsIndustry() {
  const products = [
  {
    title: "Automated Warehouse Management Systems",
    description:
      "Advanced software and automation solutions for optimized inventory control, storage, and operational efficiency in warehouses.",
  },
  {
    title: "Fleet Tracking And Management Solutions",
    description:
      "Real-time fleet monitoring platforms improving route optimization, vehicle utilization, and logistics efficiency across operations.",
  },
  {
    title: "Smart Loading And Unloading Equipment",
    description:
      "Precision equipment enabling safe, fast, and efficient material handling in warehouses and distribution centers.",
  },
  {
    title: "Energy Efficient Warehouse Systems",
    description:
      "Sustainable energy solutions reducing electricity consumption and improving operational efficiency in logistics facilities.",
  },
  {
    title: "IoT Monitoring And Analytics Platforms",
    description:
      "Connected sensors and analytics solutions providing real-time operational insights and predictive maintenance for warehouses.",
  },
  {
    title: "Hybrid Automation Solutions Logistics",
    description:
      "Integrated automation combining robotics and intelligent software to optimize warehousing and material handling operations.",
  },
];

  return (
    <div className="bg-bg-primary text-primary font-lato">
      {/* HERO SECTION */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary via-secondary to-secondary  mt-20">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 bg-[url('/images/solarauto.jpg')] bg-cover bg-center opacity-20" />

        {/* CENTERED CONTENT */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <h1 className="font-raleway text-5xl md:text-6xl font-bold text-bg-primary mb-6">
            Logistics & Warehousing
          </h1>

          <p className="text-lg md:text-xl text-bg-primary/80 mb-10 leading-relaxed">
            Advanced solutions for logistics, warehousing, and fleet management to boost efficiency and sustainability.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section
        className="relative py-28 overflow-hidden "
        style={{
          background:
            "linear-gradient(135deg, #DAF1DE 0%, #EBE7D9 50%, #BEB69B 100%)",
        }}
      >
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

            <div className="w-12 h-1 bg-accent rounded-full mt-3 mb-6" />

            <p className="font-lato text-secondary leading-relaxed max-w-md">
              Logistics and warehousing face operational inefficiencies, high energy consumption, fleet management complexity, and growing demands for sustainability.
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
                <Truck className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary">
                Fleet Management
              </h4>
              <p className="text-sm text-secondary-dark">
                Optimizing delivery routes, monitoring vehicles, and improving efficiency.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 pl-16 ml-6">
              <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Warehouse className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary">
                Warehouse Operations
              </h4>
              <p className="text-sm text-secondary-dark">
                Streamlined storage, retrieval, and order fulfillment with smart systems.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="relative bg-white rounded-2xl shadow-lg p-6 pl-16 ml-12">
              <div className="absolute -left-6 top-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <BatteryCharging className="text-accent" size={22} />
              </div>
              <h4 className="font-raleway font-semibold text-primary">
                Energy Efficiency
              </h4>
              <p className="text-sm text-secondary-dark">
                Reduce operational energy costs with energy-efficient lighting, HVAC, and equipment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS OFFERED SECTION */}
      <section
        className="relative py-28 overflow-hidden bg-linear-to-b from-primary via-secondary to-primary"
      >
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="font-raleway text-5xl md:text-5xl font-bold tracking-wider text-bg-primary">
              Solutions Offered
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-lato text-accent">
              End-to-end logistics and warehousing solutions integrating smart automation, fleet optimization, and sustainable energy systems.
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
              Icon={Truck}
              title="Fleet Optimization"
              delay={0}
              desc="IoT and software solutions to manage logistics fleets efficiently."
            />
            <Card
              Icon={Warehouse}
              title="Warehouse Automation"
              delay={0.1}
              offset
              desc="Smart systems to optimize storage, retrieval, and fulfillment."
            />
            <Card
              Icon={BatteryCharging}
              title="Energy Efficiency"
              delay={0.2}
              desc="Sustainable energy systems powering logistics and warehouse operations."
            />
          </div>

          {/* MOBILE STACK */}
          <div className="md:hidden flex flex-col gap-16">
            {[
              {
                title: "Fleet Optimization",
                desc: "IoT and software solutions to manage logistics fleets efficiently.",
                Icon: Truck,
              },
              {
                title: "Warehouse Automation",
                desc: "Smart systems to optimize storage, retrieval, and fulfillment.",
                Icon: Warehouse,
              },
              {
                title: "Energy Efficiency",
                desc: "Sustainable energy systems powering logistics and warehouse operations.",
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

      {/* RELATED PRODUCTS */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#E0F7F1] to-[#F7FFF5] z-0" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-6 text-primary z-20"
        >
          <div className="text-center mb-20">
            <h2 className="font-raleway text-5xl font-bold">Related Products</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
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
                <div className="absolute -top-3 -left-3 w-[94%] h-[94%] border-4 border-accent z-0 rounded-xl" />

                <motion.div
                  className="relative bg-white z-10 p-10 shadow-xl rounded-xl overflow-hidden cursor-pointer"
                  whileHover={{
                    scale: 1.03,
                    y: -4,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                  <h3 className="font-raleway font-semibold text-xl mb-4 text-primary">
                    {item.title}
                  </h3>
                  <p className="font-lato text-sm text-secondary leading-relaxed">
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
          <div className="mt-16 text-center">
            <Link
              to="/industries"
              className="inline-block px-8 py-3 bg-primary text-accent font-semibold rounded-xl shadow-lg hover:bg-accent/80 hover:text-primary transition-colors duration-300 mt-6"
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
          <p className="font-lato text-sm text-secondary leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}
