import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturedContent from "@/components/FeaturedContent";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import AudioPlayer from "@/components/AudioPlayer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-20 bg-ethiopia-night relative pattern-overlay">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border mb-6">
                The Divine Instrument of Ethiopia
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Begena is a large ten-string lyre used by the Ethiopian
                Orthodox Church for spiritual meditation, contemplation and as
                accompaniment during prayer and religious functions. Its deep,
                buzzing sound has earned it the name "the Harp of David" in
                Ethiopian culture.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                This ancient instrument is known for its unique buzzing timbre,
                created by the vibration of knotted silk placed between each
                string and the bridge. Its meditative sound is believed to
                facilitate spiritual reflection and connection to the divine.
              </p>
              <Link to="/about" className="btn-secondary">
                Learn About the Alemu Aga
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/images/begena.jpeg"
                  alt="Ethiopian Begena instrument"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-ethiopia-gold rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-ethiopia-red rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedContent />

      {/* Upcoming Events Teaser */}
      <section className="py-16 bg-ethiopia-night">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border inline-block mb-4">
              Experience Live Performances
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us for traditional Begena concerts and cultural events
              celebrating Ethiopian heritage
            </p>
          </div>

          <div className="bg-gradient-to-br from-muted to-muted/30 p-8 rounded-lg border border-ethiopia-gold/10 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="block text-ethiopia-gold text-sm mb-1">
                  Featured Event
                </span>
                <h3 className="text-2xl font-nyala mb-2">
                  Sacred Sounds: Begena Concert
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  September 21, 2023 • 7:00 PM • Ethiopian Cultural Center
                </p>
                <p className="text-sm max-w-lg">
                  Experience the transcendental sounds of the Begena in an
                  intimate concert setting, featuring traditional spiritual
                  melodies and contemporary compositions.
                </p>
              </div>

              <Link to="/events" className="btn-primary whitespace-nowrap">
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recordings Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border inline-block mb-4">
              Featured Recordings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Listen to samples from our collection of traditional and
              contemporary Begena compositions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AudioPlayer
              src="#"
              title="Tizita (Remembrance)"
              artist="Traditional"
            />
            <AudioPlayer
              src="#"
              title="Yakrub Zema (Evening Hymn)"
              artist="Contemporary"
            />
          </div>

          <div className="text-center mt-10">
            <Link to="/videos" className="btn-secondary">
              Explore Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-ethiopia-night relative pattern-overlay">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border inline-block mb-4">
              What People Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reflections from scholars, musicians, and audiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The Begena performances transported me to another realm. The spiritual depth of this instrument is unparalleled in contemporary music."
              author="Dr. Yemisrach Mekonnen"
              role="Ethnomusicologist, University of Addis Ababa"
            />
            <TestimonialCard
              quote="As a lifelong student of world music, discovering the Begena was a revelation. Its meditative qualities and rich cultural heritage are truly exceptional."
              author="James Richardson"
              role="Music Journalist, Global Rhythms Magazine"
            />
            <TestimonialCard
              quote="In our fast-paced modern world, the contemplative sounds of the Begena offer a meaningful connection to tradition and spirituality."
              author="Tigist Abebe"
              role="Cultural Heritage Preservationist"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-ethiopia-night via-ethiopia-night to-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-nyala text-ethiopia-gold mb-6">
              Join Us in Preserving this Sacred Tradition
            </h2>
            <p className="text-lg text-foreground mb-8">
              Support our mission to document, preserve, and share the ancient
              art of Begena music for future generations
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <Link to="/shop" className="btn-secondary">
                Support Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
