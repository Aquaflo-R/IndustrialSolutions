import { motion } from "framer-motion";
import { Gauge, Layers, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Infrastructure() {
  return (
    <main className="bg-bg-primary text-primary overflow-hidden mt-20">
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-primary">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="images/infrastructure-bg.jpg"
            alt="Renewable energy manufacturing facility"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-b from-primary/90 via-primary/75 to-primary/90" />
        </div>

        {/* WIND TURBINE ABSTRACT */}
        <motion.svg
          viewBox="0 0 600 600"
          className="absolute right-[-15%] top-1/2 -translate-y-1/2
             w-160 h-160
             pointer-events-none z-0"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          <g fill="none" stroke="rgba(233, 231, 225, 0.308)" strokeWidth="2">
            {/* Blade 1 */}
            <path d="M300 70 C340 180 360 260 300 320 C240 260 260 180 300 70 Z" />
            {/* Blade 2 */}
            <path
              d="M300 70 C340 180 360 260 300 320 C240 260 260 180 300 70 Z"
              transform="rotate(120 300 300)"
            />
            {/* Blade 3 */}
            <path
              d="M300 70 C340 180 360 260 300 320 C240 260 260 180 300 70 Z"
              transform="rotate(240 300 300)"
            />
          </g>
        </motion.svg>

        {/* SECOND WIND TURBINE – LEFT BOTTOM */}
        <motion.svg
          viewBox="0 0 600 600"
          className="absolute left-[-12%] bottom-[-12%]
             w-104 h-104
             pointer-events-none z-0"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 90, // keep slower background motion
            ease: "linear",
          }}
        >
          <g
            fill="none"
            stroke="rgba(233, 231, 225, 0.308)" 
            strokeWidth="2" 
          >
            {/* Blade 1 */}
            <path d="M300 70 C340 180 360 260 300 320 C240 260 260 180 300 70 Z" />
            {/* Blade 2 */}
            <path
              d="M300 70 C340 180 360 260 300 320 C240 260 260 180 300 70 Z"
              transform="rotate(120 300 300)"
            />
            {/* Blade 3 */}
            <path
              d="M300 70 C340 180 360 260 300 320 C240 260 260 180 300 70 Z"
              transform="rotate(240 300 300)"
            />
          </g>
        </motion.svg>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative font-raleway text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight"
          >
            <span className="relative z-10 text-bg-primary">
              Built for Scale.
              <br />
              Engineered for Reliability.
            </span>

            <span className="absolute inset-0 text-transparent bg-[linear-gradient(120deg,rgba(190,182,155,0.25)_0%,transparent_45%)] bg-clip-text pointer-events-none">
              Built for Scale.
              <br />
              Engineered for Reliability.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 mx-auto max-w-3xl
                 font-lato text-md md:text-lg text-bg-primary/85"
          >
            Our infrastructure forms the backbone of large-scale solar and wind
            energy manufacturing — delivering performance, precision, and
            long-term durability.
          </motion.p>
        </div>
      </section>

      {/* Factory Overview */}
      <section className="relative py-24 overflow-hidden bg-bg-primary">
        {/* SOFT INDUSTRIAL BACKGROUND */}
        <div className="absolute inset-0">
          {/* base gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-white/60 via-bg-primary to-bg-primary" />

          {/* accent glow – scale & infrastructure */}
          <div className="absolute -top-40 -left-40 w-130 h-130 bg-accent/15 rounded-full blur-[120px]" />

          {/* secondary depth glow */}
          <div className="absolute bottom-0 right-0 w-105 h-105 bg-secondary/10 rounded-full blur-[140px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-raleway text-4xl font-semibold text-primary">
              World-Class Manufacturing Facilities
            </h2>

            <p className="mt-4 text-accent font-semibold uppercase tracking-wider text-sm">
              Precision. Efficiency. Reliability.
            </p>

            <p className="mt-6 font-lato text-primary/75 leading-relaxed">
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
                  <span className="font-lato text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT VISUAL GRID */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { src: "images/infra-1.jpg", extraClass: "-mt-6" }, // shifted up
              { src: "images/infra-2.jpg", extraClass: "" },
              { src: "images/infra-3.jpg", extraClass: "-mt-6" }, // shifted up
              { src: "images/infra-4.jpg", extraClass: "" },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative h-60 rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(11,43,38,0.25)] ${img.extraClass}`}
              >
                <img
                  src={img.src}
                  alt={`Factory ${i + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-secondary/10 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Machinery & Equipment */}
      <section className="relative py-28 bg-primary text-white overflow-hidden">
        {/* depth background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary via-secondary to-primary" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-raleway text-4xl md:text-5xl font-semibold">
              Advanced Machinery & Equipment
            </h2>

            {/* animated divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-6 mx-auto h-0.5 bg-accent"
            />

            <p className="mt-6 font-lato text-white/75 leading-relaxed">
              Our manufacturing facilities are equipped with precision-driven
              machinery and automation systems designed to support high-volume
              solar and wind energy production with consistent accuracy.
            </p>
          </motion.div>

          {/* CAPABILITIES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            className="mt-20 grid md:grid-cols-3 gap-10"
          >
            {[
              {
                title: "Automated Fabrication",
                desc: "CNC-controlled systems delivering repeatable and precise component manufacturing.",
              },
              {
                title: "Precision Assembly Lines",
                desc: "Optimized workflows engineered for accuracy, throughput, and quality control.",
              },
              {
                title: "Testing & Calibration",
                desc: "Integrated in-house testing ensuring performance, safety, and durability standards.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
            relative p-8 rounded-2xl
            bg-white/5 backdrop-blur
            border border-white/10
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            hover:-translate-y-1.5
            transition-all duration-300
          "
              >
                {/* index */}
                <div className="absolute top-6 right-6 text-accent/30 font-raleway text-3xl font-semibold">
                  0{i + 1}
                </div>

                <h3 className="font-raleway text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 font-lato text-white/70 leading-relaxed">
                  {item.desc}
                </p>

                {/* base line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-white/5" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Production Capacity */}
      <section className="relative py-16 bg-[#F2F7F5] overflow-hidden">
        {/* soft industrial wash */}
        <div className="absolute inset-0 bg-linear-to-r from-[#F2F7F5] via-[#E7F1EE] to-[#F2F7F5]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-raleway text-3xl md:text-4xl font-semibold text-primary">
              High-Volume Production Capacity
            </h2>

            <p className="mt-3 font-lato text-primary/70">
              Designed for continuous output across large-scale renewable
              deployments.
            </p>
          </motion.div>

          {/* FLOW LINE */}
          <div className="mt-12 relative">
            {/* main line */}
            <div className="absolute top-5 left-0 right-0 h-px bg-primary/20" />

            <div className="grid md:grid-cols-3 gap-12 relative">
              {[
                {
                  label: "Scalable Lines",
                  desc: "Production systems built to expand without disruption",
                },
                {
                  label: "Multi-Shift Ops",
                  desc: "Round-the-clock manufacturing capability",
                },
                {
                  label: "Rapid Ramp-Up",
                  desc: "Quick capacity increase for high-demand projects",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* node */}
                  <div className="w-3 h-3 rounded-full bg-accent mb-4" />

                  <h4 className="font-raleway text-lg font-semibold text-primary">
                    {item.label}
                  </h4>

                  <p className="mt-2 text-sm font-lato text-primary/65 max-w-xs">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* R&D Facilities */}
      <section className="relative py-24 overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {/* base gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-primary via-secondary to-secondary-dark" />

          {/* subtle depth glow */}
          <div className="absolute -top-32 -right-32 w-105 h-105 bg-accent/10 rounded-full blur-[140px]" />

          {/* noise */}
          <div className="absolute inset-0 opacity-[0.025] bg-[url('/noise.png')]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center font-raleway text-5xl font-semibold text-bg-primary"
          >
            Research & Development Excellence
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 max-w-2xl mx-auto text-center font-lato text-bg-primary/70"
          >
            Advanced research infrastructure enabling precision engineering and
            next-generation solar and wind technologies.
          </motion.p>

          {/* INFOGRAPHIC BLOCKS */}
          <div className="mt-20 flex flex-col md:flex-row justify-center gap-14">
            {[
              {
                title: "Efficiency Optimization",
                desc: "Advanced simulation models enhance energy output, thermal stability, and conversion accuracy.",
                Icon: Gauge,
              },
              {
                title: "Material Innovation",
                desc: "Next-generation materials improve durability, corrosion resistance, and operational lifespan significantly.",
                Icon: Layers,
              },
              {
                title: "Performance Validation",
                desc: "Rigorous testing protocols verify efficiency, safety compliance, and real-world operating conditions.",
                Icon: ShieldCheck,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative w-75 group"
              >
                {/* offset frame — UNCHANGED */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-accent/60" />

                {/* main card */}
                <div className="relative bg-bg-primary p-8 transition-shadow duration-300 group-hover:shadow-[0_18px_60px_rgba(11,43,38,0.35)]">
                  {/* icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 180, damping: 10 }}
                    className="w-10 h-10 mb-6 rounded-full bg-accent/30 flex items-center justify-center"
                  >
                    <item.Icon size={18} className="text-[#a89557]" />
                  </motion.div>

                  <h3 className="font-raleway text-lg font-semibold text-primary mb-3">
                    {item.title}
                  </h3>

                  <p className="font-lato text-sm text-primary/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Standards */}
      <section className="relative py-20 overflow-hidden">
        {/* LIGHT BACKGROUND — UNIQUE */}
        <div className="absolute inset-0">
          {/* soft mineral gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-[#F4FAF7] via-[#E6F3EC] to-bg-primary" />

          {/* subtle linear texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(11,43,38,0.12) 0px, rgba(11,43,38,0.12) 1px, transparent 1px, transparent 14px)",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-raleway text-4xl font-semibold text-primary leading-11.5">
              Safety, Quality & Global Standards
            </h2>

            <p className="mt-6 max-w-md font-lato text-primary/70 leading-relaxed">
              Safety and compliance are embedded across our infrastructure,
              ensuring every product aligns with international quality,
              environmental, and operational standards.
            </p>
          </motion.div>

          {/* RIGHT — STANDARDS LIST */}
          <div className="space-y-8">
            {[
              {
                title: "ISO & Global Compliance",
                desc: "Manufacturing aligned with international certification and regulatory benchmarks.",
              },
              {
                title: "Strict Safety Protocols",
                desc: "Multi-layered safety systems across production, handling, and testing environments.",
              },
              {
                title: "Sustainable Manufacturing",
                desc: "Environment-conscious processes reducing emissions, waste, and resource consumption.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="flex gap-6 items-start p-4 rounded-lg transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-lg"
              >
                {/* compliance marker */}
                <span className="mt-2 w-3 h-3 border-2 border-accent rotate-45 shrink-0" />

                <div>
                  <h4 className="font-raleway text-base font-semibold text-primary">
                    {item.title}
                  </h4>
                  <p className="mt-1 font-lato text-sm text-primary/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Infrastructure;
