import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PackageDetail from './pages/PackageDetail';

function App() {
  return (
    <div className="font-body selection:bg-brand-accent selection:text-brand-dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package/:id" element={<PackageDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;