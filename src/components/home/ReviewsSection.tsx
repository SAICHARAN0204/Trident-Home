import { reviews } from '@/lib/products';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 ${i < rating ? 'text-[#c9a84c]' : 'text-gray-200'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#3a8a7a] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            What Our Customers Say
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1d5e52]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Loved across India
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#eaf4f1] rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Quote */}
              <blockquote
                className="text-[#1d5e52] text-sm leading-relaxed flex-1"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {review.quote}
              </blockquote>

              {/* Product tag */}
              <span className="inline-block text-xs text-[#3a8a7a] border border-[#a0cfc4] px-2.5 py-1 rounded-full w-fit">
                {review.product}
              </span>

              {/* Reviewer */}
              <div className="flex items-center gap-3 border-t border-[#a0cfc4] pt-4">
                <div className="w-9 h-9 rounded-full bg-[#3a8a7a] flex items-center justify-center text-white text-sm font-bold">
                  {review.reviewer.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1d5e52]">{review.reviewer}</p>
                  <p className="text-xs text-[#3a8a7a]">{review.city}</p>
                </div>
                {/* Verified badge */}
                <span className="ml-auto flex items-center gap-1 text-[10px] text-[#c9a84c] font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating strip */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-[#eaf4f1] px-6 py-3 rounded-full border border-[#a0cfc4]">
            <StarRating rating={5} />
            <span className="text-sm font-semibold text-[#1d5e52]">4.9 / 5</span>
            <span className="text-xs text-[#3a8a7a]">based on 1,200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
