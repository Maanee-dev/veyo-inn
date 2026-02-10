
import { Room, Excursion } from './types';

export const ROOMS: Room[] = [
  {
    id: 'deluxe-garden',
    name: 'Garden Room',
    category: 'Best Room',
    price: '95.00',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800',
    amenities: ['AC', 'Hot Water', 'Garden View', 'King Bed', 'Free Wi-Fi'],
    description: 'A large, comfortable room with a view of our green garden. Great for couples.'
  },
  {
    id: 'family-jungle-suite',
    name: 'Family Room',
    category: 'Big Room',
    price: '160.00',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
    amenities: ['2 Bedrooms', 'Private Patio', 'Mini Fridge', 'King + Twin Beds', 'Premium Wi-Fi'],
    description: 'Our largest room, surrounded by trees. Perfect for families who want to stay together.'
  },
  {
    id: 'ocean-breeze-loft',
    name: 'Sea Breeze Room',
    category: 'Top Floor',
    price: '125.00',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800',
    amenities: ['High Ceilings', 'Panoramic Windows', 'Rain Shower', 'Work Desk', 'Nespresso'],
    description: 'A high room that gets the cool sea air. Great for people who need to work while traveling.'
  },
  {
    id: 'standard-double',
    name: 'Standard Room',
    category: 'Simple Choice',
    price: '75.00',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    amenities: ['AC', 'En-suite Bathroom', 'Tea/Coffee', 'Safe', 'Free Wi-Fi'],
    description: 'A cozy and clean room for travelers who want a simple place to sleep.'
  },
  {
    id: 'twin-haven',
    name: 'Twin Room',
    category: 'Two Beds',
    price: '75.00',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
    amenities: ['AC', 'Two Single Beds', 'Hot Water', 'Safe', 'Free Wi-Fi'],
    description: 'Two separate beds for friends or siblings who are traveling together.'
  },
  {
    id: 'solo-explorer-studio',
    name: 'Solo Room',
    category: 'Small Room',
    price: '55.00',
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800',
    amenities: ['Compact AC', 'Single Bed', 'En-suite Bathroom', 'Local Guide Map', 'Free Wi-Fi'],
    description: 'A small, affordable room for travelers exploring alone.'
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

export const SYSTEM_PROMPT = `You are the Veyo Inn Help, a friendly AI for a guest house in Fulhadhoo Island, Maldives. 
Keep your answers simple and easy to understand.
Talk about: Nature, local life, and fun trips like snorkeling and picnics.
Tone: Friendly and helpful. Use simple words.
Greeting: Say "Maruhabaa" (Hello).`;
