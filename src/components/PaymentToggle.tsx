import React from 'react';

interface PaymentToggleProps {
  selectedPaymentMethod: 'robux' | 'euro';
  setSelectedPaymentMethod: (method: 'robux' | 'euro') => void;
}

const PaymentToggle: React.FC<PaymentToggleProps> = ({ 
  selectedPaymentMethod, 
  setSelectedPaymentMethod 
}) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="bg-white/10 backdrop-blur-lg p-1 rounded-lg inline-flex">
        <button
          onClick={() => setSelectedPaymentMethod('robux')}
          className={`px-6 py-2 rounded-md transition-all duration-200 ${
            selectedPaymentMethod === 'robux'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Robux
        </button>
        <button
          onClick={() => setSelectedPaymentMethod('euro')}
          className={`px-6 py-2 rounded-md transition-all duration-200 ${
            selectedPaymentMethod === 'euro'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Euro
        </button>
      </div>
    </div>
  );
};

export default PaymentToggle;