import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Clapperboard, Image as ImageIcon, Sparkles } from 'lucide-react';
import Footer from '../components/UI/Footer';
import SiteNav from '../components/UI/SiteNav';
import { galleryMoments, whatsappLinkNumber, whatsappMessage } from '../data/site';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-slate-950 font-body text-white selection:bg-cyan-200 selection:text-slate-950">
      <SiteNav />
      <main>
        <section className="relative flex min-h-[82vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8">
          <img src="/images/dal-lake.jpg" alt="Dal Lake Kashmir" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/10" />
          <div className="relative mx-auto w-full max-w-7xl">
            <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-200">
              Gallery
            </p>
            <h1 className="mt-5 max-w-5xl font-heading text-5xl font-black leading-[0.95] sm:text-7xl lg:text-8xl">
              Proof that the route looks as good as it sounds.
            </h1>
          </div>
        </section>

        <section className="bg-slate-950 px-5 py-14 sm:px-8">
          <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
            {[
              [Camera, 'Photo Stops', 'Dal Lake, Gulmarg, Sonmarg, Pahalgam'],
              [Clapperboard, 'Cinematic Route', 'Train movement, valley drives, snow scenes'],
              [Sparkles, 'Social Moments', 'Bonfire night, shikara rides, group memories'],
            ].map(([Icon, title, copy]) => (
              <div key={title} className="border border-white/10 bg-white/[0.05] p-5">
                <Icon size={24} className="text-amber-200" />
                <h2 className="mt-5 font-heading text-2xl font-black">{title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/55">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f6f9fb] px-5 py-20 text-slate-950 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.34em] text-cyan-700">
                  Visual Moments
                </p>
                <h2 className="mt-4 max-w-3xl font-heading text-4xl font-black leading-tight sm:text-6xl">
                  A gallery built for wander mode.
                </h2>
              </div>
              <Link
                to="/#packages"
                className="group inline-flex w-fit items-center gap-3 bg-slate-950 px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5"
              >
                Book This Route
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
              {[...galleryMoments, ...galleryMoments.slice(0, 3)].map((item, index) => (
                <motion.figure
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
                  className="group mb-4 break-inside-avoid overflow-hidden border border-slate-950/10 bg-white shadow-xl shadow-slate-950/5"
                >
                  <div className="image-shine relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full object-cover transition-transform duration-1000 group-hover:scale-110 ${
                        index % 4 === 0 ? 'h-[440px]' : index % 3 === 0 ? 'h-[360px]' : 'h-[300px]'
                      }`}
                    />
                  </div>
                  <figcaption className="p-5">
                    <p className="flex items-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-cyan-700">
                      <ImageIcon size={14} />
                      {item.tone}
                    </p>
                    <h3 className="mt-3 font-heading text-2xl font-black">{item.title}</h3>
                    <p className="mt-1 text-sm font-bold text-slate-500">{item.location}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-slate-950 px-5 py-20 sm:px-8">
          <div className="absolute inset-0 opacity-25">
            <img src="/images/gulmarg.jpg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-slate-950/76" />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-6 border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-200">
                Your Turn
              </p>
              <h2 className="mt-3 font-heading text-3xl font-black sm:text-4xl">
                Bring your own group into the frame.
              </h2>
            </div>
            <a
              href={`https://wa.me/${whatsappLinkNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-950"
            >
              Plan on WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
