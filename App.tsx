
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar } from './components/BookingBar';
import { AboutSection } from './components/AboutSection';
import { RoomSection } from './components/RoomSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Logistics } from './components/Logistics';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { BookingView } from './components/BookingView';
import { RoomDetailsModal } from './components/RoomDetailsModal';
import { Room } from './types';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'landing' | 'booking'>('landing');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCheckAvailability = () => {
    setView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRoom = (room: Room) => {
    setSelectedRoom(room);
  };

  return (
    <div className="relative min-h-screen selection:bg-teal-100 selection:text-teal-900 bg-[#fafaf9]">
      <Navbar scrolled={scrolled || view === 'booking'} onBookNow={() => setView('booking')} />
      
      <main>
        {view === 'landing' ? (
          <>
            <section id="home" className="relative">
              <Hero onDiscover={() => setView('booking')} />
              <BookingBar onSearch={handleCheckAvailability} />
            </section>

            <section id="about">
              <AboutSection />
            </section>

            <section id="rooms">
              <RoomSection onSelectRoom={handleSelectRoom} />
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
    </div>
  );
}

export default App;
