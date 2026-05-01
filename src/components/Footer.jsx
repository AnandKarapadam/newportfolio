import React from 'react';

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ background: 'rgba(10, 10, 15, 0.8)', borderTop: '1px solid rgba(0, 123, 255, 0.1)' }}>
      <div className="container text-center">
        <div className="mb-4">
          <a href="https://www.linkedin.com/in/anand-karapadam" target="_blank" rel="noreferrer" className="social-icon-link mx-3 fs-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/AnandKarapadam" target="_blank" rel="noreferrer" className="social-icon-link mx-3 fs-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="mailto:anandkv120@gmail.com" className="social-icon-link mx-3 fs-3">
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
        <p className="mb-0 text-secondary">
          &copy; {new Date().getFullYear()} Anand KV. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
