import { Product, Category, Review } from './types';

export const products: Product[] = [
  // ── TOWELS ──────────────────────────────────────────────────────────────
  {
    id: 'towel-001',
    name: 'Supima Bath Towel',
    slug: 'supima-bath-towel',
    category: 'towels',
    price: 849,
    spec: '600 GSM',
    badge: 'BESTSELLER',
    colors: ['#f5f0eb', '#1d5e52', '#3a3a3a', '#c9a84c'],
    sizes: ['30×60 in', '27×54 in'],
    images: [],
    description:
      'Crafted from 100% Supima cotton, this ultra-plush bath towel delivers spa-grade softness. OEKO-TEX certified, BCI cotton sourced.',
    inStock: true,
  },
  {
    id: 'towel-002',
    name: 'Zero Twist Towel Set',
    slug: 'zero-twist-towel-set',
    category: 'towels',
    price: 2199,
    spec: '500 GSM · 4pc',
    badge: 'GIFTING PICK',
    colors: ['#ffffff', '#eaf4f1', '#1d5e52'],
    sizes: ['Set of 4'],
    images: [],
    description:
      'A curated set of four zero-twist cotton towels — faster drying, silkier feel. Perfect as a premium gift.',
    inStock: true,
  },
  {
    id: 'towel-003',
    name: 'Bamboo Blend Towel',
    slug: 'bamboo-blend-towel',
    category: 'towels',
    price: 699,
    spec: '450 GSM',
    badge: 'NEW ARRIVAL',
    colors: ['#d4e8e0', '#f5f0eb', '#2c2c2c'],
    sizes: ['27×54 in'],
    images: [],
    description:
      'A sustainable blend of bamboo and cotton for naturally antibacterial softness, every wash.',
    inStock: true,
  },

  // ── BEDSHEETS ───────────────────────────────────────────────────────────
  {
    id: 'bed-001',
    name: 'Percale Double Bedsheet',
    slug: 'percale-double-bedsheet',
    category: 'bedsheets',
    price: 1499,
    spec: '300 TC',
    badge: 'MILL DIRECT',
    colors: ['#ffffff', '#eaf4f1', '#f5ede0'],
    sizes: ['Double', 'Queen', 'King'],
    images: [],
    description:
      'Crisp, cool Percale weave in 100% combed cotton. The ideal choice for warm Indian nights.',
    inStock: true,
  },
  {
    id: 'bed-002',
    name: 'Sateen King Bedsheet',
    slug: 'sateen-king-bedsheet',
    category: 'bedsheets',
    price: 2299,
    spec: '400 TC',
    badge: 'BESTSELLER',
    colors: ['#f5f0eb', '#1d5e52', '#c9a84c', '#ffffff'],
    sizes: ['King', 'Queen'],
    images: [],
    description:
      'Silky sateen finish with a 400 thread count — hotel-grade luxury from mill to doorstep.',
    inStock: true,
  },
  {
    id: 'bed-003',
    name: 'Cotton Single Set',
    slug: 'cotton-single-set',
    category: 'bedsheets',
    price: 899,
    spec: '200 TC',
    badge: 'MILL DIRECT',
    colors: ['#ffffff', '#eaf4f1', '#d4e8e0'],
    sizes: ['Single'],
    images: [],
    description:
      'A comfortable everyday cotton bedsheet set — breathable, durable, and easy to maintain.',
    inStock: true,
  },

  // ── PILLOW COVERS ───────────────────────────────────────────────────────
  {
    id: 'pillow-001',
    name: 'Cotton Pillow Cover Set',
    slug: 'cotton-pillow-cover-set',
    category: 'pillow-covers',
    price: 399,
    spec: '2pc',
    badge: 'MILL DIRECT',
    colors: ['#ffffff', '#eaf4f1', '#f5ede0'],
    sizes: ['Standard (17×27 in)', 'King (20×36 in)'],
    images: [],
    description:
      'A pair of soft cotton pillow covers — the easiest upgrade for any bed.',
    inStock: true,
  },
  {
    id: 'pillow-002',
    name: 'Sateen Pillow Covers',
    slug: 'sateen-pillow-covers',
    category: 'pillow-covers',
    price: 599,
    spec: '2pc King',
    badge: 'NEW ARRIVAL',
    colors: ['#f5f0eb', '#1d5e52', '#ffffff'],
    sizes: ['King (20×36 in)'],
    images: [],
    description:
      'Silky-smooth sateen weave pillow covers for a luxurious night\'s sleep.',
    inStock: true,
  },
];

export const categories: Category[] = [
  {
    id: 'cat-towels',
    name: 'Bath Towels',
    slug: 'towels',
    productCount: 3,
    image: '/images/premium_towels.png',
  },
  {
    id: 'cat-bedsheets',
    name: 'Bedsheets',
    slug: 'bedsheets',
    productCount: 3,
    image: '/images/premium_bedsheets.png',
  },
  {
    id: 'cat-pillows',
    name: 'Pillow Covers',
    slug: 'pillow-covers',
    productCount: 2,
    image: '/images/pillow_covers.png',
  },
];

export const bestsellers: Product[] = products.filter((p) =>
  ['towel-001', 'bed-002', 'towel-002', 'pillow-002'].includes(p.id)
);

export const reviews: Review[] = [
  {
    id: "rev-001",
    reviewer: "Priya Nair",
    city: "Bengaluru",
    rating: 5,
    quote:
      "\"The Supima Bath Towels are unbelievably soft. I've tried many brands — this is a different league entirely. My whole family switched.\"",
    product: "Supima Bath Towel",
  },
  {
    id: "rev-002",
    reviewer: "Arjun Mehta",
    city: "Mumbai",
    rating: 5,
    quote:
      "\"Ordered the Sateen King Bedsheet and it arrived beautifully packaged. The fabric feels premium, and the price is unbeatable for mill-direct.\"",
    product: "Sateen King Bedsheet",
  },
  {
    id: "rev-003",
    reviewer: "Sneha Reddy",
    city: "Hyderabad",
    rating: 5,
    quote:
      "\"The Zero Twist Towel Set was a gift for my parents and they absolutely loved it. Fast delivery, gorgeous quality.\"",
    product: "Zero Twist Towel Set",
  },
];
