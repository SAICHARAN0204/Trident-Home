'use client';

const collections = [
  {
    name: 'Luxe Home',
    spec: '600 GSM Towels',
    tag: 'Best Seller',
    icon: '✦',
    href: '/collections/luxe-home',
  },
  {
    name: 'Soft Comfort',
    spec: '500 GSM Towels',
    tag: 'Everyday Pick',
    icon: '◈',
    href: '/collections/soft-comfort',
  },
  {
    name: 'Turkish Collection',
    spec: '800 GSM Towels',
    tag: 'Ultra Plush',
    icon: '❋',
    href: '/collections/turkish',
  },
  {
    name: 'Nectarsoft Bedsheets',
    spec: '400 TC Bedsheets',
    tag: 'Luxury',
    icon: '◇',
    href: '/collections/nectarsoft',
  },
  {
    name: 'Organic Luxury',
    spec: 'BCI Cotton',
    tag: 'Eco Certified',
    icon: '✿',
    href: '/collections/organic-luxury',
  },
  {
    name: 'Bamboo Collection',
    spec: 'Bamboo Blend',
    tag: 'Sustainable',
    icon: '❃',
    href: '/collections/bamboo',
  },
];

export default function CollectionsCarousel() {
  return (
    <section style={{ background: '#eaf4f1' }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-2"
            style={{ color: '#3a8a7a', letterSpacing: '0.18em' }}
          >
            Curated Ranges
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold"
            style={{ fontFamily: "Georgia, serif", color: '#1d5e52' }}
          >
            Shop by Collection
          </h2>
        </div>

        {/* Scroll Container */}
        <div
          className="collections-scroll"
          style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '8px',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {collections.map((col) => (
            <a
              key={col.name}
              href={col.href}
              className="collection-card"
              style={{
                flexShrink: 0,
                width: '200px',
                scrollSnapAlign: 'start',
                background: '#ffffff',
                border: '1.5px solid #a0cfc4',
                borderRadius: '16px',
                padding: '22px 18px',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                transition: 'transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = 'scale(1.045)';
                el.style.boxShadow = '0 8px 28px rgba(43,43,43,0.14)';
                el.style.borderColor = '#c9a84c';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = 'scale(1)';
                el.style.boxShadow = 'none';
                el.style.borderColor = '#a0cfc4';
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #d4e8e0, #a0cfc4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#1d5e52',
                  marginBottom: '4px',
                }}
              >
                {col.icon}
              </div>

              <span
                style={{
                  display: 'inline-block',
                  fontSize: '9px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: '#d4e8e0',
                  color: '#3a8a7a',
                  padding: '3px 8px',
                  borderRadius: '20px',
                  alignSelf: 'flex-start',
                }}
              >
                {col.tag}
              </span>

              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#1d5e52',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {col.name}
              </p>

              <p
                style={{
                  fontSize: '12px',
                  color: '#3a8a7a',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {col.spec}
              </p>

              <div
                style={{
                  marginTop: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#c9a84c',
                  fontSize: '11px',
                  fontWeight: 600,
                }}
              >
                Shop now
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .collections-scroll::-webkit-scrollbar {
          display: none;
        }
        .collections-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
