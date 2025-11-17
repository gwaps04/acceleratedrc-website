import React from 'react';

const Navbar = () => {
  // Professional Font Stack
  const navbarStyle = {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '600',
    letterSpacing: '0.5px'
  };

  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light" 
      style={{ backgroundColor: '#ed4302' }} 
    >
      {/* Edge-to-edge container for mobile responsiveness */}
      <div className="container-fluid px-3 px-lg-5">
        
        {/* BRANDING - LOGO IMAGE */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          {/* IMPORTANT: 
             1. Ensure your file in the 'public' folder is named 'logo.png'
             2. If your file is a JPG or has a different name, change the src below.
          */}
          <img 
            src="/arc-logo.png" 
            alt="Accelerated Review Center Logo" 
            className="img-fluid"
            /* maxHeight: '50px' -> Keeps the navbar slim. 
               objectFit: 'contain' -> Ensures the logo doesn't get cut off.
            */
            style={{ maxHeight: '50px', objectFit: 'contain' }}
          />
        </a>

        {/* TOGGLER (Hamburger Menu) */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LINKS & BUTTON */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center pt-3 pt-lg-0" style={navbarStyle}>
            <li className="nav-item">
              <a className="nav-link active text-uppercase px-3" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase px-3" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase px-3" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase px-3" href="#contact">Contact Us</a>
            </li>
            
            {/* REGISTER BUTTON */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0 mb-2 mb-lg-0">
              <a 
                className="btn btn-dark text-white text-uppercase w-100" 
                href="https://forms.gle/jiqxjrcRb2Ho86kD6" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '12px', fontWeight: '700', padding: '10px 20px' }}
              >
                Register Here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;