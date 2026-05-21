import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Navigation, Train } from 'lucide-react';

const locations = [
  { name: 'Indore', x: 480, y: 410, delay: 0, type: 'Departure' },
  { name: 'Jammu', x: 420, y: 205, delay: 0.65, type: 'Rail Arrival' },
  { name: 'Srinagar', x: 440, y: 150, delay: 1, type: 'Base' },
  { name: 'Gulmarg', x: 380, y: 140, delay: 1.3, type: 'Snow' },
  { name: 'Sonmarg', x: 505, y: 112, delay: 1.55, type: 'Glacier' },
  { name: 'Pahalgam', x: 525, y: 168, delay: 1.8, type: 'Valley' },
];

export default function AnimatedMap({ compact = false }) {
  return (
    <section className={compact ? 'relative z-10' : 'relative z-10 px-5 py-20 sm:px-8 lg:py-28'}>
      <div className="mx-auto max-w-7xl">
        {!compact && (
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-200">
                Animated Route
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-white sm:text-6xl">
                Indore se Kashmir tak, one flowing route.
              </h2>
            </div>
            <p className="max-w-2xl text-sm font-medium leading-7 text-white/62 lg:ml-auto">
              The route visualization keeps the trip easy to understand: train north,
              road into Srinagar, then day loops toward the valley's strongest moments.
            </p>
          </div>
        )}

        <div className="relative overflow-hidden border border-white/12 bg-slate-950/68 shadow-2xl shadow-black/25 backdrop-blur-2xl">
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="h-full w-full bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.16),transparent_40%),linear-gradient(135deg,rgba(15,23,42,0.9),rgba(2,6,23,0.76))]" />

          <div className="relative grid min-h-[520px] gap-8 p-4 sm:p-7 lg:grid-cols-[1fr_300px]">
            <div className="relative min-h-[440px] overflow-hidden border border-white/8 bg-slate-900/35">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
                <motion.path
                  d="M 480 410 C 430 360, 385 270, 420 205 C 440 170, 440 156, 440 150"
                  stroke="#22d3ee"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.4, ease: 'easeInOut' }}
                  style={{ filter: 'drop-shadow(0 0 14px rgba(34, 211, 238, 0.9))' }}
                />
                <motion.path
                  d="M 440 150 L 380 140 M 440 150 L 505 112 M 440 150 L 525 168"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeDasharray="7 9"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{ opacity: 0.9, pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.45, duration: 1.1 }}
                />
              </svg>

              {locations.map((loc, index) => (
                <motion.div
                  key={loc.name}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  style={{ left: `${(loc.x / 1000) * 100}%`, top: `${(loc.y / 500) * 100}%` }}
                  initial={{ opacity: 0, scale: 0.65, y: 12 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: loc.delay, type: 'spring', stiffness: 170, damping: 13 }}
                >
                  <span
                    className={[
                      'grid h-9 w-9 place-items-center border shadow-xl backdrop-blur-md',
                      index === 0
                        ? 'border-amber-300/50 bg-amber-300 text-slate-950'
                        : 'border-cyan-200/50 bg-slate-950/72 text-cyan-200',
                    ].join(' ')}
                  >
                    {index === 0 ? <Train size={17} /> : <MapPin size={17} fill="currentColor" fillOpacity="0.2" />}
                  </span>
                  <span className="mt-2 max-w-[94px] truncate bg-slate-950/88 px-2 py-1 text-center text-[0.58rem] font-black uppercase tracking-[0.12em] text-white shadow-xl">
                    {loc.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="relative flex flex-col justify-between border border-white/8 bg-white/[0.04] p-5">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center bg-white text-slate-950">
                    <Navigation size={19} />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                      Route Intel
                    </p>
                    <p className="text-sm font-semibold text-white/58">6 major travel points</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {locations.map((loc, index) => (
                    <motion.div
                      key={loc.name}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-center justify-between border border-white/8 bg-slate-950/40 px-3 py-3"
                    >
                      <span className="text-sm font-black text-white">{loc.name}</span>
                      <span className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/45">
                        {loc.type}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <a
                href="/destinations"
                className="group mt-6 inline-flex items-center justify-center gap-3 bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                Explore Places
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
