import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer'; // Import the Footer
import './App.css';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      {/* flex-grow-1 ensures content pushes footer down on short pages */}
      <main className="flex-grow-1">
        <HeroCarousel />
        <AboutUs />
        <Services />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;