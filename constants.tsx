
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
    id: 'loft-signature',
    name: 'Signature Loft',
    category: 'Private 2-Floor Suite',
    price: '185.00',
    image: ROOM_GALLERY[0],
    gallery: ROOM_GALLERY,
    amenities: [
      '2 Floors for Privacy',
      'Modern Bathroom',
      'Upper Floor Bedroom',
      'Lower Floor Lounge',
      'Smart TV',
      'Air Conditioning'
    ],
    description: 'A modern, two-story room designed for comfort. The ground floor features your living area and private bathroom. Walk up the stairs to your cozy bedroom on the second floor, which overlooks the living space through elegant glass railings.'
  },
  {
    id: 'villa-full',
    name: 'Entire Guest House',
    category: 'The Whole Property',
    price: '420.00',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200',
      ...ROOM_GALLERY
    ],
    amenities: [
      'Both 2-Floor Lofts',
      'Private Kitchen Use',
      'Large Dining Area',
      'Main Living Room',
      'Laundry Machine',
      'Private Chef Available'
    ],
    description: 'Rent the entire house for total privacy. This includes both Signature Lofts (sleeping 4-6 people) and exclusive access to the central kitchen, marble dining table, and the main living hall. Perfect for families or groups of friends.'
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: 'hanifaru',
    name: 'Manta Ray Trip',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    description: 'Swim with giant manta rays at the nearby world-famous Hanifaru Bay.',
    tag: 'Must Do'
  },
  {
    id: 'sandbank',
    name: 'Private Picnic',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'Enjoy a lunch or dinner on a secluded sandbank surrounded by blue water.'
  }
];

export const SYSTEM_PROMPT = `You are the host of Veyo Inn on Fulhadhoo Island.
Be helpful and use simple English.
Explain that the house has 2 identical "Signature Lofts".
Each loft has 2 floors (Bathroom/Lounge on 1st, Bed on 2nd).
Guests can book 1 loft or the "Entire Guest House" which includes the kitchen and living room.
Help with speedboat times and IMUGA forms.`;
