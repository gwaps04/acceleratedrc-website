import React from 'react';

const AboutUs = () => {
  // Specific style for this section to enforce Lato
  const sectionStyle = {
    fontFamily: "'Lato', sans-serif",
    color: '#333',
  };

  const brandColor = '#ed4302';

  return (
    <section id="about" style={sectionStyle}>
      
      {/* PART 1: Message from the Founder */}
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Text Column */}
          <div className="col-lg-8">
            <h2 className="fw-bold mb-4" style={{ color: brandColor }}>Message from the Founder</h2>
            <p className="lead fst-italic text-secondary">"Warm greetings!"</p>
            <p>
              I am <strong>Engr. Reggie L. Maigue</strong>, founder of the Accelerated Review Center (ARC).
            </p>
            <p>
              I envisioned ARC to be more than just a review center — but a career gateway where every graduate not only earns their license but also secures a career opportunity locally and abroad. Our mission is to help every aspiring professional reach success faster — from passing their exams to landing their dream jobs.
            </p>
            <p>
              Through strong collaboration with our local and international partners, we aim to bridge the gap between education and employment — building globally competitive professionals who proudly represent the Bicol Region and the Philippines.
            </p>
            <p className="mb-4">
              Together, let us accelerate your journey toward success.
            </p>
            
            <div className="border-start border-4 ps-3" style={{ borderColor: brandColor }}>
              <h5 className="fw-bold m-0">Engr. Reggie L. Maigue</h5>
              <small className="text-muted">Founder, Accelerated Review Center</small>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-4 mt-4 mt-lg-0 text-center">
            <img 
              /* WOZ: CHANGED - Linked to your local file */
              src="/founder-image.png" 
              alt="Engr. Reggie L. Maigue" 
              className="img-fluid rounded-circle shadow-lg"
              /* WOZ: ADDED - objectFit ensures the image doesn't stretch if it's not a perfect square */
              style={{ 
                width: '300px', 
                height: '300px', 
                objectFit: 'cover', 
                border: '5px solid #fff' 
              }}
            />
          </div>
        </div>
      </div>

      {/* PART 2: Mission & Vision (Grey Background for contrast) */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row g-4">
            {/* Mission */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="display-4 mb-3">🎯</div>
                <h3 className="fw-bold mb-3" style={{ color: brandColor }}>Our Mission</h3>
                <p className="text-muted">
                  To empower aspiring professionals by providing high-quality, industry-aligned review programs that ensure licensure exam success and immediate career placement through local and international partnerships.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <div className="display-4 mb-3">🌏</div>
                <h3 className="fw-bold mb-3" style={{ color: brandColor }}>Our Vision</h3>
                <p className="text-muted">
                  To become the leading and globally competitive review center in the Bicol Region and eventually across the Philippines, producing topnotchers and globally employed professionals recognized for excellence, integrity, and dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PART 3: Core Values */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: brandColor }}>💡 Core Values</h2>
          <p className="text-muted">The principles that guide every step of your review journey.</p>
        </div>

        <div className="row justify-content-center g-4">
          {/* We map through the values to create cards efficiently */}
          {[
            { title: "Excellence", desc: "We strive for the highest standards in teaching and review performance." },
            { title: "Integrity", desc: "We uphold honesty, professionalism, and fairness in all our endeavors." },
            { title: "Commitment", desc: "We are dedicated to guiding every reviewee toward success." },
            { title: "Innovation", desc: "We continuously improve our programs to meet global standards." },
            { title: "Empowerment", desc: "We open doors to opportunities that uplift lives and communities." }
          ].map((value, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-start border-0 border-4 shadow-sm" style={{ borderColor: brandColor }}>
                <div className="card-body">
                  <h5 className="fw-bold">{value.title}</h5>
                  <p className="card-text small text-muted">{value.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutUs;