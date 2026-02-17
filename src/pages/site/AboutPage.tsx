import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { ARTIST_STATS } from "../../site/content";
import { fadeUpItem, revealProps, staggerContainer } from "../../site/motion";

const artistDetails = [
  {
    label: "Artist Mission",
    value: "Create bridal makeup that feels personal, cinematic, and emotionally true.",
  },
  {
    label: "Technical Focus",
    value: "Skin architecture, undertone precision, and movement-friendly finishing.",
  },
  {
    label: "Bridal Promise",
    value: "Luxury look, calm morning, and confidence from aisle to last dance.",
  },
  {
    label: "Personal Strength",
    value: "Combining emotional listening with fast and accurate artistic decisions.",
  },
];

const workingPrinciples = [
  "No copy-paste looks; every bride gets a custom face blueprint.",
  "Every product is selected for comfort, wear-time, and camera translation.",
  "Timeline discipline is treated as part of the artistry.",
  "Final look is checked in multiple light temperatures.",
];

const milestones = [
  {
    year: "2015",
    title: "Started Bridal-Only Practice",
    description: "Focused fully on wedding artistry and personalized client journeys.",
  },
  {
    year: "2019",
    title: "Destination Workflow Introduced",
    description: "Built travel-ready systems for climate shifts and multi-event schedules.",
  },
  {
    year: "2022",
    title: "Editorial Bridal Method",
    description: "Integrated high-fashion finishing techniques into real bridal requirements.",
  },
  {
    year: "Today",
    title: "Future-Luxe Atelier Model",
    description: "Delivering premium, emotionally resonant bridal experiences at scale.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="section-shell">
        <div className="page-container grid gap-7 xl:grid-cols-[0.96fr_1.04fr]">
          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">About the Artist</span>
            <h1 className="section-title mt-4">A self-made bridal specialist with a modern luxury mindset.</h1>
            <p className="section-copy mt-4">
              I believe bridal beauty should protect your identity, not replace it. My process blends emotional clarity with technical precision, so your look feels authentic and unforgettable.
            </p>
            <p className="section-copy mt-4">
              Every consultation is designed to understand your story, your comfort, and your visual priorities. The final look is custom-built to honor all three.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/portfolio" className="button-primary">
                View Signature Looks
              </Link>
              <Link to="/booking" className="button-secondary">
                Book Consultation
              </Link>
            </div>
          </motion.article>

          <motion.article className="futuristic-panel p-4 sm:p-5" {...revealProps}>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80"
                alt="Professional bridal makeup artist portrait"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/78 p-4 backdrop-blur-md">
                <p className="font-accent text-[0.58rem] uppercase tracking-[0.2em] text-ink-500">Philosophy</p>
                <p className="mt-2 font-display text-xl text-ink-900">
                  “I design confidence first, then makeup.”
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="page-container">
          <motion.div
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
          >
            {ARTIST_STATS.map((stat) => (
              <motion.article key={stat.label} className="metric-tile" variants={fadeUpItem}>
                <p className="font-accent text-[0.58rem] uppercase tracking-[0.18em] text-ink-500">
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-4xl text-ink-900">{stat.value}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="mt-5 grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {artistDetails.map((detail) => (
              <motion.article key={detail.label} className="surface-card p-5" variants={fadeUpItem}>
                <p className="font-accent text-[0.56rem] uppercase tracking-[0.2em] text-ink-500">{detail.label}</p>
                <p className="mt-2 text-sm font-semibold text-ink-800">{detail.value}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="page-container grid gap-6 lg:grid-cols-[1fr_1fr]">
          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">Working Principles</span>
            <h2 className="section-title mt-4">How each bridal face is developed.</h2>
            <ul className="mt-7 space-y-3 text-sm text-ink-700">
              {workingPrinciples.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="kicker-dot mt-1.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">Milestones</span>
            <h2 className="section-title mt-4">Growth journey of the studio.</h2>
            <div className="relative mt-8">
              <div className="timeline-rail absolute left-[11px] top-2 bottom-2 w-px" />
              <div className="space-y-5">
                {milestones.map((item) => (
                  <div key={item.title} className="relative pl-8">
                    <span className="absolute left-0 top-2 kicker-dot" />
                    <span className="story-chip">{item.year}</span>
                    <h3 className="mt-2 font-display text-xl text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </PageTransition>
  );
}
