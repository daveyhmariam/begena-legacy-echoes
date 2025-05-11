
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ethiopia-night border-t border-ethiopia-gold/20 pt-12 pb-6 pattern-overlay">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <Link to="/" className="text-ethiopia-gold font-nyala text-3xl">
              Begena Legacy
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Preserving the sacred sounds and traditions of the Ethiopian Begena,
              connecting past with present through the divine harmonies of this ancient instrument.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Media Icons */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-ethiopia-gold hover:text-ethiopia-terracotta transition-colors">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-ethiopia-gold hover:text-ethiopia-terracotta transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-ethiopia-gold hover:text-ethiopia-terracotta transition-colors">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-ethiopia-gold hover:text-ethiopia-terracotta transition-colors">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14.5a1 1 0 0 0 2 0" />
                  <path d="M8 12.5a2 2 0 0 0 4 0" />
                  <path d="M8 10.5a3 3 0 0 0 6 0" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 font-nyala">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-ethiopia-gold transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-ethiopia-gold transition-colors">About</Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-ethiopia-gold transition-colors">Gallery</Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-ethiopia-gold transition-colors">Events</Link>
              <Link to="/videos" className="text-sm text-muted-foreground hover:text-ethiopia-gold transition-colors">Videos</Link>
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-ethiopia-gold transition-colors">Shop</Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-ethiopia-gold transition-colors">Blog</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-ethiopia-gold transition-colors">Contact</Link>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl mb-4 font-nyala">Stay Connected</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates on performances, new releases, and cultural events.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-muted text-foreground text-sm px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-ethiopia-gold flex-1"
              />
              <button className="bg-ethiopia-gold text-ethiopia-night px-4 py-2 text-sm rounded-r-md hover:bg-ethiopia-darkGold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="mt-12 pt-4 border-t border-ethiopia-gold/10 text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Begena Legacy. All rights reserved. Ethiopian traditional music preservation project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
