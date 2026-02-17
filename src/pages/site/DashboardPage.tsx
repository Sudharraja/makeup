import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/heroSectiongirl.png";
import PageTransition from "../../components/PageTransition";
import { FALLBACK_REVIEWS } from "../../site/content";
import { easeSculpted, revealProps } from "../../site/motion";

const SERVICE_OVERVIEW = [
  {
    title: "Bridal Makeup",
    text: "Full luxury bridal transformation experience designed for timeless elegance.",
  },
  {
    title: "Bridal Trial",
    text: "Preview and perfect your bridal look before the wedding day.",
  },
  {
    title: "Engagement Makeup",
    text: "Sophisticated makeup designed for engagement and pre-wedding events.",
  },
  {
    title: "Airbrush Makeup",
    text: "Advanced airbrush techniques for long-lasting, flawless skin finish.",
  },
];

const EXPERIENCE_POINTS = [
  "Premium luxury products",
  "Long-lasting professional techniques",
  "Personalized experience",
  "Calm and professional approach",
];

const FAQ_ITEMS = [
  {
    question: "How far in advance should I book?",
    answer:
      "For peak dates, booking 6-10 months ahead is ideal. Destination and multi-event weddings should be reserved earlier.",
  },
  {
    question: "Is a bridal trial recommended?",
    answer:
      "Yes. A trial session finalizes tone, texture, and finish so your wedding morning feels confident and seamless.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Yes. Destination services include schedule coordination, climate-aware products, and on-location execution.",
  },
];

