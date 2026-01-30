import { motion } from "framer-motion";
import { title } from "framer-motion/client";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router";
const Contact = () => {

  const cards = [
    {
      title: "Address", icon: MapPin,
      content: (
        <>
          <p>307 Hill Crest Lane Irving,</p>
          <p>California Washington DC 1234</p>
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {cards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 25px 40px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
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
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Form and Map section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto pb-10 grid md:grid-cols-2 gap-16 items-center">

          {/* left-form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-primary font-semibold mb-2 text-secondary">
              Send Us A Message
            </h2>
            <p className="mb-6 text-base text-secondary-dark font-secondary">
              We’re here to help you power a sustainable future.
            </p>

            <form className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name"
                  className="w-full rounded-xl bg-white font-primary px-4 py-3 outline-none border border-gray-200 
                    focus:border-accent shadow-sm" 
                />
                <input type="text" placeholder="Last Name"
                  className="w-full rounded-xl bg-white font-primary px-4 py-3 outline-none border border-gray-200 
                    focus:border-accent shadow-sm" 
                />
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Your Email"
                  className="w-full rounded-xl bg-white font-primary px-4 py-3 outline-none border border-gray-200 
                    focus:border-accent shadow-sm" 
                />
                <input type="tel" placeholder="Your Phone"
                  className="w-full rounded-xl bg-white font-primary px-4 py-3 outline-none border border-gray-200 
                    focus:border-accent shadow-sm" 
                />
              </div>
              {/* Row 3 */}
              <textarea rows="5" placeholder="Message"
                className="w-full rounded-xl bg-white font-primary px-4 py-3 outline-none border border-gray-200 
                    focus:border-accent shadow-sm resize-none"
              />
              {/* Row 4 */}
              <button type="submit"
                className="inline-flex  items-center gap-2 bg-[#235347] hover:bg-[#DAF1DE] text-white hover:text-black
                  font-medium px-6 py-3 rounded-full transition cursor-pointer border border-transparent hover:border-[#235347]"
              >
                Send Message
                <span className="text-lg"><ArrowRight size={16}/></span>
              </button>
            </form>
          </div>

          {/* Right Map */}
          <div className="w-full h-[350px] md:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-md">
            <iframe title="map" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122809.74799865833!2d74.4260381535804!3d15.866862647587144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf669f5095362f%3A0x7e34b31edcdefb5f!2sBelagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1769754947577!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" 
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
