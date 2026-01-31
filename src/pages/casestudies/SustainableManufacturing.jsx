import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Link } from "react-router";

const SustainableManufacturing = () => {
  return (
    <div className="bg-bg-primary text-primary">
      {/* HERO */}
      <section className="relative min-h-[85vh] max-sm:min-h-[70vh] overflow-hidden">
        {/* background image */}
        <img
          src="images/casestudy-3.jpg"
          alt="Sustainable Manufacturing"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        {/* layered overlays */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(190,182,155,0.25),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 max-sm:pt-24 max-sm:pb-16 grid lg:grid-cols-2 gap-20 max-sm:gap-12">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-accent tracking-widest uppercase text-xs mb-4">
              Case Study
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold text-bg-primary leading-tight max-sm:text-3xl">
              Sustainable <br /> Manufacturing
            </h1>

            <p className="mt-8 max-w-xl text-bg-primary/85 text-lg leading-relaxed max-sm:text-sm max-sm:mt-5">
              Transforming traditional manufacturing operations through
              resource-efficient processes, low-carbon technologies, and
              circular production models to achieve long-term environmental and
              business sustainability.
            </p>
          </motion.div>

          {/* RIGHT – hero highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="self-end max-sm:self-start"
          >
            <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
              {[
                { value: "42%", label: "Energy Optimized" },
                { value: "35%", label: "Waste Reduced" },
                { value: "28%", label: "Emissions Cut" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl bg-bg-primary/10 border border-bg-primary/20 rounded-2xl p-6 max-sm:p-4"
                >
                  <p className="text-2xl font-semibold text-bg-primary max-sm:text-xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-bg-primary/70 uppercase tracking-wide max-sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-20 py-32 max-sm:px-4 max-sm:py-20">
        <div className="relative bg-[#F9FAFB] rounded-3xl px-8 md:px-16 py-16 max-sm:px-6 max-sm:py-10 shadow-lg overflow-hidden">
          {/* subtle radial accents */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 max-sm:gap-8 items-start relative z-10">
            {/* LEFT TITLE */}
            <div className="lg:col-span-4 flex flex-col justify-center max-sm:text-center">
              <Layers className="h-8 w-8 text-accent mb-4 max-sm:mx-auto" />

              <h2 className="text-4xl font-bold text-primary leading-tight max-sm:text-2xl">
                Overview
              </h2>
              <p className="mt-3 text-sm uppercase tracking-wider text-primary/50 max-sm:text-xs">
                Project Context
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-8 justify-center">
              <p className="text-lg leading-relaxed text-primary/80 max-sm:text-sm max-sm:text-center">
                The sustainable manufacturing initiative focused on redesigning
                production workflows to minimize resource consumption, reduce
                environmental impact, and comply with evolving global
                sustainability regulations—without compromising operational
                efficiency or product quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES + SOLUTION */}
      <section className="px-20 py-32 bg-primary max-sm:px-4 max-sm:py-20">
        <div className="grid lg:grid-cols-2 gap-20 max-sm:gap-10">
          {/* CHALLENGES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-accent/25 p-10 max-sm:p-6 bg-bg-primary shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-2xl font-semibold mb-8 max-sm:text-xl max-sm:mb-6">
              Challenges
            </h3>

            <ul className="md:text-lg space-y-6 max-sm:space-y-4 text-primary/80">
              {[
                "High material waste across multiple production stages",
                "Rising energy and water consumption costs",
                "Pressure to meet strict ESG and compliance standards",
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-sm max-sm:text-xs">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOLUTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl text-bg-primary border border-accent p-10 max-sm:p-6 shadow-[0_30px_80px_rgba(11,43,38,0.4)]"
          >
            <h3 className="text-2xl font-semibold mb-8 max-sm:text-xl max-sm:mb-6">
              Solution
            </h3>

            <p className="leading-relaxed text-bg-primary/85 text-lg max-sm:text-sm">
              Implemented sustainable manufacturing practices including
              energy-efficient machinery, closed-loop material recycling,
              optimized water usage systems, and real-time monitoring platforms
              to continuously track and improve environmental performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-20 py-24 max-sm:px-4 max-sm:py-16">
        <div>
          <h2 className="text-4xl font-semibold mb-14 px-2 max-sm:text-2xl max-sm:mb-8">
            Business Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-sm:gap-6">
            {[
              { value: "35%", label: "Waste Reduced" },
              { value: "28%", label: "Carbon Emissions Cut" },
              { value: "22%", label: "Operational Cost Saved" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative rounded-2xl p-10 max-sm:p-6 bg-bg-primary/10 border border-accent/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              >
                <p className="text-4xl font-semibold text-accent max-sm:text-2xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm text-primary uppercase tracking-wide max-sm:text-xs">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-16 text-center max-sm:mt-10">
          <Link
            to="/casestudies"
            className="inline-block px-8 py-3 bg-primary text-accent font-semibold rounded-xl shadow-lg hover:bg-accent/80 hover:text-primary transition-colors duration-300 mt-6 max-sm:mt-4"
          >
            BACK
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SustainableManufacturing;
