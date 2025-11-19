import React from 'react';

const Footer = () => {
  return (
    <footer 
      className="py-5" 
      style={{ 
        backgroundColor: '#F87B1B', 
        fontFamily: '"Arial Narrow", Arial, sans-serif',
        color: '#ffffff' // White text for better contrast on Orange
      }}
    >
      <div className="container">
        <div className="row g-4">
          
          {/* COLUMN 1: Brand & Tagline */}
          <div className="col-md-4 text-center text-md-start">
            <h3 className="fw-bold mb-1">Accelerated Review Center</h3>
            <p className="fst-italic opacity-75">“Your Success, Our Mission.”</p>
          </div>

          {/* COLUMN 2: Contact Details */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3 text-uppercase" style={{ letterSpacing: '1px' }}>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <strong>📍 Address:</strong><br/>
                189, Magallanes Street, Brgy. 34, Oro Site<br/>
                Legazpi City.
              </li>
              <li className="mb-2">
                <strong>📞 Phone:</strong> 0991-718-1450
              </li>
              <li>
                <strong>📧 Email:</strong> acceleratedph@gmail.com
              </li>
            </ul>
          </div>

          {/* COLUMN 3: The Motto */}
          <div className="col-md-4 text-center text-md-end d-flex flex-column justify-content-center">
            <h4 className="fw-bold mt-3 mt-md-0">To God be the greatest Glory!</h4>
          </div>
        </div>

        {/* DIVIDER LINE */}
        <hr className="my-4" style={{ opacity: 0.3 }} />

        {/* BOTTOM ROW: Developer Credits */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start small">
            &copy; Developed 2025
          </div>
          <div className="col-md-6 text-center text-md-end small">
            Developed by: <strong>Macrotek Digital Solutions</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;