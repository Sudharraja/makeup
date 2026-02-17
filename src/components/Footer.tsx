type FooterProps = {
  showBackToTop: boolean;
};

export default function Footer({ showBackToTop }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>
          Copyright {new Date().getFullYear()} SaranyaBerin Makeup Artistry. All rights reserved.
        </p>

        <div className="social-links" aria-label="Social media links">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://pinterest.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Pinterest"
          >
            <PinterestIcon />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        Top
      </button>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.25" cy="6.75" r="1" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-3.28 17.38c0-.53 0-1.37.17-2l1.22-5.1s-.3-.62-.3-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.49-.25 1.05.53 1.92 1.56 1.92 1.87 0 3.31-1.97 3.31-4.8 0-2.51-1.8-4.26-4.37-4.26a4.53 4.53 0 0 0-4.71 4.56c0 .91.35 1.89.79 2.42a.32.32 0 0 1 .07.3l-.31 1.26c-.05.2-.16.24-.36.15-1.34-.62-2.17-2.55-2.17-4.1 0-3.34 2.42-6.41 7-6.41 3.67 0 6.52 2.61 6.52 6.1 0 3.63-2.29 6.56-5.47 6.56-1.07 0-2.08-.56-2.42-1.22l-.66 2.52c-.24.92-.89 2.06-1.32 2.76A9 9 0 1 0 12 3Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 22V12.8h3.1l.46-3.58H13.5V7c0-1.04.29-1.75 1.78-1.75h1.9V2.03A25.3 25.3 0 0 0 14.4 1.9c-2.74 0-4.62 1.67-4.62 4.75v2.57H6.67v3.58h3.11V22h3.72Z" />
    </svg>
  );
}
