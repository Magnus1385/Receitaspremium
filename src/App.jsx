import React from 'react';
import Hero from './components/Hero';
import Learning from './components/Learning';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="app">
      <Hero />
      <Learning />
      <Testimonials />
      <Benefits />
      <Offer />
      <FAQ />
    </div>
  );
}

export default App;
