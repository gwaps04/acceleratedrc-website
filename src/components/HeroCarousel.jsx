import React from 'react';

const HeroCarousel = () => {
  // We define 6 specific background colors for the placeholders
  // Format: Hex codes without the '#' (required for the image placeholder API)
  const slides = [
    { id: 1, color: '007bff', name: 'Blue' },   // Slide 1
    { id: 2, color: '6610f2', name: 'Purple' }, // Slide 2
    { id: 3, color: '28a745', name: 'Green' },  // Slide 3
    { id: 4, color: 'dc3545', name: 'Red' },    // Slide 4
    { id: 5, color: 'ffc107', name: 'Yellow' }, // Slide 5
    { id: 6, color: '17a2b8', name: 'Teal' }    // Slide 6
  ];

  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
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
          <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <picture>
              {/* Mobile Image (800x1200) - Using the dynamic color */}
              <source 
                media="(max-width: 768px)" 
                srcSet={`https://placehold.co/800x1200/${slide.color}/FFFFFF?text=Mobile+${slide.name}`} 
              />
              {/* Desktop Image (1280x720) - Using the dynamic color */}
              <img 
                src={`https://placehold.co/1280x720/${slide.color}/FFFFFF?text=Desktop+${slide.name}`} 
                className="d-block w-100" 
                alt={`Slide ${slide.name}`} 
                style={{ objectFit: 'cover', maxHeight: '720px' }}
              />
            </picture>
            
            <div className="carousel-caption d-none d-md-block">
              <h5>Slide {slide.id}: {slide.name} Theme</h5>
              <p>Visualizing different content areas.</p>
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