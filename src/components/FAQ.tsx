import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "What is the best time to visit Ladakh?",
    a: "The ideal time to visit Ladakh is from June to September when the roads are open and the weather is pleasant. Winters offer a magical experience but require special preparation."
  },
  {
    q: "Are your trips suitable for beginners?",
    a: "Yes! We offer carefully curated journeys for all experience levels. Our expert team ensures safety and comfort throughout each expedition."
  },
  {
    q: "Do you provide private customized tours?",
    a: "Absolutely. Many of our guests prefer private journeys. Contact us and we will design a perfect itinerary tailored to your preferences and dates."
  },
  {
    q: "What kind of accommodations do you use?",
    a: "We partner with the best boutique hotels, heritage properties, and comfortable camps that reflect the local character and offer warm Himalayan hospitality."
  },
  {
    q: "How do I prepare for high altitude travel?",
    a: "Our team provides comprehensive pre-trip guidance including altitude acclimatization tips, packing lists, and fitness recommendations."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-[#FFCE99]/40 last:border-none">
          <button
            onClick={() => toggle(index)}
            className="w-full py-7 flex items-center justify-between text-left group"
          >
            <span className="text-xl text-[#562F00] pr-8 font-light tracking-tight">{faq.q}</span>
            <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              <ChevronDown className="text-[#FF9644]" />
            </div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pb-8 text-[#562F00]/80 leading-relaxed pr-12">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
