import React, { useRef } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("soham_email", "template_zab21gs", form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact">
        <h2 id="contact-title">Get in touch</h2>
        <label htmlFor="name" className="contact-field">
          Name
          <input
            name="name"
            type="text"
            className="contact-input"
            min={2}
            max={50}
            required
          />
        </label>
        <label htmlFor="email" className="contact-field">
          Email
          <input
            name="email"
            type="email"
            className="contact-input"
            min={5}
            max={60}
            required
          />
        </label>
        <label htmlFor="message" className="contact-field">
          Message
          <textarea
            name="message"
            rows="5"
            className="contact-input contact-textarea"
            min={10}
            required
          />
        </label>
        <button type="submit" id="contact-button">
          Send Message
        </button>
      </form>
      <div className="contact-footer">
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/sohamkumbhar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sohamkumbhar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <p className="contact-footer-text">
          © 2025 Soham Kumbhar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
