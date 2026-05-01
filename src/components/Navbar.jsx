import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top glass-nav">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">
          Anand <span className="text-neon">KV</span>
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list text-white fs-2"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
