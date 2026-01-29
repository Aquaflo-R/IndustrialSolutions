import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router"; 

const caseStudies = [
  {
    id: "renewable-automotive",
    route: "/casestudies/RenewableAutomotive",
    title: "Renewable Energy for Automotive",
    desc: "Implementation of solar + wind solutions for EV production plants.",
    img: "images/casestudy-1.jpg",
    metrics: [
      { value: "38%", label: "Energy Reduction" },
      { value: "24MW", label: "Clean Power" },
    ],
  },
  {
    id: "smart-factory",
    route: "/casestudies/SmartFactory",
    title: "Smart Factory Automation",
    desc: "Optimized assembly line with IoT and AI-based monitoring.",
    img: "images/casestudy-2.jpg",
    metrics: [
      { value: "42%", label: "Downtime Cut" },
      { value: "3.1x", label: "Output Boost" },
    ],
  },
  {
    id: "sustainable-manufacturing",
    route: "/casestudies/SustainableManufacturing",
    title: "Sustainable Manufacturing",
    desc: "Reduced emissions and energy consumption for a steel plant.",
    img: "images/casestudy-3.jpg",
    metrics: [
      { value: "31%", label: "CO₂ Reduction" },
      { value: "18%", label: "Cost Saved" },
    ],
  },
];

// Metric Component with counting animation on hover
const Metric = ({ value, label, hovered }) => {
  const num = parseFloat(value);
  const suffix = value.replace(/[0-9.]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let animation;
    if (hovered) {
      let start = 0;
      const duration = 700; // ms
      const step = () => {
        start += num / (duration / 16);
        if (start < num) {
          setDisplay(Math.round(start));
          animation = requestAnimationFrame(step);
        } else {
          setDisplay(Math.round(num));
        }
      };
      step();
    } else {
      setDisplay(0);
    }
    return () => cancelAnimationFrame(animation);
  }, [hovered, num]);

  return (
    <div>
      {/* VALUE */}
      <p
        className={`font-raleway text-lg font-semibold transition-colors duration-300 ${
          hovered ? "text-bg-primary" : "text-accent"
        }`}
      >
        {display}
        {suffix}
      </p>

      {/* LABEL */}
      <p
        className={`text-xs transition-colors duration-300 ${
          hovered ? "text-bg-primary/80" : "text-primary/90"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[url('images/caseStudy-hero-bg.jpg')] bg-no-repeat bg-cover bg-center" />

        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-raleway text-5xl md:text-6xl font-semibold text-bg-primary leading-tight"
          >
            Case Studies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-bg-primary/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Proof of performance through real-world industrial and energy
            solutions.
          </motion.p>
        </div>
      </section>

      {/* CASE STUDY LISTING */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {caseStudies.map((item, i) => {
            const isHovered = hoveredCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative rounded-2xl overflow-hidden bg-bg-primary/90 border border-accent shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_28px_70px_rgba(11,43,38,0.35)] hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* HOVER IMAGE */}
                <motion.div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/55 to-primary/35" />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10 p-6 min-h-55 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`font-raleway text-xl font-semibold transition-colors duration-300 ${
                        isHovered ? "text-bg-primary" : "text-primary"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 font-lato text-sm leading-relaxed transition-colors duration-300 ${
                        isHovered ? "text-bg-primary/90" : "text-primary/90"
                      }`}
                    >
                      {item.desc}
                    </p>

                    {/* METRICS */}
                    <div className="mt-5 grid grid-cols-2 gap-4">
                      {item.metrics.map((metric, idx) => (
                        <Metric
                          key={idx}
                          value={metric.value}
                          label={metric.label}
                          hovered={isHovered}
                        />
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to={item.route}
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                      isHovered ? "text-bg-primary" : "text-accent"
                    }`}
                  >
                    View Case Study
                    <span className="inline-block h-px w-6 bg-current group-hover:w-10 transition-all duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
