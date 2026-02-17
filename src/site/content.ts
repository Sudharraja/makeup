export type RouteNavItem = {
  path: string;
  label: string;
};

export type ServiceIcon = "bridal" | "trial" | "party" | "airbrush" | "destination";

export type ServiceItem = {
  icon: ServiceIcon;
  name: string;
  description: string;
  price: string;
};

export type LookCategory =
  | "Bridal"
  | "Natural"
  | "Glam"
  | "Editorial"
  | "Traditional";
export type LookFilter = LookCategory | "All";

export type LookItem = {
  id: number;
  title: string;
  category: LookCategory;
  image: string;
  alt: string;
};

export type ReviewItem = {
  id: string;
  authorName: string;
  authorPhoto: string;
  rating: number;
  date: string;
  text: string;
};

export type WhyChooseItem = {
  title: string;
  description: string;
};

export type DashboardCard = {
  path: string;
  title: string;
  description: string;
  image: string;
};

export const NAV_ITEMS: RouteNavItem[] = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/about", label: "Artist" },
  { path: "/services", label: "Services" },
  { path: "/experience", label: "Experience" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/social", label: "Social" },
  { path: "/faq", label: "FAQ" },
  { path: "/booking", label: "Book Consultation" },
];


export const DASHBOARD_CARDS: DashboardCard[] = [
  {
    path: "/about",
    title: "Artist Story",
    description: "Meet the bridal specialist behind the studio and the skin-first philosophy.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    path: "/services",
    title: "Signature Services",
    description: "Explore elevated bridal packages designed for ceremony-to-reception longevity.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    path: "/experience",
    title: "Why Brides Choose Us",
    description: "See the service standards, planning precision, and artistry that set us apart.",
    image:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    path: "/portfolio",
    title: "Portfolio Edit",
    description: "Browse polished bridal looks across natural, glam, and airbrush finishes.",
    image:
      "https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=1200&q=80",
  },
  {
    path: "/testimonials",
    title: "Client Love",
    description: "Read verified bridal testimonials and post-wedding feedback highlights.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    path: "/social",
    title: "Social Proof",
    description: "Explore Instagram highlights, bridal reels, and social engagement snapshots.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  },
  {
    path: "/faq",
    title: "FAQ",
    description: "Find clear answers about booking timelines, trials, travel, and preparation steps.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    path: "/booking",
    title: "Reserve Your Date",
    description: "Share your details and secure your bridal consultation timeline.",
    image:
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    icon: "bridal",
    name: "Bridal Signature",
    description:
      "A tailored wedding-day look with skin prep, long-wear layering, and detailed lash placement.",
    price: "Starting at $450",
  },
  {
    icon: "trial",
    name: "Bridal Trial",
    description:
      "A full consultation and preview session to align your dream look with wardrobe and lighting.",
    price: "Starting at $190",
  },
  {
    icon: "party",
    name: "Bridal Party",
    description:
      "Cohesive makeup styling for bridesmaids, mothers, and VIP guests while preserving individuality.",
    price: "Starting at $120",
  },
  {
    icon: "airbrush",
    name: "Airbrush Finish",
    description:
      "A lightweight, humidity-proof airbrush complexion designed for high-definition photography.",
    price: "Starting at $520",
  },
  {
    icon: "destination",
    name: "Destination Weddings",
    description:
      "Travel-ready bridal artistry with climate-proof prep, touch-up planning, and on-location timeline support.",
    price: "Starting at $780",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: "Skin-First Technique",
    description:
      "Every look begins with skin analysis and prep so makeup feels breathable, radiant, and long wearing.",
  },
  {
    title: "Premium Product Curation",
    description:
      "Only pro-grade formulas are used for humidity resistance, camera performance, and comfort.",
  },
  {
    title: "Bridal Timeline Expertise",
    description:
      "Precise scheduling and calm execution keep your bridal suite on time without stress.",
  },
  {
    title: "Personalized Design Sessions",
    description:
      "Looks are tailored to face structure, outfit tones, venue lighting, and your personal style.",
  },
  {
    title: "Photo and Video Ready Finish",
    description:
      "Techniques are optimized for both daylight portraits and evening receptions.",
  },
  {
    title: "Fast, Warm Communication",
    description:
      "Clear updates, quick confirmations, and optional WhatsApp coordination throughout planning.",
  },
];

export const ARTIST_STATS = [
  { value: "11+", label: "Years of Experience" },
  { value: "340+", label: "Bridal Looks Delivered" },
  { value: "38", label: "Destination Venues" },
  { value: "12h", label: "Typical Reply Time" },
];

export const FILTERS: LookFilter[] = [
  "All",
  "Bridal",
  "Natural",
  "Glam",
  "Editorial",
  "Traditional",
];

export const LOOKS: LookItem[] = [
  {
    id: 1,
    title: "Velvet Veil Bridal",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Bride with glowing makeup and pearl veil",
  },
  {
    id: 2,
    title: "Rose Gold Glam",
    category: "Glam",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    alt: "Glamorous bridal-inspired makeup with rose tones",
  },
  {
    id: 3,
    title: "Soft Focus Natural",
    category: "Natural",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    alt: "Natural bridal makeup with soft skin finish",
  },
  {
    id: 4,
    title: "Aisle Day Radiance",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    alt: "Elegant wedding day makeup look with luminous skin",
  },
  {
    id: 5,
    title: "Editorial Veil",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    alt: "Editorial bridal makeup with defined eyes and luminous skin",
  },
  {
    id: 6,
    title: "Evening Luxe",
    category: "Glam",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
    alt: "Bridal glam look with polished eyes and lips",
  },
  {
    id: 7,
    title: "Mint Light Complexion",
    category: "Natural",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh natural bridal makeup with dewy complexion",
  },
  {
    id: 8,
    title: "Traditional Glow",
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional bridal makeup with rich tones and polished details",
  },
  {
    id: 9,
    title: "Runway Bride",
    category: "Editorial",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80",
    alt: "Editorial wedding makeup featuring sculpted eyes and satin skin",
  },
  {
    id: 10,
    title: "Heritage Gold",
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional bridal look with warm tones and statement eyes",
  },
];

export const FALLBACK_REVIEWS: ReviewItem[] = [
  {
    id: "a1",
    authorName: "Alina Thompson",
    authorPhoto: "",
    rating: 5,
    date: "2025-10-12",
    text: "Every detail felt intentional. My makeup looked luminous in person and in every photo through a full-day wedding timeline.",
  },
  {
    id: "a2",
    authorName: "Meera Patel",
    authorPhoto: "",
    rating: 5,
    date: "2025-09-03",
    text: "Calm, precise, and incredibly thoughtful with skin prep. The look held perfectly from first look to the final dance.",
  },
  {
    id: "a3",
    authorName: "Sofia Ramirez",
    authorPhoto: "",
    rating: 5,
    date: "2025-11-27",
    text: "My bridal trial gave me so much confidence. On the wedding day, she elevated it exactly how I imagined.",
  },
  {
    id: "a4",
    authorName: "Priya Nair",
    authorPhoto: "",
    rating: 5,
    date: "2025-08-18",
    text: "The entire bridal party loved their looks. Everyone felt polished but still like themselves.",
  },
  {
    id: "a5",
    authorName: "Emily Carter",
    authorPhoto: "",
    rating: 5,
    date: "2025-07-09",
    text: "I booked airbrush and it was flawless even through warm weather. Zero touch-ups needed in portraits.",
  },
  {
    id: "a6",
    authorName: "Nandita Rao",
    authorPhoto: "",
    rating: 5,
    date: "2025-12-02",
    text: "Professional, kind, and incredibly talented. She brought out my features in the softest, most elegant way.",
  },
];

export function normalizeGoogleReviews(payload: unknown): ReviewItem[] {
  const records = getReviewRecords(payload);

  return records
    .map((record, index) => {
      const reviewer = getObjectValue(record.reviewer);
      const authorName =
        getString(record.author_name) ||
        getString(record.authorName) ||
        getString(record.name) ||
        (reviewer ? getString(reviewer.displayName) : "") ||
        "Verified Bride";

      const authorPhoto =
        getString(record.profile_photo_url) ||
        getString(record.authorPhoto) ||
        getString(record.photoUrl) ||
        (reviewer ? getString(reviewer.profilePhotoUrl) : "");

      const text =
        getString(record.text) ||
        getString(record.comment) ||
        getString(record.reviewText) ||
        getString(record.snippet);

      const rating = Math.max(
        1,
        Math.min(
          5,
          Math.round(
            getNumber(record.rating) ??
              getNumber(record.stars) ??
              getNumber(record.starRating) ??
              5
          )
        )
      );

      const date = parseReviewDate(
        getString(record.date) ||
          getString(record.reviewDate) ||
          getString(record.time) ||
          getString(record.createdAt)
      );

      const id = getString(record.id) || `${authorName}-${index}`;

      return { id, authorName, authorPhoto, rating, date, text };
    })
    .filter((item) => item.text.length > 0)
    .slice(0, 15);
}

export function formatReviewDate(rawDate: string): string {
  const parsed = new Date(rawDate);
  if (Number.isNaN(parsed.getTime())) {
    return rawDate;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function parseReviewDate(value: string): string {
  if (!value) {
    return new Date().toISOString();
  }

  const numericValue = Number(value);
  if (!Number.isNaN(numericValue)) {
    const milliseconds = numericValue > 10_000_000_000 ? numericValue : numericValue * 1000;
    const numericDate = new Date(milliseconds);
    if (!Number.isNaN(numericDate.getTime())) {
      return numericDate.toISOString();
    }
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : parsed.toISOString();
}

function getReviewRecords(payload: unknown): Array<Record<string, unknown>> {
  if (Array.isArray(payload)) {
    return payload.filter(isRecord);
  }

  if (!isRecord(payload)) {
    return [];
  }

  const keys = ["reviews", "data", "items", "result", "results"];
  for (const key of keys) {
    const candidate = payload[key];
    if (Array.isArray(candidate)) {
      return candidate.filter(isRecord);
    }
  }

  return [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getObjectValue(value: unknown): Record<string, unknown> | null {
  return isRecord(value) ? value : null;
}

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function getNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}
