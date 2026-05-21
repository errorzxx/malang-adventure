import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Train,
} from 'lucide-react';
import Footer from '../components/UI/Footer';
import SiteNav from '../components/UI/SiteNav';
import { faqs, trustMarkers, whatsappLinkNumber, whatsappMessage, whyChooseUs } from '../data/site';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 font-body text-white selection:bg-cyan-200 selection:text-slate-950">
      <SiteNav />
      <main>
        <section className="relative flex min-h-[86vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8">
          <img src="/images/snow-mountain.jpg" alt="Kashmir snow mountain" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/56 to-slate-950/10" />
          <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-emerald-200">
                About Malang
              </p>
              <h1 className="mt-5 max-w-5xl font-heading text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
                We turn Kashmir dreams into a clear group journey.
              </h1>
            </div>
            <p className="max-w-xl text-base font-semibold leading-8 text-white/72 lg:ml-auto">
              Malang Adventure Tour & Travels is based in Indore and focused on
              high-emotion, practical Kashmir departures for families, friends, students,
              and couples.
            </p>
          </div>
        </section>

        <section className="bg-[#f6f9fb] px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-700">
                Philosophy
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-6xl">
                The wow is in the view. The trust is in the planning.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {trustMarkers.map(({ Icon, title, copy }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className="border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/5"
                >
                  <Icon size={28} className="text-cyan-700" />
                  <h3 className="mt-8 font-heading text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">{copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Train, 'Rail-to-road coordination', 'Indore departures with Jammu transfer planning.'],
                [MapPinned, 'Valley route curation', 'Srinagar, Gulmarg, Sonmarg, and Pahalgam in a clear rhythm.'],
                [ShieldCheck, 'Transparent policies', 'Payment, cancellation, weather, and exclusion clarity before booking.'],
                [HeartHandshake, 'Human support', 'WhatsApp-first communication before and during the journey.'],
              ].map(([Icon, title, copy], index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="border border-white/10 bg-white/[0.05] p-6"
                >
                  <Icon size={28} className="text-amber-200" />
                  <h3 className="mt-8 font-heading text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm font-medium leading-6 text-white/58">{copy}</p>
                </motion.div>
              ))}
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-amber-200">
                Why Travelers Pick Us
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-6xl">
                Built for first-timers and repeat mountain people.
              </h2>
              <div className="mt-8 space-y-3">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex gap-3 border border-white/10 bg-white/[0.05] p-4">
                    <BadgeCheck size={18} className="mt-1 shrink-0 text-emerald-300" />
                    <p className="text-sm font-semibold leading-6 text-white/68">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.34em] text-rose-700">
                Clear Answers
              </p>
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight sm:text-6xl">
                No mystery before booking.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <motion.article
                  key={faq.question}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="border border-slate-200 bg-slate-50 p-6"
                >
                  <CalendarCheck size={24} className="text-cyan-700" />
                  <h3 className="mt-6 font-heading text-2xl font-black">{faq.question}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{faq.answer}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-16 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 border border-white/10 bg-white/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
                Start With One Message
              </p>
              <h2 className="mt-3 font-heading text-3xl font-black">Tell us your group size and dates.</h2>
            </div>
            <a
              href={`https://wa.me/${whatsappLinkNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950"
            >
              Talk to Malang
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
