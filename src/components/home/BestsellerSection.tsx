import { bestsellers } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';

export default function BestsellerSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#eaf4f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <p className="text-[#3a8a7a] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Most Loved
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1d5e52]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Bestsellers
            </h2>
          </div>
          <Link
            href="/collections"
            className="text-sm font-medium text-[#3a8a7a] hover:text-[#c9a84c] transition-colors flex items-center gap-1.5 group"
          >
            View all products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
