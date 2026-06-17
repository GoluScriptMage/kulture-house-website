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
      q: 'How do I purchase tickets?',
      a: 'Tickets can be purchased through our official ticketing platform. Event links will be available on our website and social media pages.'
    },
    {
      q: 'What is the entry policy and age requirement?',
      a: 'KULTURE HOUSE events are strictly 18+. A valid government-issued photo ID is required for entry. Management reserves the right to refuse entry.'
    },
    {
      q: 'Are tickets available at the door?',
      a: 'Door tickets may be available depending on capacity. We recommend purchasing tickets in advance to avoid missing out.'
    },
    {
      q: 'Do you offer VIP packages?',
      a: 'Yes. VIP packages and table bookings may be available for selected events. Please contact us through our website or social media channels for availability and pricing.'
    },
    {
      q: 'Can I celebrate my birthday at a KULTURE HOUSE event?',
      a: 'Yes. For birthday bookings, special occasions, or VIP experiences, please contact our team through the website or social media channels.'
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
            South Asian Music • Entertainment • Nightlife
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
            <span>Bollywood • Punjabi • R&B • Afro • House • Techno •&nbsp;</span>
          </div>
          <div className="ticker-inner">
            <span>Bollywood • Punjabi • R&B • Afro • House • Techno •&nbsp;</span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — UPCOMING EVENT (DYNAMIC SPOTLIGHT) */}
      {(() => {
        // Defined inline event data mirroring the master events source
        const eventsList = [
          {
            title: 'OBSIDIAN NIGHTS',
            dateStr: '04 July 2026',
            dateValue: '2026-07-04',
            venue: 'The Night Cat, Melbourne',
            genres: 'Afro House • Melodic Techno • R&B',
            image: '/gallery_lasers.jpg',
            status: 'Tickets Selling Fast',
            ticketLink: 'https://www.eventbrite.com.au'
          },
          {
            title: 'TECHNOWOOD',
            dateStr: '12 June 2026',
            dateValue: '2026-06-12',
            venue: 'Chaise Lounge, Melbourne',
            genres: 'Bollywood • Punjabi • Techno • Hard Techno',
            image: '/technowood_poster.jpeg',
            status: 'Completed'
          },
          {
            title: 'KULTURE HOUSE OUTDOOR FEST',
            dateStr: '15 August 2026',
            dateValue: '2026-08-15',
            venue: 'Riviera Beach Club, Melbourne',
            genres: 'Bollywood • Punjabi • Afro • House • Techno',
            image: '/bolly_to_find.jpeg',
            status: 'Pre-sale Active',
            ticketLink: 'https://www.eventbrite.com.au'
          },
          {
            title: 'FRIDAY AFFAIR',
            dateStr: '15 May 2026',
            dateValue: '2026-05-15',
            venue: 'Inflation Nightclub, Melbourne',
            genres: 'Bollywood • Punjabi • R&B • UK Punjabi',
            image: '/about_crowd.jpg',
            status: 'Completed'
          },
          {
            title: 'BOLLYWOOD BASS SYNDICATE',
            dateStr: '05 September 2026',
            dateValue: '2026-09-05',
            venue: 'Brown Alley, Melbourne',
            genres: 'Bollywood Bass • Trap • Hip-Hop • Punjabi',
            image: '/Bollywood_poster.jpeg',
            status: 'Announced',
            ticketLink: 'https://www.eventbrite.com.au'
          }
        ];

        // Current time threshold is 2026-06-17
        const today = new Date('2026-06-17');

        // Find upcoming events (sorted ascending by date)
        const upcomingEvents = eventsList
          .filter(e => new Date(e.dateValue) >= today)
          .sort((a, b) => new Date(a.dateValue).getTime() - new Date(b.dateValue).getTime());

        // Find past events (sorted descending by date to get the most recent past one)
        const pastEvents = eventsList
          .filter(e => new Date(e.dateValue) < today)
          .sort((a, b) => new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime());

        // Target event: Show next upcoming event; if none, fallback to the latest completed event
        const targetEvent = upcomingEvents.length > 0 ? upcomingEvents[0] : pastEvents[0];

        if (!targetEvent) return null;

        const isPast = new Date(targetEvent.dateValue) < today;

        return (
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
                <span className="spotlight-tag" style={{ paddingTop: '6px' }}>
                  {isPast ? 'RECENT EVENT' : 'UPCOMING EVENT'}
                </span>
                <h2 className="spotlight-title text-gradient-gold">{targetEvent.title}</h2>
                <p className="spotlight-genres">{targetEvent.genres}</p>
                
                <div className="spotlight-meta">
                  <div className="meta-item">
                    <span className="meta-icon"><Clock size={20} /></span>
                    <span>{targetEvent.dateStr}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon"><Compass size={20} /></span>
                    <span>{targetEvent.venue}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon"><Ticket size={20} /></span>
                    <span style={{ fontWeight: 600 }}>
                      {isPast ? 'COMPLETED' : targetEvent.status}
                    </span>
                  </div>
                </div>

                {!isPast && targetEvent.ticketLink ? (
                  <a href={targetEvent.ticketLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    GET TICKETS <ArrowRight size={16} />
                  </a>
                ) : (
                  <span className="btn btn-outline" style={{ opacity: 0.5, cursor: 'default', pointerEvents: 'none' }}>
                    SESSION COMPLETED
                  </span>
                )}
              </framerMotion.div>

              <framerMotion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="spotlight-poster"
              >
                <img 
                  src={targetEvent.image} 
                  alt={`${targetEvent.title} Event Poster`} 
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px', border: '1px solid var(--color-glass-border)' }} 
                />
              </framerMotion.div>
            </div>
          </section>
        );
      })()}

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
            
            {/* Quick Information Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '2rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Music size={18} /></span>
                <div>
                  <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>PREMIUM EVENTS</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Creating unique music and nightlife experiences.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Sparkles size={18} /></span>
                <div>
                  <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>UNFORGETTABLE EXPERIENCES</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>From intimate gatherings to large-scale events, every experience is designed with attention to detail.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Users size={18} /></span>
                <div>
                  <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>COMMUNITY DRIVEN</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>Bringing people together through music, entertainment and memorable nights.</p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn btn-outline">ABOUT US</Link>
          </framerMotion.div>
        </div>
      </section>

      {/* SECTION 7 — EVENT HIGHLIGHTS */}
      <section className="section-gallery">
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient-rose">EVENT HIGHLIGHTS</h2>
            <p style={{ fontSize: '0.9rem' }}>A collection of moments from previous KULTURE HOUSE experiences.</p>
          </div>

          <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
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
          </div>

          <div className="gallery-actions">
            <Link to="/gallery" className="btn btn-outline">VIEW ALL</Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — SOCIAL MEDIA */}
      <section className="section-instagram section-dark">
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <div className="section-header">
            <h2 className="text-gradient-rose">FOLLOW US ON SOCIAL MEDIA</h2>
            <p style={{ fontSize: '0.9rem' }}>Stay connected for event announcements, highlights, and upcoming experiences.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '2rem' }}>
            <a 
              href="https://www.instagram.com/kulturehouse.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ padding: '0.8rem 1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              INSTAGRAM
            </a>
            <a 
              href="https://www.tiktok.com/@kulturehouse.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ padding: '0.8rem 1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg 
                viewBox="0 0 24 24" 
                width="20" 
                height="20" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
              TIKTOK
            </a>
            <a 
              href="https://www.facebook.com/kulturehouse.au" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
              style={{ padding: '0.8rem 1.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              FACEBOOK
            </a>
          </div>
        </div>
      </section>

      {/* NEW SECTION — JOIN OUR TEAM */}
      <section className="section-join-team" style={{ paddingBottom: '3rem' }}>
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
            <h2 className="text-gradient-gold" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>JOIN OUR TEAM</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '650px', margin: '0 auto 2rem' }}>
              Interested in content creation, marketing, photography, videography, event operations, or promoters? Join the KULTURE HOUSE team and help create unforgettable experiences.
            </p>
            <div className="partnership-cta-wrapper">
              <Link 
                to="/contact" 
                className="btn btn-primary btn-glow partnership-email-btn"
              >
                JOIN THE TEAM
              </Link>
            </div>
          </framerMotion.div>
        </div>
      </section>

      {/* SECTION 8.5 — PARTNERSHIPS */}
      <section className="section-partnerships" id="partnerships" style={{ paddingBottom: '3rem', paddingTop: '1rem' }}>
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
            <h2 className="text-gradient-gold" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>PARTNERSHIPS</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '650px', margin: '0 auto 2rem' }}>
              Interested in partnering with KULTURE HOUSE? We work with brands, venues, sponsors, and creators to deliver memorable experiences and meaningful collaborations.
            </p>
            <div className="partnership-cta-wrapper">
              <a 
                href="mailto:partners@kulturehouse.com.au" 
                className="btn btn-primary btn-glow partnership-email-btn"
              >
                GET IN TOUCH
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
            <h2 className="text-gradient-gold">FAQ</h2>
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
