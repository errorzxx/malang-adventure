import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Mountain, Phone, Send, X } from 'lucide-react';
import { navLinks, whatsappLinkNumber, whatsappMessage, whatsappNumber } from '../../data/site';

const isHashLink = (href) => href.includes('#');

export default function SiteNav({ tone = 'dark' }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isLight = tone === 'light';
  const whatsappHref = `https://wa.me/${whatsappLinkNumber}?text=${whatsappMessage}`;

  const linkClass = (href) => {
    const active =
      href === location.pathname || (href === '/' && location.pathname === '/');

    return [
      'relative text-[0.72rem] font-black uppercase tracking-[0.18em] transition-colors',
      isLight ? 'text-slate-700 hover:text-slate-950' : 'text-white/78 hover:text-white',
      active ? (isLight ? 'text-slate-950' : 'text-white') : '',
    ].join(' ');
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className={[
          'mx-auto flex max-w-7xl items-center justify-between border px-3 py-3 shadow-2xl backdrop-blur-2xl sm:px-5',
          isLight
            ? 'border-slate-200/70 bg-white/82 text-slate-950 shadow-slate-900/10'
            : 'border-white/15 bg-slate-950/42 text-white shadow-black/25',
        ].join(' ')}
      >
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className={[
              'grid h-11 w-11 shrink-0 place-items-center border',
              isLight
                ? 'border-slate-200 bg-slate-950 text-white'
                : 'border-white/15 bg-white/12 text-white',
            ].join(' ')}
          >
            <Mountain size={23} />
          </span>
          <span className="leading-none">
            <span className="block font-heading text-xl font-black uppercase tracking-[0.16em]">
              Malang
            </span>
            <span
              className={[
                'mt-1 block text-[0.58rem] font-black uppercase tracking-[0.34em]',
                isLight ? 'text-slate-500' : 'text-white/55',
              ].join(' ')}
            >
              Adventures
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) =>
            isHashLink(item.href) ? (
              <a key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} to={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${whatsappNumber}`}
            aria-label="Call Malang Adventures"
            className={[
              'hidden h-11 w-11 place-items-center border transition-transform hover:-translate-y-0.5 sm:grid',
              isLight
                ? 'border-slate-200 bg-white text-slate-900'
                : 'border-white/15 bg-white/10 text-white',
            ].join(' ')}
          >
            <Phone size={18} />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 bg-white px-5 py-3 text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <Send size={15} />
            Book Now
          </a>
          <button
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen((value) => !value)}
            className={[
              'grid h-11 w-11 place-items-center border transition-colors lg:hidden',
              isLight
                ? 'border-slate-200 bg-white text-slate-950'
                : 'border-white/15 bg-white/10 text-white',
            ].join(' ')}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-7xl border border-white/15 bg-slate-950/94 p-3 text-white shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-1">
              {navLinks.map((item) =>
                isHashLink(item.href) ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-4 text-sm font-black uppercase tracking-[0.18em] text-white/82"
                  >
                    {item.label}
                    <span className="h-px w-8 bg-white/20" />
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-4 text-sm font-black uppercase tracking-[0.18em] text-white/82"
                  >
                    {item.label}
                    <span className="h-px w-8 bg-white/20" />
                  </Link>
                )
              )}
            </div>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-white px-5 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950"
            >
              <Send size={16} />
              Plan on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
