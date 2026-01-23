import { motion } from "framer-motion";
import { AlertTriangle, Leaf, Package } from "lucide-react";

export default function Automotive() {
  return (
    <div className="bg-bg-primary text-secondary-dark overflow-hidden relative font-raleway">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Hero Image */}
        <img
          src="public/images/solar-panel.jpg"
          alt="Automotive Renewable Energy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/40 to-accent/30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Automotive Industry
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-3xl mx-auto">
            Powering automotive manufacturing with efficient, reliable, and sustainable solar & wind energy systems.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="relative py-20 overflow-hidden bg-linear-to-b from-primary/10 to-secondary/10">
  {/* Background abstract SVGs */}
  <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
    {/* Wind turbines */}
    <g opacity="0.05" stroke="#0B2B26" strokeWidth="2">
      <line x1="10%" y1="20%" x2="10%" y2="80%" />
      <line x1="10%" y1="50%" x2="15%" y2="40%" />
      <line x1="10%" y1="50%" x2="5%" y2="40%" />
      <line x1="10%" y1="50%" x2="15%" y2="60%" />
      <line x1="10%" y1="50%" x2="5%" y2="60%" />

      <line x1="70%" y1="30%" x2="70%" y2="90%" />
      <line x1="70%" y1="60%" x2="75%" y2="50%" />
      <line x1="70%" y1="60%" x2="65%" y2="50%" />
      <line x1="70%" y1="60%" x2="75%" y2="70%" />
      <line x1="70%" y1="60%" x2="65%" y2="70%" />
    </g>

    {/* Solar panels */}
    <rect x="20%" y="75%" width="20%" height="5%" fill="#4CAF50" opacity="0.08" rx="2" />
    <rect x="60%" y="80%" width="25%" height="6%" fill="#0B2B26" opacity="0.08" rx="2" />

    {/* Abstract energy lines */}
    <path
      d="M0 60 C 20 50, 40 70, 60 60 S 100 50, 120 60"
      stroke="#163832"
      strokeWidth="2"
      opacity="0.05"
      fill="none"
    />
  </svg>

  <div className="max-w-6xl mx-auto px-6 space-y-20">

    {/* Industry Challenges */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlassStack
        title="Industry Challenges"
        icon={<AlertTriangle />}
        items={[
          "High energy consumption in assembly lines",
          "Power instability affecting robotic automation",
          "Strict carbon emission reduction requirements",
        ]}
        compact
      />
    </motion.div>

    {/* Solutions Offered */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlassStack
        title="Solutions Offered"
        icon={<Leaf />}
        items={[
          "On-grid & hybrid solar inverter systems",
          "Wind-assisted renewable energy integration",
          "Smart energy monitoring & optimization",
        ]}
        accent
        compact
      />
    </motion.div>

    {/* Related Products */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <GlassStack
        title="Related Products"
        icon={<Package />}
        items={[
          "Industrial Solar Inverters",
          "Ground & rooftop mounting structures",
          "Wind turbine electrical components",
        ]}
        compact
      />
    </motion.div>
  </div>
</section>

    </div>
  );
}

/* Glass Stack Card */
function GlassStack({ title, items, icon, accent, compact }) {
  return (
    <div className="relative group">
      {/* Layered glass stack background */}
      <div className="absolute inset-0 translate-y-4 scale-[0.97] rounded-3xl bg-gradient-to-tr from-primary/10 via-secondary/10 to-accent/10 blur-sm" />
      <div className="absolute inset-0 translate-y-2 scale-[0.99] rounded-3xl bg-gradient-to-tr from-white/30 to-white/20" />

      {/* Front card */}
      <div
        className={`relative rounded-3xl p-${compact ? "8" : "12"} backdrop-blur-xl p-10 border
          ${accent ? "bg-accent/20 border-accent/40" : "bg-white/60 border-primary/20"}
          shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105`}
      >
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-primary relative after:block after:w-12 after:h-1 after:bg-accent/50 after:rounded mt-1">
            {title}
          </h2>
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative p-4 rounded-lg bg-white/50 backdrop-blur-md border border-primary/10 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <p className="font-lato text-secondary-dark relative z-10 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
