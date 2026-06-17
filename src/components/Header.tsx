import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 991;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    handleScroll();
    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.classList.remove('menu-open');
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="header-container container">
        <div className="logo-container">
          <Link to="/" onClick={closeMenu} className="logo-link">
            <img src="/logo.png" alt="KULTURE HOUSE Logo" className="header-logo" />
          </Link>
        </div>

        {/* Hamburger Toggle with sleek target padding */}
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
          aria-expanded={isOpen}
        >
          <span className="menu-circle"></span>
          <div className="nav-toggle-box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Menu - Fullscreen Glassmorphic Overlay for Mobile */}
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink 
                to="/" 
                onClick={closeMenu} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/events" 
                onClick={closeMenu} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/gallery" 
                onClick={closeMenu} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                onClick={closeMenu} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                onClick={closeMenu} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          
          {/* Mobile CTA */}
          <div className="mobile-cta">
            <a 
              href="https://www.eventbrite.com.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={closeMenu} 
              className="btn btn-primary btn-glow" 
              style={{ width: '100%' }}
            >
              🔥 GET TICKETS
            </a>
          </div>
        </nav>

        {/* Desktop CTA */}
        <div className="header-cta">
          <a 
            href="https://www.eventbrite.com.au" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary btn-glow"
          >
            GET TICKETS
          </a>
        </div>
      </div>
    </header>
  );
}
