import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/Image1.jpeg";
import Image2 from "../assets/Image2.jpeg";
import Image3 from "../assets/Image3.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-['Inter'] text-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Video Section */}

          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Welcome to Jaco Steenkamp 3D Printing
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              You think it, I print it! Offering high-quality 3D printing
              services for prototypes, custom designs, and more. Let's bring
              your ideas to life, one layer at a time.
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-8">My Work</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <Carousel className="rounded-xl overflow-hidden shadow-lg">
                <Carousel.Item>
                  <img
                    src={Image1}
                    alt="First slide"
                    className="d-block mx-auto"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <Carousel.Caption className="bg-black bg-opacity-50 rounded-lg p-4">
                    <h3 className="text-white font-semibold">
                      Custom Prototypes
                    </h3>
                    <p className="text-gray-200">
                      Precision printing for innovative designs.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Image2}
                    alt="Second slide"
                    className="d-block mx-auto"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <Carousel.Caption className="bg-black bg-opacity-50 rounded-lg p-4">
                    <h3 className="text-white font-semibold">
                      Functional Parts
                    </h3>
                    <p className="text-gray-200">
                      Durable and reliable 3D printed components.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={Image3}
                    alt="Third slide"
                    className="d-block mx-auto"
                    style={{
                      width: "300px",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                  <Carousel.Caption className="bg-black bg-opacity-50 rounded-lg p-4">
                    <h3 className="text-white font-semibold">
                      Artistic Creations
                    </h3>
                    <p className="text-gray-200">
                      Bringing imagination to tangible form.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* REQUEST A QUOTE CTA */}
      <section className="home-quote-section">
        <div className="home-quote-container">
          <h2 className="home-quote-title">
            Ready to bring your idea to life?
          </h2>

          <p className="home-quote-text">
            Request a custom quote for your 3D printed part, prototype, or
            design.
          </p>

          <Link to="/quote" className="home-quote-button">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
