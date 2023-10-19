import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [email, setEmail] = useState('');

  const handlePostButtonClick = () => {
  
    fetch('/post-content', {
      method: 'POST',
    })
      .then((response) => {
        if (response.ok) {
          alert('Content posted successfully!');
        } else {
          alert('Failed to post content. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to post content. Please try again.');
      });
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">DEV@Deakin</div>
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="navbar-right">
        <button className="post-button" onClick={handlePostButtonClick}>
          POST
        </button>
        <button className="login-button">LOGIN</button>
      </div>
    </nav>
  );
}

export default Navbar;
