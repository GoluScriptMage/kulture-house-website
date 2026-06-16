import { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'brand',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', type: 'brand', message: '' });
      
      // Clear existing timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      // Set timer to clear toast state
      timeoutRef.current = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="partner-form">
        <div className="form-group">
          <label htmlFor="partner-name">Name</label>
          <input 
            type="text" 
            id="partner-name" 
            className="form-input" 
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="partner-email">Email</label>
          <input 
            type="email" 
            id="partner-email" 
            className="form-input" 
            placeholder="Your Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="partner-type">Collaboration Type</label>
          <select 
            id="partner-type" 
            className="form-select"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="brand">Brand Partnership</option>
            <option value="venue">Venue Collaboration</option>
            <option value="sponsorship">Sponsorships</option>
            <option value="creator">Content Creator</option>
            <option value="artist">DJ / Artist Booking</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="partner-message">Message</label>
          <textarea 
            id="partner-message" 
            className="form-textarea" 
            placeholder="Tell us how you would like to collaborate"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            style={{ minHeight: '130px' }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-glow" style={{ alignSelf: 'flex-start' }}>
          CONTACT US
        </button>
      </form>

      {submitted && (
        <div className="toast-notification btn-secondary" role="status" aria-live="polite">
          <Sparkles size={20} />
          <span>Message sent! Maya will review your enquiry shortly.</span>
        </div>
      )}
    </>
  );
}
