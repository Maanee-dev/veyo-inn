
import { Room, Excursion } from './types';

export const ROOMS: Room[] = [
  {
    id: 'deluxe-garden',
    name: 'Deluxe Garden Room',
    category: 'Premium Sanctuary',
    price: '95.00',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800',
    amenities: ['AC', 'Hot Water', 'Garden View', 'King Bed', 'Free Wi-Fi'],
    description: 'A spacious haven with direct access to our tropical garden walk. Perfect for couples seeking a quiet retreat.'
  },
  {
    id: 'family-jungle-suite',
    name: 'Family Jungle Suite',
    category: 'Island Haven',
    price: '160.00',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    amenities: ['2 Bedrooms', 'Private Patio', 'Mini Fridge', 'King + Twin Beds', 'Premium Wi-Fi'],
    description: 'Our most expansive suite, surrounded by lush jungle vines, designed specifically for family harmony and comfort.'
  },
  {
    id: 'ocean-breeze-loft',
    name: 'Ocean Breeze Loft',
    category: 'Sky Sanctuary',
    price: '125.00',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800',
    amenities: ['High Ceilings', 'Panoramic Windows', 'Rain Shower', 'Work Desk', 'Nespresso'],
    description: 'An elevated sanctuary catching the cross-breezes of the Baa Atoll lagoon. Ideal for digital nomads.'
  },
  {
    id: 'standard-double',
    name: 'Standard Double Room',
    category: 'Authentic Choice',
    price: '75.00',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    amenities: ['AC', 'En-suite Bathroom', 'Tea/Coffee', 'Safe', 'Free Wi-Fi'],
    description: 'Cozy and comfortable, perfect for the modern traveler looking for a local touch without compromise.'
  },
  {
    id: 'twin-haven',
    name: 'Standard Twin Room',
    category: 'Travel Buddies',
    price: '75.00',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
    amenities: ['AC', 'Two Single Beds', 'Hot Water', 'Safe', 'Free Wi-Fi'],
    description: 'The ideal setup for friends or siblings exploring the wonders of Fulhadhoo and the Baa Atoll reefs.'
  },
  {
    id: 'solo-explorer-studio',
    name: 'Solo Explorer Studio',
    category: 'Solo Haven',
    price: '55.00',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800',
    amenities: ['Compact AC', 'Single Bed', 'En-suite Bathroom', 'Local Guide Map', 'Free Wi-Fi'],
    description: 'Efficient and charming space for the focused explorer seeking authenticity on a budget.'
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: 'hanifaru',
    name: 'Hanifaru Bay Snorkeling',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    description: 'Swim with majestic Manta Rays and Whale Sharks in a UNESCO reserve.',
    tag: 'Seasonal'
  },
  {
    id: 'sandbank',
    name: 'Pristine Sandbank Picnic',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'Experience total isolation on a strip of pure white sand.'
  },
  {
    id: 'dolphin',
    name: 'Sunset Dolphin Cruise',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=800',
    description: 'Watch the sunset while playful dolphins dance around the boat.'
  }
];

export const SYSTEM_PROMPT = `You are the Veyo Inn Concierge, a friendly and helpful AI assistant for a local homestay in Fulhadhoo Island, Maldives.
Veyo Inn is located in Baa Atoll (UNESCO Biosphere Reserve).
The name "Veyo" means vines/nature in the local language, representing the lush jungle and local roots.
Focus on: Nature, authentic Maldivian life, budget-friendly travel, and activities like Hanifaru Bay snorkeling, sandbanks, and turtle tours.
Tone: Warm, welcoming, informative, and island-relaxed.
Always use local greetings like "Maruhabaa" and maintain a serene, helpful vibe.`;
