import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "../../components/PageTransition";
import { revealProps } from "../../site/motion";

const faqItems = [
  {
    question: "How early should I book my bridal makeup date?",
    answer:
      "For prime wedding seasons, booking 6 to 10 months in advance is recommended. Destination and multi-event weddings should be reserved even earlier.",
  },
  {
    question: "Is a bridal trial mandatory?",
    answer:
      "A trial is strongly recommended. It helps finalize skin prep, palette, and finish so wedding-day execution is fast and stress-free.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Yes. Destination services include pre-travel planning, climate-specific product strategy, and on-location bridal timeline support.",
  },
  {
    question: "What should I do before the makeup appointment?",
    answer:
      "Keep skin hydrated, avoid last-minute peels, and share reference images beforehand. A detailed prep guide is sent after booking.",
  },
  {
    question: "Can bridal party services be added?",
    answer:
      "Absolutely. Bridesmaids, mothers, and close family packages can be added with sequencing designed to keep the schedule on track.",
  },
  {
    question: "How long does bridal makeup usually take?",
    answer:
      "Bridal application typically takes 90 to 120 minutes depending on look complexity, skin prep, and selected add-ons.",
  },
];

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <PageTransition>
      <section className="section-shell">
        <div className="page-container grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.article className="futuristic-panel p-7 md:p-9" {...revealProps}>
            <span className="eyebrow">FAQ</span>
            <h1 className="section-title mt-4">Everything brides ask before booking.</h1>
            <p className="section-copy mt-4">
              This FAQ page provides quick clarity on timelines, trials, preparation, and logistics so your decision process stays simple.
            </p>
            <p className="section-copy mt-4">
              For questions not listed here, the booking page includes a message section where you can share custom requirements.
            </p>
          </motion.article>

          <motion.article className="futuristic-panel p-4 md:p-5" {...revealProps}>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                alt="Bridal makeup consultation scene"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/24 p-4 backdrop-blur">
                <p className="font-display text-xl text-white">Fast answers. Confident planning.</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="page-container">
          <motion.div className="futuristic-panel p-4 md:p-5" {...revealProps}>
            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <article key={item.question} className="surface-card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setActiveIndex((current) => (current === index ? -1 : index))}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-2xl text-ink-900">{item.question}</span>
                      <span className="story-chip">{isOpen ? "Close" : "Open"}</span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28 }}
                          className="px-5 pb-5"
                        >
                          <p className="text-sm leading-relaxed text-ink-600">{item.answer}</p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
