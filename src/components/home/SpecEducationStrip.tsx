export default function SpecEducationStrip() {
  return (
    <section
      style={{ background: '#ffffff' }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center text-xs tracking-widest uppercase mb-8 font-semibold"
          style={{ color: '#3a8a7a', letterSpacing: '0.18em' }}
        >
          Buying Guide
        </p>
        <h2
          className="text-center text-2xl sm:text-3xl font-bold mb-10"
          style={{ fontFamily: "Georgia, serif", color: '#1d5e52' }}
        >
          Know Your Textiles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* GSM Card */}
          <div
            className="spec-card"
            style={{
              borderLeft: '4px solid #c9a84c',
              background: '#eaf4f1',
              borderRadius: '0 12px 12px 0',
              padding: '28px 28px 28px 24px',
              boxShadow: '0 2px 16px rgba(43,43,43,0.07)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  background: 'linear-gradient(135deg, #1d5e52, #3a8a7a)',
                  borderRadius: '10px',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                  <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#c9a84c' }}>
                  For Towels
                </p>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Georgia, serif", color: '#1d5e52' }}>
                  What is GSM?
                </h3>
              </div>
            </div>
            <p className="text-sm mb-5" style={{ color: '#3a8a7a', lineHeight: '1.7' }}>
              GSM (Grams per Square Metre) measures a towel&apos;s weight and plushness. Higher GSM = thicker, softer towels.
            </p>
            <div className="space-y-3">
              {[
                { label: '400 GSM', desc: 'Light & Quick-dry', bar: 40, tag: 'Gym / Travel' },
                { label: '500 GSM', desc: 'Balanced Comfort', bar: 65, tag: 'Everyday Home' },
                { label: '600+ GSM', desc: 'Hotel Plush', bar: 92, tag: 'Luxury' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-24 shrink-0">
                    <p className="text-xs font-bold" style={{ color: '#1d5e52' }}>{item.label}</p>
                    <p className="text-[10px]" style={{ color: '#3a8a7a' }}>{item.desc}</p>
                  </div>
                  <div className="flex-1 relative h-2 rounded-full" style={{ background: '#d4e8e0' }}>
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: `${item.bar}%`,
                        background: 'linear-gradient(90deg, #3a8a7a, #1d5e52)',
                      }}
                    />
                  </div>
                  <span
                    className="text-[9px] font-semibold tracking-wide px-2 py-0.5 rounded-full shrink-0"
                    style={{ background: '#d4e8e0', color: '#1d5e52' }}
                  >
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TC Card */}
          <div
            className="spec-card"
            style={{
              borderLeft: '4px solid #c9a84c',
              background: '#eaf4f1',
              borderRadius: '0 12px 12px 0',
              padding: '28px 28px 28px 24px',
              boxShadow: '0 2px 16px rgba(43,43,43,0.07)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{
                  background: 'linear-gradient(135deg, #b8933d, #c9a84c)',
                  borderRadius: '10px',
                  width: '44px',
                  height: '44px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: '#c9a84c' }}>
                  For Bedsheets
                </p>
                <h3 className="text-xl font-bold" style={{ fontFamily: "Georgia, serif", color: '#1d5e52' }}>
                  What is TC?
                </h3>
              </div>
            </div>
            <p className="text-sm mb-5" style={{ color: '#3a8a7a', lineHeight: '1.7' }}>
              Thread Count (TC) measures how many threads are woven per square inch. Higher TC = silkier, more durable bedsheets.
            </p>
            <div className="space-y-3">
              {[
                { label: '200 TC', desc: 'Crisp Everyday', bar: 38, tag: 'Daily Use' },
                { label: '300 TC', desc: 'Premium Soft', bar: 65, tag: 'Premium' },
                { label: '400+ TC', desc: 'Luxury Silky', bar: 92, tag: 'Luxury' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-24 shrink-0">
                    <p className="text-xs font-bold" style={{ color: '#1d5e52' }}>{item.label}</p>
                    <p className="text-[10px]" style={{ color: '#3a8a7a' }}>{item.desc}</p>
                  </div>
                  <div className="flex-1 relative h-2 rounded-full" style={{ background: '#d4e8e0' }}>
                    <div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: `${item.bar}%`,
                        background: 'linear-gradient(90deg, #c9a84c, #b8933d)',
                      }}
                    />
                  </div>
                  <span
                    className="text-[9px] font-semibold tracking-wide px-2 py-0.5 rounded-full shrink-0"
                    style={{ background: '#d4e8e0', color: '#b8933d' }}
                  >
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
