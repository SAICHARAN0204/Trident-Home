import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/lib/products';

export default function CategoryGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[#3a8a7a] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
            Browse by Category
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1d5e52]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Shop the Collection
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden bg-[#d4e8e0] aspect-[3/4] sm:aspect-[2/3] flex flex-col justify-end hover:shadow-xl transition-all duration-300"
            >
              {/* Category Image */}
              <div className="absolute inset-0">
                <Image
                  src={cat.image || '/images/premium_towels.png'}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d5e52]/90 via-[#1d5e52]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Card content */}
              <div className="relative z-10 p-6 text-white">
                <h3
                  className="text-xl sm:text-2xl font-bold mb-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {cat.name}
                </h3>
                <p className="text-[#a0cfc4] text-sm mb-4">
                  {cat.productCount} products
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#c9a84c] group-hover:gap-3 transition-all duration-200">
                  Shop now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
