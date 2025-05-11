import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-ethiopia-night">
        <div className="absolute inset-0 z-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-ethiopia-night/90 via-ethiopia-night/80 to-ethiopia-night z-10"></div>
          <div className="absolute inset-0 bg-ethiopian-pattern opacity-10 z-0"></div>
          <img
            src="/assets/images/communion.webp"
            alt="Video recordings"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-nyala text-ethiopia-gold mb-6 animate-fade-in">
            About Alemu Aga
          </h1>
          <div className="w-20 h-1 bg-ethiopia-gold mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Discovering the journey of a master Begena player dedicated to
            preserving Ethiopia's sacred musical tradition
          </p>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/assets/images/Alemu_Aga3.jpg"
                  alt="Portrait of the artist"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-ethiopia-gold rounded-full opacity-10"></div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border mb-6">
                Megabe-Sibhat Alemu Aga
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Born in 1950 in Entoto, near Addis Ababa, Alemu Aga is one of
                the most renowned masters of the Begena, Ethiopia's large
                ten-stringed lyre. His deep connection with this instrument
                began at the age of 12 when he started studying under the
                guidance of the revered Begena player, Aleqa Tessema Woubé.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                For over five decades, Alemu has dedicated his life to mastering
                and preserving the ancient traditions of Begena performance,
                which is intimately connected with Ethiopian Orthodox
                spirituality and the biblical King David.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                When the Derg regime came to power in 1974, public religious
                expression was suppressed, threatening the survival of sacred
                musical traditions. Despite these challenges, Alemu continued to
                practice and teach, ensuring this ancient art form would survive
                for future generations.
              </p>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-nyala text-ethiopia-gold mb-8 text-center">
              Musical Journey
            </h3>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-ethiopia-gold/30"></div>

              {/* Timeline items */}
              <div className="grid grid-cols-1 gap-12">
                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right">
                    <h4 className="text-ethiopia-gold font-medium">1962</h4>
                    <p className="text-foreground font-medium">
                      Early Training
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Began studying Begena under Aleqa Tessema Woubé at the
                      Entoto Maryam Church.
                    </p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ethiopia-gold"></div>

                  <div className="w-5/12 pl-8">
                    <div className="h-40 overflow-hidden rounded-lg">
                      <img
                        src="/assets/images/begena.jpeg"
                        alt="Ethiopian church"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8">
                    <div className="h-40 overflow-hidden rounded-lg">
                      <img
                        src="/assets/images/Yared_school.jpeg"
                        alt="Begena instrument"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ethiopia-gold"></div>

                  <div className="w-5/12 pl-8 text-left">
                    <h4 className="text-ethiopia-gold font-medium">1972</h4>
                    <p className="text-foreground font-medium">
                      Yared Music School
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Joined the faculty at the Yared Music School to teach
                      traditional instruments.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right">
                    <h4 className="text-ethiopia-gold font-medium">1985</h4>
                    <p className="text-foreground font-medium">
                      Underground Preservation
                    </p>
                    <p className="text-sm text-muted-foreground">
                      During political suppression, maintained private teaching
                      to preserve the tradition.
                    </p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ethiopia-gold"></div>

                  <div className="w-5/12 pl-8">
                    <div className="h-40 overflow-hidden rounded-lg">
                      <img
                        src="/assets/images/younger.jpeg"
                        alt="Historical photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8">
                    <div className="h-40 overflow-hidden rounded-lg">
                      <img
                        src="/assets/images/international.jpg"
                        alt="Concert performance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ethiopia-gold"></div>

                  <div className="w-5/12 pl-8 text-left">
                    <h4 className="text-ethiopia-gold font-medium">1997</h4>
                    <p className="text-foreground font-medium">
                      International Recognition
                    </p>
                    <p className="text-sm text-muted-foreground">
                      First international tour, bringing Begena music to
                      European audiences.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8 text-right">
                    <h4 className="text-ethiopia-gold font-medium">2008</h4>
                    <p className="text-foreground font-medium">
                      UNESCO Recognition
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Featured in UNESCO's Intangible Cultural Heritage
                      documentation project.
                    </p>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ethiopia-gold"></div>

                  <div className="w-5/12 pl-8">
                    <div className="h-40 overflow-hidden rounded-lg">
                      <img
                        src="/assets/images/uniesco.jpeg"
                        alt="UNESCO recognition"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between">
                  <div className="w-5/12 pr-8">
                    <div className="h-40 overflow-hidden rounded-lg">
                      <img
                        src="https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Recording session"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-ethiopia-gold"></div>

                  <div className="w-5/12 pl-8 text-left">
                    <h4 className="text-ethiopia-gold font-medium">2018</h4>
                    <p className="text-foreground font-medium">
                      Legacy Project
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Launched the digital archive project to document
                      traditional Begena techniques and melodies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Biography Section */}
      <section className="py-16 bg-ethiopia-night relative pattern-overlay">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-nyala text-ethiopia-gold mb-8 text-center">
            Hear the Alemu's Story
          </h2>

          <div className="max-w-4xl mx-auto aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Artist Biography Video"
              src="https://www.youtube.com/embed/O56lTWqGmXU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              In this intimate interview, Alemu Aga discusses his lifelong
              dedication to the Begena, his teaching philosophy, and his vision
              for preserving Ethiopia's sacred musical heritage for future
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border mb-8 text-center">
            Cultural Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <blockquote className="border-l-4 border-ethiopia-gold pl-6 italic">
              <p className="text-foreground mb-4">
                "Alemu Aga's contribution to preserving the Begena tradition
                cannot be overstated. His dedication has ensured that this
                sacred instrument continues to inspire new generations of
                Ethiopian musicians."
              </p>
              <cite className="text-sm text-muted-foreground">
                — Dr. Francis Falceto, Musicologist and producer of the
                Éthiopiques series
              </cite>
            </blockquote>

            <blockquote className="border-l-4 border-ethiopia-gold pl-6 italic">
              <p className="text-foreground mb-4">
                "The meditative qualities of Alemu's Begena playing transcend
                cultural barriers. His music speaks to something deeply human
                and spiritual, regardless of one's background."
              </p>
              <cite className="text-sm text-muted-foreground">
                — The Guardian, Music Review, 2015
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-ethiopia-night relative pattern-overlay">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border mb-6">
                Teaching Philosophy
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                At the heart of Alemu's teaching is the belief that the Begena
                is more than just an instrument—it is a spiritual practice and
                meditation tool. His approach emphasizes the importance of
                understanding the spiritual and cultural context of the music.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                "The Begena player must first learn to listen—not just with the
                ears, but with the heart. The buzzing sound of the instrument is
                meant to create a state of reflection and connection with the
                divine."
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Traditional technique preservation</li>
                <li>Spiritual context and understanding</li>
                <li>Rigorous practice methodology</li>
                <li>Cultural heritage awareness</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/assets/images/younger.jpeg"
                  alt="Teaching session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg mt-6">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Student learning Begena"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Group class"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-lg mt-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeWf6pjE5cfEOd1b3WPsrxi8VVfAoipSbIA&s"
                  alt="Master class"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
