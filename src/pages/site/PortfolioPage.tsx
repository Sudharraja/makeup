import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageTransition from "../../components/PageTransition";
import { FILTERS, LOOKS, type LookFilter } from "../../site/content";
import { revealProps } from "../../site/motion";

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState<LookFilter>("All");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredLooks = useMemo(
    () =>
      selectedFilter === "All"
        ? LOOKS
        : LOOKS.filter((look) => look.category === selectedFilter),
    [selectedFilter]
  );

  const slides = useMemo(
    () => filteredLooks.map((look) => ({ src: look.image, alt: look.alt })),
    [filteredLooks]
  );

  return (
    <PageTransition>
      <section className="section-shell page-standard" aria-labelledby="portfolio-title">
        <motion.div className="page-header-block" {...revealProps}>
          <p className="page-kicker">Portfolio</p>
          <h1 id="portfolio-title" className="page-title">
            Signature looks that stay refined from aisle to after-party.
          </h1>
          <p className="page-subtitle">
            Filter by style and open any look for a close view. Every image is designed to reflect
            skin texture, tone harmony, and bridal storytelling.
          </p>

          <div className="filter-row" role="tablist" aria-label="Portfolio categories">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selectedFilter === filter}
                className={`filter-chip ${selectedFilter === filter ? "is-active" : ""}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="looks-grid">
          {filteredLooks.map((look, index) => (
            <motion.button
              key={look.id}
              type="button"
              className="look-card"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open ${look.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <img src={look.image} alt={look.alt} loading="lazy" decoding="async" />
              <span className="look-card__overlay">
                <strong>{look.title}</strong>
                <small>{look.category}</small>
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </PageTransition>
  );
}
