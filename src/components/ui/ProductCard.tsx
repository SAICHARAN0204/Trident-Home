'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import Badge from '@/components/ui/Badge';


interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/${product.category}/${product.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image area */}
      <div className="relative aspect-[4/5] bg-[#d4e8e0] overflow-hidden">
        {/* Product Image */}
        <div className="absolute inset-0">
          <Image
            src={
              product.category === 'towels' ? '/images/premium_towels.png' :
              product.category === 'bedsheets' ? '/images/premium_bedsheets.png' :
              product.category === 'pillow-covers' ? '/images/pillow_covers.png' :
              '/images/textile_collections.png'
            }
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#1d5e52]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge label={product.badge} />
          </div>
        )}

        {/* Quick-add CTA on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => e.preventDefault()}
            className="w-full py-3 bg-[#1d5e52] text-white text-sm font-medium tracking-wide hover:bg-[#c9a84c] transition-colors duration-200"
          >
            Quick Add
          </button>
        </div>
      </div>

      {/* Card body */}
      <div className="p-4">
        <h3
          className="text-sm font-semibold text-[#1d5e52] group-hover:text-[#c9a84c] transition-colors leading-tight mb-1"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {product.name}
        </h3>

        <p className="text-xs text-[#3a8a7a] mb-2">{product.spec}</p>

        {/* Color swatches */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.slice(0, 4).map((color) => (
            <span
              key={color}
              className="w-4 h-4 rounded-full border border-[#a0cfc4]/40 shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-[10px] text-[#3a8a7a] self-center">+{product.colors.length - 4}</span>
          )}
        </div>

        {/* Price */}
        <p className="text-base font-bold text-[#1d5e52]">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </Link>
  );
}
