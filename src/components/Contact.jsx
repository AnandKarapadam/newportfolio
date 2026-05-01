import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must contain only numbers';
    }

    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitting(true);
      
      const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSe_hlBjFrYNZwvRmgkAZAsqCubZNrLn7DSQskCc9BD232mlGA/formResponse';
      
      const dataParams = new URLSearchParams();
      dataParams.append('entry.507732964', formData.name);
      dataParams.append('entry.853489406', formData.email);
      if (formData.phone) {
        dataParams.append('entry.105385735', formData.phone);
      }
      dataParams.append('entry.304741307', formData.message);

      try {
        await fetch(formUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: dataParams
        });
        
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error sending your message. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <>
      {submitted && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 9999, background: 'rgba(10, 10, 15, 0.8)', backdropFilter: 'blur(8px)' }}>
          <div className="glass-card p-5 text-center shadow-lg mx-3" style={{ maxWidth: '450px', transform: 'scale(1)', transition: 'all 0.3s ease' }}>
            <div className="mb-3">
              <i className="bi bi-check-circle-fill text-success text-shadow" style={{ fontSize: '4rem', filter: 'drop-shadow(0 0 15px rgba(25, 135, 84, 0.5))' }}></i>
            </div>
            <h3 className="text-white fw-bold mb-3">Message Sent!</h3>
            <p className="text-secondary mb-4 fs-5">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button className="btn btn-glass-primary px-5 py-2 fs-5" onClick={() => setSubmitted(false)}>
              Okay
            </button>
          </div>
        </div>
      )}
      <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-6">Get In <span>Touch</span></h2>
          <p className="text-secondary mb-1">Feel free to reach out for collaborations or just a friendly hello!</p>
          <p className="text-secondary">
            Or email me directly at <a href="mailto:anandkv120@gmail.com" className="text-neon text-decoration-none fw-medium">anandkv120@gmail.com</a>
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="glass-card p-4 p-md-5">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label text-light fw-medium">Name <span className="text-neon">*</span></label>
                    <input
                      type="text"
                      className={`form-control form-glass ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    {errors.name && <div className="invalid-feedback text-danger mt-2">{errors.name}</div>}
                  </div>
                  
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label text-light fw-medium">Email <span className="text-neon">*</span></label>
                    <input
                      type="email"
                      className={`form-control form-glass ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                    {errors.email && <div className="invalid-feedback text-danger mt-2">{errors.email}</div>}
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="phone" className="form-label text-light fw-medium">Phone <span className="text-secondary">(Optional)</span></label>
                    <input
                      type="tel"
                      className={`form-control form-glass ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 1234567890"
                    />
                    {errors.phone && <div className="invalid-feedback text-danger mt-2">{errors.phone}</div>}
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="message" className="form-label text-light fw-medium">Message <span className="text-neon">*</span></label>
                    <textarea
                      className={`form-control form-glass ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                    ></textarea>
                    {errors.message && <div className="invalid-feedback text-danger mt-2">{errors.message}</div>}
                  </div>
                  
                  <div className="col-12 text-center mt-5">
                    <button type="submit" disabled={submitting} className="btn btn-glass-primary px-5 py-3 w-100 w-md-auto fs-5 shadow">
                      {submitting ? (
                        <><span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Sending...</>
                      ) : (
                        <><i className="bi bi-send-fill me-2"></i> Send Message</>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
