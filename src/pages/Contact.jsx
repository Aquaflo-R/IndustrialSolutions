import { motion } from "framer-motion";
import { title } from "framer-motion/client";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router";
const Contact = () => {

  const cards = [
    {
      title: "Address", icon: MapPin,
      content: (
        <>
          <p>307 Hill Crest Lane</p>
          <p>Irving, California</p>
          <p>Washington DC 1234</p>
        </>
      ),
    },
    {
      title: "Phone", icon: Phone,
      content: (
        <>
          <p>+91-9900999009</p>
        </>
      ),
    },
    {
      title: "Email", icon: Mail,
      content: (
        <>
          <p>demo@gmail.com</p>
        </>
      ),
    },
    {
      title: "Business Hours", icon: Clock,
      content: (
        <>
          <p>Monday – Saturday</p>
          <p>9:00 AM – 6:00 PM</p>
          <p>Sunday: Closed</p>
        </>
      ),
    },
  ]

  return (
    <main>
      {/* Hero section */}
      <section className="max-w-9xl mt-20 h-90 mx-auto bg-[url('/images/contacthero1.jpg')] 
          bg-cover bg-center pt-12 pb-14 text-center content-center relative ">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-5xl text-white font-primary font-bold mb-8 pt-10"
            >
              Contact Us
            </motion.h1>
          </div>
      </section>

      {/* contact details section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index}
                className="bg-secondary-dark rounded-2xl p-6 text-center shadow-sm hover:shadow-sm transition"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-bg-primary flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary"/>
                  </div>
                </div>

                <h3 className="text-lg font-semibold font-primary mb-2 text-accent">
                  {item.title}
                </h3>

                <div className="text-base text-white/80 font-secondary leading-relaxed">
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Contact;
