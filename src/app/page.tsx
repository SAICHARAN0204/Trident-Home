import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import CollectionsCarousel from '@/components/home/CollectionsCarousel';
import CategoryGrid from '@/components/home/CategoryGrid';
import SpecEducationStrip from '@/components/home/SpecEducationStrip';
import BestsellerSection from '@/components/home/BestsellerSection';
import BrandStorySection from '@/components/home/BrandStorySection';
import ReviewsSection from '@/components/home/ReviewsSection';

export const metadata: Metadata = {
  title: 'Trident Home — Premium Cotton Textiles, Mill Direct',
  description:
    "Shop premium OEKO-TEX certified bath towels, bedsheets, and pillow covers direct from Trident's mills. Free delivery over \u20b9999. 30-day returns.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <CollectionsCarousel />
      <CategoryGrid />
      <SpecEducationStrip />
      <BestsellerSection />
      <BrandStorySection />
      <ReviewsSection />
    </>
  );
}
