import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ConnectUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/connact', formData);
      console.log('Response:', response.data);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="connect-us container" id="connect-us">
      <div className="heading">
        <h2>Connect With Us</h2>
        <p>Feel free to reach out for any inquiries, feedback, or support!</p>
      </div>
      
      <div className="connect-content">
        <form className="connect-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send Message</button>
        </form>
        
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: contact@yourwebsite.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Your Street, City, Country</p>
        </div>
      </div>
    </section>
  );
};

export default ConnectUs;
