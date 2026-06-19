import { ProductBadge } from '@/lib/types';

interface BadgeProps {
  label: ProductBadge | string;
  className?: string;
}

const badgeStyles: Record<string, string> = {
  'BESTSELLER':    'bg-[#c9a84c] text-white',
  'NEW ARRIVAL':   'bg-[#1d5e52] text-white',
  'MILL DIRECT':   'bg-[#3a8a7a] text-white',
  'GIFTING PICK':  'bg-[#a0cfc4] text-white',
};

export default function Badge({ label, className = '' }: BadgeProps) {
  const style = badgeStyles[label] ?? 'bg-gray-400 text-white';
  return (
    <span
      className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded ${style} ${className}`}
    >
      {label}
    </span>
  );
}
