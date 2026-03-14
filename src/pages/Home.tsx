import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import FAQ from '../components/FAQ';
import { ArrowRight, Award, Users, Shield } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  description: string;
  image_url: string;
  location: string;
  duration: string;
}

const Home = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/destinations');
        const data = await res.json();
        setDestinations(data);
      } catch (error) {
        console.error('Failed to fetch destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleInquire = (destName: string) => {
    const message = `Hi! I am interested in the ${destName} journey.`;
    window.open(`https://wa.me/7776083983?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFFDF1] text-[#562F00]">
      <Nav />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block px-5 py-1.5 bg-white/10 backdrop-blur text-xs tracking-[3px] text-white/90 rounded-full mb-6">HIMALAYAN JOURNEYS</div>
            
            <h1 className="text-6xl sm:text-7xl md:text-[92px] lg:text-[120px] leading-[0.92] font-serif text-white tracking-[-3px] md:tracking-[-4.8px] mb-6">
              YOUR JOURNEY,<br />OUR PASSION
            </h1>
            
            <p className="max-w-md mx-auto text-xl text-white/90 mb-12">
              Curating unforgettable experiences across the Himalayas
            </p>
          </motion.div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('destinations')}
              className="group px-10 py-4 border border-white/60 hover:bg-white text-white hover:text-[#562F00] rounded-2xl text-sm flex items-center justify-center gap-3 transition"
            >
              EXPLORE DESTINATIONS
              <ArrowRight className="group-hover:translate-x-0.5 transition" />
            </button>
            
            <button 
              onClick={() => window.open('https://wa.me/7776083983?text=Hello%20I%27m%20ready%20to%20start%20my%20Himalayan%20journey!', '_blank')}
              className="px-10 py-4 bg-white text-[#562F00] hover:bg-[#FF9644] hover:text-white rounded-2xl text-sm flex items-center justify-center gap-3 font-medium transition"
            >
              BEGIN YOUR STORY
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-xs tracking-widest">
          SCROLL TO DISCOVER
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2.2, repeat: Infinity }} className="w-px h-10 bg-white/60" />
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="text-[#FF9644] tracking-[3px] text-sm mb-3">THE BEYOND MILES DIFFERENCE</div>
          <h2 className="text-5xl md:text-6xl font-serif tracking-tight">Why travelers return to us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Users className="w-9 h-9" />, title: "Intimate Groups", desc: "Never more than 12 travelers. Deep connections with both land and fellow explorers." },
            { icon: <Award className="w-9 h-9" />, title: "Local Expertise", desc: "Our guides are born and raised in the mountains. They know every trail, every hidden valley." },
            { icon: <Shield className="w-9 h-9" />, title: "Thoughtful Details", desc: "From the finest teas to handpicked accommodations, every aspect is considered with care." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-12 rounded-3xl border border-[#FFCE99]/30"
            >
              <div className="text-[#FF9644] mb-9">{item.icon}</div>
              <h3 className="text-4xl font-serif tracking-tight mb-4">{item.title}</h3>
              <p className="text-lg text-[#562F00]/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="bg-white py-20 border-y border-[#FFCE99]/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-14">
            <div>
              <div className="uppercase text-xs tracking-[3px] text-[#FF9644]">SIGNATURE JOURNEYS</div>
              <h2 className="font-serif text-6xl md:text-7xl tracking-tight">Our Destinations</h2>
            </div>
            <Link to="/destinations" className="hidden md:flex items-center gap-3 group text-sm font-medium">
              VIEW ALL 
              <div className="w-9 h-px bg-current group-hover:w-12 transition-all" />
            </Link>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">Loading destinations...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.slice(0, 6).map((dest) => (
                <DestinationCard 
                  key={dest.id} 
                  destination={dest} 
                  onInquire={handleInquire} 
                />
              ))}
            </div>
          )}
          
          <div className="text-center mt-16">
            <Link 
              to="/destinations" 
              className="inline-flex items-center gap-4 group text-xl tracking-tight hover:text-[#FF9644]"
            >
              Discover all our journeys 
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="bg-[#FFFDF1] py-24 border-t border-[#FFCE99]/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#FF9644] text-sm tracking-widest mb-4">QUESTIONS &amp; ANSWERS</div>
            <h2 className="font-serif text-5xl md:text-6xl tracking-tight">Frequently Asked</h2>
          </div>
          
          <FAQ />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
