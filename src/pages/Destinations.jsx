import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays, MapPin, Route, ShieldCheck } from 'lucide-react';
import AnimatedMap from '../components/UI/AnimatedMap';
import Footer from '../components/UI/Footer';
import SiteNav from '../components/UI/SiteNav';
import { destinationHighlights, pageKpis, whatsappLinkNumber, whatsappMessage } from '../data/site';

export default function Destinations() {
  return (
    <div className="min-h-screen bg-slate-950 font-body text-white selection:bg-cyan-200 selection:text-slate-950">
      <SiteNav />
      <main>
        <section className="relative flex min-h-[86vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8">
          <img src="/images/sonmarg.jpg" alt="Sonmarg Kashmir" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/58 to-slate-950/15" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-200">
                Destinations
              </p>
              <h1 className="mt-5 max-w-5xl font-heading text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
                Kashmir places that carry the whole story.
              </h1>
            </div>
            <p className="max-w-xl text-base font-semibold leading-8 text-white/72 lg:ml-auto">
              From Dal Lake to glacier roads, each destination is chosen for visual impact,
              practical routing, and the kind of travel memory people keep retelling.
            </p>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-12 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pageKpis.map(({ Icon, label, value }) => (
              <div key={label} className="border border-white/10 bg-white/[0.05] p-5">
                <Icon size={22} className="text-cyan-200" />
                <p className="mt-4 text-[0.62rem] font-black uppercase tracking-[0.22em] text-white/42">
                  {label}
                </p>
                <p className="mt-2 font-heading text-2xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f7f3ed] px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-emerald-700">
                  Route Highlights
                </p>
                <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight sm:text-6xl">
                  The valley, split by mood.
                </h2>
              </div>
              <Link
                to="/#packages"
                className="group inline-flex w-fit items-center gap-3 bg-slate-950 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5"
              >
                Compare Packages
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {destinationHighlights.map(({ Icon, bestFor, days, image, name, region }, index) => (
                <motion.article
                  key={name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="group grid overflow-hidden border border-slate-950/10 bg-white shadow-xl shadow-slate-950/5 md:grid-cols-[0.92fr_1.08fr]"
                >
                  <div className="image-shine relative min-h-[300px] overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <span className="grid h-12 w-12 place-items-center bg-slate-950 text-white">
                      <Icon size={23} />
                    </span>
                    <h3 className="mt-8 font-heading text-4xl font-black">{name}</h3>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                      {region}
                    </p>
                    <div className="mt-8 grid gap-3">
                      <InfoRow icon={MapPin} label="Best for" value={bestFor} />
                      <InfoRow icon={CalendarDays} label="Ideal time" value={days} />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950">
          <AnimatedMap />
        </section>

        <section className="bg-white px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-rose-700">
                Travel Reality
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-6xl">
                Kashmir routes are beautiful because they are alive.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ['Weather Aware', 'Snowfall and road blocks can change sightseeing order.'],
                ['Union Rules', 'Local cab rules can apply in specific tourist zones.'],
                ['Safety First', 'The safest feasible movement plan always wins.'],
              ].map(([title, copy]) => (
                <div key={title} className="border border-slate-200 bg-slate-50 p-6">
                  <ShieldCheck size={24} className="text-emerald-600" />
                  <h3 className="mt-6 font-heading text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-16 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 border border-white/10 bg-white/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center bg-white text-slate-950">
                <Route size={22} />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-black">Want a destination-first plan?</h2>
                <p className="text-sm font-semibold text-white/55">Tell us your must-see places and group size.</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${whatsappLinkNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950"
            >
              Plan Route
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3 border border-slate-200 bg-slate-50 p-4">
      <Icon size={18} className="mt-0.5 shrink-0 text-cyan-700" />
      <div>
        <p className="text-[0.6rem] font-black uppercase tracking-[0.18em] text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-bold leading-6 text-slate-700">{value}</p>
      </div>
    </div>
  );
}
