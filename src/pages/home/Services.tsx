import { motion } from "framer-motion";
import services from "../../data/services.json";

export default function Services() {
  return (
    <section id="services" className="section bg-sand">
      <h2 className="text-center text-4xl md:text-5xl font-serif mb-14">
        Complete Bridal & Event Services
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-luxury text-center"
          >
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
