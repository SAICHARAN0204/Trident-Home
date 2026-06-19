import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <div className="bg-[#eaf4f1] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/our_story_mill.png"
          alt="Trident Home Textile Mill"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#1d5e52]/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "Georgia, serif" }}>
            Our Heritage
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-light tracking-wide">
            From farm to fiber, mill to home. We craft the world's finest textiles with passion and precision.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1d5e52] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            The Trident Promise
          </h2>
          <div className="w-24 h-1 bg-[#c9a84c] mx-auto" />
        </div>

        <div className="prose prose-lg prose-[#3a8a7a] mx-auto text-center space-y-8">
          <p className="text-lg leading-relaxed text-[#1d5e52]">
            For over three decades, Trident has been at the forefront of the global textile industry, 
            blending traditional craftsmanship with state-of-the-art technology. What began as a single 
            yarn manufacturing facility has grown into one of the world's largest integrated home textile 
            manufacturers.
          </p>
          <p className="text-lg leading-relaxed text-[#1d5e52]">
            Our philosophy is simple: we believe that everyday essentials should bring extraordinary comfort. 
            By controlling every step of the process—from sourcing the finest raw cotton to spinning, 
            weaving, and finishing—we ensure unparalleled quality in every towel, bedsheet, and pillow cover 
            that bears our name.
          </p>
        </div>
      </section>

      {/* Stats/Features Section */}
      <section className="bg-white py-16 border-y border-[#a0cfc4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#c9a84c] mb-2 font-serif">30+</div>
              <div className="text-sm font-semibold text-[#1d5e52] uppercase tracking-wider">Years of Legacy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#c9a84c] mb-2 font-serif">100%</div>
              <div className="text-sm font-semibold text-[#1d5e52] uppercase tracking-wider">Traceable Cotton</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#c9a84c] mb-2 font-serif">Zero</div>
              <div className="text-sm font-semibold text-[#1d5e52] uppercase tracking-wider">Liquid Discharge</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#c9a84c] mb-2 font-serif">OEKO-TEX®</div>
              <div className="text-sm font-semibold text-[#1d5e52] uppercase tracking-wider">Certified Safe</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-[#1d5e52] mb-6" style={{ fontFamily: "Georgia, serif" }}>
          Experience the Difference
        </h2>
        <Link href="/collections" className="inline-block px-10 py-4 bg-[#1d5e52] text-white text-lg font-medium rounded hover:bg-[#c9a84c] transition-colors shadow-lg hover:shadow-xl">
          Shop Our Collections
        </Link>
      </section>
    </div>
  );
}
