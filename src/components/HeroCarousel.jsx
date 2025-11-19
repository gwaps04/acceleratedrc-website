import React, { useEffect } from 'react';
// We import the Bootstrap Javascript logic directly to force-control it
import { Carousel } from 'bootstrap';

const HeroCarousel = () => {
  const slides = [
    { id: 1, image: '/slides/slide-1.png', title: "Welcome to ARC", desc: "Your journey to success starts here." },
    { id: 2, image: '/slides/slide-2.png', title: "Expert Reviewers", desc: "Learn from the best in the industry." },
    { id: 3, image: '/slides/slide-3.png', title: "Proven Results", desc: "Producing topnotchers year after year." },
    { id: 4, image: '/slides/slide-4.png', title: "Modern Facilities", desc: "A conducive environment for learning." },
    { id: 5, image: '/slides/slide-5.png', title: "Comprehensive Materials", desc: "Everything you need to pass." },
    { id: 6, image: '/slides/slide-6.png', title: "Join Us Today", desc: "Secure your future with ARC." }
  ];

  // This Hook runs once when the component mounts
  useEffect(() => {
    const carouselElement = document.getElementById('heroCarousel');
    
    // Create a new Bootstrap Carousel instance with your STRICT rules
    const carousel = new Carousel(carouselElement, {
      interval: 4000, // 4 seconds
      pause: false,   // CRITICAL: "false" means "Do NOT pause on hover"
      ride: 'carousel'
    });

    // Force the cycle to start immediately
    carousel.cycle();

    // Cleanup function (good practice in React)
    return () => {
      carousel.dispose();
    };
  }, []);

  return (
    <div 
      id="heroCarousel" 
      className="carousel slide carousel-fade"
      /* We REMOVED data-bs-ride here because we are handling it in the useEffect above */
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${slide.id}`}
          ></button>
        ))}
      </div>

      {/* The Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            // We keep this as a backup
            data-bs-interval="4000"
          >
            <div style={{ height: '85vh', position: 'relative' }}>
              <img 
                src={slide.image} 
                className="d-block w-100 h-100" 
                alt={slide.title} 
                style={{ objectFit: 'cover' }} 
              />
              <div 
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.4)' 
                }}
              ></div>
            </div>
            
            <div className="carousel-caption d-md-block">
              <h2 className="display-4 fw-bold">{slide.title}</h2>
              <p className="lead">{slide.desc}</p>
              <a 
                href="https://www.facebook.com/acceleratedPH" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg mt-3" 
                style={{ backgroundColor: '#ed4302', border: 'none' }}
              >
                Inquire Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeroCarousel;