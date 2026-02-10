import { Room, Excursion } from './types';

const ROOM_GALLERY = [
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1583847268964-b28dc2f51ac9?auto=format&fit=crop&q=80&w=1200'
];

export const ROOMS: Room[] = [
  {
    id: 'loft-01',
    name: 'Veyo Loft 01',
    category: 'The Collection',
    price: '145.00',
    image: ROOM_GALLERY[0],
    gallery: ROOM_GALLERY,
    amenities: [
      'Two Floors', 
      'Full Kitchen', 
      'Washing Machine', 
      'Dining Area', 
      'Glass Balcony', 
      'Fast Wi-Fi', 
      'Smart TV'
    ],
    description: 'A modern two-story loft in the heart of the island. This space features a private kitchen, a dining area, and a washing machine on the first floor. The bedroom is located upstairs for extra privacy, offering a peaceful space to rest.'
  },
  {
    id: 'loft-02',
    name: 'Veyo Loft 02',
    category: 'The Collection',
    price: '145.00',
    image: ROOM_GALLERY[4],
    gallery: ROOM_GALLERY,
    amenities: [
      'Two Floors', 
      'Full Kitchen', 
      'Washing Machine', 
      'Dining Area', 
      'Glass Balcony', 
      'Fast Wi-Fi', 
      'Smart TV'
    ],
    description: 'A clean, minimalist loft designed for comfort. Enjoy your own kitchen and dining space downstairs, with a quiet bedroom on the upper level. Perfect for longer stays or travelers who enjoy a home-like feel.'
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: 'hanifaru',
    name: 'Manta Rays',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    description: 'Swim with manta rays in the famous Hanifaru Bay.',
    tag: 'Baa Atoll'
  },
  {
    id: 'sandbank',
    name: 'Sandbank Trip',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'A relaxing afternoon on a private beach in the middle of the ocean.'
  },
  {
    id: 'dolphin',
    name: 'Sunset Cruise',
    image: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&q=80&w=800',
    description: 'Watch dolphins play while the sun goes down over the sea.'
  }
];

export const SYSTEM_PROMPT = `You are the Veyo Inn Concierge. 
Our lofts are on Fulhadhoo Island, Baa Atoll. 
Key Features: Two-story rooms, private kitchens, washing machines, and minimalist design. 
Tone: Friendly, simple, and professional. 
Greeting: "Maruhabaa" (Welcome).`;