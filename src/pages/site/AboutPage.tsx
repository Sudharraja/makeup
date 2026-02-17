import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { ARTIST_STATS } from "../../site/content";
import { revealProps } from "../../site/motion";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="section-shell page-standard about-page" aria-labelledby="about-title">
        <motion.div className="page-header-block" {...revealProps}>
          <p className="page-kicker">About Us</p>
          <h1 id="about-title" className="page-title">
            Soft confidence, elevated with intention.
          </h1>
          <p className="page-subtitle">
            SaranyaBerin Makeup Artistry blends modern bridal technique with warm, personal care.
            Every look is designed to enhance your natural beauty and preserve your individuality.
          </p>
        </motion.div>

        <div className="split-layout">
          <motion.figure className="about-portrait" {...revealProps}>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80"
              alt="Bridal makeup artist portrait"
              loading="lazy"
            />
          </motion.figure>

          <motion.article className="about-copy" {...revealProps}>
            <h2>Our Philosophy</h2>
            <p>
              We do not mask features. We refine and elevate them. The process begins with skin
              preparation, undertone balancing, and mood-board consultation to create a look that
              feels true to you.
            </p>
            <p>
              From intimate ceremonies to destination weddings, every bridal face receives custom
              color harmonies, premium formulations, and meticulous finish checks for long wear.
            </p>

            <div className="stats-grid" aria-label="Studio statistics">
              {ARTIST_STATS.map((stat) => (
                <article key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </motion.article>
        </div>
      </section>
    </PageTransition>
  );
}
