// src/pages/Quote.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Contact.css";

export default function Quote() {
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_QUOTE_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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

  const validateForm = () => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!form.email.trim()) return "Please enter your email address.";
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.description.trim())
      return "Please provide a project description.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    emailjs
      .send(
        service_id,
        template_id,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          material: form.material,
          quantity: form.quantity,
          description: form.description,
        },
        public_key
      )
      .then(() => {
        toast.success("Quote request sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          material: "PLA",
          quantity: "",
          description: "",
        });
      })
      .catch(() => {
        toast.error(
          "Something went wrong while sending your request. Please try again."
        );
      });
  };

  return (
    <section className="contact-section">
      <ToastContainer position="top-right" autoClose={4000} />

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <h1 className="contact-title">Request a Quote</h1>
          <p className="contact-description">
            Need a custom 3D printed part or prototype? Provide a few details
            about your project and we’ll prepare a tailored quote for you.
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Full Name</label>
              <input
                className="formInput"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                className="formInput"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                className="formInput"
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
                className="formInput"
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
                className="formInput"
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
                className="formInput"
                name="description"
                rows="5"
                value={form.description}
                onChange={handleChange}
                placeholder="Describe your project..."
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
