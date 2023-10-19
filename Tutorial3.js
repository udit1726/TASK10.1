import React from 'react';
import './App.css';
import leaveImage from './leave2.png';

function Tutorial3() {
  return (
    <div className="Tutorial">
      <img src={leaveImage} alt="Tutorial 1" className="Tutorial-image" />
      <h2 className="Tutorial-title">TUTORIAL GREEN</h2>
      <p className="Tutorial-description">Not Green. Evergreen !!</p>
      <div className="Tutorial-footer">
        <span className="Tutorial-rating">⭐️ 3.9</span>
        <span className="Tutorial-author">Username: Udit</span>
      </div>
    </div>
  );
}

export default Tutorial3;
