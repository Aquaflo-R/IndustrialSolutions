import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Infrastructure() {
  return (
    <main className="bg-bg-primary text-primary overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-factory.jpg"
            alt="Renewable energy manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/90" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="font-raleway text-5xl md:text-6xl font-semibold text-bg-primary leading-tight"
          >
            Built for Scale.<br />Engineered for Reliability.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-2xl font-lato text-lg text-bg-primary/85"
          >
            Our infrastructure forms the backbone of large-scale solar and wind
            energy manufacturing — delivering performance, precision, and
            long-term durability.
          </motion.p>
        </div>
      </section>

      {/* Factory Overview */}
      <section className="py-28 bg-secondary text-bg-primary">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-raleway text-4xl font-semibold">
              World-Class Manufacturing Facilities
            </h2>
            <p className="mt-6 font-lato text-bg-primary/80">
              Our manufacturing units are strategically designed to support
              high-volume renewable energy equipment production, ensuring
              consistent quality and operational efficiency.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Large-scale production floors",
                "Advanced material handling systems",
                "Optimized logistics flow",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-lato">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="h-48 bg-secondary-dark rounded-xl" />
            <div className="h-48 bg-secondary-dark rounded-xl" />
            <div className="h-48 bg-secondary-dark rounded-xl" />
            <div className="h-48 bg-secondary-dark rounded-xl" />
          </motion.div>
        </div>
      </section>

      {/* Machinery & Equipment */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-raleway text-4xl font-semibold"
          >
            Advanced Machinery & Equipment
          </motion.h2>

          <p className="mt-6 max-w-3xl font-lato text-primary/80">
            Equipped with state-of-the-art machinery, our facilities support
            precision fabrication, assembly, and testing of solar and wind
            energy components.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "CNC & automated fabrication systems",
              "High-accuracy assembly lines",
              "In-house testing & calibration",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/60 backdrop-blur rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-6">
                  <span className="w-3 h-3 bg-accent rounded-full" />
                </div>
                <p className="font-lato">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="py-28 bg-secondary-dark text-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-raleway text-4xl font-semibold"
          >
            High-Volume Production Capacity
          </motion.h2>

          <p className="mt-6 max-w-3xl font-lato text-bg-primary/80">
            Our infrastructure is built to support utility-scale renewable
            deployments without compromising quality or timelines.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              "Scalable production lines",
              "Multi-shift operational capability",
              "Rapid ramp-up for high-demand projects",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-accent pl-6"
              >
                <p className="font-lato">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Facilities */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-raleway text-4xl font-semibold"
          >
            Research & Development Excellence
          </motion.h2>

          <p className="mt-6 max-w-2xl mx-auto font-lato text-primary/80">
            Dedicated R&D facilities drive continuous innovation, enabling
            next-generation solar and wind energy solutions.
          </p>

          <div className="mt-14 flex justify-center gap-10">
            {["Efficiency Optimization", "Material Innovation", "Performance Validation"].map(
              (item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="font-lato text-sm tracking-wide"
                >
                  <span className="block w-10 h-0.5 bg-accent mx-auto mb-4" />
                  {item}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="py-28 bg-secondary text-bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-raleway text-4xl font-semibold"
          >
            Safety, Quality & Global Standards
          </motion.h2>

          <p className="mt-6 max-w-3xl font-lato text-[#DAF1DE]/80">
            Safety and compliance are embedded across our infrastructure,
            ensuring every product meets international quality and
            environmental standards.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              "ISO & global compliance frameworks",
              "Strict safety protocols",
              "Environment-friendly manufacturing",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="w-4 h-4 border-2 border-[#BEB69B] rounded-sm mt-1" />
                <p className="font-lato">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Infrastructure;
