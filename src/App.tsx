import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

// Lazy load pages for dynamic code splitting
const Home = lazy(() => import('./pages/Home'));
const Events = lazy(() => import('./pages/Events'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Premium dynamic loader fallback
const LoadingFallback = () => (
  <div 
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '80vh', 
      flexDirection: 'column',
      gap: '1rem',
      backgroundColor: 'var(--color-bg-base)',
      color: 'var(--color-primary)'
    }}
  >
    <div 
      className="accelerated"
      style={{
        width: '40px',
        height: '40px',
        border: '2px solid rgba(243, 178, 82, 0.1)',
        borderTop: '2px solid var(--color-primary)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}
    />
    <span style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-heading)' }}>
      Loading Kulture...
    </span>
  </div>
);

function App() {
  return (
    <Router>
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <main style={{ flexGrow: 1 }}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
