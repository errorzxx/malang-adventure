import { motion } from 'framer-motion';
import { CheckCircle2, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom'; 

export default function PackageCard({ pkg }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col h-full relative overflow-hidden group"
    >
      {/* Subtle frosty glow behind the card content */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-iceMid rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/30">
          {pkg.duration}
        </span>
        <span className="text-sm font-semibold text-white/90 bg-white/10 border border-white/20 px-2 py-1 rounded-md backdrop-blur-sm">
          {pkg.stayType}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-white mb-2 font-heading relative z-10 drop-shadow-md">
        {pkg.title}
      </h3>
      
      <div className="mb-6 relative z-10">
        <div className="flex items-baseline gap-1 text-white">
          <IndianRupee size={20} className="text-brand-iceMid" />
          <span className="text-4xl font-black drop-shadow-sm">{pkg.pricePerPerson}</span>
          <span className="text-sm font-medium opacity-80">/ person</span>
        </div>
        <p className="text-sm text-white/70 font-semibold mt-1">
          Couple: ₹{pkg.priceCouple}
        </p>
      </div>

      <div className="flex-grow relative z-10">
        <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider opacity-90">Highlights</h4>
        <ul className="space-y-2 mb-6">
          {pkg.highlights.slice(0, 4).map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-white/90 font-medium">
              <CheckCircle2 size={16} className="text-brand-iceMid shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Using the new primary button style from your design board */}
      <Link to={`/package/${pkg.id}`} className="glass-button-primary w-full relative z-10 flex justify-center text-center mt-auto">
        View Full Itinerary
      </Link>
    </motion.div>
  );
}