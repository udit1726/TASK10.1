import React from 'react';
import './App.css';
import leaveImage from './leave3.png';

function Tutorial2() {
  return (
    <div className="Tutorial">
      <img src={leaveImage} alt="Tutorial 1" className="Tutorial-image" />
      <h2 className="Tutorial-title">TUTORIAL BLUE</h2>
      <p className="Tutorial-description">This Combo will look amazing.</p>
      <div className="Tutorial-footer">
        <span className="Tutorial-rating">⭐️ 4.4</span>
        <span className="Tutorial-author">Username: Udit</span>
      </div>
    </div>
  );
}

export default Tutorial2;
