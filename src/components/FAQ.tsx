import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "How soon will I receive my funds after purchase?",
      answer: "Funds are typically delivered instantly after payment confirmation. In rare cases, it might take up to 5 minutes."
    },
    {
      question: "Is my payment information secure?",
      answer: "Yes, all payments are processed through secure payment gateways. We don't store your payment information on our servers."
    },
    {
      question: "What if I don't receive my funds?",
      answer: "In the unlikely event that you don't receive your funds, please contact our 24/7 support team and we'll resolve the issue immediately."
    },
    {
      question: "Can I get a refund?",
      answer: "Due to the digital nature of our products, we generally don't offer refunds once the funds have been delivered. Please refer to our refund policy for more details."
    },
    {
      question: "Do you offer discounts for bulk purchases?",
      answer: "Yes, for very large orders please contact our support team to discuss custom pricing options."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-purple-900/90 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">Questions</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our services and purchasing process.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl mb-4 overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-white">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-400" />
                )}
              </button>
              
              <div 
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-white/70">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;