import { motion } from 'framer-motion';
import { Sparkles, Flame, Users, Music } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
  };

  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* PAGE HERO BANNER */}
      <section className="page-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gradient-gold"
          >
            OUR STORY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="page-hero-subtitle"
          >
            Fusing South Asian culture, music, and next-generation production.
          </motion.p>
        </div>
      </section>

      {/* DETAILED STORY BLOCKS */}
      <section style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="container about-story-section">
          
          {/* Block 1: Who We Are */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="story-block"
          >
            <div className="story-img-container">
              <img src="/about_crowd.jpg" alt="Who We Are" className="story-img" />
            </div>
            <div className="story-text">
              <h2 className="story-title text-gradient-rose">WHO WE ARE</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Flame size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Premium South Asian Nightlife</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Redefining Melbourne's entertainment landscape with luxury, high-energy events.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Music size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Atmosphere First</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Uniting our community through world-class soundscapes and custom visual production.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Sparkles size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Filling the Gap</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Transforming standard club nights into culturally elevated showcase experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 2: The Friday Affair Journey */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="story-block reversed"
          >
            <div className="story-img-container">
              <img src="/gallery_dj.jpg" alt="Friday Affair" className="story-img" />
            </div>
            <div className="story-text">
              <h2 className="story-title text-gradient-gold">THE FRIDAY AFFAIR JOURNEY</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Flame size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Friday Staple</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Launched as Melbourne's premium Friday night takeover, setting consecutive sold-out records.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Music size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Genre-Bending Sound</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Fusing high-tempo Bollywood anthems and Punjabi vocals with open-format club sets.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Users size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Concept Evolution</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Moving beyond standard club formats to create immersive, designer music spaces.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 3: Vision & The Future */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="story-block"
          >
            <div className="story-img-container">
              <img src="/gallery_lasers.jpg" alt="The Future" className="story-img" />
            </div>
            <div className="story-text">
              <h2 className="story-title text-gradient-rose">THE FUTURE VISION</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Sparkles size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Next-Gen Takeovers</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Expanding into large-scale warehouse sessions, nation-wide concert tours, and festivals.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Music size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TECHNOWOOD & Beyond</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Blending underground electronic subgenres with traditional South Asian roots.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', marginTop: '0.2rem' }}><Users size={18} /></span>
                  <div>
                    <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Gold-Standard Platform</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>Establishing a premium spotlight for local artists, creators, and boundary-pushers.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
