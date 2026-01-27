import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";
import { Car, Hospital, Bolt, Factory, Warehouse, Amphora } from "lucide-react";

const industries = [
  {
    title: "Automotive",
    icon: <Car />,
    description:
      "Energy-efficient solutions for automotive manufacturing and assembly plants.",
    link: "/industries/Automotive",
  },
  {
    title: "Pharmaceutical",
    icon: <Hospital />,
    description:
      "Reliable and clean power systems for pharma production and research facilities.",
    link: "/industries/Pharmaceutical",
  },
  {
    title: "Energy & Utilities",
    icon: <Bolt />,
    description:
      "Scalable renewable energy solutions supporting utility-scale operations.",
    link: "/industries/EnergyUtilities",
  },
  {
    title: "Manufacturing",
    icon: <Factory />,
    description:
      "Optimized solar and wind systems for heavy and light manufacturing units.",
    link: "/industries/Manufacturing",
  },
  {
    title: "Logistics & Warehousing",
    icon: <Warehouse />,
    description:
      "Cost-effective renewable energy for warehouses and logistics hubs.",
    link: "/industries/LogisticsWarehouse",
  },
  {
    title: "Oil & Gas (Transition)",
    icon: <Amphora />,
    description:
      "Hybrid renewable systems supporting energy transition initiatives.",
    link: "/industries/OilGas",
  },
];

export default function Industries() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], ["0%", "20%"]);

  return (
    <div className="min-h-screen font-raleway">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-[url('/images/industry-bg.jpg')]"
          style={{ y: bgY }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-secondary/80 to-primary/70" />

        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-accent/20 animate-pulse" />
        <div className="absolute bottom-16 -right-24 w-64 h-64 rounded-full bg-bg-primary/10 animate-pulse" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-widest text-accent font-lato mb-4">
              Industrial Clean Energy
            </p>

            <h1 className="text-6xl md:text-[4.8rem] font-bold text-bg-primary leading-tight mb-6">
              Powering Industries <br /> with Solar & Wind Energy
            </h1>

            <p className="text-lg text-bg-primary/80 font-lato mb-8">
              Scalable, reliable, and sustainable clean energy solutions
              engineered for modern industries.
            </p>

            <div className="flex justify-center">
              <Link
                to="/industries"
                className="px-6 py-3 rounded-full border border-accent
                           bg-primary text-white font-semibold
                           hover:bg-accent hover:text-primary transition"
              >
                Explore Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section className="relative overflow-hidden bg-[#F6FBF9] py-24 pb-36 font-lato">
        <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem]
                        bg-gradient-to-br from-[#9FE870]/40 to-[#4CAF50]/30
                        rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem]
                        bg-gradient-to-tr from-primary/20 to-secondary/20
                        rounded-full blur-3xl" />

        <h2 className="absolute inset-0 flex items-center justify-center
                       text-[10rem] md:text-[15rem] font-extrabold
                       text-transparent stroke-[1px] stroke-primary/10
                       pointer-events-none">
          ENERGY
        </h2>

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-1 text-xs uppercase tracking-widest
                             bg-primary/10 text-primary rounded-full">
              Credible Facts
            </span>

            <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight font-raleway">
              Redefining Industrial <br /> Clean Energy
            </h3>

            <p className="text-secondary-dark text-lg max-w-xl">
              We engineer high-performance solar and wind solutions that power
              industries with reliability, scalability, and sustainability at
              the core.
            </p>

            <div className="flex gap-6 pt-4">
              <div className="backdrop-blur-xl bg-white/60 border border-white/40
                              rounded-2xl px-6 py-5 shadow-lg">
                <p className="text-3xl font-bold text-primary">18K+</p>
                <p className="text-xs uppercase text-secondary-dark tracking-wide">
                  MW Installed
                </p>
              </div>

              <div className="backdrop-blur-xl bg-white/60 border border-white/40
                              rounded-2xl px-6 py-5 shadow-lg">
                <p className="text-3xl font-bold text-primary">2.4K+</p>
                <p className="text-xs uppercase text-secondary-dark tracking-wide">
                  Clients Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                  alt="Solar installation"
                  className="w-full h-[26rem] object-cover"
                />

                <div className="absolute bottom-6 right-6 bg-primary text-bg-primary
                                rounded-2xl px-6 py-5 shadow-xl">
                  <p className="text-3xl font-bold">120+</p>
                  <p className="text-sm opacity-90">
                    Solar & Wind <br /> Projects Completed
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-16 -left-12 w-64">
                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                    alt="Solar powered home"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRY CARDS */}
      <section className="relative py-20 bg-gradient-to-b from-bg-primary to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Driving Industries with Clean Energy
          </h2>

          <p className="text-xl text-secondary-dark font-lato mb-20">
            Smart solar and wind solutions for every sector
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-2xl p-6 pt-10 shadow-md
                           border-t-2 border-accent flex flex-col"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2
                                w-12 h-12 rounded-full bg-secondary
                                flex items-center justify-center text-white">
                  {industry.icon}
                </div>

                <h3 className="text-lg font-bold mt-6 mb-3 text-primary">
                  {industry.title}
                </h3>

                <p className="text-sm text-secondary-dark font-lato mb-4 grow">
                  {industry.description}
                </p>

                <Link
                  to={industry.link}
                  className="mt-auto font-semibold text-accent hover:text-primary"
                >
                  Explore →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
