// Article3.js
import React from 'react';
import './App.css';
import leaveImage from './tut.png';

function Article3() {
  return (
    <div className="article">
      <img src={leaveImage} alt="Article 1" className="article-image" />
      <h2 className="article-title">BLUE</h2>
      <p className="article-description">Symbolizes serenity, stability, inspiration, or wisdom.</p>
      <div className="article-footer">
        <span className="article-rating">⭐️ 4.1</span>
        <span className="article-author">Author: Udit</span>
      </div>
    </div>
  );
}

export default Article3;