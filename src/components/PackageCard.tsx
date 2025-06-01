import React from 'react';
import type { FundPackage } from '../data/fundPackages';
import toast from 'react-hot-toast';

interface PackageCardProps {
  pkg: FundPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const savings = ((pkg.originalPrice - pkg.robuxPrice) / pkg.originalPrice * 100).toFixed(0);
  
  const handlePurchase = () => {
    toast.custom((t) => (
      <div className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full toast-notification rounded-2xl pointer-events-auto flex ring-1 ring-white/10`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex-1">
              <p className="text-lg font-semibold text-white">
                Join our Discord Server
              </p>
              <p className="mt-1 text-white/70">
                To purchase TC2 funds, join our Discord server at discord.gg/Z79xQzytqq and DM us!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-white/10">
          <button
            onClick={() => {
              window.open('https://discord.gg/Z79xQzytqq', '_blank');
              toast.dismiss(t.id);
            }}
            className="w-full border border-transparent rounded-r-2xl p-4 flex items-center justify-center text-sm font-medium text-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          >
            Join Discord
          </button>
        </div>
      </div>
    ), {
      duration: 5000,
      position: 'top-center',
    });
  };
  
  return (
    <div className="relative group transition-all duration-500">
      {pkg.popular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
            POPULAR
          </span>
        </div>
      )}
      
      <div className={`relative overflow-hidden rounded-2xl backdrop-blur-xl transition-all duration-300 
                      ${pkg.popular 
                        ? 'bg-gradient-to-b from-cyan-900/30 to-blue-900/30 border border-cyan-500/30' 
                        : 'bg-white/[0.02] border border-white/10 hover:bg-white/[0.04]'} 
                      group-hover:shadow-xl group-hover:shadow-cyan-500/10 transform group-hover:scale-105`}>
        <div className="absolute -right-20 -top-20 h-40 w-40 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>
        
        <div className="px-6 py-8">
          <div className="text-center mb-4">
            <span className="text-4xl font-bold text-white">
              {pkg.funds.toLocaleString()}
            </span>
            <p className="text-white/70 text-sm">Funds</p>
          </div>
          
          <div className="flex justify-center items-center mb-6">
            <span className="text-white/50 text-sm line-through mr-2">
              {pkg.originalPrice} Robux
            </span>
            <span className="bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
              Save {savings}%
            </span>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              {pkg.robuxPrice} Robux (€{pkg.euroPrice.toFixed(2)})
            </p>
          </div>
          
          <button 
            onClick={handlePurchase}
            className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${pkg.popular 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg shadow-cyan-500/20' 
              : 'bg-white/[0.02] hover:bg-white/[0.05] text-white border border-white/10'}`}
          >
            Purchase Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;