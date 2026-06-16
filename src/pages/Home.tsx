import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion as framerMotion } from 'framer-motion';
import { Clock, Compass, Ticket, MapPin, Music, Sparkles, Users, Flame, ArrowRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

interface FaqItem {
  q: string;
  a: string;
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const tickerTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (tickerRef.current) {
      const targets = tickerRef.current.querySelectorAll('.ticker-inner');
      gsap.set(targets, { xPercent: -100 });
      const animation = gsap.to(targets, {
        xPercent: 0,
        ease: 'none',
        duration: 18,
        repeat: -1
      });
      tickerTweenRef.current = animation;
    }
    return () => {
      if (tickerTweenRef.current) {
        tickerTweenRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (tickerTweenRef.current) {
      tickerTweenRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (tickerTweenRef.current) {
      tickerTweenRef.current.play();
    }
  };

  // Animation variants (Tuple-cast for TS ease safety)
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const faqs: FaqItem[] = [
    {
      q: 'I am a DJ, artist, or music selector. How do I get booked for a Kulture House event?',
      a: 'We are constantly scouting for ground-breaking talent. If you specialize in Bollywood, Punjabi, Techno, or Hard Techno, send your press kit and recent mix links to info@kulturehouse.com.au. All submissions are audited by our creative directors.'
    },
    {
      q: 'What opportunities exist for photographers, videographers, or content creators?',
      a: 'We offer exclusive media passes and content creation access for visual artists who align with our luxury brand aesthetic. Please email info@kulturehouse.com.au with your portfolio and active social handles to apply for media accreditation.'
    },
    {
      q: 'Where do I purchase tickets and is there a strict capacity limit?',
      a: 'All event tickets are sold exclusively through our official ticketing partner platforms (e.g., Eventbrite). Click the "GET TICKETS" button on any upcoming event block to be directed to the secure page. Tickets are not sold at the door once capacity is reached.'
    },
    {
      q: 'What is the entry policy, age restriction, and dress code?',
      a: 'Kulture House events are strict 18+ and require a valid physical photo ID (Driver\'s License, Proof of Age card, or Passport) for entry. The dress code is fashion-forward / smart-casual. Athletic wear, tracksuits, and activewear are not permitted.'
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <div className="noise-overlay"></div>

      {/* SECTION 1 — HERO */}
      <section className="hero-section" id="hero">
        <div className="ambient-glow-bg"></div>
        <div className="hero-video-container">
          <img 
            src="/about_crowd.jpg" 
            alt="Kulture House Event Background" 
            className="hero-video-mock"
            style={{
              animation: 'kenBurns 25s infinite alternate ease-in-out'
            }}
          />
          <div className="hero-gradient-overlay"></div>
          
          {/* Dynamic Glow Layer highlights to add life & depth */}
          <div className="hero-glow-effect"></div>
          <div 
            style={{
              position: 'absolute',
              top: '20%',
              left: '15%',
              width: '300px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(243, 178, 82, 0.08) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none',
              animation: 'pulseGlowBig 7s infinite alternate'
            }}
          />
          <div 
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '15%',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, transparent 70%)',
              filter: 'blur(60px)',
              pointerEvents: 'none',
              animation: 'pulseGlowBig 9s infinite alternate-reverse'
            }}
          />
        </div>

        <div className="hero-content container">
          <framerMotion.span 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1 }}
            className="hero-tagline"
          >
            WELCOME TO
          </framerMotion.span>
          <framerMotion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] }}
            className="hero-title text-gradient-gold"
          >
            KULTURE HOUSE
          </framerMotion.h1>
          <framerMotion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            South Asian Events • Entertainment • Nightlife
          </framerMotion.p>
          <framerMotion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-description"
          >
            Creating unforgettable experiences through music, energy and atmosphere.
          </framerMotion.p>

          <framerMotion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-actions"
          >
            <a href="https://www.eventbrite.com.au" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow">GET TICKETS</a>
            <a href="#upcoming-highlight" className="btn btn-outline">EXPLORE EVENTS</a>
          </framerMotion.div>
        </div>

        <div className="hero-ticker-container" ref={tickerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="ticker-inner">
            <span>KULTURE HOUSE • BOLLYWOOD • PUNJABI • TECHNO • IMMERSIVE SENSES •&nbsp;</span>
          </div>
          <div className="ticker-inner">
            <span>KULTURE HOUSE • BOLLYWOOD • PUNJABI • TECHNO • IMMERSIVE SENSES •&nbsp;</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — UPCOMING EVENT (TECHNOWOOD SPOTLIGHT) */}
      <section className="section-spotlight" id="upcoming-highlight" style={{ marginTop: 0 }}>
        <div className="ambient-glow-bg"></div>
        <div className="container spotlight-grid">
          <framerMotion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="spotlight-content"
          >
            <span className="spotlight-tag">Next Experience</span>
            <h2 className="spotlight-title text-gradient-gold">TECHNOWOOD</h2>
            <p className="spotlight-genres">Bollywood • Punjabi • Techno • Hard Techno</p>
            
            <div className="spotlight-meta">
              <div className="meta-item">
                <span className="meta-icon"><Clock size={20} /></span>
                <span>12 June 2026</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon"><Compass size={20} /></span>
                <span>Chaise Lounge, Melbourne</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon"><Ticket size={20} /></span>
                <span style={{ fontWeight: 600 }}>Limited Capacity</span>
              </div>
            </div>

            <a href="https://www.eventbrite.com.au" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              GET TICKETS <ArrowRight size={16} />
            </a>
          </framerMotion.div>

          <framerMotion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="spotlight-poster"
          >
            <div className="spotlight-poster-placeholder" />
          </framerMotion.div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT KULTURE HOUSE (EDITORIALIZED HIGHLIGHTS) */}
      <section className="section-about">
        <div className="ambient-glow-bg"></div>
        <div className="container about-grid">
          <framerMotion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-image-wrapper"
          >
            <img src="/about_crowd.jpg" alt="Kulture House Event Crowd" className="about-image" />
          </framerMotion.div>

          <framerMotion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="about-content"
          >
            <h2 className="text-gradient-rose">What is Kulture House?</h2>
            
            {/* Quick Information Highlights (Non-wikipedia style) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Music size={18} /></span>
                <div>
                  <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>GENRE-BENDING MUSIC</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Fusing high-tempo Bollywood and Punjabi vocals with hard underground Techno.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Sparkles size={18} /></span>
                <div>
                  <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>ELITE VISUAL PRODUCTION</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Custom visual projection screens, lasers, and immersive dynamic lighting.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Users size={18} /></span>
                <div>
                  <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>DIVERSE COMMUNITY</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Bringing thousands of music enthusiasts together under gold-standard hospitality.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn btn-outline">LEARN MORE</Link>
          </framerMotion.div>
        </div>
      </section>

      {/* SECTION 4 — OUR EVENTS (BRANDS) */}
      <section className="section-brands section-dark">
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient-gold">OUR EVENTS</h2>
            <p style={{ fontSize: '0.9rem' }}>We curate signature event brands, engineered for unforgettable nightlife.</p>
          </div>

          <framerMotion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="brands-grid"
          >
            <framerMotion.div 
              variants={fadeInUp} 
              className="brand-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="brand-icon"><Flame size={28} /></div>
              <h3 style={{ fontSize: '1.2rem' }}>THE FRIDAY AFFAIR</h3>
              <p className="brand-desc" style={{ fontSize: '0.85rem' }}>
                High-energy Bollywood and Punjabi club nights setting the weekend standard.
              </p>
            </framerMotion.div>

            <framerMotion.div 
              variants={fadeInUp} 
              className="brand-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="brand-icon"><Music size={28} /></div>
              <h3 style={{ fontSize: '1.2rem' }}>KULTURE PRESENTS</h3>
              <p className="brand-desc" style={{ fontSize: '0.85rem' }}>
                Unique concept takeovers blending custom soundscapes and cultural design.
              </p>
            </framerMotion.div>

            <framerMotion.div 
              variants={fadeInUp} 
              className="brand-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="brand-icon"><Sparkles size={28} /></div>
              <h3 style={{ fontSize: '1.2rem' }}>SPECIAL EXPERIENCES</h3>
              <p className="brand-desc" style={{ fontSize: '0.85rem' }}>
                New experimental themes, warehouse pop-ups, and legendary tour moments.
              </p>
            </framerMotion.div>
          </framerMotion.div>
        </div>
      </section>

      {/* SECTION 5 — UPCOMING EVENTS LIST */}
      <section className="section-events-list">
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient-rose">UPCOMING EVENTS</h2>
            <p style={{ fontSize: '0.9rem' }}>Secure tickets early. Capacity limits apply.</p>
          </div>

          <framerMotion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="events-list-container"
          >
            {/* Event 1 */}
            <framerMotion.div 
              variants={fadeInUp} 
              className="event-row-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="event-row-date">
                <span className="event-row-day" style={{ fontSize: '1.8rem' }}>12</span>
                <span className="event-row-month" style={{ fontSize: '0.75rem' }}>June 2026</span>
              </div>
              <div className="event-row-info">
                <h3 style={{ fontSize: '1.3rem' }}>TECHNOWOOD</h3>
                <div className="event-row-details">
                  <span><MapPin size={13} /> Melbourne</span>
                  <span>•</span>
                  <span>Bollywood • Punjabi • Techno • Hard Techno</span>
                </div>
              </div>
              <div className="event-row-cta">
                <a 
                  href="https://www.eventbrite.com.au" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary btn-glow" 
                  style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
                >
                  GET TICKETS
                </a>
              </div>
            </framerMotion.div>

            {/* Event 2 */}
            <framerMotion.div 
              variants={fadeInUp} 
              className="event-row-card glass-card" 
              style={{ opacity: 0.85 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="event-row-date">
                <span className="event-row-day" style={{ fontSize: '1.8rem' }}>--</span>
                <span className="event-row-month" style={{ fontSize: '0.75rem' }}>July 2026</span>
              </div>
              <div className="event-row-info">
                <h3 style={{ fontSize: '1.3rem' }}>COMING SOON</h3>
                <div className="event-row-details">
                  <span><MapPin size={13} /> Melbourne</span>
                  <span>•</span>
                  <span>New Experience</span>
                </div>
              </div>
              <div className="event-row-cta">
                <Link to="/contact" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
                  JOIN WAITLIST
                </Link>
              </div>
            </framerMotion.div>

            {/* Event 3 */}
            <framerMotion.div 
              variants={fadeInUp} 
              className="event-row-card glass-card" 
              style={{ opacity: 0.85 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="event-row-date">
                <span className="event-row-day" style={{ fontSize: '1.8rem' }}>--</span>
                <span className="event-row-month" style={{ fontSize: '0.75rem' }}>August 2026</span>
              </div>
              <div className="event-row-info">
                <h3 style={{ fontSize: '1.3rem' }}>COMING SOON</h3>
                <div className="event-row-details">
                  <span><MapPin size={13} /> Australia</span>
                  <span>•</span>
                  <span>New Experience</span>
                </div>
              </div>
              <div className="event-row-cta">
                <Link to="/contact" className="btn btn-outline" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}>
                  JOIN WAITLIST
                </Link>
              </div>
            </framerMotion.div>
          </framerMotion.div>
        </div>
      </section>

      {/* SECTION 6 — THE EXPERIENCE */}
      <section className="section-experience section-dark">
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient-gold">THE EXPERIENCE</h2>
            <p style={{ fontSize: '0.9rem' }}>Every detail is engineered to deliver elite-level entertainment.</p>
          </div>

          <framerMotion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="experience-grid"
          >
            <framerMotion.div 
              variants={fadeInUp} 
              className="experience-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="experience-card-icon"><Music size={24} /></div>
              <h3 style={{ fontSize: '1.1rem' }}>MUSIC</h3>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>Curated soundscapes fusing Bollywood, Punjabi, House, and Hard Techno.</p>
            </framerMotion.div>

            <framerMotion.div 
              variants={fadeInUp} 
              className="experience-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="experience-card-icon"><Sparkles size={24} /></div>
              <h3 style={{ fontSize: '1.1rem' }}>ATMOSPHERE</h3>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>Bespoke visuals, custom laser setups, and immersive lighting systems.</p>
            </framerMotion.div>

            <framerMotion.div 
              variants={fadeInUp} 
              className="experience-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="experience-card-icon"><Users size={24} /></div>
              <h3 style={{ fontSize: '1.1rem' }}>COMMUNITY</h3>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>Connecting hundreds of South Asian music lovers across Australia.</p>
            </framerMotion.div>

            <framerMotion.div 
              variants={fadeInUp} 
              className="experience-card glass-card"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="experience-card-icon"><Flame size={24} /></div>
              <h3 style={{ fontSize: '1.1rem' }}>ENERGY</h3>
              <p style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>High-tempo nightlife moments that stay with you long after the doors close.</p>
            </framerMotion.div>
          </framerMotion.div>
        </div>
      </section>

      {/* SECTION 7 — GALLERY (PAST MOMENTS) */}
      <section className="section-gallery">
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient-rose">PAST MOMENTS</h2>
            <p style={{ fontSize: '0.9rem' }}>Snapshots of our visual production, music selectors, and community.</p>
          </div>

          <div className="gallery-grid">
            <framerMotion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="gallery-item col-6"
            >
              <img src="/about_crowd.jpg" alt="Crowd dancing at Kulture House launch event" />
              <div className="gallery-hover">
                <span className="gallery-caption">Crowd Energy</span>
              </div>
            </framerMotion.div>

            <framerMotion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="gallery-item col-6"
            >
              <img src="/gallery_dj.jpg" alt="DJ performing live on CDJs" />
              <div className="gallery-hover">
                <span className="gallery-caption">On The Decks</span>
              </div>
            </framerMotion.div>

            <framerMotion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="gallery-item col-8"
            >
              <img src="/gallery_lasers.jpg" alt="Amber laser beam visual stage production setup" />
              <div className="gallery-hover">
                <span className="gallery-caption">Bespoke Laser Production</span>
              </div>
            </framerMotion.div>

            <framerMotion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="gallery-item col-4"
            >
              <img src="/technowood_poster.jpg" alt="Technowood Event Launch Poster Melbourne" />
              <div className="gallery-hover">
                <span className="gallery-caption">Technowood Melbourne</span>
              </div>
            </framerMotion.div>
          </div>

          <div className="gallery-actions">
            <Link to="/gallery" className="btn btn-outline">VIEW GALLERY</Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — INSTAGRAM FEED */}
      <section className="section-instagram section-dark">
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient-rose">FOLLOW THE MOVEMENT</h2>
            <p style={{ fontSize: '0.9rem' }}>Catch highlights, reels, and updates direct from our Instagram channel.</p>
          </div>

          <div className="insta-grid">
            <div className="insta-item">
              <img src="/about_crowd.jpg" alt="Kulture House energetic crowd visual on instagram" />
              <div className="insta-overlay">
                <div className="insta-icon-container">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div className="insta-item">
              <img src="/gallery_dj.jpg" alt="DJ CDJ decks mixing highlight on instagram" />
              <div className="insta-overlay">
                <div className="insta-icon-container">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div className="insta-item">
              <img src="/gallery_lasers.jpg" alt="Concert stage laser lights visual on instagram" />
              <div className="insta-overlay">
                <div className="insta-icon-container">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            </div>
            <div className="insta-item">
              <img src="/technowood_poster.jpg" alt="Technowood Melbourne launch ticket update on instagram" />
              <div className="insta-overlay">
                <div className="insta-icon-container">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="insta-actions">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              FOLLOW @KULTUREHOUSE
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 8.5 — PARTNERSHIPS */}
      <section className="section-partnerships" id="partnerships" style={{ paddingBottom: '3rem' }}>
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <framerMotion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-card partnership-card"
          >
            <div className="partnership-glow" />
            <span className="spotlight-tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>COLLABORATION GOALS</span>
            <h2 className="text-gradient-gold" style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 800 }}>BRAND & VENUE PARTNERSHIPS</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
              We partner with premium brands, high-end venues, and national sponsors to construct unforgettable cultural events and nightlife showcases across Australia. Whether it is a brand activation, custom takeover, or sponsor integration, let's create something extraordinary.
            </p>
            <div className="partnership-cta-wrapper">
              <span className="partnership-cta-tag">GET IN TOUCH</span>
              <a 
                href="mailto:partners@kulturehouse.com.au" 
                className="btn btn-primary btn-glow partnership-email-btn"
              >
                partners@kulturehouse.com.au
              </a>
            </div>
          </framerMotion.div>
        </div>
      </section>

      {/* SECTION 9 — FAQs */}
      <section className="section-faq">
        <div className="ambient-glow-bg"></div>
        <div className="container faq-section">
          <div className="section-header">
            <h2 className="text-gradient-gold">FREQUENTLY ASKED QUESTIONS</h2>
            <p style={{ fontSize: '0.9rem' }}>Information regarding DJ bookings, tickets, entry policy, and media accreditation.</p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item glass-card ${activeFaq === index ? 'active' : ''}`}
                style={{ border: '1px solid var(--color-glass-border)' }}
              >
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <span className="faq-arrow"><ChevronDown size={18} /></span>
                </button>
                <div className="faq-answer">
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
