import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/heroSectiongirl.png";
import PageTransition from "../../components/PageTransition";
import { FALLBACK_REVIEWS, LOOKS } from "../../site/content";
import { easeSculpted, revealProps } from "../../site/motion";

const SERVICE_LINES = [
  {
    name: "Bridal Makeup",
    summary: "Tailored wedding-day artistry with skin preparation, depth-balanced contour, and long-wear structure.",
    price: "From $450",
  },
  {
    name: "Bridal Trial",
    summary: "A dedicated look development session to lock tone, finish, and camera-ready direction before the event.",
    price: "From $190",
  },
  {
    name: "Engagement Makeup",
    summary: "Soft editorial polish designed for pre-wedding portraits, celebrations, and intimate ceremonies.",
    price: "From $240",
  },
  {
    name: "Airbrush Signature",
    summary: "Humidity-resistant airbrush complexion for flawless wear and refined texture under all lighting.",
    price: "From $520",
  },
];

const EXPERIENCE_PILLARS = [
  "Premium luxury product curation",
  "Calm, timeline-first wedding execution",
  "Personalized artistry for face and outfit balance",
  "Long-wear camera performance from vows to reception",
];

const FAQ_ITEMS = [
  {
    question: "How early should I reserve my wedding date?",
    answer: "For prime weekends, booking 6-10 months in advance is recommended. Multi-day and destination weddings should reserve earlier.",
  },
  {
    question: "Is a trial session necessary?",
    answer: "Yes. Trials align undertone, finish, and style direction so your wedding morning feels confident, calm, and predictable.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer: "Yes. Destination bookings include travel-ready products, climate-proof planning, and coordinated onsite execution.",
  },
];

function formatReviewDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function DashboardPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const heroOverlayY = useTransform(scrollYProgress, [0, 1], [0, -48]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const pointerXSpring = useSpring(pointerX, { stiffness: 155, damping: 26, mass: 0.36 });
  const pointerYSpring = useSpring(pointerY, { stiffness: 155, damping: 26, mass: 0.36 });
  const spotlightMainX = useTransform(pointerXSpring, (value) => value * 1.05);
  const spotlightMainY = useTransform(pointerYSpring, (value) => value * 0.9);
  const spotlightAccentX = useTransform(pointerXSpring, (value) => value * -0.7);
  const spotlightAccentY = useTransform(pointerYSpring, (value) => value * -0.62);
  const spotlightBeamX = useTransform(pointerXSpring, (value) => value * 0.36);
  const spotlightBeamY = useTransform(pointerYSpring, (value) => value * 0.28);
  const spotlightBeamRotate = useTransform(pointerXSpring, [-72, 72], [18, 27]);

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % Math.max(1, FALLBACK_REVIEWS.length));
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const activeReview = FALLBACK_REVIEWS[testimonialIndex];
  const portfolioLooks = LOOKS.slice(0, 4);
  const socialLooks = LOOKS.slice(4, 10);

  const handleHeroPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (event.clientY - rect.top) / rect.height - 0.5;

    pointerX.set(xRatio * 118);
    pointerY.set(yRatio * 88);
  };

  const handleHeroPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <PageTransition variant="story">
      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden text-white"
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={handleHeroPointerLeave}
      >
        <motion.img
          src={heroImage}
          alt="Luxury bridal makeup portrait in soft natural light"
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ scale: heroScale, y: heroY }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ y: heroOverlayY }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(13,11,12,0.78),rgba(13,11,12,0.5)_46%,rgba(13,11,12,0.78))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(248,215,218,0.24),transparent_38%),radial-gradient(circle_at_84%_14%,rgba(230,215,255,0.18),transparent_34%)]" />
          <div className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(130deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_6px)]" />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          <motion.div
            className="absolute -left-[14%] -top-[14%] aspect-square w-[min(54vw,44rem)] rounded-full bg-[radial-gradient(circle,rgba(248,215,218,0.5)_0%,rgba(248,215,218,0.2)_36%,rgba(248,215,218,0)_72%)] mix-blend-screen blur-2xl"
            style={{ x: spotlightMainX, y: spotlightMainY }}
          />
          <motion.div
            className="absolute -right-[16%] top-[18%] aspect-square w-[min(48vw,38rem)] rounded-full bg-[radial-gradient(circle,rgba(230,215,255,0.46)_0%,rgba(216,240,229,0.2)_44%,rgba(216,240,229,0)_76%)] mix-blend-screen blur-2xl"
            style={{ x: spotlightAccentX, y: spotlightAccentY }}
          />
          <motion.div
            className="absolute -right-[12%] -top-[18%] h-[130%] w-[64%] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.06)_36%,rgba(255,255,255,0.22)_48%,rgba(248,215,218,0.35)_54%,rgba(255,255,255,0)_100%)] opacity-50 blur-[5px]"
            style={{ x: spotlightBeamX, y: spotlightBeamY, rotate: spotlightBeamRotate }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[88rem] flex-col justify-center px-5 pb-18 pt-28 sm:px-10 lg:px-16">
          <motion.span
            className="inline-flex w-fit items-center rounded-full border border-white/55 bg-white/14 px-4 py-2 font-accent text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/92 backdrop-blur-md"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Luxury Bridal Makeup Artist
          </motion.span>

          <motion.h1
            className="mt-4 max-w-[13ch] font-display text-[clamp(2.4rem,7vw,5.7rem)] leading-[0.96] tracking-[-0.02em] text-white"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.06 }}
          >
            Where Beauty Becomes Timeless Art
          </motion.h1>

          <motion.p
            className="mt-5 max-w-2xl text-[clamp(1rem,1.6vw,1.24rem)] leading-relaxed text-white/86"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.14 }}
          >
            Crafting luminous, personalized bridal looks that celebrate your natural elegance and transform your most meaningful moments into unforgettable memories.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.24 }}
          >
            <Link to="/booking" className="button-primary">
              Book Your Bridal Consultation
            </Link>
            <Link to="/portfolio" className="button-secondary border-white/65 bg-white/18 text-white hover:border-white hover:bg-white/26 hover:text-white">
              Explore Signature Portfolio
            </Link>
          </motion.div>

          <motion.p
            className="mt-6 font-accent text-[0.62rem] uppercase tracking-[0.16em] text-white/82"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.3 }}
          >
            Trusted by 300+ Brides | 5-Star Rated Experience
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.58rem] uppercase tracking-[0.16em] text-white/68"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span>Scroll</span>
          <div className="flex h-9 w-[1.05rem] justify-center rounded-full border border-white/52 pt-1">
            <motion.div
              className="h-2 w-[0.22rem] rounded-full bg-white/82"
              animate={{ y: [0, 11, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_12%_14%,rgba(248,215,218,0.34),transparent_42%),radial-gradient(ellipse_at_86%_84%,rgba(230,215,255,0.28),transparent_44%),linear-gradient(165deg,#fff_0%,#faf9f0_100%)]">
        <div className="mx-auto grid min-h-screen w-full max-w-[88rem] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-10 lg:grid-cols-[1.06fr_0.94fr] lg:px-16">
          <motion.div className="grid h-[54vh] min-h-[23rem] grid-cols-12 gap-3 sm:h-[62vh]" {...revealProps}>
            <figure className="col-span-7 overflow-hidden rounded-[1.55rem]">
              <img src={portfolioLooks[0]?.image} alt={portfolioLooks[0]?.alt} className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" loading="lazy" />
            </figure>
            <figure className="col-span-5 overflow-hidden rounded-[1.35rem]">
              <img src={portfolioLooks[1]?.image} alt={portfolioLooks[1]?.alt} className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" loading="lazy" />
            </figure>
            <figure className="col-span-5 overflow-hidden rounded-[1.35rem]">
              <img src={portfolioLooks[2]?.image} alt={portfolioLooks[2]?.alt} className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" loading="lazy" />
            </figure>
            <figure className="col-span-7 overflow-hidden rounded-[1.55rem]">
              <img src={portfolioLooks[3]?.image} alt={portfolioLooks[3]?.alt} className="h-full w-full object-cover transition duration-700 hover:scale-[1.04]" loading="lazy" />
            </figure>
          </motion.div>

          <motion.article className="max-w-[35rem]" {...revealProps}>
            <span className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-ink-500">Portfolio</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-ink-900">
              Signature Bridal Transformations
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.45vw,1.16rem)] leading-relaxed text-ink-600">
              Explore a curated collection of refined bridal looks crafted with precision, emotional sensitivity, and a deep understanding of individuality.
            </p>
            <Link to="/portfolio" className="story-link-button">
              Explore More
            </Link>
          </motion.article>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_88%_14%,rgba(248,215,218,0.3),transparent_36%),radial-gradient(ellipse_at_10%_84%,rgba(216,240,229,0.34),transparent_40%),linear-gradient(160deg,#fcfbf8_0%,#f4f0f6_100%)]">
        <div className="mx-auto grid min-h-screen w-full max-w-[88rem] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16">
          <motion.article className="order-2 max-w-[35rem] lg:order-1" {...revealProps}>
            <span className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-ink-500">About Artist</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-ink-900">
              The Artist Behind The Beauty
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.45vw,1.16rem)] leading-relaxed text-ink-600">
              With years of bridal experience, every look is carefully composed to reflect personality, preserve natural beauty, and create confidence from first light to final dance.
            </p>
            <ul className="mt-6 grid gap-2.5 text-sm text-ink-700">
              <li>Personalized bridal beauty planning</li>
              <li>Premium formulas selected for skin and climate</li>
              <li>Detail-led execution with calm direction</li>
              <li>Trusted by hundreds of brides and families</li>
            </ul>
            <Link to="/about" className="story-link-button">
              Explore More
            </Link>
          </motion.article>

          <motion.div className="order-1 h-[56vh] min-h-[24rem] overflow-hidden rounded-[1.55rem] lg:order-2 lg:h-[68vh]" {...revealProps}>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1700&q=80"
              alt="Bridal makeup artist portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-white">
        <div className="mx-auto flex min-h-screen w-full max-w-[82rem] flex-col justify-center px-5 py-14 sm:px-10 lg:px-16">
          <motion.span className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-ink-500" {...revealProps}>
            Services
          </motion.span>
          <motion.h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-ink-900" {...revealProps}>
            Luxury Bridal Makeup Services
          </motion.h2>
          <motion.p className="mt-5 max-w-3xl text-[clamp(1rem,1.45vw,1.16rem)] leading-relaxed text-ink-600" {...revealProps}>
            Complete bridal beauty solutions for ceremonies, portraits, and destination celebrations - tailored with precision for long-wear elegance.
          </motion.p>

          <div className="mt-8 grid">
            {SERVICE_LINES.map((item, index) => (
              <motion.article
                key={item.name}
                className="grid border-t border-ink-300/45 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.56, ease: easeSculpted, delay: index * 0.06 }}
              >
                <p className="font-accent text-[0.58rem] uppercase tracking-[0.18em] text-ink-500">{String(index + 1).padStart(2, "0")}</p>
                <div className="mt-2 sm:mt-0">
                  <h3 className="font-display text-[clamp(1.26rem,2vw,1.7rem)] text-ink-900">{item.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.summary}</p>
                </div>
                <p className="mt-2 font-accent text-[0.62rem] uppercase tracking-[0.18em] text-gold-600 sm:mt-0">{item.price}</p>
              </motion.article>
            ))}
          </div>
          <Link to="/services" className="story-link-button mt-7">
            Explore More
          </Link>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury bridal preparation moment"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(14,12,13,0.86),rgba(14,12,13,0.54)_48%,rgba(14,12,13,0.78))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_12%,rgba(248,215,218,0.22),transparent_36%),radial-gradient(circle_at_84%_86%,rgba(230,215,255,0.2),transparent_40%)]" />

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[88rem] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-10 lg:grid-cols-[1fr_0.92fr] lg:px-16">
          <motion.article className="max-w-[38rem]" {...revealProps}>
            <span className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-white/78">Why Choose Me</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
              A Luxury Experience Designed Around You
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.45vw,1.16rem)] leading-relaxed text-white/82">
              Every bridal session is built around comfort, confidence, and exceptional artistry so your look remains elevated, natural, and timeless throughout the day.
            </p>
            <Link to="/experience" className="story-link-button story-link-button-light">
              Explore More
            </Link>
          </motion.article>

          <motion.ul className="grid gap-3" {...revealProps}>
            {EXPERIENCE_PILLARS.map((pillar) => (
              <li
                key={pillar}
                className="border-b border-white/28 py-3 text-sm leading-relaxed text-white/84"
              >
                {pillar}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,rgba(230,215,255,0.28),transparent_42%),linear-gradient(165deg,#ffffff_0%,#faf9f0_100%)]">
        <div className="mx-auto flex min-h-screen w-full max-w-[78rem] flex-col justify-center px-5 py-14 text-center sm:px-10 lg:px-14">
          <motion.span className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-ink-500" {...revealProps}>
            Testimonials
          </motion.span>
          <motion.h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-ink-900" {...revealProps}>
            Words From Beautiful Brides
          </motion.h2>
          <motion.p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-ink-600" {...revealProps}>
            Honest experiences from brides who entrusted their most meaningful day to refined professional artistry.
          </motion.p>

          <AnimatePresence mode="wait">
            <motion.article
              key={activeReview.id}
              className="mx-auto mt-10 max-w-4xl border-y border-ink-300/42 py-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.44, ease: easeSculpted }}
            >
              <p className="font-display text-[clamp(1.45rem,2.6vw,2.4rem)] leading-[1.45] text-ink-900">
                "{activeReview.text}"
              </p>
              <p className="mt-4 font-accent text-[0.62rem] uppercase tracking-[0.16em] text-ink-500">
                {activeReview.authorName} | {formatReviewDate(activeReview.date)}
              </p>
            </motion.article>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2.5">
            {FALLBACK_REVIEWS.slice(0, 5).map((review, index) => (
              <button
                key={review.id}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setTestimonialIndex(index)}
                className={[
                  "h-2.5 w-2.5 rounded-full transition duration-300",
                  index === testimonialIndex ? "bg-gold-500" : "bg-ink-300 hover:bg-gold-400",
                ].join(" ")}
              />
            ))}
          </div>

          <Link to="/testimonials" className="story-link-button mx-auto mt-8">
            Explore More
          </Link>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_18%_14%,rgba(248,215,218,0.32),transparent_38%),radial-gradient(ellipse_at_82%_86%,rgba(216,240,229,0.36),transparent_40%),linear-gradient(170deg,#faf9f0_0%,#fff_100%)]">
        <div className="mx-auto grid min-h-screen w-full max-w-[88rem] grid-cols-1 items-center gap-8 px-5 py-14 sm:px-10 lg:grid-cols-[1.04fr_0.96fr] lg:px-16">
          <motion.div className="grid grid-cols-3 gap-2.5 sm:gap-3" {...revealProps}>
            {socialLooks.map((look, index) => (
              <figure
                key={look.id}
                className={[
                  "overflow-hidden rounded-[1.15rem]",
                  index === 1 || index === 4 ? "translate-y-4 sm:translate-y-6" : "",
                ].join(" ")}
              >
                <img
                  src={look.image}
                  alt={look.alt}
                  className="h-40 w-full object-cover sm:h-56 lg:h-64"
                  loading="lazy"
                />
              </figure>
            ))}
          </motion.div>

          <motion.article className="max-w-[35rem]" {...revealProps}>
            <span className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-ink-500">Instagram / Social Proof</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-ink-900">
              Real Brides. Real Moments.
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.45vw,1.16rem)] leading-relaxed text-ink-600">
              Discover transformations, behind-the-scenes moments, and wedding-day beauty stories shared across social platforms.
            </p>
            <Link to="/social" className="story-link-button">
              Explore More
            </Link>
          </motion.article>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-ink-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(248,215,218,0.2),transparent_36%),radial-gradient(circle_at_86%_82%,rgba(230,215,255,0.2),transparent_40%)]" />
        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[88rem] grid-cols-1 items-center gap-8 px-5 py-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
          <motion.article className="max-w-[32rem]" {...revealProps}>
            <span className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-white/76">Booking / Contact</span>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-white">
              Begin Your Bridal Beauty Journey
            </h2>
            <p className="mt-5 text-[clamp(1rem,1.45vw,1.16rem)] leading-relaxed text-white/82">
              Share your wedding details to start a personalized, premium bridal experience crafted around your vision and timeline.
            </p>
            <Link to="/booking" className="story-link-button story-link-button-light">
              Explore More
            </Link>
          </motion.article>

          <motion.form
            className="grid gap-4 border-t border-white/28 pt-4 sm:grid-cols-2"
            onSubmit={(event) => event.preventDefault()}
            {...revealProps}
          >
            <input type="text" placeholder="Full Name" className="border-b border-white/38 bg-transparent px-0 py-2 text-sm text-white outline-none placeholder:text-white/58 focus:border-rose-200" />
            <input type="email" placeholder="Email Address" className="border-b border-white/38 bg-transparent px-0 py-2 text-sm text-white outline-none placeholder:text-white/58 focus:border-rose-200" />
            <input type="tel" placeholder="Phone Number" className="border-b border-white/38 bg-transparent px-0 py-2 text-sm text-white outline-none placeholder:text-white/58 focus:border-rose-200" />
            <input type="date" className="border-b border-white/38 bg-transparent px-0 py-2 text-sm text-white outline-none focus:border-rose-200" />
            <textarea
              rows={4}
              placeholder="Tell us about your wedding vision"
              className="sm:col-span-2 border-b border-white/38 bg-transparent px-0 py-2 text-sm text-white outline-none placeholder:text-white/58 focus:border-rose-200"
            />
          </motion.form>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_18%_14%,rgba(230,215,255,0.26),transparent_36%),linear-gradient(170deg,#fff_0%,#f7f3e8_100%)]">
        <div className="mx-auto flex min-h-screen w-full max-w-[78rem] flex-col justify-center px-5 py-14 sm:px-10 lg:px-14">
          <motion.span className="font-accent text-[0.65rem] uppercase tracking-[0.22em] text-ink-500" {...revealProps}>
            FAQ
          </motion.span>
          <motion.h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.02em] text-ink-900" {...revealProps}>
            Everything You Need To Know
          </motion.h2>
          <motion.p className="mt-5 max-w-3xl text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-ink-600" {...revealProps}>
            Clear guidance so you can plan with confidence and enjoy an intentional, stress-free bridal makeup experience.
          </motion.p>

          <div className="mt-7 grid">
            {FAQ_ITEMS.map((item, index) => (
              <motion.details
                key={item.question}
                className="group border-t border-ink-300/45 py-4"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.52, ease: easeSculpted, delay: index * 0.06 }}
              >
                <summary className="cursor-pointer list-none font-display text-[clamp(1.15rem,1.9vw,1.45rem)] text-ink-900">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.answer}</p>
              </motion.details>
            ))}
          </div>

          <Link to="/faq" className="story-link-button mt-6">
            Explore More
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
