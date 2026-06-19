import Image from "next/image";

export default function BedsheetsPage() {
  return (
    <div className="bg-[#eaf4f1] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/premium_bedsheets.png"
          alt="Premium Cotton Bedsheets"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
            Premium Bedsheets
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Transform your bedroom into a sanctuary with our luxuriously soft and breathable bedsheets.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1d5e52]" style={{ fontFamily: "Georgia, serif" }}>
            Explore Our Bedsheets
          </h2>
          <div className="w-24 h-1 bg-[#c9a84c] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-sm border border-[#a0cfc4]/30 overflow-hidden group hover:shadow-md transition-all">
              <div className="relative h-64 bg-[#f8faf9] flex items-center justify-center p-6">
                <Image
                  src="/images/premium_bedsheets.png"
                  alt="Bedsheet Product"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1d5e52] mb-2">Signature Percale Sheet Set</h3>
                <p className="text-sm text-[#3a8a7a] mb-4">400 Thread Count • Crisp & Cool</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-[#1d5e52]">₹ 2,499</span>
                  <button className="px-4 py-2 bg-[#1d5e52] text-white text-sm font-medium rounded hover:bg-[#c9a84c] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
