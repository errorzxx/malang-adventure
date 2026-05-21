import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  CalendarDays,
  CheckCircle2,
  Clock,
  CloudRain,
  IndianRupee,
  Info,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Train,
  XCircle,
} from 'lucide-react';
import Footer from '../components/UI/Footer';
import SiteNav from '../components/UI/SiteNav';
import { tourPackages } from '../data/packages';
import { destinationHighlights, whatsappLinkNumber } from '../data/site';

export default function PackageDetail() {
  const { id } = useParams();
  const pkg = tourPackages.find((item) => item.id === id);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-slate-950 font-body text-white">
        <SiteNav />
        <main className="grid min-h-screen place-items-center px-5 pt-28 text-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-200">
              Package Not Found
            </p>
            <h1 className="mt-4 font-heading text-5xl font-black">This route is not available.</h1>
            <Link
              to="/#packages"
              className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950"
            >
              Back to Packages
              <ArrowRight size={16} />
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hello! I'm interested in the ${pkg.title} package. Please share batch dates and booking details.`
  );
  const waLink = `https://wa.me/${whatsappLinkNumber}?text=${whatsappText}`;
  const related = tourPackages.filter((item) => item.id !== pkg.id);

  return (
    <div className="min-h-screen bg-[#f6f9fb] font-body text-slate-950 selection:bg-cyan-200 selection:text-slate-950">
      <SiteNav tone="light" />

      <main>
        <section className="relative flex min-h-[92vh] items-end overflow-hidden px-5 pb-16 pt-32 text-white sm:px-8">
          <img src={pkg.heroImage} alt={pkg.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/58 to-slate-950/10" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_370px] lg:items-end">
            <div>
              <Link
                to="/#packages"
                className="inline-flex items-center gap-2 border border-white/16 bg-white/10 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl"
              >
                <ArrowLeft size={15} />
                Packages
              </Link>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge icon={CalendarDays}>{pkg.duration}</Badge>
                <Badge icon={BedDouble}>{pkg.stayType}</Badge>
                <Badge icon={Train}>Indore Departure</Badge>
              </div>
              <h1 className="mt-6 max-w-5xl font-heading text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
                {pkg.title}
              </h1>
              <p className="mt-6 flex max-w-2xl items-start gap-3 text-base font-semibold leading-8 text-white/72">
                <MapPin size={20} className="mt-1 shrink-0 text-cyan-200" />
                Where roads end, adventure begins. A complete route across Srinagar,
                Gulmarg, Sonmarg, Pahalgam, and the journey back home.
              </p>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.65 }}
              className="border border-white/14 bg-white/10 p-5 shadow-2xl shadow-black/25 backdrop-blur-2xl"
            >
              <p className="text-[0.62rem] font-black uppercase tracking-[0.24em] text-white/48">
                Starting Price
              </p>
              <div className="mt-3 flex items-center text-white">
                <IndianRupee size={24} className="text-cyan-200" />
                <span className="font-heading text-6xl font-black">{pkg.pricePerPerson}</span>
              </div>
              <p className="mt-2 text-sm font-bold text-white/60">per traveler</p>
              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">
                  Couple Price
                </p>
                <p className="mt-2 text-2xl font-black text-white">₹{pkg.priceCouple}</p>
              </div>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-white px-6 py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                Reserve My Spot
                <MessageCircle size={17} />
              </a>
            </motion.aside>
          </div>
        </section>

        <section className="px-5 py-8 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pkg.highlights.slice(0, 4).map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="border border-slate-200 bg-white p-5 shadow-xl shadow-slate-950/5"
              >
                <Sparkles size={22} className="text-cyan-700" />
                <p className="mt-4 text-sm font-black leading-6 text-slate-700">{clean(item)}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_370px] lg:items-start">
            <div className="space-y-12">
              <section>
                <div className="mb-8">
                  <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-700">
                    Day-by-Day Plan
                  </p>
                  <h2 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-6xl">
                    The itinerary, made scannable.
                  </h2>
                </div>

                <div className="space-y-4">
                  {pkg.itinerary.map((day, index) => (
                    <motion.article
                      key={`${day.day}-${day.title}`}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ delay: index * 0.04, duration: 0.5 }}
                      className="group grid overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-950/5 md:grid-cols-[260px_1fr]"
                    >
                      <div className="image-shine relative min-h-[220px] overflow-hidden">
                        <img
                          src={day.image}
                          alt={day.title}
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="bg-slate-950 px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-white">
                            {day.day}
                          </span>
                          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                            <Clock size={14} />
                            Route Segment
                          </span>
                        </div>
                        <h3 className="mt-5 font-heading text-3xl font-black">{day.title}</h3>
                        <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">{day.desc}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>

              <section className="grid gap-5 md:grid-cols-2">
                <PolicyPanel
                  title="Package Inclusions"
                  Icon={CheckCircle2}
                  tone="emerald"
                  items={pkg.inclusions}
                />
                <PolicyPanel
                  title="Package Excludes"
                  Icon={XCircle}
                  tone="rose"
                  items={pkg.excludes}
                />
              </section>

              <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                <div className="border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
                  <h3 className="flex items-center gap-3 font-heading text-3xl font-black">
                    <Info className="text-cyan-700" />
                    Terms & Conditions
                  </h3>
                  <div className="mt-6 space-y-3">
                    {pkg.terms.map((term) => (
                      <p key={term} className="flex gap-3 text-sm font-semibold leading-6 text-slate-600">
                        <ShieldCheck size={17} className="mt-1 shrink-0 text-cyan-700" />
                        {clean(term)}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="border border-amber-200 bg-amber-50 p-6 shadow-xl shadow-amber-950/5">
                  <h3 className="flex items-center gap-3 font-heading text-3xl font-black text-amber-950">
                    <CloudRain className="text-amber-600" />
                    Weather Policy
                  </h3>
                  <p className="mt-6 text-sm font-bold leading-7 text-amber-950/72">
                    {pkg.weatherPolicy}
                  </p>
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/10">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-700">
                  Booking Desk
                </p>
                <h3 className="mt-4 font-heading text-3xl font-black">Adventure Pass</h3>
                <div className="mt-6 space-y-4 border-y border-slate-200 py-6">
                  <PriceRow label="Per Traveler" value={`₹${pkg.pricePerPerson}`} />
                  <PriceRow label="Couple" value={`₹${pkg.priceCouple}`} />
                  <PriceRow label="Duration" value={pkg.duration} />
                  <PriceRow label="Stay" value={pkg.stayType} />
                </div>
                <p className="mt-5 border border-cyan-100 bg-cyan-50 p-4 text-xs font-bold leading-6 text-cyan-950">
                  {clean(pkg.paymentPolicy)}
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-3 bg-slate-950 px-6 py-5 text-xs font-black uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-0.5"
                >
                  Chat & Book
                  <MessageCircle size={17} />
                </a>
              </div>

              <div className="mt-5 border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-700">
                  Route Covers
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {destinationHighlights.map((place) => (
                    <div key={place.name} className="border border-slate-200 bg-slate-50 p-3">
                      <img src={place.image} alt={place.name} className="h-20 w-full object-cover" />
                      <p className="mt-2 text-xs font-black text-slate-700">{place.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-slate-950 px-5 py-20 text-white sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-5 border border-white/10 bg-white/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                  Compare
                </p>
                <h2 className="mt-3 font-heading text-3xl font-black">
                  Also consider {related[0].title}
                </h2>
              </div>
              <Link
                to={`/package/${related[0].id}`}
                className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950"
              >
                View Alternative
                <ArrowRight size={16} />
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer tone="light" />
    </div>
  );
}

function Badge({ children, icon: Icon }) {
  return (
    <span className="inline-flex items-center gap-2 border border-white/16 bg-white/10 px-3 py-2 text-[0.64rem] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl">
      <Icon size={14} />
      {children}
    </span>
  );
}

function PolicyPanel({ Icon, items, title, tone }) {
  const toneClass =
    tone === 'emerald'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
      : 'border-rose-200 bg-rose-50 text-rose-700';

  return (
    <div className="border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5">
      <h3 className="flex items-center gap-3 font-heading text-3xl font-black">
        <span className={`grid h-11 w-11 place-items-center border ${toneClass}`}>
          <Icon size={21} />
        </span>
        {title}
      </h3>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <p key={item} className="text-sm font-semibold leading-6 text-slate-600">
            {clean(item)}
          </p>
        ))}
      </div>
    </div>
  );
}

function PriceRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="text-right text-sm font-black text-slate-800">{value}</p>
    </div>
  );
}

function clean(value) {
  return value.replace(/^[^\p{L}\p{N}]+/u, '').trim();
}
