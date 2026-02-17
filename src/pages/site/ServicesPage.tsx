import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { type ServiceIcon, SERVICE_ITEMS } from "../../site/content";
import { revealProps } from "../../site/motion";

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="section-shell page-standard" aria-labelledby="services-title">
        <motion.div className="page-header-block" {...revealProps}>
          <p className="page-kicker">Services We Offer</p>
          <h1 id="services-title" className="page-title">
            Bridal services crafted for elegance and reliability.
          </h1>
          <p className="page-subtitle">
            Every package is designed to hold beautifully across ceremony, portraits, and reception,
            while maintaining comfort and a refined skin finish.
          </p>
        </motion.div>

        <div className="services-grid">
          {SERVICE_ITEMS.map((service, index) => (
            <motion.article
              key={service.name}
              className="service-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <span className="service-icon" aria-hidden="true">
                <ServiceIconGraphic type={service.icon} />
              </span>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <strong>{service.price}</strong>
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}

function ServiceIconGraphic({ type }: { type: ServiceIcon }) {
  switch (type) {
    case "bridal":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.5 14.6 8l5.9.9-4.2 4.2 1 5.9-5.3-2.9-5.3 2.9 1-5.9L3.5 8.9 9.4 8 12 2.5Z" />
        </svg>
      );
    case "trial":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm0 2.4a6.4 6.4 0 0 1 5.6 3.3H6.4A6.4 6.4 0 0 1 12 5.6Zm-5.6 9.5h11.2a6.4 6.4 0 0 1-11.2 0Z" />
        </svg>
      );
    case "party":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 13.4a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm10.8 0a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM12 20a5.4 5.4 0 0 1 5.1-3.8h.3A4.5 4.5 0 0 1 22 20h-2.4a2.2 2.2 0 0 0-2.2-1.6h-.3a3 3 0 0 0-2.8 1.6H9.7a3 3 0 0 0-2.8-1.6h-.3A2.2 2.2 0 0 0 4.4 20H2a4.5 4.5 0 0 1 4.6-3.8h.3A5.4 5.4 0 0 1 12 20Z" />
        </svg>
      );
    case "airbrush":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 12.5h8.5a2.5 2.5 0 1 1 0 5H9.2a3.2 3.2 0 0 0-3.2 3.2V22H4v-1.3c0-1.3.4-2.6 1.1-3.7H4a2.5 2.5 0 0 1 0-5Zm11.4-8 .9 2.7L19 8l-2.7.8-.9 2.7-.9-2.7L11.8 8l2.7-.8.9-2.7Zm5.1 6.1.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7Z" />
        </svg>
      );
    default:
      return null;
  }
}
