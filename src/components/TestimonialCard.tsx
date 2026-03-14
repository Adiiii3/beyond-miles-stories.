import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  location: string;
  rating: number;
  image_url?: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-white p-8 rounded-3xl shadow border border-[#FFCE99]/30"
    >
      <div className="flex gap-1 mb-7">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="text-[#FF9644] fill-[#FF9644]" size={18} />
        ))}
      </div>
      
      <blockquote className="text-[#562F00] text-[15px] leading-relaxed mb-8">
        “{testimonial.quote}”
      </blockquote>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#FFCE99]">
          {testimonial.image_url ? (
            <img src={testimonial.image_url} alt={testimonial.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#FF9644] to-[#562F00] flex items-center justify-center text-white text-xl font-serif">
              {testimonial.name[0]}
            </div>
          )}
        </div>
        <div>
          <div className="font-medium text-[#562F00]">{testimonial.name}</div>
          <div className="text-xs text-[#562F00]/60 tracking-wider">{testimonial.location}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
