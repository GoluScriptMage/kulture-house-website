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
      <section className="contact-section">
        <div className="container contact-container">
          
          <div className="glass-card contact-card">
            <h2 className="text-gradient-gold contact-title">GET IN TOUCH</h2>
            <p className="contact-description">
              Whether you are a venue looking to collaborate, a brand seeking sponsorships, a DJ wanting to join our lineup, or a creator looking for media passes, reach out directly.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="glass-card contact-icon-wrapper">
                  <Mail size={22} />
                </div>
                <div className="contact-info">
                  <h4 className="contact-info-label">General Enquiries</h4>
                  <a href="mailto:info@kulturehouse.com.au" className="contact-link">info@kulturehouse.com.au</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="glass-card contact-icon-wrapper">
                  <Handshake size={22} />
                </div>
                <div className="contact-info">
                  <h4 className="contact-info-label">Partnerships & Venues</h4>
                  <a href="mailto:partners@kulturehouse.com.au" className="contact-link">partners@kulturehouse.com.au</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="glass-card contact-icon-wrapper">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="contact-info">
                  <h4 className="contact-info-label">Social Movement</h4>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">@kulturehouse</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
