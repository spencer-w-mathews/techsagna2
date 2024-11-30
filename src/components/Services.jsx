// Services.js
import React from 'react';
import './Services.css'; // Importing CSS for styling the services page
import ScrollToFade from './ScrollToFade';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <ScrollToFade>
          <h1>Our Services</h1>
          <p>Explore how TechSagna can help optimize your business with cutting-edge technology solutions.</p>
         </ScrollToFade>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Expertise</h2>
        <p>At TechSagna, we provide a wide range of IT services tailored to help your business grow. Below are some of the services we offer:</p>
      </section>

            {/* Services Section */}
      <section className="services">
        <div className="service-card-homes">
          {/* Microsoft 365 Projects */}

          <div className="service-card-home">
          <ScrollToFade>
            <h3>Microsoft 365 Projects</h3>
            <p>Full-service project work for every aspect of Microsoft 365, including Entra/Azure, SharePoint, Purview, application implementation, and more.</p>
          </ScrollToFade>
          </div>
          {/* Cyber Insurance Hardening */}
          <div className="service-card-home">
          <ScrollToFade>
            <h3>Cyber Insurance Hardening</h3>
            <p>We help you prepare to obtain cyber insurance and assist with cleaning up security vulnerabilities to lower your premiums.</p>
          </ScrollToFade>
          </div>
          {/* Device Management */}
          <div className="service-card-home">
          <ScrollToFade>
            <h3>Device Management</h3>
            <p>We work with all major MDM, UEM, and DDM platforms to build, implement, migrate, and manage device management solutions for your organization.</p>
          </ScrollToFade>
          </div>
        </div>
      </section>

      {/* CTAr Section */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to see how we can transform your IT infrastructure with our expert services.</p>
        <a href="#/contact" className="cta-button">Reach Out Now</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 TechSagna | All Rights Reserved</p>
        <div className="social-media">
          <a href="https://twitter.com/techsagna">Twitter</a>
          <a href="https://linkedin.com/company/techsagna">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Services;
