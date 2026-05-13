import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function InquiryForm() {
  // State to track form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const whatsappNumber = "9977110166";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = (e) => {
    // If you want to prevent the default anchor behavior if fields are empty
    if(!formData.name || !formData.phone) {
      alert("Please enter your Name and Phone Number first!");
      e.preventDefault();
      return;
    }

    // Creating the Autogen Message
    const text = `*New Inquiry for Malang Adventures*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*Email:* ${formData.email}%0A` +
                 `*Requirement:* ${formData.message}`;

    const waLink = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(waLink, '_blank');
  };

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white inline-block glass-panel px-10 py-4 shadow-2xl">
            Plan Your Journey
          </h2>
          <p className="text-white/60 mt-4 uppercase tracking-[0.3em] text-[10px] font-black">
            Submit your details to chat with us on WhatsApp
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-dark p-8 md:p-12 rounded-[2.5rem]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* NAME */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-2">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input 
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ali Khan" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                />
              </div>
            </div>

            {/* PHONE */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-2">Phone Number</label>
              <div className="relative">
                <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input 
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 99771 10166" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-2">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                <input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ali@example.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-blue-400 ml-2">Your Requirements</label>
              <div className="relative">
                <MessageSquare size={18} className="absolute left-4 top-6 text-white/40" />
                <textarea 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your group size and travel dates..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-blue-500/50 transition-all font-medium resize-none"
                ></textarea>
              </div>
            </div>

            {/* SUBMIT BUTTON - Redicts to WhatsApp */}
            <div className="md:col-span-2 pt-4">
              <button 
                onClick={handleWhatsAppRedirect}
                className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[#25D366] hover:text-white transition-all shadow-xl active:scale-95 flex justify-center items-center gap-3"
              >
                Send Inquiry to WhatsApp <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}