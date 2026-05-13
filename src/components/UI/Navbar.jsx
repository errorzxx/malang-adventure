import { Link } from 'react-router-dom';
import { Map, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 p-4">
      <div className="max-w-7xl mx-auto glass-panel px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Map className="text-brand-darkGreen" size={32} />
          <div>
            <h1 className="text-2xl font-bold tracking-wider text-brand-darkGreen font-heading">
              MALANG
            </h1>
            <p className="text-xs tracking-[0.2em] font-semibold text-brand-darkGreen/70 uppercase">
              Adventures
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 font-semibold text-brand-darkGreen">
          <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
          <a href="/#about" className="hover:text-brand-green transition-colors">About</a>
          <a href="/#packages" className="hover:text-brand-green transition-colors">Packages</a>
          <a href="/#destinations" className="hover:text-brand-green transition-colors">Destinations</a>
        </div>

        <button className="glass-button flex items-center gap-2">
          <Phone size={18} />
          <span>Book Now</span>
        </button>
      </div>
    </nav>
  );
}