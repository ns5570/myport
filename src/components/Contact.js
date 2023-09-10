import React, { useState } from 'react';
import './Contact.css'; // Import a CSS file for your Contact component styles

function SuccessMessage({ onClose }) {
  return (
    <div className="success-popup">
      <p>Your message has been sent successfully!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
    setShowSuccessMessage(true);
  };

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-description-box"><div/>
          <p >
            Feel free to get in touch with me. You can reach out via email, phone, or social media. I'm always open to new opportunities, collaborations, or just a friendly chat!
          </p>
        </div>
      </div>
      <div className="contact-form">
        <h3 className="form-title">Send me a message:</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      {showSuccessMessage && (
        <SuccessMessage onClose={handleCloseSuccessMessage} />
      )}
    </section>
  );
}

export default Contact;
