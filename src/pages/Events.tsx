import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Music, Ticket, Sparkles } from 'lucide-react';

interface EventItem {
  id: number;
  title: string;
  dateStr: string;
  dateValue: string;
  venue: string;
  genres: string;
  image: string;
  description: string;
  status: 'Sold Out' | 'Tickets Selling Fast' | 'Completed' | 'Pre-sale Active' | 'Announced';
  ticketLink?: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    title: 'OBSIDIAN NIGHTS',
    dateStr: '04 July 2026',
    dateValue: '2026-07-04',
    venue: 'The Night Cat, Melbourne',
    genres: 'Afro House • Melodic Techno • R&B',
    image: '/gallery_lasers.jpg',
    description: 'Step into the darkness. A premium showcase of deep melodic techno, hypnotic Afro rhythms, and smooth late-night R&B selectors.',
    status: 'Tickets Selling Fast',
    ticketLink: 'https://www.eventbrite.com.au'
  },
  {
    id: 2,
    title: 'TECHNOWOOD',
    dateStr: '12 June 2026',
    dateValue: '2026-06-12',
    venue: 'Chaise Lounge, Melbourne',
    genres: 'Bollywood • Punjabi • Techno • Hard Techno',
    image: '/technowood_poster.jpg',
    description: 'Where the high-energy beats of Bollywood and Punjabi meet the dark, heavy rhythms of hard techno. An underground fusion like no other.',
    status: 'Completed'
  },
  {
    id: 3,
    title: 'KULTURE HOUSE OUTDOOR FEST',
    dateStr: '15 August 2026',
    dateValue: '2026-08-15',
    venue: 'Riviera Beach Club, Melbourne',
    genres: 'Bollywood • Punjabi • Afro • House • Techno',
    image: '/gallery_dj.jpg',
    description: 'Our first large-scale day-to-night outdoor experience. Multiple stages, international acts, food trucks, and pure curated energy under the sun.',
    status: 'Pre-sale Active',
    ticketLink: 'https://www.eventbrite.com.au'
  },
  {
    id: 4,
    title: 'FRIDAY AFFAIR',
    dateStr: '15 May 2026',
    dateValue: '2026-05-15',
    venue: 'Inflation Nightclub, Melbourne',
    genres: 'Bollywood • Punjabi • R&B • UK Punjabi',
    image: '/about_crowd.jpg',
    description: "The premier Friday night destination. Launching our signature editorialized nightlife experience with the country's finest DJs.",
    status: 'Completed'
  },
  {
    id: 5,
    title: 'BOLLYWOOD BASS SYNDICATE',
    dateStr: '05 September 2026',
    dateValue: '2026-09-05',
    venue: 'Brown Alley, Melbourne',
    genres: 'Bollywood Bass • Trap • Hip-Hop • Punjabi',
    image: '/about_crowd.jpg',
    description: 'Heavy sub-bass meets traditional South Asian instruments. A high-production showcase of bass music engineered for the heavy dancers.',
    status: 'Announced',
    ticketLink: 'https://www.eventbrite.com.au'
  }
];

export default function Events() {
  const [filterTab, setFilterTab] = useState<'all' | 'upcoming' | 'past'>('all');
  
  // Date threshold of 2026-06-17 as the local current time is June 17, 2026
  const filterThreshold = useMemo(() => new Date('2026-06-17'), []);

  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter(event => {
      const eventDate = new Date(event.dateValue);
      if (filterTab === 'upcoming') {
        return eventDate >= filterThreshold;
      } else if (filterTab === 'past') {
        return eventDate < filterThreshold;
      }
      return true;
    }).sort((a, b) => {
      const dateA = new Date(a.dateValue).getTime();
      const dateB = new Date(b.dateValue).getTime();
      if (filterTab === 'upcoming') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }, [filterTab, filterThreshold]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* PAGE HERO BANNER */}
      <section className="page-hero">
        <div className="ambient-glow-bg"></div>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient-rose"
          >
            EVENTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="page-hero-subtitle"
          >
            Experience the future of South Asian nightlife. Curated sounds, immersive production, and pure energy.
          </motion.p>
        </div>
      </section>

      {/* FILTER BUTTONS AND CONTENT */}
      <section style={{ backgroundColor: 'var(--color-bg-base)', position: 'relative' }}>
        <div className="ambient-glow-bg"></div>
        <div className="container">
          
          <div className="gallery-filters-container">
            <button 
              onClick={() => setFilterTab('all')} 
              className={`btn ${filterTab === 'all' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              ALL EVENTS
            </button>
            <button 
              onClick={() => setFilterTab('upcoming')} 
              className={`btn ${filterTab === 'upcoming' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              UPCOMING
            </button>
            <button 
              onClick={() => setFilterTab('past')} 
              className={`btn ${filterTab === 'past' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              PAST SESSIONS
            </button>
          </div>

          {/* EVENTS ROW LISTING */}
          <div className="events-list-container">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event) => {
                const isPast = new Date(event.dateValue) < filterThreshold;
                return (
                  <motion.div
                    layout
                    key={event.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="glass-card event-card-grid"
                    style={{ 
                      overflow: 'hidden',
                      border: '1px solid var(--color-glass-border)',
                      position: 'relative'
                    }}
                  >
                    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '220px' }}>
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <span 
                        style={{ 
                          position: 'absolute', 
                          top: '1rem', 
                          left: '1rem', 
                          backgroundColor: 'rgba(6, 5, 8, 0.85)', 
                          border: `1px solid ${isPast ? 'var(--color-text-muted)' : 'var(--color-primary)'}`, 
                          color: isPast ? 'var(--color-text-muted)' : 'var(--color-primary)', 
                          padding: '0.25rem 0.75rem', 
                          fontSize: '0.7rem', 
                          fontWeight: 700, 
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          backdropFilter: 'blur(4px)'
                        }}
                      >
                        {event.status}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'left' }}>
                      <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Calendar size={14} /> {event.dateStr}
                      </span>
                      <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: 'var(--color-text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {event.title}
                      </h3>
                      <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                        {event.description}
                      </p>
                      
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <MapPin size={14} style={{ color: 'var(--color-primary)' }} /> {event.venue}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Music size={14} style={{ color: 'var(--color-primary)' }} /> {event.genres}
                        </span>
                      </div>

                      <div>
                        {!isPast && event.ticketLink ? (
                          <a 
                            href={event.ticketLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary btn-sm btn-glow"
                            style={{ display: 'inline-flex' }}
                          >
                            <Ticket size={14} /> GET TICKETS
                          </a>
                        ) : (
                          <span 
                            className="btn btn-outline btn-sm" 
                            style={{ opacity: 0.5, cursor: 'default', pointerEvents: 'none' }}
                          >
                            COMPLETED
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {filteredEvents.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}
              >
                <Sparkles size={24} style={{ marginBottom: '1rem', color: 'var(--color-primary)' }} />
                <p>No events found for this category. Stay tuned for new announcements!</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* EVENT ALERTS / NEWSLETTER SECTION */}
      <section className="section-partnerships" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card partnership-card"
          >
            <div className="partnership-glow" />
            <h2 className="text-gradient-gold" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>NEVER MISS A BEAT</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.8', maxWidth: '650px', margin: '0 auto 2rem' }}>
              Subscribe to get early access to ticket pre-sales, exclusive lineup announcements, and special guest list invites.
            </p>
            <div className="partnership-cta-wrapper">
              <a 
                href="/contact" 
                className="btn btn-primary btn-glow partnership-email-btn"
              >
                JOIN THE GUESTLIST
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
