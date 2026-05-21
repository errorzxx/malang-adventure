import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  ChevronRight,
  IndianRupee,
  MessageCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react';
import HeroCanvas from '../components/3D/HeroCanvas';
import AnimatedMap from '../components/UI/AnimatedMap';
import Footer from '../components/UI/Footer';
import InquiryForm from '../components/UI/InquiryForm';
import PackageCard from '../components/UI/PackageCard';
import SiteNav from '../components/UI/SiteNav';
import { tourPackages } from '../data/packages';
import {
  destinationHighlights,
  experienceSteps,
  galleryMoments,
  heroStats,
  inclusionsPreview,
  testimonials,
  trustMarkers,
  whatsappLinkNumber,
  whatsappMessage,
} from '../data/site';

const sectionMotion = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.28], [1, 0.94, 0.25]);
  const heroScale = useTransform(scrollYProgress, [0, 0.28], [1, 1.08]);
  const whatsappHref = `https://wa.me/${whatsappLinkNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 font-body text-white selection:bg-cyan-200 selection:text-slate-950">
      <SiteNav />

      <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="fixed inset-0 z-0">
        <HeroCanvas />
      </motion.div>
      <div className="fixed inset-0 z-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.4)_38%,rgba(2,6,23,0.96)_88%)]" />
      <div className="fixed inset-0 z-0 noise-layer opacity-40" />

      <main className="relative z-10">
        <section className="relative flex min-h-[118vh] items-center px-5 pb-20 pt-28 sm:px-8 lg:pt-36">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 border border-white/16 bg-white/8 px-4 py-3 text-[0.68rem] font-black uppercase tracking-[0.26em] text-cyan-100 backdrop-blur-xl"
              >
                <Sparkles size={15} className="text-amber-200" />
                Indore's Kashmir Expedition Studio
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.8, ease: 'easeOut' }}
                className="mt-7 max-w-5xl font-heading text-[4.4rem] font-black uppercase leading-[0.83] text-white drop-shadow-2xl sm:text-[7rem] lg:text-[9.5rem]"
              >
                Malang
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.7 }}
                className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-white/82 sm:text-2xl sm:leading-10"
              >
                Cinematic Kashmir journeys with rail-to-road planning, valley stays,
                snow-day routes, bonfire nights, and WhatsApp-first support.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62, duration: 0.7 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#packages"
                  className="group inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950 shadow-2xl shadow-black/25 transition-transform hover:-translate-y-1"
                >
                  Explore Packages
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-white/18 bg-white/10 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-xl transition-transform hover:-translate-y-1"
                >
                  <MessageCircle size={17} />
                  WhatsApp Planner
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.74, duration: 0.75 }}
              className="mb-2 grid gap-3 sm:grid-cols-2 lg:justify-self-end"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
                  transition={{ repeat: Infinity, duration: 5 + index, ease: 'easeInOut' }}
                  className="border border-white/14 bg-slate-950/44 p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl"
                >
                  <p className="font-heading text-4xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-[0.64rem] font-black uppercase tracking-[0.22em] text-white/52">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-slate-950" />
        </section>

        <section className="relative bg-slate-950 px-5 py-6 sm:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden border-y border-white/10 py-4">
            <div className="marquee-track flex w-max gap-8">
              {[...inclusionsPreview, ...inclusionsPreview].map(({ Icon, label }, index) => (
                <div
                  key={`${label}-${index}`}
                  className="flex items-center gap-3 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white/68"
                >
                  <Icon size={17} className="text-cyan-200" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="relative bg-slate-950 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <motion.div
              variants={sectionMotion}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-200">
                Built For Real Trips
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-white sm:text-6xl">
                More than sightseeing. A complete Kashmir operating system.
              </h2>
              <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-white/62">
                Malang turns a long northbound journey into a clear, beautiful, highly
                coordinated experience: seat planning, stays, transport, food, policies,
                sightseeing, and on-trip decisions all connected in one flow.
              </p>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-3 border border-white/16 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-slate-950"
              >
                Meet Malang
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-3 lg:pt-10">
              {trustMarkers.map(({ Icon, copy, title }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.55 }}
                  className="group relative overflow-hidden border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl transition-colors hover:bg-white hover:text-slate-950"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-300 opacity-0 transition-opacity group-hover:opacity-100" />
                  <Icon className="mb-8 text-cyan-200 transition-colors group-hover:text-slate-950" size={30} />
                  <h3 className="font-heading text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm font-medium leading-6 text-white/62 transition-colors group-hover:text-slate-600">
                    {copy}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="relative bg-[#f6f9fb] px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-emerald-700">
                  Featured Expeditions
                </p>
                <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight sm:text-6xl">
                  Choose your Kashmir mode.
                </h2>
              </div>
              <p className="max-w-xl text-sm font-semibold leading-7 text-slate-600">
                Two sharp options: a high-value farmhouse adventure or a premium
                hotel-and-houseboat journey with extra softness.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {tourPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-slate-950 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-200">
                  Trip Flow
                </p>
                <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-white sm:text-6xl">
                  From one message to the mountain road.
                </h2>
              </div>
              <p className="max-w-2xl text-sm font-medium leading-7 text-white/62 lg:ml-auto">
                The experience is designed like a clean sequence, so travelers always know
                what happens before booking, during movement, and inside Kashmir.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {experienceSteps.map(({ Icon, copy, label, title }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.55 }}
                  className="relative min-h-[290px] overflow-hidden border border-white/10 bg-white/[0.05] p-5"
                >
                  <div className="scan-line pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-cyan-200/0 via-cyan-200/12 to-cyan-200/0" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.28em] text-white/35">
                      {label}
                    </span>
                    <Icon className="text-cyan-200" size={27} />
                  </div>
                  <h3 className="mt-16 font-heading text-3xl font-black text-white">{title}</h3>
                  <p className="mt-4 text-sm font-medium leading-6 text-white/58">{copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="destinations" className="relative bg-slate-950">
          <AnimatedMap />
        </section>

        <section className="relative bg-[#f7f3ed] px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-rose-700">
                  Destination Energy
                </p>
                <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight sm:text-6xl">
                  Every stop has a different pulse.
                </h2>
              </div>
              <Link
                to="/destinations"
                className="group inline-flex w-fit items-center gap-3 bg-slate-950 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5"
              >
                View All Places
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {destinationHighlights.map(({ Icon, image, name, region, accent }, index) => (
                <motion.article
                  key={name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="group relative min-h-[420px] overflow-hidden border border-slate-950/10 bg-slate-950 text-white shadow-xl"
                >
                  <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-70 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="relative flex h-full min-h-[420px] flex-col justify-between p-5">
                    <span className="grid h-11 w-11 place-items-center bg-white text-slate-950">
                      <Icon size={21} />
                    </span>
                    <div>
                      <h3 className="font-heading text-4xl font-black">{name}</h3>
                      <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-white/70">
                        {region}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-slate-950 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-200">
                Travel Proof
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-white sm:text-6xl">
                Real moments, sharp memories.
              </h2>
              <Link
                to="/gallery"
                className="group mt-8 inline-flex items-center gap-3 border border-white/16 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-slate-950"
              >
                Open Gallery
                <Camera size={16} className="transition-transform group-hover:scale-110" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryMoments.slice(0, 6).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className={`group relative overflow-hidden border border-white/10 ${index === 1 || index === 4 ? 'sm:row-span-2' : ''}`}
                >
                  <div className="image-shine relative h-64 overflow-hidden sm:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[0.58rem] font-black uppercase tracking-[0.22em] text-cyan-200">
                      {item.location}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-black text-white">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-white px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-700">
                  Guest Signal
                </p>
                <h2 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-6xl">
                  The trip feels handled.
                </h2>
              </div>
              <p className="max-w-2xl text-sm font-semibold leading-7 text-slate-600 lg:ml-auto">
                People remember the views. They also remember when the logistics feel calm,
                clear, and responsive.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="border border-slate-200 bg-slate-50 p-6"
                >
                  <Quote size={28} className="text-cyan-700" />
                  <div className="mt-5 flex gap-1 text-amber-500">
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <Star key={starIndex} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-semibold leading-7 text-slate-700">
                    {item.quote}
                  </p>
                  <div className="mt-7 border-t border-slate-200 pt-5">
                    <p className="font-heading text-xl font-black">{item.name}</p>
                    <p className="mt-1 text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-400">
                      {item.trip}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 px-5 py-20 sm:px-8 lg:py-28">
          <div className="absolute inset-0 opacity-30">
            <img src="/images/snow-mountain.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-slate-950/78" />
          <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-emerald-200">
                Limited Group Energy
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight text-white sm:text-6xl">
                Ready for Kashmir with a crew that actually plans the details?
              </h2>
            </div>
            <div className="border border-white/12 bg-white/8 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-white/45">
                    Starting From
                  </p>
                  <div className="mt-2 flex items-center text-white">
                    <IndianRupee size={22} className="text-cyan-200" />
                    <span className="font-heading text-5xl font-black">13,500</span>
                  </div>
                </div>
                <BadgeCheck size={36} className="text-emerald-300" />
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {['Train route', 'Stay planning', 'Sightseeing', 'WhatsApp support'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-white/70">
                    <ShieldCheck size={17} className="text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-white px-6 py-5 text-xs font-black uppercase tracking-[0.2em] text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                Build My Trip
                <MessageCircle size={17} />
              </a>
            </div>
          </div>
        </section>

        <InquiryForm />
      </main>

      <Footer />
    </div>
  );
}
