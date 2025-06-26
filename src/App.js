import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Services from './components/Services';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Pillars />
      <About />
      <Services />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
