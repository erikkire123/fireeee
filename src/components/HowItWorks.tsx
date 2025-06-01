import React from 'react';
import { CreditCard, Package, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Package className="w-12 h-12 text-indigo-400" />,
      title: "Choose a Package",
      description: "Select from our range of fund packages designed to suit different player needs and budgets."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-indigo-400" />,
      title: "Make Payment",
      description: "Pay securely with Robux or Euro through our protected payment system."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-indigo-400" />,
      title: "Receive Funds",
      description: "Your TC2 funds will be delivered to your account instantly after payment confirmation."
    }
  ];

  return (
    <div className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 to-purple-900/80 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Works</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Getting funds for Typical Colors 2 has never been easier. Follow these simple steps:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/10">
              <div className="bg-indigo-500/10 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-4">{step.title}</h3>
              <p className="text-white/70 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;