import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition";
import { WHY_CHOOSE_ITEMS } from "../../site/content";
import { fadeUpItem, revealProps, staggerContainer } from "../../site/motion";

const deliveryStandards = [
  {
    title: "Fast Reply System",
    detail: "Timely confirmations and transparent updates so planning feels smooth from inquiry to wedding day.",
  },
  {
    title: "Premium Product Discipline",
    detail: "Only pro-grade formulas tested for comfort, flash performance, and long-wear consistency.",
  },
  {
    title: "On-Site Bridal Flow",
    detail: "Structured sequencing for the bride, bridal party, and touch-up timing without delays.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <PageTransition>
      <section className="page-container">
        <motion.div className="max-w-3xl" {...revealProps}>
          <span className="eyebrow">Why Brides Choose Us</span>
          <h1 id="why-choose-title" className="section-title mt-5">
            Premium artistry delivered with calm, reliable execution.
          </h1>
          <p className="section-copy mt-5">
            Beautiful makeup is only one part of the experience. The real difference comes from preparation quality, timeline confidence, and personalized service that makes you feel fully supported.
          </p>
        </motion.div>
      </section>

      <section className="page-container section-shell">
        <motion.div
          className="grid gap-5 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <motion.article key={item.title} className="surface-card p-6 md:p-7" variants={fadeUpItem}>
              <p className="font-accent text-[0.58rem] uppercase tracking-[0.2em] text-ink-500">
                Reason {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-3xl text-ink-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="page-container section-shell pt-2">
        <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr]">
          <motion.article className="surface-card p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">Service Standard</span>
            <h2 className="section-title mt-4">What you can expect at every stage.</h2>
            <div className="mt-7 space-y-6">
              {deliveryStandards.map((standard) => (
                <div key={standard.title}>
                  <h3 className="font-display text-2xl text-ink-900">{standard.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{standard.detail}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article className="surface-card overflow-hidden px-7 py-8 md:px-9 md:py-10" {...revealProps}>
            <div className="pointer-events-none absolute -right-12 top-6 h-48 w-48 rounded-full bg-rose-300/30 blur-3xl animate-float-drift" />
            <div className="relative">
              <span className="eyebrow">Your Date Matters</span>
              <h2 className="section-title mt-4">Secure your bridal slot with confidence.</h2>
              <p className="section-copy mt-4">
                A consultation lets us confirm your needs, build your timeline, and recommend the package that gives you the exact finish you want.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/booking" className="button-primary">
                  Book Consultation
                </Link>
                <Link to="/testimonials" className="button-secondary">
                  Read Testimonials
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </PageTransition>
  );
}
