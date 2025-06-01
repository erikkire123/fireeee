import React from 'react';
import { Package } from 'lucide-react';

const NavBar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/[0.02] border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-cyan-400" />
            <span className="ml-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              TC2 Funds
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-cyan-400 transition-colors duration-200">
              Home
            </button>
            <button onClick={() => scrollToSection('packages')} className="text-white/80 hover:text-cyan-400 transition-colors duration-200">
              Packages
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white/80 hover:text-cyan-400 transition-colors duration-200">
              How It Works
            </button>
            <button onClick={() => scrollToSection('support')} className="text-white/80 hover:text-cyan-400 transition-colors duration-200">
              Support
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;