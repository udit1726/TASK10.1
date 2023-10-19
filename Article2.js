// Article2.js
import React from 'react';
import './App.css';
import leaveImage from './tut3.png';

function Article2() {
  return (
    <div className="article">
      <img src={leaveImage} alt="Article 1" className="article-image" />
      <h2 className="article-title">GREEN</h2>
      <p className="article-description">Symbolizes peace and tranquility, as well as hope, harmony, and optimism.</p>
      <div className="article-footer">
        <span className="article-rating">⭐️ 4.2</span>
        <span className="article-author">Author: Udit</span>
      </div>
    </div>
  );
}

export default Article2;