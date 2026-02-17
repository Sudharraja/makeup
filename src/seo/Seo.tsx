import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type PageMeta = {
  title: string;
  description: string;
};

const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://saranyaberinmakeupartistry.com";

const DEFAULT_META: PageMeta = {
  title: "Saranya Berin Makeup Atelier | Luxury Bridal Makeup",
  description:
    "Luxury bridal makeup artistry with modern editorial finishes, portfolio previews, testimonials, and consultation booking.",
};

const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Home | Saranya Berin Makeup Atelier",
    description:
      "Explore a premium bridal makeup studio experience with services, signature looks, and consultation booking.",
  },
  "/about": {
    title: "About | Saranya Berin Makeup Atelier",
    description:
      "Meet the bridal artist behind Saranya Berin Makeup Atelier and the skin-first approach behind every look.",
  },
  "/services": {
    title: "Services | Saranya Berin Makeup Atelier",
    description:
      "Discover bridal signature makeup, trial sessions, bridal party styling, and airbrush-ready packages.",
  },
  "/experience": {
    title: "Experience | Saranya Berin Makeup Atelier",
    description:
      "See why brides choose Saranya Berin Makeup Atelier for premium products, calm execution, and long-wear finish.",
  },
  "/portfolio": {
    title: "Portfolio | Saranya Berin Makeup Atelier",
    description:
      "Browse signature bridal makeup looks in a filterable gallery with full-screen preview support.",
  },
  "/testimonials": {
    title: "Testimonials | Saranya Berin Makeup Atelier",
    description:
      "Read authentic bridal testimonials and client feedback for the Saranya Berin studio experience.",
  },
  "/social": {
    title: "Social Proof | Saranya Berin Makeup Atelier",
    description:
      "Explore Instagram highlights, bridal reels, and social engagement that reflect real client trust.",
  },
  "/booking": {
    title: "Book Consultation | Saranya Berin Makeup Atelier",
    description:
      "Send your bridal inquiry, share your date and style preferences, and reserve your consultation.",
  },
  "/faq": {
    title: "FAQ | Saranya Berin Makeup Atelier",
    description:
      "Find answers to common bridal booking, trial, timeline, and preparation questions.",
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
