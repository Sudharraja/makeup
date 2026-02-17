import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PageTransition from "../../components/PageTransition";
import {
  FALLBACK_REVIEWS,
  formatReviewDate,
  getInitials,
  normalizeGoogleReviews,
  type ReviewItem,
} from "../../site/content";
import { revealProps } from "../../site/motion";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<ReviewItem[]>(FALLBACK_REVIEWS);

  useEffect(() => {
    const endpoint = import.meta.env.VITE_GOOGLE_REVIEWS_ENDPOINT;
    if (!endpoint) {
      return;
    }

    let isMounted = true;

    const pullReviews = async () => {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error("Google reviews request failed.");
        }

        const payload: unknown = await response.json();
        const normalized = normalizeGoogleReviews(payload);

        if (isMounted && normalized.length > 0) {
          setReviews(normalized);
        }
      } catch (error) {
        console.error("Unable to fetch live reviews feed.", error);
      }
    };

    void pullReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const reviewAverage = useMemo(() => {
    if (reviews.length === 0) {
      return "5.0";
    }
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  return (
    <PageTransition>
      <section className="page-container">
        <motion.div className="max-w-3xl" {...revealProps}>
          <span className="eyebrow">Client Testimonials</span>
          <h1 id="reviews-title" className="section-title mt-5">
            Honest feedback from brides we have had the honor to style.
          </h1>
          <p className="section-copy mt-5">
            These reviews highlight the experience beyond the final look: communication, comfort, timing, and confidence on one of the biggest days of your life.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <MetricCard label="Average Rating" value={reviewAverage} suffix="/5.0" />
          <MetricCard label="Published Reviews" value={String(reviews.length)} />
          <MetricCard label="Recommended By" value="100%" suffix=" brides surveyed" />
        </motion.div>

        <motion.div
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs text-ink-600 backdrop-blur"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <GoogleMark />
          <span>Verified with Google Reviews feed when connected.</span>
        </motion.div>
      </section>

      <section className="page-container section-shell">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <Swiper
            modules={[Autoplay, Navigation, A11y]}
            navigation
            loop={reviews.length > 3}
            autoplay={{
              delay: 4400,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="reviews-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={review.id}>
                <motion.article
                  className="surface-card flex h-full flex-col p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-4 flex gap-1.5">
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <StarIcon key={`${review.id}-${starIndex}`} filled={starIndex < review.rating} />
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-ink-700">{review.text}</p>
                    <div className="mt-6 flex items-center gap-3 border-t border-white/70 pt-5">
                      <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-gold-400/40 bg-gold-300/20 text-sm font-semibold text-gold-600">
                        {review.authorPhoto ? (
                          <img
                            src={review.authorPhoto}
                            alt={`${review.authorName} profile`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <span>{getInitials(review.authorName)}</span>
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-ink-900">{review.authorName}</p>
                        <p className="text-xs text-ink-500">{formatReviewDate(review.date)}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      <section className="page-container section-shell pt-2">
        <motion.div
          className="surface-card overflow-hidden px-7 py-8 md:px-10 md:py-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.62 }}
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-rose-300/30 blur-3xl animate-float-drift" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">Your Turn</span>
              <h2 className="section-title mt-4">Let us create your most confident bridal look.</h2>
              <p className="section-copy mt-4">
                Secure your consultation and receive a personalized recommendation based on your date, venue, and style preferences.
              </p>
            </div>
            <Link to="/booking" className="button-primary">
              Start Booking
            </Link>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}

function GoogleMark() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.83-.07-1.42-.23-2.03H12.23v3.91h6.47c-.13.97-.8 2.42-2.27 3.4l-.02.13 3.19 2.46.22.02c2.01-1.85 3.67-4.56 3.67-7.89Z"
      />
      <path
        fill="#34A853"
        d="M12.23 24c3.17 0 5.83-1.04 7.77-2.84l-3.7-2.87c-.99.69-2.31 1.17-4.07 1.17-3.1 0-5.73-2.03-6.67-4.84l-.12.01-3.32 2.55-.04.11A11.74 11.74 0 0 0 12.23 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.56 14.62a7.01 7.01 0 0 1-.39-2.3c0-.8.14-1.58.37-2.3l-.01-.15-3.36-2.59-.11.05A11.78 11.78 0 0 0 0 12.32c0 1.9.45 3.71 1.24 5.31l4.32-3.01Z"
      />
      <path
        fill="#EA4335"
        d="M12.23 4.87c2.22 0 3.72.96 4.58 1.76l3.34-3.26C18.06 1.42 15.4.13 12.23.13A11.74 11.74 0 0 0 2.06 6.99l3.48 2.69c.95-2.81 3.57-4.81 6.69-4.81Z"
      />
    </svg>
  );
}

function MetricCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string;
  suffix?: string;
}) {
  return (
    <article className="surface-card p-5">
      <p className="font-accent text-[0.58rem] uppercase tracking-[0.2em] text-ink-500">{label}</p>
      <p className="mt-2 font-display text-4xl text-ink-900">
        {value}
        {suffix ? <span className="text-lg text-ink-500">{suffix}</span> : null}
      </p>
    </article>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={filled ? "h-4 w-4 text-gold-500" : "h-4 w-4 text-ink-300"}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="m10 1.8 2.4 4.9 5.4.8-3.9 3.8.9 5.3-4.8-2.5-4.8 2.5.9-5.3L2.2 7.5l5.4-.8L10 1.8Z" />
    </svg>
  );
}
