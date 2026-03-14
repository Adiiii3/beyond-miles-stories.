import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill out name, email and message');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', destination: '', message: '' });
        
        // Auto open WhatsApp after a short delay
        setTimeout(() => {
          window.open('https://wa.me/7776083983?text=Thank%20you%20for%20submitting%20my%20inquiry.%20I%27m%20looking%20forward%20to%20hearing%20from%20you!', '_blank');
        }, 1450);
      } else {
        setStatus('error');
        setErrorMsg(result.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Unable to submit. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[#FFFDF1] min-h-screen">
      <Nav />
      
      <div className="pt-24 pb-16 max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#FF9644] uppercase text-xs tracking-[4px]">LET'S BEGIN</div>
          <h1 className="font-serif text-6xl md:text-7xl tracking-tighter mt-4">Tell us about your dream journey</h1>
          <p className="mt-6 text-xl text-[#562F00]/70">Our team typically replies within 12 hours</p>
        </div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2.5 tracking-widest text-[#562F00]/70">YOUR NAME</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-[#562F00]/30 focus:border-[#FF9644] bg-transparent py-4 text-2xl placeholder:text-[#562F00]/30 outline-none" 
                placeholder="Priya Sharma" 
              />
            </div>
            <div>
              <label className="block text-sm mb-2.5 tracking-widest text-[#562F00]/70">EMAIL ADDRESS</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-[#562F00]/30 focus:border-[#FF9644] bg-transparent py-4 text-2xl placeholder:text-[#562F00]/30 outline-none" 
                placeholder="hello@email.com" 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2.5 tracking-widest text-[#562F00]/70">PHONE (OPTIONAL)</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-[#562F00]/30 focus:border-[#FF9644] bg-transparent py-4 text-2xl placeholder:text-[#562F00]/30 outline-none" 
                placeholder="+91 98765 43210" 
              />
            </div>
            <div>
              <label className="block text-sm mb-2.5 tracking-widest text-[#562F00]/70">INTERESTED IN</label>
              <select 
                name="destination" 
                value={formData.destination}
                onChange={handleChange}
                className="w-full border-b border-[#562F00]/30 focus:border-[#FF9644] bg-transparent py-[21px] text-2xl outline-none text-[#562F00]"
              >
                <option value="">Any journey</option>
                <option value="Manali">Manali Adventures</option>
                <option value="Spiti Valley">Spiti Valley</option>
                <option value="Ladakh">Ladakh Expedition</option>
                <option value="Kashmir">Kashmir Paradise</option>
                <option value="Arunachal">Arunachal Pradesh</option>
                <option value="Kedarnath">Kedarnath Yatra</option>
                <option value="Chardham">Chardham Circuit</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2.5 tracking-widest text-[#562F00]/70">TELL US MORE ABOUT YOUR TRIP</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full border border-[#562F00]/20 focus:border-[#FF9644] bg-white/70 rounded-3xl p-8 resize-y min-h-[180px] text-lg" 
              placeholder="I'm interested in a private 8-day journey to Ladakh in July with my family of four..." 
            />
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="mt-3 w-full py-7 bg-[#FF9644] hover:bg-[#FFCE99] disabled:bg-[#FF9644]/70 text-white text-lg rounded-3xl flex justify-center items-center transition-all active:scale-[0.985]"
          >
            {status === 'loading' ? 'SENDING YOUR INQUIRY...' : 'SEND MY INQUIRY'}
          </button>

          {status === 'success' && (
            <div className="text-center py-4 text-[#FF9644]">Thank you! Your inquiry was received and we have opened WhatsApp for you.</div>
          )}
          {status === 'error' && (
            <div className="text-center py-4 text-red-600">{errorMsg}</div>
          )}
        </motion.form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
