import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative mt-16 py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-purple-900/80 z-0"></div>
      
      {/* Animated particles/blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Boost Your Gameplay with <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Premium Funds</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get Typical Colors 2 funds at unbeatable prices. Fast delivery, secure payments, and amazing customer support.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-500/30 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;