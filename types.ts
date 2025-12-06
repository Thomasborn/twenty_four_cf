export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'non-coffee' | 'bakmi' | 'nasi' | 'snacks';
  isFeatured?: boolean;
  isSpicy?: boolean;
  image?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export enum BrandColors {
  Dark = '#1a1a1a',
  Light = '#F5F5DC',
  Red = '#FF0000',
  Gold = '#FFA500'
}