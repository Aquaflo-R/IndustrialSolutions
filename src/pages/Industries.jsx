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
      {/*Hero*/}
      <section
        className="
  relative
  min-h-[70vh] sm:min-h-[75vh] md:min-h-[95vh]
  flex items-center
  overflow-hidden
  bg-primary sm:mt-2 md:-mt-1 pt-20
"
      >
        {/* BACKGROUND */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-[url('/images/industry-bg.jpg')]"
          style={{ y: bgY }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-primary/90 via-secondary/80 to-primary/70" />

        {/* GLOWS */}
        <div
          className="
  absolute
  top-2 sm:top-6
  -left-16 sm:-left-24
  w-32 h-32 sm:w-48 sm:h-48
  rounded-full
  bg-accent/15
  animate-pulse
"
        />
        <div className="absolute bottom-10 -right-16 sm:bottom-16 sm:-right-24 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-bg-primary/10 animate-pulse" />

        {/* CONTENT */}
        <div
          className="
      relative z-10
      max-w-7xl mx-auto
      px-6 md:px-8 lg:px-12
      text-center
      pt-12 sm:pt-0
      pb-12 sm:pb-16 md:pb-0   /* ✅ THIS FIX */
    "
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-widest text-accent font-lato mb-3 sm:mb-4">
              Industrial Clean Energy
            </p>

            <h1
              className="
          text-[2.4rem] sm:text-[3.2rem] md:text-[4.8rem]
          font-bold text-bg-primary
          leading-[1.15] sm:leading-tight
          mb-5 sm:mb-6
        "
            >
              Powering Industries <br className="hidden sm:block" />
              with Solar & Wind Energy
            </h1>

            <p
              className="
        text-base sm:text-lg
        text-bg-primary/80
        font-lato
        mb-7 sm:mb-8
        max-w-xl mx-auto
      "
            >
              Scalable, reliable, and sustainable clean energy solutions
              engineered for modern industries.
            </p>

            <div className="flex justify-center">
              <Link
                to="/industries"
                className="
            px-6 py-3
            rounded-full
            border border-accent
            bg-primary
            text-white
            font-semibold
            transition
            hover:bg-accent hover:text-primary
          "
              >
                Explore Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/*Overview*/}
      <section className="relative overflow-hidden bg-[#F6FBF9] py-20  md:py-24 pb-28 md:pb-36 font-lato">
        {/* background glows */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96
                        bg-linear-to-br from-[#9FE870]/40 to-[#4CAF50]/30
                        rounded-full blur-3xl"
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96
                        bg-linear-to-tr from-primary/20 to-secondary/20
                        rounded-full blur-3xl"
        />

        {/* giant text */}
        <h2
          className="
          absolute inset-0 flex items-center justify-center
          text-[5rem] sm:text-[8rem] md:text-[15rem]
          font-extrabold text-transparent stroke-[1px] stroke-primary/10
          pointer-events-none
        "
        >
          ENERGY
        </h2>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 md:gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 "
          >
            <span
              className="inline-block px-4 py-1 text-xs uppercase tracking-widest
                             bg-primary/10 text-primary rounded-full"
            >
              Incredible Facts
            </span>

            <h3 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Redefining Industrial <br /> Clean Energy
            </h3>

            <p className="text-secondary-dark text-lg max-w-xl">
              We engineer high-performance solar and wind solutions that power
              industries with reliability, scalability, and sustainability at
              the core.
            </p>

            <div className="flex gap-6 pt-4">
              <div
                className="backdrop-blur-xl bg-white/60 border border-white/40
                              rounded-2xl px-6 py-5 shadow-lg"
              >
                <p className="text-3xl font-bold text-primary">18K+</p>
                <p className="text-xs uppercase text-secondary-dark tracking-wide">
                  MW Installed
                </p>
              </div>

              <div
                className="backdrop-blur-xl bg-white/60 border border-white/40
                              rounded-2xl px-6 py-5 shadow-lg"
              >
                <p className="text-3xl font-bold text-primary">2.4K+</p>
                <p className="text-xs uppercase text-secondary-dark tracking-wide">
                  Clients Worldwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xl mx-auto">
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src="images/industries-solor-panel1.jpg"
                  alt="Solar installation"
                  className="w-full h-80 sm:h-95 object-cover"
                />

                <div
                  className="absolute bottom-6 right-6 bg-primary text-bg-primary
                                rounded-2xl px-6 py-5 shadow-xl"
                >
                  <p className="text-3xl font-bold">120+</p>
                  <p className="text-sm opacity-90">
                    Solar & Wind <br /> Projects Completed
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-12 -left-8 w-48 sm:w-56 hidden sm:block">
                <div className="overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                  <img
                    src="images/industries-solor-panel.jpg"
                    alt="Solar powered home"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/*Industries*/}
      <section className="relative py-16 md:py-20 bg-linear-to-b from-bg-primary to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Driving Industries with Clean Energy
          </h2>

          <p className="text-base sm:text-xl text-secondary-dark font-lato mb-14 md:mb-20">
            Smart solar and wind solutions for every sector
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="
                  relative bg-white rounded-2xl p-6 pt-10 shadow-md
                  border-t-2 border-accent flex flex-col
                  transition md:hover:-translate-y-2
                "
              >
                <div
                  className="absolute -top-6 left-1/2 -translate-x-1/2
                                w-12 h-12 rounded-full bg-secondary
                                flex items-center justify-center text-white"
                >
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
