import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Camera,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  PlaySquare,
} from 'lucide-react';
import { navLinks, whatsappLinkNumber, whatsappMessage, whatsappNumber } from '../../data/site';

export default function Footer({ tone = 'dark' }) {
  const isLight = tone === 'light';
  const whatsappHref = `https://wa.me/${whatsappLinkNumber}?text=${whatsappMessage}`;

  return (
    <footer
      className={[
        'relative z-20 overflow-hidden border-t px-5 py-16 sm:px-8',
        isLight
          ? 'border-slate-200 bg-white text-slate-950'
          : 'border-white/10 bg-slate-950/92 text-white',
      ].join(' ')}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <span
              className={[
                'grid h-12 w-12 place-items-center border',
                isLight ? 'border-slate-200 bg-slate-950 text-white' : 'border-white/15 bg-white/10',
              ].join(' ')}
            >
              <Mountain size={25} />
            </span>
            <div>
              <h2 className="font-heading text-2xl font-black uppercase tracking-[0.16em]">
                Malang
              </h2>
              <p
                className={[
                  'text-[0.62rem] font-black uppercase tracking-[0.34em]',
                  isLight ? 'text-slate-500' : 'text-white/50',
                ].join(' ')}
              >
                Adventure Tour & Travels
              </p>
            </div>
          </div>
          <p
            className={[
              'mt-7 text-sm font-medium leading-7',
              isLight ? 'text-slate-600' : 'text-white/62',
            ].join(' ')}
          >
            Indore's Kashmir-focused travel crew for scenic group departures,
            transparent trip planning, and WhatsApp-first support.
          </p>
          <div className="mt-7 flex gap-3">
            {[Camera, PlaySquare, MessageCircle].map((Icon, index) => (
              <a
                key={index}
                href={index === 2 ? whatsappHref : '/gallery'}
                aria-label="Open Malang social link"
                className={[
                  'grid h-11 w-11 place-items-center border transition-transform hover:-translate-y-1',
                  isLight
                    ? 'border-slate-200 bg-slate-50 text-slate-700'
                    : 'border-white/10 bg-white/6 text-white/75',
                ].join(' ')}
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
            Explore
          </h3>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {navLinks.map((item) =>
              item.href.includes('#') ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    'group flex items-center justify-between border px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition-colors',
                    isLight
                      ? 'border-slate-200 text-slate-700 hover:bg-slate-950 hover:text-white'
                      : 'border-white/10 text-white/70 hover:bg-white hover:text-slate-950',
                  ].join(' ')}
                >
                  {item.label}
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={[
                    'group flex items-center justify-between border px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition-colors',
                    isLight
                      ? 'border-slate-200 text-slate-700 hover:bg-slate-950 hover:text-white'
                      : 'border-white/10 text-white/70 hover:bg-white hover:text-slate-950',
                  ].join(' ')}
                >
                  {item.label}
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </h3>
          <div className="mt-6 space-y-4">
            <a
              href={`tel:+91${whatsappNumber}`}
              className={[
                'flex items-center gap-4 border p-4 font-bold',
                isLight ? 'border-slate-200 bg-slate-50' : 'border-white/10 bg-white/6',
              ].join(' ')}
            >
              <Phone size={18} className="text-cyan-300" />
              <span>
                99771 10166
                <span className="block text-xs opacity-55">70001 05582</span>
              </span>
            </a>
            <div
              className={[
                'flex items-center gap-4 border p-4 font-bold',
                isLight ? 'border-slate-200 bg-slate-50' : 'border-white/10 bg-white/6',
              ].join(' ')}
            >
              <MapPin size={18} className="text-amber-300" />
              <span>Indore, Madhya Pradesh</span>
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white shadow-xl shadow-emerald-950/20 transition-transform hover:-translate-y-1"
            >
              <MessageCircle size={19} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      <div
        className={[
          'mx-auto mt-14 max-w-7xl border-t pt-7 text-center text-[0.65rem] font-black uppercase tracking-[0.24em]',
          isLight ? 'border-slate-200 text-slate-400' : 'border-white/10 text-white/35',
        ].join(' ')}
      >
        © 2026 Malang Adventure Tour & Travels Indore
      </div>
    </footer>
  );
}
