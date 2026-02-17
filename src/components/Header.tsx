import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { easeSculpted } from "../site/motion";

type HeaderItem = {
  path: string;
  label: string;
};

type HeaderProps = {
  items: HeaderItem[];
};

const SCROLL_THRESHOLD = 24;

export default function Header({ items }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const primaryItems = useMemo(
    () => items.filter((item) => item.path !== "/booking"),
    [items]
  );
  const useTransparentHeader = location.pathname === "/" && !isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
    useTransparentHeader
      ? `nav-link nav-link-light ${isActive ? "nav-link-active-light" : ""}`
      : `nav-link ${isActive ? "nav-link-active" : ""}`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "flex items-center justify-between rounded-2xl border px-4 py-3 transition duration-300",
      isActive
        ? "border-ink-900/80 bg-ink-900 text-white"
        : "border-ink-200/80 bg-white/70 text-ink-800 hover:border-gold-400/50 hover:text-gold-600",
    ].join(" ");

  return (
    <header className="site-header">
      <div className="page-container">
        <motion.div
          className={[
            "flex items-center justify-between gap-3 rounded-4xl border px-3 py-2.5 transition-all duration-500 sm:px-4",
            isScrolled
              ? "border-white/85 bg-white/90 shadow-[0_20px_45px_-30px_rgba(19,12,21,0.88)] backdrop-blur-2xl"
              : "border-transparent bg-transparent shadow-none backdrop-blur-none",
          ].join(" ")}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeSculpted }}
        >
          <Link to="/" className="group flex items-center gap-3" aria-label="Saranya Berin homepage">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-linear-to-br from-gold-300 via-gold-400 to-rose-400 font-accent text-sm font-bold tracking-[0.14em] text-ink-900 shadow-[0_14px_32px_-20px_rgba(138,94,47,0.95)]">
              SB
              <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 to-transparent" />
            </span>
            <span className="hidden min-[380px]:flex flex-col leading-none">
              <span
                className={[
                  "font-accent text-[0.58rem] font-semibold uppercase tracking-[0.28em]",
                  useTransparentHeader ? "text-white/80" : "text-ink-500",
                ].join(" ")}
              >
                Makeup Atelier
              </span>
              <span className={useTransparentHeader ? "font-display text-[1.08rem] text-white" : "font-display text-[1.08rem] text-ink-900"}>
                Saranya Berin
              </span>
            </span>
          </Link>

          <nav
            className={[
              "hidden xl:flex items-center gap-1 rounded-full p-1",
              useTransparentHeader
                ? "border border-white/35 bg-white/15 shadow-[0_16px_38px_-34px_rgba(15,13,14,0.75)] backdrop-blur-md"
                : "border border-white/80 bg-white/75 shadow-[0_18px_45px_-40px_rgba(19,12,21,0.8)]",
            ].join(" ")}
            aria-label="Primary navigation"
          >
            {primaryItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={desktopLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="tel:+15551234567"
              className={useTransparentHeader ? "link-chip border-white/40 bg-white/18 text-white hover:border-white hover:text-white" : "link-chip"}
            >
              +1 555 123 4567
            </a>
            <Link to="/booking" className="button-primary">
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-ink-200/90 bg-white/75 text-ink-800 shadow-[0_10px_24px_-20px_rgba(19,12,21,0.9)] transition duration-300 hover:border-gold-400/50 hover:text-gold-600 lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-5">
              <span
                className={[
                  "absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-all duration-300",
                  isMenuOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current transition-all duration-300",
                  isMenuOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 top-[14px] h-0.5 w-full rounded-full bg-current transition-all duration-300",
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </span>
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-ink-950/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.aside
              className="fixed inset-x-4 top-4 z-[80] overflow-hidden rounded-[1.85rem] border border-white/80 bg-cream-50/95 p-6 shadow-[0_26px_80px_-30px_rgba(19,12,21,0.9)] lg:hidden"
              initial={{ opacity: 0, y: -26, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.35, ease: easeSculpted }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-accent text-[0.62rem] uppercase tracking-[0.22em] text-ink-500">
                    Navigation
                  </p>
                  <h2 className="mt-1 font-display text-2xl text-ink-900">Explore Studio</h2>
                </div>
                <button
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink-200/80 bg-white/80 text-ink-700 transition duration-300 hover:border-gold-400/50 hover:text-gold-600"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              <nav className="mt-7 grid gap-2" aria-label="Mobile navigation">
                {items.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className={mobileLinkClass}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="font-accent text-[0.68rem] uppercase tracking-[0.18em]">
                        {item.label}
                      </span>
                      <span className="text-xs opacity-60">{String(index + 1).padStart(2, "0")}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                <a href="tel:+15551234567" className="button-secondary">
                  Call Studio
                </a>
                <Link to="/booking" className="button-primary" onClick={() => setIsMenuOpen(false)}>
                  Reserve Date
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
