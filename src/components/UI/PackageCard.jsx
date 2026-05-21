import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Hotel,
  IndianRupee,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function PackageCard({ pkg, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="group relative isolate flex h-full flex-col overflow-hidden border border-white/14 bg-slate-950/58 shadow-2xl shadow-black/20 backdrop-blur-2xl"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={pkg.heroImage}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 bg-white/90 px-3 py-2 text-[0.66rem] font-black uppercase tracking-[0.16em] text-slate-950 shadow-lg backdrop-blur-xl">
            <Clock size={13} />
            {pkg.duration}
          </span>
          <span className="inline-flex items-center gap-2 bg-slate-950/65 px-3 py-2 text-[0.66rem] font-black uppercase tracking-[0.16em] text-white backdrop-blur-xl">
            <Hotel size={13} />
            {pkg.stayType}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            <MapPin size={14} />
            Indore to Kashmir
          </p>
          <h3 className="font-heading text-3xl font-black leading-tight text-white drop-shadow-xl">
            {pkg.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-3 border-b border-white/10 pb-5">
          <div>
            <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/40">
              Per Traveler
            </p>
            <div className="mt-2 flex items-center text-white">
              <IndianRupee size={17} className="text-cyan-300" />
              <span className="text-3xl font-black">{pkg.pricePerPerson}</span>
            </div>
          </div>
          <div>
            <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-white/40">
              Couple
            </p>
            <p className="mt-2 text-2xl font-black text-white">₹{pkg.priceCouple}</p>
          </div>
        </div>

        <ul className="mt-5 flex-1 space-y-3">
          {pkg.highlights.slice(0, 5).map((item) => (
            <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-white/78">
              <CheckCircle2 size={17} className="mt-1 shrink-0 text-emerald-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto]">
          <Link
            to={`/package/${pkg.id}`}
            className="group/link inline-flex items-center justify-center gap-3 bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            View Itinerary
            <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
          </Link>
          <span className="inline-flex items-center justify-center gap-2 border border-white/10 px-4 py-4 text-[0.65rem] font-black uppercase tracking-[0.18em] text-amber-200">
            <Sparkles size={15} />
            Live Batch
          </span>
        </div>
      </div>
    </motion.article>
  );
}
