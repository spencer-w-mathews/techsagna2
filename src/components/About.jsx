// About.js
import React from "react";
import "./About.css"; // For styling the about page
import ScrollToFade from "./ScrollToFade";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <ScrollToFade>
            <h1>About Us</h1>
            <p>Empowering Businesses Through Managed IT Services</p>
          </ScrollToFade>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="values">
        <h2>Our Values</h2>
        <div className="value-cards">
          <div className="value-card">
            <ScrollToFade>
              <h3>Customer Focus</h3>
              <p>
                We prioritize our clients' needs and strive to exceed their
                expectations.
              </p>
            </ScrollToFade>
          </div>
          <div className="value-card">
            <ScrollToFade>
              <h3>Innovation</h3>
              <p>
                We embrace technology and innovation to deliver cutting-edge
                solutions.
              </p>
            </ScrollToFade>
          </div>
          <div className="value-card">
            <ScrollToFade>
              <h3>Integrity</h3>
              <p>
                We conduct our business with honesty and transparency, building
                trust with our clients.
              </p>
            </ScrollToFade>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At TechSagna, our mission is to provide exceptional IT services that
          help businesses thrive in a digital world. We believe in leveraging
          technology to enhance productivity and streamline operations.
        </p>
      </section>

      {/* Our Team Section */}
      <section className="team">
        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team of IT professionals brings a wealth of experience
          and expertise, ready to tackle any challenge. We work collaboratively
          to ensure that your technology serves your business goals effectively.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Join Us on Our Journey</h2>
        <p>
          Partner with TechSagna for your IT needs. Together, we can achieve
          great things.
        </p>
        <a href="#/contact" className="cta-button">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
