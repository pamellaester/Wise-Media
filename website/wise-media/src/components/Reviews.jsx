import { useTranslation } from "react-i18next";
import Icon from "./Icon";
import reviewsData from "../data/googleReviews.json";

// Star component - renders filled or empty stars based on rating
function Stars({ rating, size = 16 }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Icon
          key={star}
          name="Star"
          size={size}
          className={star <= rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"}
        />
      ))}
    </div>
  );
}

// Individual review card - clean minimal style
function ReviewCard({ review }) {
  return (
    <article className="relative group">
      <div className="relative bg-white/8 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-white/10 h-full flex flex-col hover:bg-white/12 hover:border-white/15 transition-all duration-300">
        {/* Author info */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-semibold text-white">
              {review.author.charAt(0)}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">{review.author}</p>
            <p className="text-xs text-white/40">{review.date}</p>
          </div>
        </div>

        {/* Star rating */}
        <div className="mb-3">
          <Stars rating={review.rating} size={14} />
        </div>

        {/* Review text */}
        <p className="text-sm text-white/60 leading-relaxed flex-1">
          "{review.text}"
        </p>
      </div>
    </article>
  );
}

export default function Reviews() {
  const { t } = useTranslation();

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-lightBlue/10" aria-labelledby="reviews-heading">
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="container-content section-spacing relative">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 mb-5">
              <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white/80 text-xs font-semibold">Google Reviews</span>
            </div>

            <h2 id="reviews-heading" className="text-h2 text-white mb-4 heading-secondary">
              {t('reviews.title')}
            </h2>

            {/* Overall rating */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-bold text-white">{reviewsData.averageRating}</span>
              <div className="text-left">
                <Stars rating={Math.round(reviewsData.averageRating)} size={16} />
                <p className="text-xs text-white/50 mt-0.5">
                  {reviewsData.totalReviews} {t('reviews.reviewCount')}
                </p>
              </div>
            </div>
          </header>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {reviewsData.reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          {/* Bottom company info */}
          <div className="mt-8 text-center">
            <p className="text-xs text-white/35">
              {reviewsData.company} — {reviewsData.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
