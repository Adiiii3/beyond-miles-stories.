import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import { motion } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  description: string;
  image_url: string;
  location: string;
  duration: string;
}

const Destinations = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/destinations')
      .then(res => res.json())
      .then(data => {
        setDestinations(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredDestinations = destinations.filter(dest =>
    dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dest.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInquire = (name: string) => {
    const msg = `I would like more information about the ${name} expedition.`;
    window.open(`https://wa.me/7776083983?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-[#FFFDF1] min-h-screen">
      <Nav />
      
      <div className="pt-20">
        <div className="h-[380px] bg-[#562F00] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#fff2_0.8px,transparent_1px)] bg-[length:5px_5px] opacity-30" />
          <div className="relative z-10 text-center px-6">
            <h1 className="text-white font-serif text-6xl md:text-7xl tracking-tight">Our Destinations</h1>
            <p className="max-w-md mx-auto mt-6 text-[#FFFDF1]/70">Handpicked journeys into the most breathtaking landscapes of India</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 -mt-9 relative z-20">
          <div className="bg-white rounded-3xl shadow-xl p-6 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <input
              type="text"
              placeholder="Search destinations or regions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 bg-transparent border border-[#FFCE99]/60 focus:border-[#FF9644] rounded-2xl px-7 py-4 outline-none text-lg placeholder:text-[#562F00]/40"
            />
            <div className="text-sm text-[#562F00]/50 whitespace-nowrap">
              {filteredDestinations.length} Journeys
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-28">
          {loading ? (
            <div className="text-center py-20">Loading the Himalayas...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.03, 0.6) }}
                >
                  <DestinationCard destination={destination} onInquire={handleInquire} />
                </motion.div>
              ))}
            </div>
          )}

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20 text-xl">No matches found. Please try a different search term.</div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Destinations;
