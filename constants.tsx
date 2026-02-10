import { Room, Excursion } from './types';

// Imagery and descriptions updated to match the unique "Signature Loft" architecture provided in photos.
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
      'Split-Level Architecture', 
      'Fully Integrated Kitchenette', 
      'In-Suite Laundry Center', 
      'Marble Dining Table', 
      'Architectural Glass Railings', 
      'Floating Mezzanine Staircase', 
      'Smart Entertainment & Wi-Fi'
    ],
    description: 'A masterpiece of Maldivian modernism. This signature loft features a double-height living space with an integrated white-cabinetry kitchenette, induction cooktop, and washing machine. The upper mezzanine bedroom offers a sanctuary of rest with panoramic glass views, while the lower level serves as a refined dining and lounge area.'
  },
  {
    id: 'loft-02',
    name: 'Veyo Signature Loft 02',
    category: 'The Loft Collection',
    price: '145.00',
    image: ROOM_GALLERY[4],
    gallery: ROOM_GALLERY,
    amenities: [
      'Split-Level Architecture', 
      'Fully Integrated Kitchenette', 
      'In-Suite Laundry Center', 
      'Marble Dining Table', 
      'Architectural Glass Railings', 
      'Floating Mezzanine Staircase', 
      'Smart Entertainment & Wi-Fi'
    ],
    description: 'Refined minimalism meets island peace. This residence boasts a sophisticated split-level design where the social kitchen and marble dining zone transition seamlessly into a private loft-tier bedroom. Equipped with premium appliances and bespoke finishes, it is designed for the modern voyager.'
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: 'hanifaru',
    name: 'Manta Ray Trip',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    description: 'Embark on a seasonal journey to the world-renowned Hanifaru Bay.',
    tag: 'Baa Atoll Signature'
  },
  {
    id: 'sandbank',
    name: 'Castaway Picnic',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'A private afternoon on a pristine sandbank surrounded by turquoise lagoons.'
  },
  {
    id: 'dolphin',
    name: 'Sunset Cruise',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=800',
    description: 'Witness Maldivian dolphins at play as the sun sets over the Indian Ocean.'
  }
];

export const SYSTEM_PROMPT = `You are the Veyo Inn Concierge. 
Our property features unique "Signature Lofts" on Fulhadhoo Island, Baa Atoll.
Key Features: Split-level architecture, glass mezzanine railings, integrated white kitchenettes (induction, microwave, washer), marble dining, and minimalist navy/grey aesthetics.
Tone: Architectural, world-class, and serene.
Greeting: "Maruhabaa" (Welcome).`;