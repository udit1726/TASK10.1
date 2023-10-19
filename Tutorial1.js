import React from 'react';
import './App.css';
import leaveImage from './leave.png';

function Tutorial1() {
  return (
    <div className="Tutorial">
      <img src={leaveImage} alt="Tutorial 1" className="Tutorial-image" />
      <h2 className="Tutorial-title">TUTORIAL RED</h2>
      <p className="Tutorial-description">The only colour considered.</p>
      <div className="Tutorial-footer">
        <span className="Tutorial-rating">⭐️ 4.7</span>
        <span className="Tutorial-author">Username: Udit</span>
      </div>
    </div>
  );
}

export default Tutorial1;
