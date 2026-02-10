
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { AboutSection } from './components/AboutSection';
import { RoomSection } from './components/RoomSection';
import { ExperienceSection } from './components/ExperienceSection';
import { DiningSection } from './components/DiningSection';
import { Logistics } from './components/Logistics';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { BookingView } from './components/BookingView';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { BookingModal } from './components/BookingModal';
import { Room } from './types';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'landing' | 'booking'>('landing');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingSearch = (details: any) => {
    console.log('Searching with details:', details);
    setView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="relative min-h-screen selection:bg-stone-200 selection:text-stone-900 bg-[#fcfbf9]">
      <Navbar scrolled={scrolled || view === 'booking'} onBookNow={() => setIsBookingModalOpen(true)} />
      
      <main>
        {view === 'landing' ? (
          <>
            <section id="home" className="relative">
              <Hero onDiscover={() => setIsBookingModalOpen(true)} />
              <BookingBar onSearch={() => setIsBookingModalOpen(true)} />
            </section>

            <section id="about">
              <AboutSection />
            </section>

            <section id="rooms">
              <RoomSection onSelectRoom={handleSelectRoom} />
            </section>

            <section id="dining">
              <DiningSection />
            </section>

            <section id="experiences">
              <ExperienceSection />
            </section>

            <section id="logistics">
              <Logistics />
            </section>
          </>
        ) : (
          <section className="pt-24 min-h-screen">
            <BookingView 
              onBack={() => setView('landing')} 
              onSelectRoom={handleSelectRoom}
            />
          </section>
        )}
      </main>

      <Footer />
      <ChatWidget />
      
      {selectedRoom && (
        <RoomDetailsModal 
          room={selectedRoom} 
          onClose={() => setSelectedRoom(null)} 
        />
      )}

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSearch={handleBookingSearch}
      />
    </div>
  );
}

export default App;
