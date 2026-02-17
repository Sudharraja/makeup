import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { easeSculpted } from "../site/motion";

type FooterProps = {
  showBackToTop: boolean;
};

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Experience", href: "/experience" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Social", href: "/social" },
  { label: "FAQ", href: "/faq" },
  { label: "Book", href: "/booking" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Pinterest", href: "https://pinterest.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
];

export default function Footer({ showBackToTop }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="site-footer">
        <div className="page-container">
          <motion.section
            className="surface-card overflow-hidden px-6 py-8 md:px-10 md:py-11"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: easeSculpted }}
          >
            <div className="pointer-events-none absolute -right-20 -top-16 h-52 w-52 rounded-full bg-gold-300/35 blur-3xl animate-glow-pulse" />
            <div className="pointer-events-none absolute -bottom-28 left-[-10%] h-56 w-56 rounded-full bg-rose-300/30 blur-3xl animate-float-drift" />
            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="eyebrow">Limited Dates for 2026</span>
                <h2 className="section-title mt-5">
                  Ready for a wedding morning that feels effortless and luxurious?
                </h2>
                <p className="section-copy mt-4">
                  Share your date, location, and vision. You will receive a personalized response with service recommendations and timeline support.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link to="/booking" className="button-primary">
                  Reserve Consultation
                </Link>
                <Link to="/services" className="button-secondary">
                  View Services
                </Link>
              </div>
            </div>
          </motion.section>

          <section className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <p className="font-accent text-[0.62rem] uppercase tracking-[0.24em] text-ink-500">
                Saranya Berin Atelier
              </p>
              <h3 className="mt-3 font-display text-3xl text-ink-900">Bridal Beauty, Refined.</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">
                Intentional skin prep, elevated artistry, and a calm bridal-suite process built for camera-ready confidence.
              </p>
            </div>

            <div>
              <p className="font-accent text-[0.62rem] uppercase tracking-[0.24em] text-ink-500">Navigate</p>
              <ul className="mt-4 space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link className="text-sm text-ink-700 transition hover:text-gold-600" to={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-accent text-[0.62rem] uppercase tracking-[0.24em] text-ink-500">Studio Contact</p>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                <li>
                  <a className="transition hover:text-gold-600" href="mailto:hello@saranyaberin.com">
                    hello@saranyaberin.com
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-gold-600" href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li>By appointment | Destination bookings available</li>
              </ul>
            </div>

            <div>
              <p className="font-accent text-[0.62rem] uppercase tracking-[0.24em] text-ink-500">Social</p>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-ink-200/80 bg-white/75 text-ink-700 transition duration-300 hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-600"
                    aria-label={link.label}
                  >
                    <SocialIcon type={link.label.toLowerCase()} />
                  </a>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-600">
                Follow for bridal look breakdowns, trend edits, and real wedding moments.
              </p>
            </div>
          </section>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/70 pt-6 text-sm text-ink-500 md:flex-row md:items-center md:justify-between">
            <p>{currentYear} Saranya Berin Makeup Atelier. All rights reserved.</p>
            <p>Crafted for modern brides and timeless photographs.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Back to top"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="m5 14 7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case "instagram":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7.6 2h8.8A5.6 5.6 0 0 1 22 7.6v8.8a5.6 5.6 0 0 1-5.6 5.6H7.6A5.6 5.6 0 0 1 2 16.4V7.6A5.6 5.6 0 0 1 7.6 2Zm8.8 1.8H7.6A3.8 3.8 0 0 0 3.8 7.6v8.8a3.8 3.8 0 0 0 3.8 3.8h8.8a3.8 3.8 0 0 0 3.8-3.8V7.6a3.8 3.8 0 0 0-3.8-3.8ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.1-2.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.5 2 2 6.4 2 11.9c0 4.2 2.5 7.8 6.2 9.4-.1-.8-.2-2 .1-2.9l1.2-5.1s-.3-.7-.3-1.8c0-1.7 1-3 2.3-3 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.8-1 4.4-.3 1.3.7 2.4 2 2.4 2.4 0 4.1-3.1 4.1-6.7 0-2.8-1.9-4.9-5.3-4.9-3.9 0-6.3 2.9-6.3 6.2 0 1.1.3 1.9.8 2.5.2.2.2.3.1.6l-.3 1.1c-.1.3-.3.4-.6.3-1.6-.7-2.4-2.5-2.4-4.6 0-3.4 2.8-7.5 8.6-7.5 4.7 0 7.7 3.4 7.7 7 0 4.8-2.6 8.4-6.4 8.4-1.3 0-2.5-.7-2.9-1.5l-.8 3.1c-.3 1.1-.9 2.2-1.5 3.1 1.1.3 2.2.4 3.3.4 5.5 0 10-4.4 10-9.9C22 6.5 17.5 2 12 2Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 21.9v-8.2h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.5 1.6-1.5h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.2H8v3.2h2.6v8.2h2.9Z" />
        </svg>
      );
    default:
      return null;
  }
}
