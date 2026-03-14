import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-[#FFFDF1]">
      <Nav />

      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#FF9644] text-xs tracking-[4px]">EST. 2017</div>
          <h1 className="font-serif text-6xl md:text-[86px] leading-none tracking-[-2px] mt-6 mb-12">We tell stories<br />with every step</h1>
          
          <div className="max-w-[560px] mx-auto text-lg text-[#562F00]/80 leading-relaxed">
            Beyond Miles Stories was born from a deep love for the Himalayas and a desire to share its wonders in the most intimate way possible.
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#FFCE99]/60 to-transparent my-5" />

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <div className="prose prose-lg max-w-none text-[#562F00]/80">
          <p className="text-2xl leading-snug tracking-[-0.2px]">
            Our founders spent years trekking these mountains, meeting incredible people along the way. From shepherds in Spiti to monks in Ladakh, we realized that the true magic of these places lies in the stories they hold.
          </p>
          
          <div className="my-16 grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-serif text-5xl mb-8 tracking-tight">Our Promise</h3>
              <ul className="space-y-8 text-lg">
                <li className="flex gap-6">
                  <span className="font-serif text-6xl text-[#FF9644] font-light">01</span>
                  <div>Deeply respectful travel that benefits local communities</div>
                </li>
                <li className="flex gap-6">
                  <span className="font-serif text-6xl text-[#FF9644] font-light">02</span>
                  <div>Small groups ensure every traveler receives personal attention</div>
                </li>
                <li className="flex gap-6">
                  <span className="font-serif text-6xl text-[#FF9644] font-light">03</span>
                  <div>Flexible itineraries that can adapt to the mountains</div>
                </li>
              </ul>
            </div>
            
            <div className="pt-16">
              <img src="/images/kedarnath.jpg" alt="Kedarnath" className="rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase text-xs tracking-[3px] text-center text-[#FF9644]">OUR VALUES</div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              ["SLOW TRAVEL", "We believe in taking the time to truly absorb the places we visit"],
              ["CULTURAL RESPECT", "Every trip is designed to honor the traditions of the communities we visit"],
              ["SUSTAINABILITY", "Our carbon footprint is offset and we support local conservation efforts"]
            ].map(([title, desc], i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="border-l-2 pl-9 border-[#FF9644]"
              >
                <div className="font-serif text-[42px] tracking-tight leading-none mb-6">{title}</div>
                <p className="text-[#562F00]/70">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
