import React from 'react';
import { Package } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-indigo-950 to-indigo-900/95 border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Package className="h-6 w-6 text-indigo-400" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                TC2 Funds
              </span>
            </div>
            <p className="text-white/60 text-sm mb-6">
              Premium funds for Typical Colors 2 at the best prices. Fast delivery and secure payments.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Home</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Packages</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">How It Works</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors duration-200 text-sm">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/60 text-sm">Email: support@tc2funds.com</li>
              <li className="text-white/60 text-sm">Discord: tc2funds</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} TC2 Funds. All rights reserved. Not affiliated with Typical Colors 2 or Roblox.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;