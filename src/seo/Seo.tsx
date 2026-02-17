import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PageMeta = {
  title: string;
  description: string;
};

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://saranyaberinmakeupartistry.com";

const DEFAULT_META: PageMeta = {
  title: "SaranyaBerin Makeup Artistry | Bridal Makeup Dashboard",
  description:
    "Luxury bridal makeup artistry with dedicated pages for services, portfolio, reviews, and booking consultations.",
};

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Dashboard | SaranyaBerin Makeup Artistry",
    description:
      "Explore the bridal makeup dashboard and navigate to dedicated pages for about, services, portfolio, reviews, and booking.",
  },
  "/about": {
    title: "About Us | SaranyaBerin Makeup Artistry",
    description:
      "Meet the bridal artist, philosophy, and experience that shape each elegant wedding look.",
  },
  "/services": {
    title: "Services | SaranyaBerin Makeup Artistry",
    description:
      "Discover bridal signature makeup, trials, bridal party styling, and airbrush packages.",
  },
  "/why-choose-us": {
    title: "Why Choose Us | SaranyaBerin Makeup Artistry",
    description:
      "Learn why brides choose SaranyaBerin Makeup Artistry for quality, calm execution, and flawless results.",
  },
  "/portfolio": {
    title: "Portfolio | SaranyaBerin Makeup Artistry",
    description:
      "Browse signature bridal makeup looks through a filterable gallery with full-screen previews.",
  },
  "/reviews": {
    title: "Reviews | SaranyaBerin Makeup Artistry",
    description:
      "Read authentic bridal reviews and testimonials with dynamic Google review integration support.",
  },
  "/booking": {
    title: "Book Consultation | SaranyaBerin Makeup Artistry",
    description:
      "Send your bridal inquiry, choose service interest, and reserve your wedding date consultation.",
  },
};

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const pageMeta = PAGE_META[location.pathname] ?? DEFAULT_META;
    const canonicalUrl = new URL(location.pathname, SITE_URL).toString();

    document.documentElement.lang = "en";
    document.title = pageMeta.title;

    setMetaTag("name", "description", pageMeta.description);
    setMetaTag("name", "keywords", "bridal makeup artist, wedding makeup, airbrush bridal makeup, luxury bridal beauty");
    setMetaTag("name", "robots", "index,follow");
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:title", pageMeta.title);
    setMetaTag("property", "og:description", pageMeta.description);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag(
      "property",
      "og:image",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
    );
    setMetaTag("name", "twitter:card", "summary_large_image");

    setCanonical(canonicalUrl);
  }, [location.pathname]);

  return null;
}

function setMetaTag(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let meta = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
}

function setCanonical(url: string) {
  let canonical = document.head.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = url;
}
