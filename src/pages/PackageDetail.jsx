import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Calendar, CheckCircle2, IndianRupee, 
  Mountain, Clock, Hotel, MessageCircle, Phone, Info, ShieldAlert, CloudRain 
} from 'lucide-react';
import { tourPackages } from '../data/packages';

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = tourPackages.find(p => p.id === id);

  const whatsappNumber = "9977110166";
  const waLink = `https://wa.me/${whatsappNumber}?text=Hello! I'm interested in the ${pkg?.title} package.`;

  if (!pkg) return <div className="text-center mt-32 text-slate-900 font-heading text-2xl">Package Not Found</div>;

  return (
    <div className="relative min-h-screen font-body selection:bg-brand-iceMid overflow-x-hidden bg-[#F8FAFC]">
      
      {/* 1. FIXED FULL-PAGE BACKGROUND IMAGE */}
      <div 
        className="fixed inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 md:opacity-100"
        style={{ backgroundImage: `url(${pkg.heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/60"></div>
      </div>

      {/* 2. STICKY LIGHT NAV */}
      <nav className="sticky top-0 z-50 w-full flex justify-between items-center px-6 md:px-12 py-6 bg-white/60 backdrop-blur-xl border-b border-white/40 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-white/60 p-2 rounded-lg border border-white/50">
            <Mountain size={24} className="text-slate-800" />
          </div>
          <h1 className="text-xl font-bold tracking-widest font-heading uppercase text-slate-800">Malang</h1>
        </div>
        <Link to="/" className="bg-white/60 backdrop-blur-md border border-white/50 px-5 py-2 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-slate-700 hover:bg-white/90 transition-all rounded-full shadow-sm">
          <ArrowLeft size={14} /> Back
        </Link>
      </nav>

      {/* 3. MAIN CONTENT LAYER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 pt-12 pb-20">
        
        {/* TITLE PANEL */}
        <div className="mb-12 text-center md:text-left bg-white/50 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/40 shadow-sm">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-3 mb-6 justify-center md:justify-start">
             <span className="bg-white/80 border border-white text-slate-800 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                {pkg.duration}
             </span>
             <span className="bg-blue-500/20 border border-blue-500/20 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                {pkg.stayType}
             </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-[5rem] font-bold font-heading text-slate-900 leading-[1.1] mb-6 drop-shadow-sm">
            {pkg.title}
          </h1>
          <p className="text-slate-800 font-bold flex items-center justify-center md:justify-start gap-2 italic">
            <MapPin size={18} className="text-blue-600"/> “Where Roads End, Adventure Begins”
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* LEFT COLUMN: ITINERARY & TERMS */}
          <div className="lg:w-2/3 space-y-12">
            
            {/* Itinerary Section */}
            <section>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8 flex items-center gap-3">
                    <Calendar className="text-blue-600" /> Tour Plan
                </h2>
                <div className="space-y-6">
                    {pkg.itinerary.map((day, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative flex flex-col md:flex-row bg-white/70 backdrop-blur-lg border border-white/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500">
                        <div className="md:w-1/3 h-48 md:h-auto overflow-hidden border-r border-white/40">
                        <img src={day.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={day.title} />
                        </div>
                        <div className="md:w-2/3 p-8">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-blue-700 font-black text-xs uppercase tracking-tighter bg-blue-100/50 px-2 py-1 rounded">{day.day}</span>
                            <h3 className="text-xl font-bold text-slate-800 font-heading">{day.title}</h3>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed font-medium">{day.desc}</p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </section>

            {/* Inclusions & Exclusions Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50/60 backdrop-blur-md p-8 rounded-[2rem] border border-green-200 shadow-sm">
                    <h3 className="text-green-800 font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-sm">
                        <CheckCircle2 size={20} /> Package Inclusions
                    </h3>
                    <ul className="space-y-3">
                        {pkg.inclusions.map((item, i) => (
                            <li key={i} className="text-slate-700 text-sm font-semibold flex gap-2">
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-red-50/60 backdrop-blur-md p-8 rounded-[2rem] border border-red-200 shadow-sm">
                    <h3 className="text-red-800 font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-sm">
                        <ShieldAlert size={20} /> Package Excludes
                    </h3>
                    <ul className="space-y-3">
                        {pkg.excludes.map((item, i) => (
                            <li key={i} className="text-slate-700 text-sm font-semibold flex gap-2">
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Terms & Weather Policy Section */}
            <section className="space-y-6">
                <div className="bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                    <h3 className="text-slate-900 font-bold flex items-center gap-2 mb-4 uppercase tracking-widest text-sm underline underline-offset-8 decoration-blue-500">
                        <Info size={20} /> Terms & Conditions
                    </h3>
                    <ul className="space-y-2">
                        {pkg.terms.map((term, i) => (
                            <li key={i} className="text-slate-700 text-xs font-bold leading-relaxed">• {term}</li>
                        ))}
                    </ul>
                </div>

                <div className="bg-orange-50/60 backdrop-blur-md p-8 rounded-[2.5rem] border border-orange-200 shadow-sm">
                    <h3 className="text-orange-800 font-bold flex items-center gap-2 mb-3 uppercase tracking-widest text-sm">
                        <CloudRain size={20} /> Natural Disaster & Weather Policy
                    </h3>
                    <p className="text-slate-700 text-xs font-bold leading-relaxed">{pkg.weatherPolicy}</p>
                </div>
            </section>

            {/* RESORT & POLICY DETAILS */}
            <div className="mt-12 space-y-8">
                <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl">
                    <h4 className="text-blue-400 font-black uppercase tracking-widest text-sm mb-4">📍 Resort Details</h4>
                    <ul className="text-white text-base font-bold space-y-3">
                        <li className="drop-shadow-md">• Srinagar se 15 km | Sonmarg se 20 km</li>
                        <li className="drop-shadow-md">• Complimentary Bonfire Night Included</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-900/90 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-xl">
                        <h4 className="text-green-400 font-black uppercase tracking-widest text-xs mb-3">✅ Payment Policy</h4>
                        <p className="text-white text-sm font-bold leading-relaxed drop-shadow-sm">
                            30% Advance at Booking. <br/> 
                            70% Balance at Srinagar Hotel Check-in.
                        </p>
                    </div>
                    <div className="bg-slate-900/90 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 shadow-xl">
                        <h4 className="text-red-400 font-black uppercase tracking-widest text-xs mb-3">⚠️ Cancellation</h4>
                        <p className="text-white text-sm font-bold leading-relaxed drop-shadow-sm">
                            Package is Non-Refundable & Non-Transferable once booked.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* RIGHT COLUMN: BOOKING CARD */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white/80 backdrop-blur-2xl border border-white rounded-[2.5rem] p-10 shadow-xl">
              <h3 className="text-slate-500 text-xs font-black uppercase tracking-[0.2em] mb-8">Adventure Pass</h3>
              <div className="space-y-6 mb-10">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Per Traveler</p>
                  <div className="flex items-center gap-1 text-slate-900">
                    <IndianRupee size={22} className="text-blue-600" />
                    <span className="text-5xl font-black tracking-tighter">{pkg.pricePerPerson}</span>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200/50">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Group Booking</p>
                  <p className="text-xl font-bold text-slate-700">₹{pkg.priceCouple} <span className="text-xs font-medium opacity-60">/ Couple</span></p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 p-3 rounded-xl border border-blue-100 leading-relaxed">
                  Payment Policy: {pkg.paymentPolicy}
                </p>
              </div>

              <a href={waLink} target="_blank" rel="noreferrer" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-lg active:scale-95 flex justify-center items-center gap-2">
                Reserve My Spot
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER SECTION: About & Contact */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-2xl border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Mountain size={28} className="text-slate-900" />
                    <h2 className="text-2xl font-bold font-heading uppercase tracking-tighter">Malang Adventures</h2>
                </div>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                    Based in Indore, we specialize in high-altitude expeditions and curated Kashmir tours. We believe that where roads end, true adventure begins.
                </p>
            </div>
            
            <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-blue-600">Contact Us</h3>
                <div className="space-y-4 text-slate-800 font-bold text-sm">
                    <p className="flex items-center gap-3"><Phone size={18} className="text-slate-400" /> 99771 10166 / 70001 05582</p>
                    <p className="flex items-center gap-3"><MapPin size={18} className="text-slate-400" /> Indore, Madhya Pradesh</p>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-sm font-black uppercase tracking-widest text-blue-600">Quick Connect</h3>
                <p className="text-slate-600 text-xs font-bold leading-relaxed">Ready for your trip? Message us directly for customized itineraries and group bookings.</p>
                <a href={waLink} className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold shadow-md hover:scale-105 transition-all">
                    <MessageCircle size={20} /> Chat on WhatsApp
                </a>
            </div>
        </div>
        <div className="mt-16 text-center text-slate-400 text-[10px] font-black uppercase tracking-widest">
            © 2026 Malang Adventure Tour & Travels Indore
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={waLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-90"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}