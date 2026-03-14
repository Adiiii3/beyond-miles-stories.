import { Instagram, Facebook, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#562F00] text-[#FFFDF1] py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Beyond Miles Stories" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-[#FFFDF1]/80 max-w-xs">
            Curating unforgettable journeys through the majestic Himalayas.
          </p>
        </div>

        <div>
          <div className="uppercase tracking-[2px] text-xs mb-6 text-[#FFCE99]">EXPLORE</div>
          <div className="flex flex-col gap-3 text-[#FFFDF1]/80">
            <a href="/destinations" className="hover:text-white transition">Destinations</a>
            <a href="/about" className="hover:text-white transition">Our Story</a>
            <a href="/contact" className="hover:text-white transition">Get in Touch</a>
          </div>
        </div>

        <div>
          <div className="uppercase tracking-[2px] text-xs mb-6 text-[#FFCE99]">CONNECT</div>
          <div className="flex gap-6 mb-8">
            <a href="https://www.instagram.com/beyondmiles.stories?igsh=bDJrM3VvYjVyc2Fm" target="_blank" className="hover:text-[#FF9644] transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-[#FF9644] transition">
              <Facebook size={22} />
            </a>
          </div>
          <div className="flex items-start gap-3 text-sm text-[#FFFDF1]/70">
            <MapPin size={18} className="mt-0.5 flex-shrink-0" />
            <div>
              Manali, Himachal Pradesh<br />
              India
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-[#FFFDF1]/60">
        © {currentYear} Beyond Miles Stories. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
