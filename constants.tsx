import { Room, Excursion } from './types';

const ROOM_GALLERY = [
  'https://veyoinn.com/veyo4.png',
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
  'https://veyoinn.com/veyo3.png'
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
      'Two Levels', 
      'Kitchen', 
      'Laundry', 
      'Dining Room', 
      'Balcony', 
      'Wi-Fi', 
      'TV'
    ],
    description: 'A modern two-story loft on Fulhadhoo. It has a kitchen, dining area, and washing machine on the first floor. The bedroom is upstairs for more privacy.'
  },
  {
    id: 'loft-02',
    name: 'Veyo Loft 02',
    category: 'The Collection',
    price: '145.00',
    image: ROOM_GALLERY[4],
    gallery: ROOM_GALLERY,
    amenities: [
      'Two Levels', 
      'Kitchen', 
      'Laundry', 
      'Dining Room', 
      'Balcony', 
      'Wi-Fi', 
      'TV'
    ],
    description: 'A clean and quiet loft for your stay. Enjoy your own kitchen downstairs and a peaceful bedroom on the second floor. Great for long stays.'
  }
];

export const EXCURSIONS: Excursion[] = [
  {
    id: 'hanifaru',
    name: 'Manta Rays',
    image: 'https://static.wixstatic.com/media/f67c0e_91f740b3aff14d719d4be4ddf67286a3~mv2.jpg/v1/fit/w_2500,h_1330,al_c/f67c0e_91f740b3aff14d719d4be4ddf67286a3~mv2.jpg$0',
    description: 'Swim with manta rays in Hanifaru Bay.',
    tag: 'Baa Atoll'
  },
  {
    id: 'sandbank',
    name: 'Sandbank Trip',
    image: 'https://islandii.com/wp-content/uploads/2025/06/fulhadhoo-sandbank.jpg',
    description: 'Relax on a private beach in the ocean.'
  },
  {
    id: 'dolphin',
    name: 'Sunset Cruise',
    image: 'https://canareef.com/wp-content/uploads/2023/11/Guests-taking-photos-of-dolphins-1024x503.jpg',
    description: 'See dolphins at sunset.'
  }
];

export const SYSTEM_PROMPT = `You are the Veyo Inn Concierge. 
Our lofts are on Fulhadhoo Island, Baa Atoll. 
Key Features: Two-story rooms, private kitchens, washing machines. 
Tone: Friendly, simple, and professional. 
Greeting: "Maruhabaa" (Welcome).`;