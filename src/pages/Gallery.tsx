import React, { useState, useEffect } from "react";
import AudioPlayer from "@/components/AudioPlayer";

interface InstrumentItem {
  id: string;
  name: string;
  description: string;
  image: string;
  audioSample?: string;
  details: {
    origin: string;
    materials: string[];
    dimensions: string;
    strings: number;
  };
}

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<InstrumentItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("begena");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const galleryItems: Record<string, InstrumentItem[]> = {
    begena: [
      {
        id: "begena-1",
        name: "Traditional Begena",
        description:
          "A classic 10-string Ethiopian Begena with traditional tuning, featuring handcrafted wooden frame and silk strings.",
        image:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        audioSample: "#",
        details: {
          origin: "Amhara region, Ethiopia",
          materials: ["Cedar wood", "Goat skin", "Silk strings"],
          dimensions: "120cm x 60cm",
          strings: 10,
        },
      },
      {
        id: "begena-2",
        name: "Royal Court Begena",
        description:
          "An ornate Begena historically used in the Ethiopian royal court, featuring decorative patterns and gold accents.",
        image:
          "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        audioSample: "#",
        details: {
          origin: "Imperial Palace, Addis Ababa",
          materials: ["Mahogany", "Gold leaf detail", "Hand-spun silk strings"],
          dimensions: "125cm x 65cm",
          strings: 10,
        },
      },
      {
        id: "begena-3",
        name: "Modern Begena",
        description:
          "A contemporary version of the Begena designed for easier transport and modern performance settings.",
        image:
          "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        audioSample: "#",
        details: {
          origin: "Addis Ababa, Ethiopia (2015)",
          materials: [
            "Sustainable hardwood",
            "Nylon-core strings",
            "Metal fixtures",
          ],
          dimensions: "110cm x 55cm",
          strings: 10,
        },
      },
    ],
    krar: [
      {
        id: "krar-1",
        name: "Traditional Krar",
        description:
          "A 6-string lyre commonly used in Ethiopian and Eritrean folk music, smaller than the Begena.",
        image:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        audioSample: "#",
        details: {
          origin: "Tigray region, Ethiopia",
          materials: ["Acacia wood", "Goat skin", "Nylon strings"],
          dimensions: "60cm x 40cm",
          strings: 6,
        },
      },
      {
        id: "krar-2",
        name: "Electric Krar",
        description:
          "A modern electrified version of the traditional Krar, allowing for amplification and effects processing.",
        image:
          "https://images.unsplash.com/photo-1551971633-5137444e23ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        audioSample: "#",
        details: {
          origin: "Addis Ababa, Ethiopia (Modern)",
          materials: ["Hardwood", "Metal pickups", "Steel strings"],
          dimensions: "65cm x 42cm",
          strings: 6,
        },
      },
    ],
    masinko: [
      {
        id: "masinko-1",
        name: "Traditional Masinko",
        description:
          "A single-stringed bowed lute common in Ethiopian folk music, especially among the Amhara people.",
        image:
          "https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        audioSample: "#",
        details: {
          origin: "Central Ethiopia",
          materials: [
            "Wooden neck",
            "Goat skin resonator",
            "Horse hair strings",
          ],
          dimensions: "70cm x 15cm",
          strings: 1,
        },
      },
    ],
  };

  const handleItemClick = (item: InstrumentItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsZoomed(false);
  };

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  const categories = [
    { id: "begena", name: "Begena" },
    { id: "krar", name: "Krar" },
    { id: "masinko", name: "Masinko" },
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-ethiopia-night">
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
            Instrument Gallery
          </h1>
          <div className="w-20 h-1 bg-ethiopia-gold mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our collection of traditional Ethiopian string instruments,
            featuring detailed imagery, historical context, and audio samples
          </p>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="bg-ethiopia-night border-b border-ethiopia-gold/10 sticky top-16 z-30">
        <div className="container-custom py-4">
          <nav className="flex overflow-x-auto scrollbar-none -mx-4 px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 whitespace-nowrap text-sm font-medium ${
                  activeCategory === category.id
                    ? "text-ethiopia-gold border-b-2 border-ethiopia-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems[activeCategory]?.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-nyala text-ethiopia-gold mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {item.details.origin}
                    </span>
                    <button className="text-sm text-ethiopia-gold hover:text-ethiopia-darkGold flex items-center gap-1">
                      <span>Details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state if no items */}
          {galleryItems[activeCategory]?.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                No items to display in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-ethiopia-night/95 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="absolute inset-0 bg-ethiopian-pattern opacity-5"></div>

          <div className="relative bg-card rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
              onClick={handleCloseModal}
            >
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
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Image section */}
              <div className="relative">
                <div
                  className={`cursor-zoom-in ${
                    isZoomed
                      ? "h-[80vh] overflow-scroll"
                      : "aspect-w-4 aspect-h-3"
                  }`}
                  onClick={handleZoomToggle}
                >
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className={`${
                      isZoomed ? "scale-150 cursor-zoom-out" : "object-cover"
                    } w-full h-full transition-transform duration-300`}
                  />
                </div>
                <div className="absolute bottom-4 right-4 bg-ethiopia-night/70 backdrop-blur-sm rounded-full p-2">
                  <button onClick={handleZoomToggle}>
                    {isZoomed ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-ethiopia-gold"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-ethiopia-gold"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6">
                <h2 className="text-3xl font-nyala text-ethiopia-gold mb-2">
                  {selectedItem.name}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {selectedItem.description}
                </p>

                <div className="space-y-6">
                  {/* Details */}
                  <div>
                    <h3 className="text-xl font-nyala text-ethiopia-gold mb-3">
                      Specifications
                    </h3>
                    <ul className="grid grid-cols-2 gap-4">
                      <li className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          Origin
                        </span>
                        <p className="text-sm">{selectedItem.details.origin}</p>
                      </li>
                      <li className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          Dimensions
                        </span>
                        <p className="text-sm">
                          {selectedItem.details.dimensions}
                        </p>
                      </li>
                      <li className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          Strings
                        </span>
                        <p className="text-sm">
                          {selectedItem.details.strings}
                        </p>
                      </li>
                      <li className="space-y-1">
                        <span className="text-xs text-muted-foreground">
                          Materials
                        </span>
                        <p className="text-sm">
                          {selectedItem.details.materials.join(", ")}
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Audio player */}
                  {selectedItem.audioSample && (
                    <div>
                      <h3 className="text-xl font-nyala text-ethiopia-gold mb-3">
                        Listen to the Sound
                      </h3>
                      <AudioPlayer
                        src={selectedItem.audioSample}
                        title={`${selectedItem.name} - Sample`}
                      />
                    </div>
                  )}

                  {/* Historical context */}
                  <div>
                    <h3 className="text-xl font-nyala text-ethiopia-gold mb-3">
                      Historical Context
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      This type of instrument has been used in Ethiopian
                      religious and ceremonial music for centuries. Its
                      distinctive sound is created through a unique playing
                      technique and special preparation of the strings to create
                      a buzzing timbre that is characteristic of Ethiopian
                      music.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
