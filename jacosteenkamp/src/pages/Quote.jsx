// src/pages/Quote.jsx
import React, { useState } from "react";
import "../styles/Contact.css";

export default function Quote() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    material: "PLA",
    quantity: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your quote request has been sent. We will contact you shortly.");
    setForm({
      name: "",
      email: "",
      phone: "",
      material: "PLA",
      quantity: "",
      description: "",
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT – INFO */}
        <div className="contact-info">
          <h1 className="contact-title">Request a Quote</h1>

          <p className="contact-description">
            Need a custom 3D printed part or prototype? Provide a few details
            about your project and we’ll prepare a tailored quote for you.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">What we offer</span>
              <span className="contact-value">
                Design, Prototyping & 3D Printing
              </span>
            </div>

            <div className="contact-item">
              <span className="contact-label">Materials</span>
              <span className="contact-value">PLA, ABS, PETG, TPU, Nylon</span>
            </div>

            <div className="contact-item">
              <span className="contact-label">Turnaround</span>
              <span className="contact-value">Fast & reliable delivery</span>
            </div>
          </div>
        </div>

        {/* RIGHT – QUOTE FORM */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>

            <div className="form-group">
              <label>Material</label>
              <select
                name="material"
                value={form.material}
                onChange={handleChange}
              >
                <option value="PLA">PLA</option>
                <option value="ABS">ABS</option>
                <option value="PETG">PETG</option>
                <option value="TPU">TPU</option>
                <option value="Nylon">Nylon</option>
              </select>
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={form.quantity}
                onChange={handleChange}
                placeholder="Number of prints"
              />
            </div>

            <div className="form-group">
              <label>Project Description</label>
              <textarea
                name="description"
                rows="5"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe size, purpose, tolerances, or any special requirements..."
                required
              />
            </div>

            <button type="submit" className="contact-button">
              Request Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
