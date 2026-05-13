import { motion } from 'framer-motion';
import { Mountain, Snowflake, ShieldCheck } from 'lucide-react';
import HeroCanvas from '../components/3D/HeroCanvas';
import PackageCard from '../components/UI/PackageCard';
import { tourPackages } from '../data/packages';
import AnimatedMap from '../components/UI/AnimatedMap';
import Footer from '../components/UI/Footer';
import InquiryForm from '../components/UI/InquiryForm';

export default function Home() {
  return (
    <div className="relative min-h-screen font-body text-brand-snow selection:bg-brand-iceMid selection:text-brand-midnight">

      {/* 1. FIXED VIDEO BACKGROUND */}
      {/* This stays permanently in the back, playing as the user scrolls */}
      <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
         <HeroCanvas />
      </div>

      <main className="relative z-10 w-full">

        {/* PHASE 1: THE MINIMAL CINEMATIC INTRO 
           Height is 200vh. This means the user has to scroll down for a long time,
           giving the video plenty of time to play its cinematic sweep before any UI appears.
        */}
        <section className="h-[200vh] w-full flex flex-col items-center justify-start pt-[35vh] text-center px-4 relative z-10">
          
          <span className="text-brand-snow/90 text-xs md:text-sm tracking-[0.4em] uppercase font-bold mb-6 drop-shadow-md">
            Indore's Premier Curator
          </span>
          
          <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-heading font-bold leading-none tracking-wide mb-6" style={{ textShadow: '0 10px 40px rgba(0,0,0,0.6)' }}>
            MALANG
          </h1>
          
          <p className="text-xl md:text-3xl font-heading italic tracking-wider opacity-90 drop-shadow-md">
            The Journey to the Top
          </p>

          {/* Animated Scroll Line */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-24 flex flex-col items-center gap-3 opacity-80"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll to Begin</span>
            <div className="w-[1px] h-16 bg-white/60"></div>
          </motion.div>
          
        </section>


        {/* PHASE 2: THE WEBSITE CONTENT */}
        <div id="about" className="relative z-20 pb-32 bg-transparent">
          
          {/* THE STICKY NAVBAR */}
          <nav className="sticky top-0 z-50 w-full flex justify-between items-center px-6 md:px-12 py-5 bg-white/10 backdrop-blur-xl border-b border-white/10 transition-all shadow-lg">
            <div className="flex items-center gap-2">
              <Mountain size={28} className="text-brand-snow" />
              <div className="leading-tight">
                <h1 className="text-xl font-bold tracking-widest font-heading uppercase">Malang</h1>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase opacity-80">Adventures</p>
              </div>
            </div>
            
            <div className="hidden lg:flex gap-8 text-sm font-medium tracking-wider uppercase opacity-90">
              <a href="/" className="hover:text-brand-iceMid transition-colors">Home</a>
              <a href="/#about" className="hover:text-brand-iceMid transition-colors">About</a>
              <a href="/#packages" className="hover:text-brand-iceMid transition-colors">Adventures</a>
              <a href="/#destinations" className="hover:text-brand-iceMid transition-colors">Destinations</a>
            </div>

            <button className="glass-button-secondary text-sm">Book Now</button>
          </nav>

          {/* Features Bar */}
          <div className="w-full max-w-5xl mx-auto px-4 mt-12 mb-24 relative z-20">
            <div className="glass-panel p-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="flex items-center gap-4 px-4">
                <div className="p-3 rounded-full border border-white/30"><Mountain size={24} className="text-brand-iceMid"/></div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase">Handpicked</h4>
                  <p className="text-xs opacity-70 mt-1 leading-relaxed">Curated adventures for true explorers.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 pt-4 md:pt-0">
                <div className="p-3 rounded-full border border-white/30"><Snowflake size={24} className="text-brand-iceMid"/></div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase">Kashmir Beauty</h4>
                  <p className="text-xs opacity-70 mt-1 leading-relaxed">Breathtaking landscapes like paradise.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-4 pt-4 md:pt-0">
                <div className="p-3 rounded-full border border-white/30"><ShieldCheck size={24} className="text-brand-iceMid"/></div>
                <div>
                  <h4 className="font-bold text-sm tracking-wider uppercase">Safe & Trusted</h4>
                  <p className="text-xs opacity-70 mt-1 leading-relaxed">Your safety is our top priority.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Packages Section */}
          <section id="packages" className="max-w-7xl mx-auto px-4 relative z-10 pt-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-heading inline-block glass-panel px-10 py-4 shadow-2xl">
                Featured Expeditions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {tourPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </section>

          {/* Map Section */}
          <div id="destinations">
            <AnimatedMap />
          </div>

          {/* Inquiry Form */}
          <InquiryForm />

          {/* Footer */}
          <Footer />

        </div> {/* This closes the relative z-20 pb-32 div */}
      </main> {/* This closes the relative z-10 w-full main */}
    </div>
  );
}