export default function DashboardPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  const spotlightSpringX = useSpring(spotlightX, { stiffness: 140, damping: 24, mass: 0.38 });
  const spotlightSpringY = useSpring(spotlightY, { stiffness: 140, damping: 24, mass: 0.38 });
  const spotlightMainX = useTransform(spotlightSpringX, (value) => value * 1.1);
  const spotlightMainY = useTransform(spotlightSpringY, (value) => value * 0.95);
  const spotlightAccentX = useTransform(spotlightSpringX, (value) => value * -0.72);
  const spotlightAccentY = useTransform(spotlightSpringY, (value) => value * -0.68);
  const spotlightBeamX = useTransform(spotlightSpringX, (value) => value * 0.42);
  const spotlightBeamY = useTransform(spotlightSpringY, (value) => value * 0.26);
  const spotlightBeamRotate = useTransform(spotlightSpringX, [-70, 70], [18, 26]);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % Math.min(4, FALLBACK_REVIEWS.length));
    }, 4600);

    return () => window.clearInterval(interval);
  }, []);

  const activeTestimonial = FALLBACK_REVIEWS[testimonialIndex];

  const handleHeroPointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;

    spotlightX.set(normalizedX * 110);
    spotlightY.set(normalizedY * 92);
  };

  const handleHeroPointerLeave = () => {
    spotlightX.set(0);
    spotlightY.set(0);
  };

  return (
    <PageTransition variant="story">
      <section
        ref={heroRef}
        className="story-screen story-screen-hero"
        onPointerMove={handleHeroPointerMove}
        onPointerLeave={handleHeroPointerLeave}
      >
        <motion.img
          src={heroImage}
          alt="Bride in soft natural light with refined makeup"
          className="story-hero-media"
          style={{ scale: heroScale, y: heroY }}
        />
        <div className="story-hero-overlay" />
        <div className="story-grain-overlay" />
        <div className="story-spotlight-layer" aria-hidden="true">
          <motion.div
            className="story-spotlight story-spotlight-main"
            style={{ x: spotlightMainX, y: spotlightMainY }}
          />
          <motion.div
            className="story-spotlight story-spotlight-accent"
            style={{ x: spotlightAccentX, y: spotlightAccentY }}
          />
          <motion.div className="story-spotlight-beam" style={{ x: spotlightBeamX, y: spotlightBeamY, rotate: spotlightBeamRotate }} />
        </div>

        <div className="story-hero-content">
          <motion.span
            className="story-micro-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            Luxury Bridal Makeup Artist
          </motion.span>
          <motion.h1
            className="story-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.08 }}
          >
            Where Beauty Becomes Timeless Art
          </motion.h1>
          <motion.p
            className="story-hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.16 }}
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
            <Link
              to="/portfolio"
              className="button-secondary border-white/70 bg-white/20 text-white hover:border-white hover:bg-white/30 hover:text-white"
            >
              Explore Signature Portfolio
            </Link>
          </motion.div>
          <motion.p
            className="mt-6 text-sm text-white/82"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            Trusted by 300+ Brides | 5-Star Rated Experience
          </motion.p>
        </div>

        <motion.div
          className="story-scroll-indicator"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span>Scroll</span>
          <div className="story-scroll-track">
            <motion.div
              className="story-scroll-dot"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <section className="story-screen story-screen-light">
        <div className="story-split-layout">
          <motion.div className="story-immersive-media" {...revealProps}>
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80"
              alt="Signature bridal makeup transformation"
              loading="lazy"
            />
          </motion.div>
          <motion.article className="story-editorial-copy" {...revealProps}>
            <span className="story-section-label">Portfolio</span>
            <h2 className="story-section-title">Signature Bridal Transformations</h2>
            <p className="story-section-text">
              Explore a curated collection of timeless bridal looks, each crafted with precision, artistry, and a deep understanding of individual beauty.
            </p>
            <Link to="/portfolio" className="story-link-button">
              Explore More
            </Link>
          </motion.article>
        </div>
      </section>

      <section className="story-screen story-screen-muted">
        <div className="story-split-layout story-split-layout-reverse">
          <motion.div className="story-immersive-media" {...revealProps}>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80"
              alt="The artist behind the beauty"
              loading="lazy"
            />
          </motion.div>
          <motion.article className="story-editorial-copy" {...revealProps}>
            <span className="story-section-label">About Artist</span>
            <h2 className="story-section-title">The Artist Behind the Beauty</h2>
            <p className="story-section-text">
              With years of experience and a passion for enhancing natural elegance, each bridal transformation is designed to reflect individuality, confidence, and timeless beauty.
            </p>
            <ul className="story-bullet-list">
              <li>Personalized bridal experience</li>
              <li>Premium luxury products</li>
              <li>Attention to detail</li>
              <li>Trusted by hundreds of brides</li>
            </ul>
            <Link to="/about" className="story-link-button">
              Explore More
            </Link>
          </motion.article>
        </div>
      </section>

      <section className="story-screen story-screen-light">
        <motion.div className="story-wide-copy" {...revealProps}>
          <span className="story-section-label">Services</span>
          <h2 className="story-section-title">Luxury Bridal Makeup Services</h2>
          <p className="story-section-text">
            Offering complete bridal beauty solutions tailored to your unique wedding journey, ensuring flawless results that last throughout your special day.
          </p>
          <div className="story-service-lines">
            {SERVICE_OVERVIEW.map((service) => (
              <article key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <Link to="/services" className="story-link-button">
            Explore More
          </Link>
        </motion.div>
      </section>

      <section className="story-screen story-screen-dark">
        <div className="story-split-layout">
          <motion.div className="story-immersive-media" {...revealProps}>
            <img
              src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury bridal experience"
              loading="lazy"
            />
          </motion.div>
          <motion.article className="story-editorial-copy story-editorial-copy-dark" {...revealProps}>
            <span className="story-section-label text-white/80">Why Choose Me</span>
            <h2 className="story-section-title text-white">A Luxury Experience Designed Around You</h2>
            <p className="story-section-text text-white/85">
              Every bridal experience is thoughtfully crafted to ensure comfort, confidence, and exceptional results. Using only premium products and proven techniques, the focus remains on enhancing your natural beauty while delivering long-lasting elegance.
            </p>
            <ul className="story-bullet-list text-white/82">
              {EXPERIENCE_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link to="/experience" className="story-link-button story-link-button-light">
              Explore More
            </Link>
          </motion.article>
        </div>
      </section>

      <section className="story-screen story-screen-muted">
        <motion.div className="story-wide-copy" {...revealProps}>
          <span className="story-section-label">Testimonials</span>
          <h2 className="story-section-title">Words From Beautiful Brides</h2>
          <p className="story-section-text">
            Discover heartfelt experiences from brides who trusted their most important day to professional artistry.
          </p>
          <AnimatePresence mode="wait">
            <motion.article
              key={activeTestimonial.id}
              className="story-testimonial"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.42, ease: easeSculpted }}
            >
              <p className="story-testimonial-quote">"{activeTestimonial.text}"</p>
              <p className="story-testimonial-meta">
                {activeTestimonial.authorName} |{" "}
                {new Date(activeTestimonial.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </motion.article>
          </AnimatePresence>
          <Link to="/testimonials" className="story-link-button">
            Explore More
          </Link>
        </motion.div>
      </section>

      <section className="story-screen story-screen-light">
        <div className="story-split-layout story-split-layout-reverse">
          <motion.div className="story-immersive-media" {...revealProps}>
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1600&q=80"
              alt="Real brides and social moments"
              loading="lazy"
            />
          </motion.div>
          <motion.article className="story-editorial-copy" {...revealProps}>
            <span className="story-section-label">Instagram / Social Proof</span>
            <h2 className="story-section-title">Real Brides. Real Moments.</h2>
            <p className="story-section-text">
              Explore real bridal transformations, behind-the-scenes moments, and beauty stories shared across social platforms.
            </p>
            <Link to="/social" className="story-link-button">
              Explore More
            </Link>
          </motion.article>
        </div>
      </section>

      <section className="story-screen story-screen-dark">
        <div className="story-split-layout">
          <motion.article className="story-editorial-copy story-editorial-copy-dark" {...revealProps}>
            <span className="story-section-label text-white/80">Booking / Contact</span>
            <h2 className="story-section-title text-white">Begin Your Bridal Beauty Journey</h2>
            <p className="story-section-text text-white/85">
              Share your wedding details and begin a personalized bridal beauty experience designed exclusively for you.
            </p>
            <form className="story-inline-form" onSubmit={(event) => event.preventDefault()}>
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <input type="date" />
              <textarea rows={4} placeholder="Tell us about your wedding vision" />
            </form>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/booking" className="button-primary">
                Explore More
              </Link>
            </div>
          </motion.article>
          <motion.div className="story-immersive-media" {...revealProps}>
            <img
              src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?auto=format&fit=crop&w=1600&q=80"
              alt="Luxury bridal consultation setup"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <section className="story-screen story-screen-muted">
        <motion.div className="story-wide-copy" {...revealProps}>
          <span className="story-section-label">FAQ</span>
          <h2 className="story-section-title">Everything You Need to Know</h2>
          <p className="story-section-text">
            Clear answers to help you feel confident and prepared for your bridal beauty experience.
          </p>
          <div className="story-faq-list">
            {FAQ_ITEMS.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
          <Link to="/faq" className="story-link-button">
            Explore More
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
