import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        {/* Brand Information */}
        <div className="footer-brand">
          <Link to="/" className="logo-link">
            <img src="/logo.png" alt="KULTURE HOUSE Logo" className="footer-logo" />
          </Link>
          <span className="footer-tagline">South Asian Music • Entertainment • Nightlife</span>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6', maxWidth: '350px' }}>
            Bringing people together through music, entertainment, and unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <nav className="footer-nav">
            <Link to="/" className="footer-nav-item">Home</Link>
            <Link to="/events" className="footer-nav-item">Events</Link>
            <Link to="/gallery" className="footer-nav-item">Gallery</Link>
            <Link to="/about" className="footer-nav-item">About</Link>
            <Link to="/contact" className="footer-nav-item">Contact</Link>
          </nav>
        </div>

        {/* Socials & Newsletter Integrated */}
        <div className="footer-socials">
          <h3>Stay Connected</h3>
          <div style={{ marginBottom: '1.5rem' }}>
            {/* Embedded Newsletter inside footer in a small, elegant layout */}
            <NewsletterForm />
          </div>
          
          <div className="footer-social-icons">
            <a 
              href="https://www.instagram.com/kulturehouse.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link glass-card"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@kulturehouse.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link glass-card"
              aria-label="TikTok"
            >
              <svg 
                viewBox="0 0 24 24" 
                width="18" 
                height="18" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/kulturehouse.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link glass-card"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom container">
        <span>© 2026 KULTURE HOUSE. All rights reserved.</span>
        <span>Creating unforgettable experiences.</span>
      </div>
    </footer>
  );
}
