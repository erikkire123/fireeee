import React from 'react';
import { fundPackages } from '../data/fundPackages';
import PackageCard from './PackageCard';
import { Toaster } from 'react-hot-toast';

const PackagesSection: React.FC = () => {
  return (
    <div className="py-16 relative overflow-hidden" id="packages">
      <Toaster />
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-purple-900/90 z-0"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Package</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Select the perfect package for your needs. All packages come with instant delivery and 24/7 support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {fundPackages.map((pkg) => (
            <PackageCard 
              key={pkg.id} 
              pkg={pkg}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackagesSection