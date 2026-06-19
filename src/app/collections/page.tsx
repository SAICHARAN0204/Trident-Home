import Image from "next/image";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <div className="bg-[#eaf4f1] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/textile_collections.png"
          alt="Curated Home Collections"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4 mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Curated Collections
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Discover thoughtfully assembled sets that bring harmony and luxury to every corner of your home.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1d5e52]" style={{ fontFamily: "Georgia, serif" }}>
            Shop By Collection
          </h2>
          <div className="w-24 h-1 bg-[#c9a84c] mx-auto mt-4" />
        </div>

        <div className="space-y-16">
          {/* Collection 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
              <Image 
                src="/images/premium_bedsheets.png" 
                alt="The Sanctuary Collection" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-[#1d5e52] mb-4" style={{ fontFamily: "Georgia, serif" }}>
                The Sanctuary Collection
              </h3>
              <p className="text-[#3a8a7a] mb-6 text-lg">
                Crafted from the finest long-staple cotton, this collection embodies the calm of a peaceful retreat. Featuring crisp percale sheets and plush pillows designed for deep, restorative sleep.
              </p>
              <Link href="/bedsheets" className="inline-block px-8 py-3 bg-[#1d5e52] text-white font-medium rounded hover:bg-[#c9a84c] transition-colors">
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Collection 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-lg group">
              <Image 
                src="/images/premium_towels.png" 
                alt="Spa Heritage Collection" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-[#1d5e52] mb-4" style={{ fontFamily: "Georgia, serif" }}>
                Spa Heritage Collection
              </h3>
              <p className="text-[#3a8a7a] mb-6 text-lg">
                Bring the five-star hotel spa experience to your everyday routine. Extra-thick, ultra-absorbent zero-twist towels that feel incredibly soft against the skin.
              </p>
              <Link href="/towels" className="inline-block px-8 py-3 bg-[#1d5e52] text-white font-medium rounded hover:bg-[#c9a84c] transition-colors">
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
