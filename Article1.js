// Article1.js
import React from 'react';
import './App.css';
import leaveImage from './tut2.png';

function Article1() {
  return (
    <div className="article">
      <img src={leaveImage} alt="Article 1" className="article-image" />
      <h2 className="article-title">ORANGE</h2>
      <p className="article-description">Orange combines the passion of the former with the positivity of the latter.</p>
      <div className="article-footer">
        <span className="article-rating">⭐️ 4.5</span>
        <span className="article-author">Author: Udit</span>
      </div>
    </div>
  );
}

export default Article1;