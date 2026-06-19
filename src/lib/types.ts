export type ProductBadge =
  | 'BESTSELLER'
  | 'NEW ARRIVAL'
  | 'MILL DIRECT'
  | 'GIFTING PICK';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'towels' | 'bedsheets' | 'pillow-covers';
  price: number;
  spec: string; // e.g. "600 GSM" or "300 TC"
  badge?: ProductBadge;
  colors: string[]; // hex codes
  sizes?: string[];
  images: string[]; // paths or placeholder strings
  description: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  productCount: number;
  image: string;
}

export interface Review {
  id: string;
  reviewer: string;
  city: string;
  rating: number;
  quote: string;
  product: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}
