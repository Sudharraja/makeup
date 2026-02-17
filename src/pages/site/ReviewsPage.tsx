import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  const [hasLiveReviews, setHasLiveReviews] = useState(false);

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
          setHasLiveReviews(true);
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

  return (
    <PageTransition>
      <section className="section-shell page-standard" aria-labelledby="reviews-title">
        <motion.div className="page-header-block" {...revealProps}>
          <p className="page-kicker">Real Moments and Reviews</p>
          <h1 id="reviews-title" className="page-title">
            Brides share what the experience truly felt like.
          </h1>
          <p className="page-subtitle">
            This carousel is connected for live Google review integration and built to adapt to
            variable text length, ratings, and reviewer profile details.
          </p>
          <p className="reviews-label">
            <span className="google-chip" aria-label="Google reviews source">
              <span className="google-chip__g">G</span>oogle Reviews
            </span>
            {hasLiveReviews ? "Live feed connected" : "Live-ready carousel"}
          </p>
        </motion.div>

        <div className="reviews-carousel">
          <Swiper
            modules={[Autoplay, Navigation, A11y]}
            navigation
            loop={reviews.length > 3}
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              760: { slidesPerView: 2 },
              1160: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <article className="review-card">
                  <header>
                    <div className="reviewer-profile">
                      {review.authorPhoto ? (
                        <img
                          src={review.authorPhoto}
                          alt={`${review.authorName} profile`}
                          loading="lazy"
                        />
                      ) : (
                        <span>{getInitials(review.authorName)}</span>
                      )}
                    </div>
                    <div>
                      <h2>{review.authorName}</h2>
                      <p>{formatReviewDate(review.date)}</p>
                    </div>
                  </header>

                  <div className="star-row" aria-label={`${review.rating} star rating`}>
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon key={`${review.id}-star-${index}`} filled={index < review.rating} />
                    ))}
                  </div>

                  <p>{review.text}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </PageTransition>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={filled ? "star-icon is-filled" : "star-icon"}
      aria-hidden="true"
    >
      <path d="M12 2.8 15 8.8l6.6 1-4.8 4.7 1.1 6.6-5.9-3.1-5.9 3.1 1.1-6.6L2.4 9.8l6.6-1L12 2.8Z" />
    </svg>
  );
}
