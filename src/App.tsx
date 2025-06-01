import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import PackagesSection from './components/PackagesSection';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-indigo-950 text-white">
      <NavBar />
      <Hero />
      <PackagesSection />
      <HowItWorks />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;