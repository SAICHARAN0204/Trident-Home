import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { value: '35+', label: 'Years of Craftsmanship' },
  { value: '75+', label: 'Countries Export' },
  { value: '100%', label: 'BCI Cotton Certified' },
];

export default function BrandStorySection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
      {/* Left — Copy */}
      <div className="bg-[#1d5e52] flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
        {/* Eyebrow */}
        <p className="text-[#a0cfc4] text-xs font-semibold tracking-[0.25em] uppercase mb-5">
          Our Heritage
        </p>

        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.15] mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          From yarn to your doorstep —{' '}
          <em className="not-italic text-[#c9a84c]">all Trident</em>
        </h2>

        {/* Body */}
        <p className="text-[#a0cfc4] text-base leading-relaxed max-w-lg mb-4">
          Trident Group has been weaving India's finest cotton textiles since 1990.
          What started as a single mill in Punjab has grown into one of the world's
          largest integrated textile companies — exporting to 75+ countries.
        </p>
        <p className="text-[#a0cfc4] text-base leading-relaxed max-w-lg mb-10">
          Every thread is BCI Cotton certified. Every product is OEKO-TEX validated.
          And now, for the first time, you can buy mill-direct — no middlemen,
          no markups.
        </p>

        {/* CTA */}
        <Link
          href="/our-story"
          id="brand-story-cta"
          className="inline-flex items-center gap-2 bg-[#c9a84c] text-white px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide w-fit hover:bg-[#b8933d] transition-colors duration-200 shadow-lg mb-12"
        >
          Read Our Story
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p
                className="text-2xl sm:text-3xl font-bold text-[#c9a84c]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {s.value}
              </p>
              <p className="text-xs text-[#a0cfc4] leading-snug mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Image placeholder */}
      <div className="bg-[#3a8a7a] flex items-center justify-center min-h-[50vh] lg:min-h-0 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute w-64 h-64 rounded-full bg-[#1d5e52]/20 -top-16 -right-16" />
        <div className="absolute w-48 h-48 rounded-full bg-[#1d5e52]/15 -bottom-12 -left-12" />

        <div className="relative z-10 flex flex-col items-center text-[#a0cfc4] p-8 w-full h-full">
          <Image
            src="/images/our_story_mill.png"
            alt="Trident Mill"
            fill
            className="object-cover opacity-90"
          />
        </div>
      </div>
    </section>
  );
}
