import { useState, useEffect, useRef } from 'react';
import { Flame } from 'lucide-react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubscribed(true);
      setEmail('');
      
      // Clear any existing timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      // Set new timer to clear toast state
      timeoutRef.current = setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };

  // Cleanup timers on unmount to prevent state updates on unmounted components
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input 
          type="email" 
          className="form-input" 
          placeholder="Enter your email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email Address"
        />
        <button type="submit" className="btn btn-primary">JOIN</button>
      </form>

      {subscribed && (
        <div className="toast-notification btn-primary" role="status" aria-live="polite">
          <Flame size={20} />
          <span>Success! You have joined the Kulture House mailing list.</span>
        </div>
      )}
    </>
  );
}
