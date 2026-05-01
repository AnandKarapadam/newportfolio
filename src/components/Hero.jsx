import React from 'react';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/~RESUME~.pdf';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 mt-5 mt-md-0 text-center text-md-start">
            <h1 className="display-4 fw-bold mb-3 text-white">
              Hi, I'm <span className="text-neon">Anand KV</span>
            </h1>
            <h3 className="h4 text-secondary mb-4">MERN Stack Developer</h3>
            <p className="lead mb-4 text-light">
              <i className="bi bi-geo-alt-fill text-danger me-2"></i>
              Kerala, Wayanad
              <br />
              <span className="badge bg-primary bg-opacity-25 text-neon border border-primary mt-3 p-2 shadow-sm">
                <i className="bi bi-globe me-1"></i> Open to relocate and remote
              </span>
            </p>
            
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start mb-4">
              <a href="#contact" className="btn btn-glass-primary">
                Hire Me
              </a>
              <a href="#experience" className="btn btn-glass">
                View Projects
              </a>
              <a href={resumePdf} target="_blank" rel="noreferrer" className="btn btn-glass text-neon" style={{ borderColor: 'rgba(0, 123, 255, 0.5)' }}>
                <i className="bi bi-file-earmark-pdf me-2"></i>See My Resume
              </a>
            </div>
            
            <div className="d-flex justify-content-center justify-content-md-start mt-4">
              <a href="https://www.linkedin.com/in/anand-karapadam" target="_blank" rel="noreferrer" className="social-icon-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/AnandKarapadam" target="_blank" rel="noreferrer" className="social-icon-link">
                <i className="bi bi-github"></i>
              </a>
              <a href="mailto:anandkv120@gmail.com" className="social-icon-link">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="hero-image-wrapper mx-auto d-inline-block">
              <img src={profileImg} alt="Anand KV" className="img-fluid" onError={(e) => { e.target.src = 'https://via.placeholder.com/400'; }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
