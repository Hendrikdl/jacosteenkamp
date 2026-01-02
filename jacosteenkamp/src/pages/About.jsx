// src/pages/About.jsx
import React from "react";
import "../styles/About.css";
import profilePhoto from "../assets/Jaco_Photo.png";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image */}
        <div className="about-image-wrapper">
          {/* Replace src with client image */}
          <img
            src={profilePhoto}
            alt="Founder of 3D Printing Business"
            className="about-image"
          />
        </div>

        {/* Content */}
        <div className="about-content">
          <h1 className="about-title">About Me - Jaco Steenkamp</h1>

          <p className="about-text">
            Fast, accurate 3D printing for mechanical, automotive and custom
            applications - when parts are unavailable, broken or too expensive
            to replace.
          </p>

          <p className="about-text">
            Specializing in custom designs, rapid prototyping, and small-batch
            production, the business focuses on delivering durable, accurate,
            and visually striking prints using modern 3D printing technologies.
          </p>

          <p className="about-text">
            Whether you are an engineer, designer, business owner, or hobbyist,
            every project is approached with attention to detail, creativity,
            and a commitment to excellence.
          </p>

          <div className="about-highlight">
            <span>✔ Precision Printing</span>
            <span>✔ Custom Designs</span>
            <span>✔ Fast Turnaround</span>
          </div>
        </div>
      </div>
    </section>
  );
}
