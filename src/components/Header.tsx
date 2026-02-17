import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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

  const closeMenu = () => setIsMenuOpen(false);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `site-nav__link ${isActive ? "is-active" : ""}`;

  const getMobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `mobile-menu__link ${isActive ? "is-active" : ""}`;

  return (
    <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header__inner">
        <Link className="brand-mark" to="/" aria-label="SaranyaBerin Makeup Artistry homepage">
          <span className="brand-mark__crest" aria-hidden="true">
            S
          </span>
          <span className="brand-mark__text">
            SaranyaBerin Makeup Artistry
            <strong>Luxury Makeup Artistry</strong>
          </span>
        </Link>

        <nav className="site-nav site-nav--desktop" aria-label="Primary navigation">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={getNavLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink className="pastel-button nav-cta" to="/booking">
            Inquire Now
          </NavLink>
        </nav>

        <button
          type="button"
          className="mobile-menu-trigger"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        role="presentation"
      />
      <aside
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu__header">
          <p>Navigate</p>
          <button type="button" onClick={closeMenu} aria-label="Close navigation menu">
            x
          </button>
        </div>

        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={getMobileNavLinkClass}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="pastel-button mobile-menu__cta" to="/booking" onClick={closeMenu}>
          Book Consultation
        </NavLink>
      </aside>
    </header>
  );
}
