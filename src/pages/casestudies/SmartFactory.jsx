import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { Link } from "react-router";

const SmartFactoryAutomation = () => {
  return (
    <div className="bg-bg-primary text-primary">
      {/* HERO */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* background image */}
        <img
          src="images/casestudy-2.jpg"
          alt="Smart Factory Automation"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        {/* layered overlays */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/90 via-primary/80 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(190,182,155,0.25),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 md:pt-40 pb-20 md:pb-28 grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-accent tracking-widest uppercase text-xs mb-4">
              Case Study
            </p>

            <h1 className="text-3xl md:text-6xl font-semibold text-bg-primary leading-tight">
              Smart Factory <br /> Automation
            </h1>

            <p className="mt-6 md:mt-8 max-w-xl text-bg-primary/85 text-base md:text-lg leading-relaxed">
              Implementing advanced automation solutions to optimize production
              lines, reduce downtime, and increase overall manufacturing
              efficiency with intelligent IoT and robotics integration.
            </p>
          </motion.div>

          {/* RIGHT – hero stats / highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="self-end"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {[
                { value: "50%", label: "Production Boost" },
                { value: "70%", label: "Downtime Reduced" },
                { value: "120+", label: "Connected Machines" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="backdrop-blur-xl bg-bg-primary/10 border border-bg-primary/20 rounded-2xl p-4 md:p-6"
                >
                  <p className="text-xl md:text-2xl font-semibold text-bg-primary">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-bg-primary/70 uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-20 py-32 max-sm:px-6 max-sm:py-20">
        <div className="relative bg-[#F9FAFB] rounded-3xl px-8 md:px-16 py-16 max-sm:px-6 max-sm:py-10 shadow-lg overflow-hidden">
          {/* subtle radial accent in background */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-accent/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/5 rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 max-sm:gap-8 items-start relative z-10">
            {/* LEFT TITLE */}
            <div className="lg:col-span-4 flex flex-col justify-center max-sm:items-start">
              {/* Icon */}
              <Layers className="h-8 w-8 text-accent mb-4 max-sm:h-6 max-sm:w-6" />

              <h2 className="text-4xl font-bold text-primary leading-tight max-sm:text-3xl">
                Overview
              </h2>

              <p className="mt-3 text-sm uppercase tracking-wider text-primary/50">
                Project Context
              </p>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-8 justify-center">
              <p className="text-lg leading-relaxed text-primary/80 max-sm:text-base">
                This smart factory project integrates cutting-edge automation
                technology across production lines, using robotics, AI-powered
                predictive maintenance, and IoT sensors to streamline
                operations, reduce waste, and maximize output while maintaining
                quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES + SOLUTION */}
      <section className="px-20 py-32 bg-primary max-sm:px-6 max-sm:py-20">
        <div className="grid lg:grid-cols-2 gap-20 max-sm:gap-10">
          {/* CHALLENGES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-accent/25 p-10 max-sm:p-6 bg-bg-primary shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-2xl font-semibold mb-8 max-sm:mb-5 max-sm:text-xl">
              Challenges
            </h3>

            <ul className="space-y-6 max-sm:space-y-4 text-primary/80 text-base max-sm:text-sm">
              {[
                "Inefficient manual processes causing production delays",
                "High operational costs due to unplanned downtime",
                "Difficulty integrating legacy machines with modern automation",
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
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
            <h3 className="text-2xl font-semibold mb-8 max-sm:mb-5 max-sm:text-xl">
              Solution
            </h3>

            <p className="leading-relaxed text-bg-primary/85 text-lg max-sm:text-base">
              Deployed an integrated smart automation system combining robotics,
              conveyor automation, IoT sensors, and predictive maintenance AI
              algorithms to optimize production throughput, minimize downtime,
              and enhance operational efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-20 py-24 max-sm:px-6 max-sm:py-16">
        <div>
          <h2 className="text-4xl font-semibold mb-14 px-2 max-sm:text-2xl max-sm:mb-8">
            Business Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-12 max-sm:gap-6">
            {[
              { value: "50%", label: "Production Boost" },
              { value: "70%", label: "Downtime Reduced" },
              { value: "120+", label: "Connected Machines" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative rounded-2xl p-10 max-sm:p-6 bg-bg-primary/10 border border-accent/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              >
                <p className="text-4xl font-semibold text-accent max-sm:text-3xl">
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

export default SmartFactoryAutomation;
