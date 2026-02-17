import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { SERVICE_ITEMS, type ServiceIcon } from "../../site/content";
import { fadeUpItem, revealProps, staggerContainer } from "../../site/motion";

const deliveryModel = [
  {
    phase: "01",
    title: "Consult and Align",
    description: "We lock your makeup direction with your outfit, venue, and emotional vibe.",
  },
  {
    phase: "02",
    title: "Test and Refine",
    description: "Trial session confirms texture, depth, and wear strategy before the main day.",
  },
  {
    phase: "03",
    title: "Execute with Precision",
    description: "Wedding-day application follows a calm and structured schedule.",
  },
];

const highlights = [
  "Dedicated prep approach for dry, oily, and combination skin",
  "Humidity and flash-safe finishing systems",
  "Bridal party flow management",
  "Optional touch-up and transition support",
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <section className="section-shell">
        <div className="page-container grid gap-7 xl:grid-cols-[0.95fr_1.05fr]">
          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">Services</span>
            <h1 className="section-title mt-4">High-impact bridal services built for real wedding environments.</h1>
            <p className="section-copy mt-4">
              Each service package is engineered to perform in motion, lighting changes, long ceremonies, and emotional moments without losing softness.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {deliveryModel.map((phase) => (
                <article key={phase.title} className="metric-tile">
                  <p className="font-accent text-[0.56rem] uppercase tracking-[0.2em] text-gold-600">
                    Phase {phase.phase}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-ink-900">{phase.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-600">{phase.description}</p>
                </article>
              ))}
            </div>
          </motion.article>

          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">What Is Included</span>
            <h2 className="section-title mt-4">More than makeup, this is a complete bridal flow system.</h2>
            <ul className="mt-7 space-y-3 text-sm text-ink-700">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="kicker-dot mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
            viewport={{ once: true, amount: 0.12 }}
          >
            {SERVICE_ITEMS.map((service, index) => (
              <motion.article key={service.name} className="futuristic-panel p-6 md:p-7" variants={fadeUpItem}>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/75 bg-white/68 text-ink-900">
                      <ServiceIconGraphic type={service.icon} />
                    </div>
                    <span className="story-chip">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-5 font-display text-3xl text-ink-900">{service.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{service.description}</p>
                  <p className="mt-5 font-display text-2xl text-gold-600">{service.price}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="page-container">
          <motion.div className="futuristic-panel overflow-hidden px-7 py-8 md:px-10 md:py-10" {...revealProps}>
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-lavender-300/38 blur-3xl animate-float-drift" />
            <div className="pointer-events-none absolute -left-20 -bottom-24 h-64 w-64 rounded-full bg-mint-300/36 blur-3xl animate-glow-pulse" />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow">Need Custom Scope?</span>
                <h2 className="section-title mt-4">Tell us your timeline and we will tailor a package exactly for you.</h2>
                <p className="section-copy mt-4">
                  For multi-day weddings, destination logistics, or large bridal parties, we prepare a custom execution plan.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/booking" className="button-primary">
                  Start Consultation
                </Link>
                <Link to="/portfolio" className="button-secondary">
                  Preview Results
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}

function ServiceIconGraphic({ type }: { type: ServiceIcon }) {
  switch (type) {
    case "bridal":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 9a5 5 0 1 1 10 0v9H7V9Zm0 5h10M9 18l-1.3 2m8.6-2 1.3 2" />
        </svg>
      );
    case "trial":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v3H4zM6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M10 12h4m-4 3h4" />
        </svg>
      );
    case "party":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 1.9 3.9L18 9l-3 2.9.7 4.1L12 14l-3.7 2 .7-4.1L6 9l4.1-2.1L12 3Z" />
        </svg>
      );
    case "airbrush":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 11h9a4 4 0 1 1 0 8H9m8-8 3-3m-3 3 3 3M8 11V6h4" />
        </svg>
      );
    case "destination":
      return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5h18M12 3.5v17M5 7.5a15 15 0 0 0 14 0M5 15.5a15 15 0 0 1 14 0" />
        </svg>
      );
    default:
      return null;
  }
}
