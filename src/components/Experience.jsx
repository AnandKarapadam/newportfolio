import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-6">Experience & <span>Projects</span></h2>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-lg-6">
            <div className="glass-card h-100 p-4 p-md-5">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary bg-opacity-25 rounded-circle p-3 me-3 border border-primary shadow-sm">
                  <i className="bi bi-briefcase-fill text-neon fs-3"></i>
                </div>
                <div>
                  <h3 className="h4 fw-bold mb-1 text-white">Hands-on Experience</h3>
                  <p className="text-secondary mb-0">Project-based Learning & Development</p>
                </div>
              </div>
              
              <ul className="list-group list-group-flush bg-transparent mt-4">
                <li className="list-group-item bg-transparent border-secondary border-opacity-25 d-flex align-items-start px-0 py-3">
                  <i className="bi bi-check-circle-fill text-neon me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1 text-light">Full-stack Development</h5>
                    <p className="text-secondary mb-0">Building robust end-to-end applications using the MERN stack with modern architectural patterns.</p>
                  </div>
                </li>
                <li className="list-group-item bg-transparent border-secondary border-opacity-25 d-flex align-items-start px-0 py-3">
                  <i className="bi bi-check-circle-fill text-neon me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1 text-light">Authentication & Security</h5>
                    <p className="text-secondary mb-0">Implementing secure user authentication flows, JWT token management, and route protection.</p>
                  </div>
                </li>
                <li className="list-group-item bg-transparent border-secondary border-opacity-25 d-flex align-items-start px-0 py-3">
                  <i className="bi bi-check-circle-fill text-neon me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1 text-light">CRUD Operations</h5>
                    <p className="text-secondary mb-0">Designing and integrating complex database operations and RESTful APIs for data management.</p>
                  </div>
                </li>
                <li className="list-group-item bg-transparent border-0 d-flex align-items-start px-0 py-3">
                  <i className="bi bi-check-circle-fill text-neon me-3 mt-1"></i>
                  <div>
                    <h5 className="mb-1 text-light">Responsive UI Design</h5>
                    <p className="text-secondary mb-0">Creating modern, mobile-first interfaces ensuring optimal user experience across all devices.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="glass-card h-100 p-4 p-md-5 d-flex flex-column">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-primary bg-opacity-25 rounded-circle p-3 me-3 border border-primary shadow-sm">
                  <i className="bi bi-laptop text-neon fs-3"></i>
                </div>
                <div>
                  <h3 className="h4 fw-bold mb-1 text-white">Featured Project</h3>
                  <p className="text-secondary mb-0">Full Stack E-commerce</p>
                </div>
              </div>
              
              <div className="glass-card p-4 mt-2 flex-grow-1 border-primary border-opacity-50" style={{ background: 'rgba(0, 123, 255, 0.05)' }}>
                <h4 className="text-white mb-3">Fashion Store</h4>
                <p className="text-light mb-4">
                  A comprehensive full-stack e-commerce application built with the MERN stack. Features include user authentication, product management, shopping cart functionality, secure checkout, and a responsive modern UI.
                </p>
                
                <div className="mt-auto">
                  <a href="https://github.com/AnandKarapadam/fashionstore" target="_blank" rel="noreferrer" className="btn btn-glass w-100 d-flex align-items-center justify-content-center">
                    <i className="bi bi-github me-2 fs-5"></i> View Source on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
