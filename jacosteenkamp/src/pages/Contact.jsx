// src/pages/Contact.jsx
import React from "react";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT – CONTACT INFO */}
        <div className="contact-info">
          <h1 className="contact-title">Contact Me</h1>

          <p className="contact-description">
            Have a project in mind or need a custom 3D printed solution? Get in
            touch and let’s bring your ideas to life.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">jaco.steenkamp009@gmail.com</span>
            </div>

            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <span className="contact-value">+27 79 865 4092</span>
            </div>

            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Johannesburg, South Africa</span>
            </div>
          </div>
        </div>

        {/* RIGHT – CONTACT FORM */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell me about your project..." />
            </div>

            <button type="submit" className="contact-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
