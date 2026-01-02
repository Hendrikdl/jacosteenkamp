import React from "react";
import "../styles/Services.css";

export default function Services() {
  return (
    <section className="services-section position-relative overflow-hidden">
      {/* SVG BACKGROUND */}
      <div className="services-bg" />

      <div className="container position-relative">
        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="services-title">Services</h1>
          <p className="services-subtitle mx-auto">
            Professional 3D printing solutions focused on quality, precision,
            and fast turnaround.
          </p>
        </div>

        {/* GRID */}
        <div className="row g-4">
          <ServiceCard
            title="Custom 3D Printing"
            text="Precision printing of custom parts, prototypes, and functional components."
            materials={["PLA", "PETG", "ABS"]}
          />

          <ServiceCard
            title="Rapid Prototyping"
            text="Fast turnaround prototypes to test and refine your designs efficiently."
            materials={["PLA", "PETG"]}
          />

          <ServiceCard
            title="Design Assistance"
            text="Help preparing and optimizing 3D models for print-ready production."
            materials={["PLA", "Resin"]}
          />

          <ServiceCard
            title="Small Batch Production"
            text="Short-run manufacturing for custom products and replacement parts."
            materials={["PLA", "PETG", "ABS"]}
          />

          <ServiceCard
            title="Material Consultation"
            text="Guidance on selecting materials for strength, durability, and finish."
            materials={["PLA", "PETG", "ABS", "Resin"]}
          />

          <ServiceCard
            title="Post-Processing & Finishing"
            text="Sanding, assembly, and surface refinement for a professional result."
            materials={["PLA", "Resin"]}
          />
        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function ServiceCard({ title, text, materials }) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="service-card h-100">
        <h5 className="service-card-title">{title}</h5>
        <p className="service-card-text">{text}</p>

        {/* MATERIAL BADGES */}
        <div className="service-badges">
          {materials.map((mat, index) => (
            <span key={index} className="badge service-badge">
              {mat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
