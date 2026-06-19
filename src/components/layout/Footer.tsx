import Link from 'next/link';

const shopLinks = [
  { label: 'Bath Towels', href: '/towels' },
  { label: 'Bedsheets', href: '/bedsheets' },
  { label: 'Pillow Covers', href: '/pillow-covers' },
  { label: 'Collections', href: '/collections' },
  { label: 'New Arrivals', href: '/new-arrivals' },
];

const helpLinks = [
  { label: 'FAQs', href: '/faqs' },
  { label: 'Track Order', href: '/track-order' },
  { label: 'Returns & Exchanges', href: '/returns' },
  { label: 'Size Guide', href: '/size-guide' },
  { label: 'Care Instructions', href: '/care' },
];

const companyLinks = [
  { label: 'Our Story', href: '/our-story' },
  { label: 'Sustainability', href: '/sustainability' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Careers', href: '/careers' },
  { label: 'Press', href: '/press' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d5e52] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-widest" style={{ fontFamily: "Georgia, serif" }}>
                <span className="text-white">TRIDENT</span>
                <span className="text-[#c9a84c]"> HOME</span>
              </span>
            </Link>
            <p className="text-[#a0cfc4] text-sm leading-relaxed mb-6">
              Mill-direct premium cotton textiles — crafted with 35 years of expertise, delivered straight to your doorstep.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { label: 'Instagram', href: 'https://instagram.com', icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                )},
                { label: 'Facebook', href: 'https://facebook.com', icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )},
                { label: 'Pinterest', href: 'https://pinterest.com', icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-full bg-[#3a8a7a]/40 text-[#a0cfc4] hover:bg-[#c9a84c] hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#c9a84c] mb-5">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#a0cfc4] hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#c9a84c] mb-5">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#a0cfc4] hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase text-[#c9a84c] mb-5">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#a0cfc4] hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 bg-[#3a8a7a]/30 text-[#a0cfc4] rounded border border-[#3a8a7a]/40">OEKO-TEX®</span>
              <span className="text-xs px-2.5 py-1 bg-[#3a8a7a]/30 text-[#a0cfc4] rounded border border-[#3a8a7a]/40">BCI Cotton</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#3a8a7a]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#3a8a7a]">
          <p>© {new Date().getFullYear()} Trident Group India. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
