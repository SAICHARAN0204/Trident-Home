'use client';

const items = [
  'Free Shipping on orders over ₹999',
  'OEKO-TEX® Certified Cotton',
  '35+ Years of Mill Craftsmanship',
  'Use code TRIDENT5 for 5% off',
  'BCI Cotton · Sustainably Sourced',
  '30-Day Hassle-Free Returns',
];

export default function AnnouncementTicker() {
  const repeated = [...items, ...items]; // duplicate for seamless loop

  return (
    <div
      className="announcement-ticker"
      style={{ backgroundColor: '#1d5e52', overflow: 'hidden', position: 'relative', zIndex: 60 }}
    >
      <div className="ticker-track">
        {repeated.map((item, idx) => (
          <span key={idx} className="ticker-item">
            {item}
            <span className="ticker-dot">·</span>
          </span>
        ))}
      </div>

      <style>{`
        .announcement-ticker {
          height: 32px;
          display: flex;
          align-items: center;
        }

        .ticker-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: marquee 35s linear infinite;
          will-change: transform;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .ticker-item {
          font-size: 11px;
          font-weight: 500;
          color: #ffffff;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0 8px;
          font-family: 'Inter', sans-serif;
        }

        .ticker-dot {
          color: #c9a84c;
          margin-left: 16px;
          font-size: 14px;
          font-weight: bold;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
