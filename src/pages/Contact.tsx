import { Mail, Handshake } from 'lucide-react';

export default function Contact() {
  return (
    <div style={{ paddingTop: 'var(--header-height)' }}>
      {/* PAGE HERO BANNER */}
      <section className="page-hero">
        <div className="container">
          <h1 className="text-gradient-rose">CONTACT US</h1>
          <p className="page-hero-subtitle">
            Get in touch for bookings, partnerships, and collaborations.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section style={{ backgroundColor: 'var(--color-bg-base)', padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="glass-card" style={{ padding: '3.5rem', border: '1px solid var(--color-glass-border)' }}>
            <h2 className="text-gradient-gold" style={{ textAlign: 'center', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>GET IN TOUCH</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '3rem', fontSize: '1.05rem', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
              Whether you are a venue looking to collaborate, a brand seeking sponsorships, a DJ wanting to join our lineup, or a creator looking for media passes, reach out directly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div 
                  className="glass-card" 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    borderRadius: '4px',
                    flexShrink: 0
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>General Enquiries</h4>
                  <a href="mailto:info@kulturehouse.com.au" style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 500 }}>info@kulturehouse.com.au</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div 
                  className="glass-card" 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    borderRadius: '4px',
                    flexShrink: 0
                  }}
                >
                  <Handshake size={22} />
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Partnerships & Venues</h4>
                  <a href="mailto:partners@kulturehouse.com.au" style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 500 }}>partners@kulturehouse.com.au</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <div 
                  className="glass-card" 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    borderRadius: '4px',
                    flexShrink: 0
                  }}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Social Movement</h4>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: 500 }}>@kulturehouse</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
