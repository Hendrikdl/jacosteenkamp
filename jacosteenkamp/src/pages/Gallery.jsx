// src/pages/Gallery.jsx
import React from "react";
import "../styles/Gallery.css";
import image1 from "../assets/Image1.jpeg";
import image2 from "../assets/Image2.jpeg";
import image3 from "../assets/Image3.jpeg";
import image4 from "../assets/Image4.jpeg";
import image5 from "../assets/Image5.jpeg";
import image6 from "../assets/Image6.jpeg";
import image7 from "../assets/Image7.jpeg";
import image8 from "../assets/Image8.jpeg";
import image9 from "../assets/Image9.jpeg";
import image10 from "../assets/Image10.jpeg";
import image11 from "../assets/Image11.jpeg";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="gallery-title">Gallery</h1>
          <p className="gallery-subtitle mx-auto">
            A glimpse into our 3D printing process and some of our completed
            projects.
          </p>
        </div>

        {/* IMAGES */}
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image1} alt="3D printed project 1" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image2} alt="3D printed project 2" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image3} alt="3D printed project 3" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image4} alt="3D printed project 3" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image5} alt="3D printed project 3" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image6} alt="3D printed project 3" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image7} alt="3D printed project 3" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image8} alt="3D printed project 3" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image9} alt="3D printed project 3" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image10} alt="3D printed project 3" />
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="gallery-image-card">
              <img src={image11} alt="3D printed project 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
