import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Destinations = lazy(() => import('./pages/Destinations'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Home = lazy(() => import('./pages/Home'));
const PackageDetail = lazy(() => import('./pages/PackageDetail'));

function App() {
  return (
    <div className="font-body selection:bg-cyan-200 selection:text-slate-950">
      <BrowserRouter>
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/package/:id" element={<PackageDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function RouteLoader() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin border-2 border-white/20 border-t-cyan-200" />
        <p className="mt-5 text-xs font-black uppercase tracking-[0.28em] text-white/50">
          Loading Malang
        </p>
      </div>
    </div>
  );
}

export default App;
