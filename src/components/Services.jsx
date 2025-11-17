import React from 'react';

const Services = () => {
  // 1. Enforce Lato Font
  const sectionStyle = {
    fontFamily: "'Lato', sans-serif",
    backgroundColor: '#f8f9fa', // Light grey background to separate from white sections
  };

  const brandColor = '#ed4302';

  // 2. Data Arrays (Clean way to manage lists)
  const licensureExams = [
    "Nursing Licensure Examination (PNLE)",
    "Midwifery Licensure Examination",
    "Midtech and Radtech Review Programs",
    "Licensure Examination for Teachers (LET)",
    "Civil Service Examination Review"
  ];

  const academicExams = [
    "College Entrance Test Review",
    "National Competitive Examination Review"
  ];

  return (
    <section id="services" className="py-5" style={sectionStyle}>
      <div className="container">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: brandColor }}>Programs We Offer</h2>
          <p className="text-muted lead">Comprehensive review solutions for every stage of your career.</p>
        </div>

        {/* ROW 1: Standard Exams (Licensure & Academic) */}
        <div className="row g-4 mb-5">
          {/* Card 1: Licensure */}
          <div className="col-md-7">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header text-white fw-bold py-3" style={{ backgroundColor: brandColor }}>
                📜 Licensure & Board Exam Reviews
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {licensureExams.map((item, index) => (
                    <li key={index} className="list-group-item border-0 ps-0">
                      <span className="me-2 text-success">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Academic */}
          <div className="col-md-5">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header text-white fw-bold py-3 bg-secondary">
                🎓 Academic & Competitive Exams
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {academicExams.map((item, index) => (
                    <li key={index} className="list-group-item border-0 ps-0">
                      <span className="me-2 text-primary">✔</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Enhanced Programs (Detailed) */}
        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="card-body p-0">
                <div className="row g-0">
                  {/* Left Side: Title & Context */}
                  <div className="col-lg-4 bg-dark text-white p-5 d-flex flex-column justify-content-center">
                    <h3 className="fw-bold mb-3">Enhanced Review Programs</h3>
                    <p className="small opacity-75">
                      Specialized programs for Nursing Schools.
                    </p>
                    <hr style={{ borderColor: brandColor, opacity: 1 }} />
                    <p className="fst-italic small">
                      "These programs are conducted in partnership with colleges and universities, ensuring that nursing students are exam-ready and career-ready before graduation."
                    </p>
                  </div>

                  {/* Right Side: The Specific Programs */}
                  <div className="col-lg-8 p-5 bg-white">
                    <div className="mb-4">
                      <h5 className="fw-bold text-dark">
                        <span style={{ color: brandColor }}>01.</span> 3rd Year Nursing Students
                      </h5>
                      <p className="text-muted ms-4">
                        Designed to introduce key board exam concepts early, easing the academic load during the final year.
                      </p>
                    </div>
                    
                    <div>
                      <h5 className="fw-bold text-dark">
                        <span style={{ color: brandColor }}>02.</span> 4th Year Nursing Students
                      </h5>
                      <p className="text-muted ms-4">
                        A comprehensive and focused review to prepare students for the actual board examination while integrating real-world nursing applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;