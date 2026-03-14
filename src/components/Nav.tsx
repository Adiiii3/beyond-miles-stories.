import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/destinations', label: 'Destinations' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsApp = () => {
    window.open('https://wa.me/7776083983?text=Hi%20Beyond%20Miles%20Stories%2C%20I%27d%20like%20to%20inquire%20about%20a%20journey!', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF1]/95 backdrop-blur-md border-b border-[#FFCE99]/30">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Beyond Miles Stories" className="h-11 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-[#FF9644] ${isActive(link.path) ? 'text-[#FF9644]' : 'text-[#562F00]'}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleWhatsApp}
            className="px-6 py-2.5 bg-[#FF9644] hover:bg-[#FFCE99] text-white rounded-full flex items-center gap-2 text-sm font-medium transition-all active:scale-[0.985]"
          >
            <span>Inquire on WhatsApp</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#562F00]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#FFFDF1] border-t border-[#FFCE99]/30"
        >
          <div className="px-6 py-8 flex flex-col gap-6 text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`py-1 ${isActive(link.path) ? 'text-[#FF9644]' : 'text-[#562F00]'}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                handleWhatsApp();
                setIsOpen(false);
              }}
              className="mt-4 w-full py-4 bg-[#FF9644] text-white rounded-2xl text-base"
            >
              Inquire via WhatsApp
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
