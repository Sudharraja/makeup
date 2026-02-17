import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageTransition from "../../components/PageTransition";
import { FILTERS, LOOKS, type LookFilter } from "../../site/content";
import { fadeUpItem, revealProps, staggerContainer } from "../../site/motion";

const portfolioNotes = [
  "Looks are selected to show performance across day and night lighting.",
  "Categories help brides quickly identify the closest visual direction.",
  "All looks are refined for skin texture realism and camera depth.",
];

const tilePattern = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-2",
  "md:col-span-1 md:row-span-1",
];

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
      <section className="section-shell">
        <div className="page-container grid gap-7 xl:grid-cols-[0.97fr_1.03fr]">
          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">Portfolio</span>
            <h1 id="portfolio-title" className="section-title mt-4">A curated visual library of bridal transformations.</h1>
            <p className="section-copy mt-4">
              Explore real bridal looks across natural softness, glam definition, editorial edge, and traditional richness with a futuristic presentation style.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700">
              {portfolioNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <span className="kicker-dot mt-1.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">Filter and Preview</span>
            <h2 className="section-title mt-4">Tap, filter, and enter cinematic full-screen viewing.</h2>
            <p className="section-copy mt-4">
              Choose your category and open any tile. The gallery transitions are optimized for desktop and swipe behavior on mobile.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5" role="tablist" aria-label="Portfolio categories">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={selectedFilter === filter}
                  className={[
                    "rounded-full border px-4 py-2 font-accent text-[0.6rem] font-semibold uppercase tracking-[0.18em] transition",
                    selectedFilter === filter
                      ? "border-gold-500/55 bg-gold-300/26 text-gold-600"
                      : "border-white/80 bg-white/70 text-ink-600 hover:border-gold-500/45 hover:text-gold-600",
                  ].join(" ")}
                  onClick={() => setSelectedFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="page-container">
          <motion.div
            className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[190px] xl:auto-rows-[220px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
          >
            {filteredLooks.map((look, index) => (
              <motion.button
                key={look.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className={`group relative overflow-hidden rounded-3xl ${tilePattern[index % tilePattern.length]}`}
                aria-label={`Open ${look.title}`}
                variants={fadeUpItem}
              >
                <img
                  src={look.image}
                  alt={look.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/14 to-transparent opacity-80 transition duration-400 group-hover:opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-br from-lavender-300/20 via-transparent to-rose-300/24 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="font-accent text-[0.56rem] uppercase tracking-[0.2em] text-cream-100/90">
                    {look.category}
                  </p>
                  <p className="mt-1 font-display text-xl text-white">{look.title}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="page-container">
          <motion.div className="futuristic-panel overflow-hidden px-7 py-8 md:px-10 md:py-10" {...revealProps}>
            <div className="pointer-events-none absolute -right-14 -top-20 h-52 w-52 rounded-full bg-lavender-300/40 blur-3xl animate-float-drift" />
            <div className="pointer-events-none absolute -left-20 -bottom-22 h-60 w-60 rounded-full bg-mint-300/36 blur-3xl animate-glow-pulse" />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow">From Inspiration to Reality</span>
                <h2 className="section-title mt-4">Like a style in this gallery? We can adapt it exactly for your features.</h2>
                <p className="section-copy mt-4">
                  Consultation transforms references into a fully personalized bridal look with timeline and product planning.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/booking" className="button-primary">
                  Book My Consultation
                </Link>
                <Link to="/services" className="button-secondary">
                  View Services
                </Link>
              </div>
            </div>
          </motion.div>
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
