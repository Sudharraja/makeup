import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import { fadeUpItem, revealProps, staggerContainer } from "../../site/motion";

const socialMetrics = [
  { label: "Instagram Community", value: "48K+" },
  { label: "Average Reel Views", value: "120K" },
  { label: "Client Tags Shared", value: "1.8K+" },
  { label: "Weekly Content Drops", value: "4" },
];

const socialCards = [
  {
    title: "Bridal Reels",
    description: "Before/after transitions, morning prep moments, and final reveal clips.",
    image:
      "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Trend Breakdowns",
    description: "Modern bridal trends translated into wearable versions for real weddings.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Client Story Highlights",
    description: "Real brides sharing testimonials, ceremony photos, and post-wedding reflections.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function SocialPage() {
  return (
    <PageTransition>
      <section className="section-shell">
        <div className="page-container grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">Instagram / Social Proof</span>
            <h1 className="section-title mt-4">See real bridal transformations across social platforms.</h1>
            <p className="section-copy mt-4">
              This page extends trust through transparent, real-time social proof. Brides can explore live style inspiration, reel transitions, and authentic client moments.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="button-primary"
              >
                Explore Instagram
              </a>
              <a
                href="https://pinterest.com/"
                target="_blank"
                rel="noreferrer"
                className="button-secondary"
              >
                View Pinterest Boards
              </a>
            </div>
          </motion.article>

          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">Engagement Snapshot</span>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {socialMetrics.map((metric) => (
                <article key={metric.label} className="metric-tile">
                  <p className="font-accent text-[0.56rem] uppercase tracking-[0.18em] text-ink-500">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-display text-3xl text-ink-900">{metric.value}</p>
                </article>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="page-container">
          <motion.div
            className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {socialCards.map((card) => (
              <motion.article key={card.title} className="overview-card p-4" variants={fadeUpItem}>
                <div className="relative h-56 overflow-hidden rounded-3xl">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/8 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/55 bg-white/22 p-3 backdrop-blur">
                    <p className="font-display text-xl text-white">{card.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">{card.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
