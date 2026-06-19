import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] bg-gradient-to-br from-[#eaf4f1] via-[#d4e8e0] to-[#f5fbf9] overflow-hidden flex items-center">
      {/* ─── Hero Banner Image ─── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/images/home_hero_banner.png"
          alt="Trident Home Luxury Bedding"
          fill
          priority
          className="object-cover object-right md:object-center"
        />
      </div>

      {/* ─── Sheer Curtain Overlay Effect (Translucent Curtain draping from Left) ─── */}
      <div 
        className="absolute top-0 left-0 h-full w-[90%] sm:w-[70%] md:w-[60%] lg:w-[48%] z-10 bg-gradient-to-r from-white/95 via-white/80 to-transparent backdrop-blur-[4px] shadow-2xl transition-all duration-700"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
        }}
      >
        {/* Sheer fabric highlight lines */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 via-transparent to-white/10 opacity-60" />
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white/30 blur-[1px]" />
        <div className="absolute top-0 left-[45%] w-[1px] h-full bg-white/20 blur-[2px]" />
      </div>

      {/* ─── Content Container (Aligned to the left, sits inside/over sheer curtain) ─── */}
      <div className="relative z-20 container mx-auto px-6 sm:px-12 lg:px-20 h-full flex flex-col justify-between py-16">
        
        {/* Top Spacer to push content down slightly */}
        <div />

        {/* Text Area */}
        <div className="max-w-[85%] sm:max-w-[70%] md:max-w-[55%] lg:max-w-[42%] text-left mt-6 animate-fade-in">
          {/* Eyebrow / Category */}
          <p className="text-[#3a8a7a] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Bedding Combo
          </p>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1d5e52] leading-[1.2] mb-6 tracking-wide"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Woven from <span className="italic text-[#c9a84c]">India&apos;s finest</span> cotton fields, blending luxury, comfort, and sustainable heritage.
          </h1>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/bedsheets"
              id="hero-cta-bedsheets"
              className="inline-flex items-center justify-center bg-[#1d5e52] text-white px-8 py-3.5 text-xs font-semibold tracking-widest uppercase hover:bg-[#c9a84c] transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* ─── Carousel Dots Indicator (Bottom Left, matching the image style) ─── */}
        <div className="flex items-center gap-2.5 mt-8 pl-1">
          {[...Array(10)].map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === 0 
                  ? 'w-6 bg-[#1d5e52]' 
                  : 'w-2 bg-[#1d5e52]/30 hover:bg-[#1d5e52]/60'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

