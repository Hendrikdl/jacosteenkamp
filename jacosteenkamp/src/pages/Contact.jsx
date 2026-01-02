// src/pages/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  // Environment variables for EmailJS
  const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const template_id = process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    cellnumber: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Basic form validation
  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your full name.";
    if (!formData.email.trim()) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.message.trim()) return "Please enter a message.";
    return null;
  };

  // Handle form submission
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
          from_name: formData.name,
          from_cellnumber: formData.cellnumber,
          from_email: formData.email,
          message: formData.message,
        },
        public_key
      )
      .then(() => {
        toast.success("Message sent successfully! We’ll be in touch soon.");
        setFormData({ name: "", cellnumber: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Something went wrong. Please try again later.");
      });
  };

  return (
    <section className="contact-section">
      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar />

      <div className="contact-container">
        {/* LEFT: Info */}
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

        {/* RIGHT: Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Full Name</label>
              <input
                className="formInput"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                className="formInput"
                type="text"
                name="cellnumber"
                value={formData.cellnumber}
                onChange={handleChange}
                placeholder="Your phone number"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                className="formInput"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                className="formInput"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              />
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
