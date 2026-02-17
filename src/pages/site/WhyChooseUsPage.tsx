import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { WHY_CHOOSE_ITEMS } from "../../site/content";
import { revealProps } from "../../site/motion";

export default function WhyChooseUsPage() {
  return (
    <PageTransition>
      <section className="section-shell page-standard" aria-labelledby="why-choose-title">
        <motion.div className="page-header-block" {...revealProps}>
          <p className="page-kicker">Why Choose Us</p>
          <h1 id="why-choose-title" className="page-title">
            Luxury execution with warmth, precision, and peace of mind.
          </h1>
          <p className="page-subtitle">
            Bridal makeup is not only about products. It is about trust, timing, and artistic
            consistency. This is how we make your experience calm and unforgettable.
          </p>
        </motion.div>

        <div className="why-grid">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.article
              key={item.title}
              className="why-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
