import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function AnimatedMap() {
  const locations = [
    { name: "Indore", x: "480", y: "410", delay: 0 },
    { name: "Jammu", x: "420", y: "200", delay: 1.5 },
    { name: "Srinagar", x: "440", y: "150", delay: 2 },
    { name: "Gulmarg", x: "380", y: "140", delay: 2.5 },
    { name: "Sonmarg", x: "500", y: "110", delay: 3 },
    { name: "Pahalgam", x: "520", y: "160", delay: 3.5 },
  ];

  return (
    <section className="relative z-10 py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white inline-block glass-panel px-10 py-4 shadow-2xl">
            Expedition Route
          </h2>
          <p className="text-white/60 mt-4 uppercase tracking-[0.3em] text-[10px] font-black">Indore Se Kashmir Tak</p>
        </div>

        <div className="glass-panel w-full aspect-video md:aspect-[21/9] relative overflow-hidden bg-slate-900/70 border-white/10 shadow-2xl">
          {/* Subtle Map Background Decoration */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150 350 L300 150 L350 80 L400 50 L500 100" stroke="white" strokeWidth="0.5" strokeDasharray="5 5" />
            </svg>
          </div>

          {/* Animated Route Line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500">
            {/* The Route Line - Smoother Bezier Curve */}
            <motion.path
              d="M 480 410 C 420 350, 400 250, 420 200 S 440 160, 440 150" 
              stroke="#60a5fa"
              strokeWidth="4"
              fill="transparent"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 12px rgba(96, 165, 250, 0.9))" }}
            />

            {/* Branch lines to Gulmarg/Sonmarg/Pahalgam */}
            <motion.path
              d="M 440 150 L 380 140 M 440 150 L 500 110 M 440 150 L 520 160"
              stroke="#60a5fa"
              strokeWidth="2"
              strokeDasharray="5 5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: 2.2, duration: 1 }}
            />
          </svg>

          {/* Location Pins */}
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(loc.x / 1000) * 100}%`, top: `${(loc.y / 500) * 100}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: loc.delay, duration: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <MapPin size={22} className={i === 0 ? "text-orange-500" : "text-blue-400"} fill="currentColor" fillOpacity="0.2" />
              </div>
              <span className="mt-2 text-[10px] font-black uppercase tracking-tighter text-white bg-slate-950/90 px-3 py-1 rounded-full border border-white/20 shadow-2xl">
                {loc.name}
              </span>
            </motion.div>
          ))}

          {/* Map Legend */}
          <div className="absolute bottom-6 left-6 flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_#fb923c]"></div> Departure (Indore)
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></div> Adventure Points
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}