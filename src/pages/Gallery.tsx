import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'photos' | 'videos'>('all');

  const galleryItems = [
    {
      id: 1,
      type: 'photos',
      title: 'Crowd Energy',
      image: '/about_crowd.jpg',
      category: 'Launch Party'
    },
    {
      id: 2,
      type: 'photos',
      title: 'On The Decks',
      image: '/gallery_dj.jpg',
      category: 'DJ Set'
    },
    {
      id: 3,
      type: 'videos',
      title: 'Technowood Official Aftermovie',
      image: '/gallery_lasers.jpg',
      category: 'Recap Video'
    },
    {
      id: 4,
      type: 'photos',
      title: 'Obsidian Nightlife Lasers',
      image: '/gallery_lasers.jpg',
      category: 'Production'
    },
    {
      id: 5,
      type: 'videos',
      title: 'Friday Affair Launch Recap',
      image: '/about_crowd.jpg',
      category: 'Promo Reel'
    },
    {
      id: 6,
      type: 'photos',
      title: 'Technowood Crowd Fusion',
      image: '/technowood_poster.jpg',
      category: 'Event Poster'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeTab);

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* PAGE HERO BANNER */}
      <section className="page-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient-rose"
          >
            GALLERY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="page-hero-subtitle"
          >
            A visual archive of past moments, music, and energy.
          </motion.p>
        </div>
      </section>

      {/* TABS & GALLERY GRID */}
      <section style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="container">
          
          {/* Tab Filters with flex wrapping enabled */}
          <div className="gallery-filters-container">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              ALL MOMENTS
            </button>
            <button 
              onClick={() => setActiveTab('photos')} 
              className={`btn ${activeTab === 'photos' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              PHOTOS
            </button>
            <button 
              onClick={() => setActiveTab('videos')} 
              className={`btn ${activeTab === 'videos' ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
            >
              VIDEOS & RECAPS
            </button>
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="gallery-grid"
          >
            {filteredItems.map((item) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="gallery-item col-4"
                style={{ height: '300px' }}
              >
                <img src={item.image} alt={`Kulture House Past Event Snapshot: ${item.title}`} />
                <div className="gallery-hover" style={{ opacity: item.type === 'videos' ? 0.9 : undefined }}>
                  {item.type === 'videos' && (
                    <div 
                      style={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary)',
                        color: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(212, 178, 111, 0.4)'
                      }}
                    >
                      {/* Play Button Inline SVG */}
                      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="#000" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  )}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--color-primary)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.2rem' }}>
                      {item.category}
                    </span>
                    <span className="gallery-caption">{item.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
