
import { Room, Excursion } from './types';

// The following placeholders represent the actual aesthetic provided: 
// Minimalist grey sofas, integrated white kitchenettes, glass railings, and marble flooring.
const ROOM_GALLERY = [
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200', // Modern Loft Architecture
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200', // Integrated Kitchenette
  'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1200', // Minimalist Bedding
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200', // Marble Dining Area
  'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=1200'  // Split Level View
];

export const ROOMS: Room[] = [
  {
    id: 'loft-01',
    name: 'Veyo Signature Loft 01',
    category: 'The Loft Collection',
    price: '145.00',
    image: ROOM_GALLERY[0],
    gallery: ROOM_GALLERY,
    amenities: [
      'Split-Level Living', 
      'Fully Equipped Kitchen', 
      'In-Suite Laundry', 
      'Marble Dining Table', 
      'Glass Safety Railings', 
      'Floating Staircase', 
      'Smart TV & Starlink'
    ],
    description: 'Our flagship residence on Fulhadhoo. A masterclass in vertical living, featuring a sleek, integrated kitchenette on the lower level, a dedicated marble dining space, and a tranquil sleeping loft upstairs protected by architectural glass. Complete with a private laundry suite and premium appliances including a washer and microwave.'
  },
  {
    id: 'loft-02',
    name: 'Veyo Signature Loft 02',
    category: 'The Loft Collection',
    price: '145.00',
    image: ROOM_GALLERY[4],
    gallery: ROOM_GALLERY,
    amenities: [
      'Split-Level Living', 
      'Fully Equipped Kitchen', 
      'In-Suite Laundry', 
      'Marble Dining Table', 
      'Glass Safety Railings', 
      'Floating Staircase', 
      'Smart TV & Starlink'
    ],
    description: 'An architectural twin to Loft 01, this residence offers the same uncompromising minimalist aesthetic. Designed for long-term comfort, it features high-grade cabinetry, an induction cooktop, and a spacious upper-tier bedroom with navy accents, designed for deep rest in the heart of the Maldives.'
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: 'hanifaru',
    name: 'Manta Ray Trip',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    description: 'Swim with giant fish in a protected ocean area.',
    tag: 'Seasonal'
  },
  {
    id: 'sandbank',
    name: 'Beach Picnic',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'Spend time on a tiny island made only of sand.'
  },
  {
    id: 'dolphin',
    name: 'Dolphin Watching',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=800',
    description: 'Watch dolphins jump in the ocean as the sun goes down.'
  }
];

export const SYSTEM_PROMPT = `You are the Veyo Inn Concierge, a world-class AI for a modern minimalist guesthouse in Baa Atoll, Maldives. 
Our property features unique "Signature Lofts" — split-level architectural spaces with glass railings, integrated kitchens, and high-end amenities (washing machines, marble dining, Starlink).
Highlight: The fusion of modern urban loft architecture with tropical island peace.
Tone: Sophisticated, architectural, and deeply helpful. Use simple but evocative words.
Greeting: "Maruhabaa" (Hello).`;
