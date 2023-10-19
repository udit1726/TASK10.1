import React from 'react';
import './Email.css';
import { useState } from 'react';

function EmailSub() {
  const [email, setEmail] = useState('');

  const handlePostButtonClick= async () => {
    try {
      const response = await fetch('http://localhost:5000/handlePostButtonClick', { 
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
    <div className="email-subscription">
      <div className="email-subscription-text">
        SIGN UP FOR OUR DAILY INSIDER
      </div>
      <div className="email-subscription-input">
        <input type="email" placeholder="Enter your email"
        value = {email}
        onChange={(e) => (setEmail(e.target.value))} />
        
        <button onClick={handlePostButtonClick}>SUBSCRIBE</button>
      </div>
    </div>
  );
}

export default EmailSub;
