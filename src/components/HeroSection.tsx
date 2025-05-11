import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video or image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-ethiopia-night/70 via-ethiopia-night/80 to-ethiopia-night z-10"></div>
        <div className="absolute inset-0 bg-ethiopian-pattern opacity-10 z-0"></div>
        <img
          src="/assets/images/with_begena.jpg"
          alt="Ethiopian musician with Begena"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Hero Content */}
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-nyala text-ethiopia-gold mb-6">
            The Sacred Sounds of Begena
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-light">
            Experience the spiritual journey through Ethiopia's ancient
            instrument - the Begena, known as "the harp of King David"
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/gallery" className="btn-primary">
              Explore the Gallery
            </Link>
            <Link to="/about" className="btn-secondary">
              About the Alemu Aga
            </Link>
          </div>

          {/* Audio Teaser */}
          <div className="mt-12 max-w-md mx-auto">
            <p className="text-sm text-ethiopia-gold mb-3">
              Listen to a sample
            </p>
            <audio controls className="w-full">
              <source src="#" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-soft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ethiopia-gold"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
