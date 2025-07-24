import React from 'react';
import '../pages/Contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Reach out with your questions or feedback!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
