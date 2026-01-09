
export interface Review {
  name: string;
  rating: number;
  text: string;
  date?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}
