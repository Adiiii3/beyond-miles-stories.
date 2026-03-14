import { motion } from 'framer-motion';
import { MapPin, Clock, Users } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  description: string;
  image_url: string;
  location: string;
  duration: string;
  highlights?: any;
}

interface Props {
  destination: Destination;
  onInquire: (name: string) => void;
}

const DestinationCard = ({ destination, onInquire }: Props) => {
  const handleInquire = () => {
    onInquire(destination.name);
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-[#FFCE99]/40 flex flex-col h-full"
    >
      <div className="relative h-72 overflow-hidden">
        <img 
          src={destination.image_url} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-6 left-6 text-white">
          <div className="flex items-center gap-2 text-sm mb-1 opacity-90">
            <MapPin size={15} /> {destination.location}
          </div>
          <div className="text-3xl font-serif tracking-tight">{destination.name}</div>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-5 text-sm mb-6 text-[#562F00]/70">
          <div className="flex items-center gap-1.5">
            <Clock size={15} /> {destination.duration}
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={15} /> Small groups
          </div>
        </div>
        
        <p className="text-[#562F00]/80 leading-relaxed mb-8 flex-1 line-clamp-4">
          {destination.description}
        </p>
        
        <div className="flex gap-3">
          <button 
            onClick={handleInquire}
            className="flex-1 py-4 bg-[#FF9644] hover:bg-[#e68a3c] text-white rounded-2xl text-sm font-medium transition active:scale-[0.985]"
          >
            Inquire Now
          </button>
          <button 
            className="flex-1 py-4 border border-[#FF9644] text-[#562F00] hover:bg-[#FFFDF1] rounded-2xl text-sm font-medium transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
