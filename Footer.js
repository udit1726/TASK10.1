import React, { useState } from 'react';
import './Footer.css';
import facebook from './fb.png';
import instagram from './ig.png';
import whatsapp from './wa.png';

function Footer() {
  const [email, setEmail] = useState('');

  const subscribe = async () => {
    try {
      const response = await fetch('http://localhost:5500/subscribe', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      if (response.status === 200) {
        alert('Email sent successfully');
      } else {
        alert('Error sending email');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="footer">
      <div className="footer-section">
        <h3>EXPLORE</h3>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>SUPPORT</h3>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>STAY CONNECTED</h3>
        <div className="social-icons">
          <img src={facebook} alt="Facebook" />
          <img src={instagram}alt="Instagram" />
          <img src={whatsapp} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-subscribe">
       
      </div>
      <div className="footer-bottom">
        DEV@Deakin 2022
        <p>Private Policy | Terms | Code of Conduct</p>
      </div>
    </div>
  );
}

export default Footer;
