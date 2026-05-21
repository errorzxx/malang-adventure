import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import Footer from '../components/UI/Footer';
import InquiryForm from '../components/UI/InquiryForm';
import SiteNav from '../components/UI/SiteNav';
import { contactCards } from '../data/site';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 font-body text-white selection:bg-cyan-200 selection:text-slate-950">
      <SiteNav />
      <main>
        <section className="relative flex min-h-[78vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8">
          <img src="/images/pahalgam.jpg" alt="Pahalgam valley" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/58 to-slate-950/12" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-200">
                Contact
              </p>
              <h1 className="mt-5 max-w-5xl font-heading text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
                Your Kashmir plan starts in chat.
              </h1>
            </div>
            <div className="border border-white/12 bg-white/[0.08] p-5 backdrop-blur-xl">
              <div className="flex gap-4 border-b border-white/10 pb-4">
                <Phone size={20} className="mt-1 text-cyan-200" />
                <div>
                  <p className="font-heading text-2xl font-black">99771 10166</p>
                  <p className="text-sm font-semibold text-white/55">70001 05582</p>
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <MapPin size={20} className="mt-1 text-amber-200" />
                <div>
                  <p className="font-heading text-2xl font-black">Indore</p>
                  <p className="text-sm font-semibold text-white/55">Madhya Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6f9fb] px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10">
              <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-700">
                Fast Paths
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight sm:text-6xl">
                Pick the next move.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {contactCards.map(({ Icon, copy, cta, href, title }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5"
                >
                  <Icon size={29} className="text-cyan-700" />
                  <h3 className="mt-8 font-heading text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{copy}</p>
                  {href.startsWith('http') ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white"
                    >
                      {cta}
                    </a>
                  ) : (
                    <Link
                      to={href}
                      className="mt-7 inline-flex bg-slate-950 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white"
                    >
                      {cta}
                    </Link>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <InquiryForm compact />
        <section className="bg-slate-950 px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="border border-white/10 bg-white/[0.05] p-6">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-200">
                Response Tip
              </p>
              <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-white/62">
                For faster planning, send your preferred month, total travelers, room sharing
                style, and whether you want farmhouse or premium hotel comfort.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
