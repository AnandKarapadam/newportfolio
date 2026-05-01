import React from 'react';

const About = () => {
  const skills = [
    'MongoDB',
    'Express.js',
    'React',
    'Node.js',
    'TypeScript',
    'RESTful API',
    'PostgreSQL'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-6">About <span>Me</span></h2>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="glass-card h-100 p-4">
              <h3 className="h4 mb-4 fw-bold text-white">
                <i className="bi bi-mortarboard-fill me-3 text-neon"></i>
                Education & Training
              </h3>
              
              <div className="position-relative ms-3 ps-4 border-start border-primary border-opacity-50 mt-4">
                <div className="position-absolute top-0 start-0 translate-middle p-2 bg-primary rounded-circle shadow-sm"></div>
                <div className="mb-4">
                  <h5 className="mb-1 text-white">MERN Stack Bootcamp Trainee</h5>
                  <p className="text-neon mb-0">Brototype</p>
                </div>
                
                <div className="position-absolute top-50 start-0 translate-middle p-2 bg-secondary rounded-circle shadow-sm mt-3"></div>
                <div className="mt-4">
                  <h5 className="mb-1 text-white">Higher Secondary</h5>
                  <p className="text-secondary mb-0">Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="glass-card h-100 p-4">
              <h3 className="h4 mb-4 fw-bold text-white">
                <i className="bi bi-code-slash me-3 text-neon"></i>
                Technical Skills
              </h3>
              
              <div className="row g-3">
                {skills.map((skill, index) => (
                  <div className="col-6 col-md-4" key={index}>
                    <div className="glass-card p-3 text-center h-100 d-flex align-items-center justify-content-center hover-glow">
                      <span className="text-light fw-medium">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="col-12 mt-4">
            <div className="glass-card p-4 text-center border-primary" style={{ background: 'rgba(0, 123, 255, 0.05)' }}>
              <p className="mb-0 fs-5 text-light">
                <i className="bi bi-lightbulb-fill text-warning me-2 text-shadow"></i>
                "Open to learning based on company preference, quick learner"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
