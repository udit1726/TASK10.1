import React from 'react';
import './App.css';
import Navbar from './navbar';
import Space from './images/deakin.png';
import Article1 from './Article1';
import Article2 from './Article2';
import Article3 from './Article3';
import Tutorial1 from './Tutorial1';
import Tutorial2 from './Tutorial2';
import Tutorial3 from './Tutorial3';
import EmailSub from './Email';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={Space} alt="Deakin" />
      <h1 className="featured-heading">FEATURED ARTICLES</h1>
      <div className="articles-container">
        <Article1 />
        <Article3 />
        <Article2 />
      </div>
      <h2 className="options">SEE ALL OPTIONS</h2>
      <h1 className="featured-heading">FEATURED TUTORIALS</h1>
        <Tutorial1 />
        <Tutorial2 />
        <Tutorial3 />
        <h2 className="options">SEE ALL TUTORIALS</h2>
        <EmailSub/>
        <Footer />
      </div>
  );
}

export default App;
