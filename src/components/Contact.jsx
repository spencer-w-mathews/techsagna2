// Contact.js
import React, { useState } from "react";
import "./Contact.css"; // For styling the contact page
import ScrollToFade from "./ScrollToFade";

const Contact = () => {
  // State to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <div className="hero-content">
          <ScrollToFade>
            <h1>Contact TechSagna</h1>
            <p>
              Let us help you drive your business forward with innovative IT
              solutions.
            </p>
          </ScrollToFade>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <p>
          Fill out the form below, and one of our specialists will reach out to
          you shortly.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>

        {isSubmitted && (
          <div className="submission-message">
            <p>Thank you for reaching out! We will get back to you shortly.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
