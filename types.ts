
export interface Room {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string; // Featured image
  gallery: string[]; // Additional images
  amenities: string[];
  description: string;
}

export interface Excursion {
  id: string;
  name: string;
  image: string;
  description: string;
  tag?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}