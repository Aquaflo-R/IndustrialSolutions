import { motion } from "framer-motion";
import { Layers } from "lucide-react";

const RenewableAutomotive = () => {
  return (
    <div className="bg-bg-primary text-primary">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* background image */}
        <img
          src="images/casestudy-1.jpg"
          alt="Renewable Automotive"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        {/* layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(190,182,155,0.25),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28 grid lg:grid-cols-2 gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-accent tracking-widest uppercase text-xs mb-4">
              Case Study
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold text-bg-primary leading-tight">
              Renewable Energy <br /> for Automotive
            </h1>

            <p className="mt-8 max-w-xl text-bg-primary/85 text-lg leading-relaxed">
              Powering EV manufacturing facilities with large-scale solar and
              wind infrastructure to achieve energy resilience and long-term
              sustainability.
            </p>
          </motion.div>

          {/* RIGHT – quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="self-end"
          >
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "38%", label: "Energy Reduced" },
                { value: "24MW", label: "Clean Power" },
                { value: "31%", label: "CO₂ Cut" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl bg-bg-primary/10 border border-bg-primary/20 rounded-2xl p-6"
                >
                  <p className="text-3xl font-semibold text-bg-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-bg-primary/70 uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-20 py-32">
        <div className="relative bg-[#F9FAFB] rounded-3xl px-8 md:px-16 py-16 shadow-lg overflow-hidden">
          {/* subtle radial accent in background */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
            {/* LEFT TITLE */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              {/* Icon instead of vertical span */}
              <Layers className="h-8 w-8 text-accent mb-4" />

              <h2 className="text-4xl font-bold text-primary leading-tight">
                Overview
              </h2>
              <p className="mt-3 text-sm uppercase tracking-wider text-primary/50">
                Project Context
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-8 justify-center">
              <p className="text-lg leading-relaxed text-primary/80">
                A global automotive manufacturer partnered to reduce reliance on
                grid electricity by implementing a hybrid renewable energy
                ecosystem across multiple EV production plants — ensuring
                operational stability while meeting aggressive sustainability
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES + SOLUTION */}
      <section className="px-20 py-32 bg-primary">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* CHALLENGES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-accent/25 p-10 bg-bg-primary shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-2xl font-semibold mb-8">Challenges</h3>

            <ul className="space-y-6 text-primary/80">
              {[
                "Extremely high energy demand during peak production",
                "Strict carbon neutrality targets by 2030",
                "Production downtime risks during grid failures",
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
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
            className="rounded-3xl text-bg-primary border border-accent p-10 shadow-[0_30px_80px_rgba(11,43,38,0.4)]"
          >
            <h3 className="text-2xl font-semibold mb-8">Solution</h3>

            <p className="leading-relaxed text-bg-primary/85 text-lg">
              A hybrid renewable system was deployed, integrating rooftop solar,
              ground-mounted PV arrays, and mid-scale wind turbines. An
              intelligent energy management platform dynamically balances
              generation, storage, and consumption across facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-20 py-32">
        <div>
          <h2 className="text-3xl font-semibold mb-14 px-2">Business Impact</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { value: "38%", label: "Lower Energy Consumption" },
              { value: "24MW", label: "Installed Renewable Capacity" },
              { value: "31%", label: "Carbon Emissions Reduced" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative rounded-2xl p-10 bg-bg-primary border border-accent/30 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              >
                <p className="text-4xl font-semibold text-accent">
                  {item.value}
                </p>
                <p className="mt-3 text-sm text-primary/80 uppercase tracking-wide">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenewableAutomotive;
