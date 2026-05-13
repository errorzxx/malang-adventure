import { Mountain, Phone, MapPin, MessageCircle, Globe, Camera, PlaySquare } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "9977110166";
  const message = encodeURIComponent("Hello! I'm interested in a Kashmir Tour package.");

  return (
    <footer className="relative z-20 bg-white/60 backdrop-blur-2xl border-t border-white/40 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* ABOUT SECTION */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Mountain size={32} className="text-slate-800" />
            <h2 className="text-2xl font-bold font-heading tracking-widest text-slate-800 uppercase">Malang</h2>
          </div>
          <p className="text-slate-600 leading-relaxed font-medium italic">
            "Where Roads End, Adventure Begins." <br />
            Based in Indore, we are your premier gateway to the Himalayas.
          </p>
          {/* FIXED BRAND ICONS */}
          <div className="flex gap-4">
            <Globe className="text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
            <Camera className="text-slate-400 hover:text-pink-600 cursor-pointer transition-colors" />
            <PlaySquare className="text-slate-400 hover:text-red-600 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="space-y-6 text-slate-800">
          <h3 className="text-lg font-bold uppercase tracking-widest">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 font-bold">
              <Phone size={20} className="text-blue-600" />
              <div>
                <p>99771 10166</p>
                <p>70001 05582</p>
              </div>
            </li>
            <li className="flex items-center gap-4 font-bold">
              <MapPin size={20} className="text-blue-600" />
              <p>Indore, Madhya Pradesh</p>
            </li>
          </ul>
        </div>

        {/* WHATSAPP ACTION */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold uppercase tracking-widest text-slate-900">Get in Touch</h3>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-lg"
          >
            <MessageCircle size={24} /> WhatsApp Now
          </a>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-400 text-[10px] font-black tracking-widest uppercase">
        © 2026 Malang Adventure Tour & Travels Indore.
      </div>

      {/* FLOATING WHATSAPP */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
}