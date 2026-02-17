import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { DASHBOARD_CARDS } from "../../site/content";
import { revealProps } from "../../site/motion";

export default function DashboardPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 720], [0, 90]);

  return (
    <PageTransition>
      <section className="page-hero dashboard-hero" aria-labelledby="dashboard-title">
        <motion.div className="dashboard-hero__media" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1920&q=80"
            alt="Bride with elegant bridal makeup look"
            fetchPriority="high"
          />
        </motion.div>
        <div className="dashboard-hero__veil" />

        <div className="section-shell dashboard-hero__content">
          <motion.p className="page-kicker page-kicker--light" {...revealProps}>
            Romantic Bridal Beauty Studio
          </motion.p>
          <motion.h1 id="dashboard-title" {...revealProps}>
            Where Beauty Meets Artistry
          </motion.h1>
          <motion.p className="page-subtitle page-subtitle--light" {...revealProps}>
            A refined bridal experience designed to feel emotional, elegant, and effortless.
            Enter the dashboard and explore each page for details, portfolio, reviews, and booking.
          </motion.p>

          <motion.div className="dashboard-actions" {...revealProps}>
            <Link className="pastel-button" to="/portfolio">
              Discover the Portfolio
            </Link>
            <Link className="pastel-button pastel-button--ghost" to="/booking">
              Inquire Now
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-shell dashboard-links-block" aria-labelledby="dashboard-links-title">
        <motion.div className="page-header-block" {...revealProps}>
          <p className="page-kicker">Dashboard Navigation</p>
          <h2 id="dashboard-links-title" className="page-title">
            Open each title as a dedicated page.
          </h2>
        </motion.div>

        <div className="dashboard-card-grid">
          {DASHBOARD_CARDS.map((card, index) => (
            <motion.article
              key={card.path}
              className="dashboard-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <img src={card.image} alt={card.title} loading="lazy" decoding="async" />
              <div className="dashboard-card__overlay">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={card.path} className="dashboard-card__link">
                  Open page
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
