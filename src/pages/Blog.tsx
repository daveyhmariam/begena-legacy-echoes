import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample blog articles
  const articles: Article[] = [
    {
      id: "article-1",
      title:
        "The Spiritual Significance of Begena in Ethiopian Orthodox Tradition",
      excerpt:
        "Explore the deep spiritual connections between the Begena instrument and Ethiopian Orthodox religious practices throughout history.",
      content: `
        <p>The Begena, often referred to as the "Harp of David" in Ethiopian tradition, holds a unique and sacred position in Ethiopian Orthodox Christian practices. Its deep, buzzing timbre is instantly recognizable and has been a part of spiritual meditation and religious expression for centuries.</p>
        
        <p>Unlike many other Ethiopian instruments that are played in social gatherings and celebrations, the Begena is primarily associated with contemplation, reflection, and religious devotion. Its sound is believed to facilitate a deeper connection with the divine, allowing the player and listener to enter a meditative state conducive to prayer and spiritual insight.</p>
        
        <h3>Historical Context</h3>
        
        <p>The Begena's association with King David stems from the biblical accounts of David playing the harp to soothe King Saul's troubled spirit. In Ethiopian tradition, this connection is taken very seriously, and the instrument is seen as a direct descendant of David's harp, brought to Ethiopia during the time of Menelik I, who according to the Kebra Nagast (the national epic of Ethiopia), was the son of King Solomon and the Queen of Sheba.</p>
        
        <p>During important religious periods such as Lent (Hudade or Abiy Tsom), the Begena takes on special significance. Many devoted Orthodox Christians will listen exclusively to Begena music during this period of fasting and contemplation, avoiding secular music entirely.</p>
        
        <h3>Spiritual Technique</h3>
        
        <p>The playing technique of the Begena itself reflects its spiritual purpose. The player must maintain a calm, centered demeanor, with controlled breathing and focused attention. The traditional playing position—seated with the instrument held vertically against the player's chest—creates a physical connection between the heart of the player and the instrument.</p>
        
        <p>The texts sung while playing Begena are almost exclusively religious in nature, often drawing from the Psalms of David, religious poetry, or contemplations on moral and ethical teachings. These songs frequently address themes of mortality, divine judgment, repentance, and the transient nature of earthly existence.</p>
        
        <h3>Modern Preservation</h3>
        
        <p>In contemporary Ethiopia, dedicated musicians continue to preserve this tradition despite the pressures of modernization. The Yared Music School in Addis Ababa offers formal training in Begena, ensuring that this ancient practice continues to be passed down to future generations.</p>
        
        <p>As we work to document and preserve traditional Begena music, we're not merely recording sounds—we're capturing a spiritual technology that has helped countless individuals deepen their faith and connect with something beyond themselves for centuries.</p>
      `,
      author: "Dr. Yemisrach Mekonnen",
      date: "2023-08-15",
      image:
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "history",
      tags: ["spirituality", "religion", "orthodox", "tradition"],
      featured: true,
    },
    {
      id: "article-2",
      title: "The Technical Aspects of Begena Construction and Tuning",
      excerpt:
        "A detailed look at the craftsmanship behind creating the traditional Ethiopian Begena, from material selection to final tuning.",
      content: `
        <p>The construction of a traditional Begena is a meticulous process that combines craftsmanship, cultural knowledge, and acoustic understanding. This article explores the technical aspects of how these remarkable instruments are created.</p>
        
        <h3>Materials and Construction</h3>
        
        <p>The body of a Begena typically consists of a wooden frame, traditionally made from woods native to Ethiopia such as olive wood (weyra) or juniper. The wood must be well-seasoned to prevent warping and ensure stability over time. The shape is distinctive: a rectangular or trapezoidal frame with a skin or wooden soundboard.</p>
        
        <p>The soundboard is typically made from animal hide, usually goat or sheep skin, stretched tightly across the frame and secured with wooden pegs or bindings. This creates the resonating chamber that amplifies the sound of the strings.</p>
        
        <p>The Begena features ten strings, traditionally made from sheep gut, though modern instruments sometimes use nylon or other synthetic materials. The strings are attached to the frame at the bottom and to tuning pegs at the top.</p>
        
        <h3>The Distinctive Buzz</h3>
        
        <p>Perhaps the most characteristic feature of the Begena's sound is its distinctive buzzing timbre. This is created by special pieces of leather or cloth (called "dirdir") that are woven between the strings near where they cross the bridge. When the strings vibrate, they make contact with these pieces, creating the buzzing sound that gives the Begena its meditation-inducing quality.</p>
        
        <h3>Tuning Systems</h3>
        
        <p>The Begena uses a pentatonic tuning system, aligning with the traditional scales of Ethiopian music. The exact tuning can vary depending on the region and the specific musical tradition being followed, but the instrument typically spans about an octave and a half.</p>
        
        <p>Tuning is accomplished by adjusting the wooden pegs at the top of the instrument, a process that requires significant skill and experience. Master players can tune by ear, recognizing the specific intervals required for traditional melodies.</p>
        
        <h3>Playing Technique</h3>
        
        <p>The playing technique for the Begena is distinct from other string instruments. It is held vertically against the player's chest, with the soundboard facing outward. The strings are plucked with the fingers of both hands, with the right hand typically playing the melody on the lower strings and the left hand providing accompaniment on the higher strings.</p>
        
        <p>The playing style is characterized by its restraint and precision. Notes are allowed to ring out and decay naturally, creating a contemplative atmosphere. The technique emphasizes clarity and the spiritual quality of the sound rather than speed or technical display.</p>
        
        <h3>Preservation Challenges</h3>
        
        <p>The knowledge required to construct and tune a Begena in the traditional manner is becoming increasingly rare. Climate challenges can affect wood and natural materials, and finding craftspeople with the traditional knowledge is becoming difficult. Organizations dedicated to preserving Ethiopian musical heritage are working to document these techniques and train new generations of instrument makers to ensure this knowledge is not lost.</p>
      `,
      author: "Tekle Gebremariam",
      date: "2023-06-22",
      image:
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "technique",
      tags: ["craftsmanship", "instrument making", "tuning", "acoustics"],
    },
    {
      id: "article-3",
      title: "Contemporary Begena Artists Bridging Tradition and Innovation",
      excerpt:
        "Meet the new generation of musicians who are bringing the ancient sounds of the Begena into dialogue with contemporary music.",
      content: `
        <p>While deeply rooted in Ethiopian Orthodox tradition, the Begena is experiencing a renaissance as a new generation of musicians finds ways to honor its sacred history while bringing its unique voice into contemporary musical conversations.</p>
        
        <h3>Respecting Tradition</h3>
        
        <p>Modern Begena players face the delicate challenge of innovation without disrespect. The instrument's religious and cultural significance means that experimentation must be approached thoughtfully. Most contemporary players have undergone rigorous traditional training before exploring new directions.</p>
        
        <h3>Mulatu Astatke - The Father of Ethio-Jazz</h3>
        
        <p>Though primarily known for his work with vibraphone and keyboards, Mulatu Astatke has incorporated the Begena's distinctive sound into several of his influential Ethio-jazz compositions. By placing the meditative tones of the Begena in conversation with jazz harmonies, Astatke created a bridge between Ethiopian tradition and global music innovations.</p>
        
        <h3>Ethio-Electronic Fusion</h3>
        
        <p>Several Ethiopian electronic music producers have sampled the Begena's distinctive buzzing tone, incorporating it into ambient and electronic dance music. Artists like Mikael Seifu have used Begena samples to create atmospheric soundscapes that blend traditional Ethiopian sounds with contemporary production techniques.</p>
        
        <h3>Alemu Aga's Global Influence</h3>
        
        <p>As one of Ethiopia's most renowned Begena masters, Alemu Aga's international performances and recordings have introduced the instrument to global audiences. His collaborations with musicians from different traditions have demonstrated the Begena's potential to communicate across cultural boundaries while maintaining its distinctive voice.</p>
        
        <h3>Modified Instruments</h3>
        
        <p>Some luthiers have begun creating modified versions of the Begena that incorporate modern features while maintaining the essential character of the instrument. These may include tuning mechanisms that allow for easier key changes, pickups for amplification, or structural modifications that make the instrument more portable for touring musicians.</p>
        
        <h3>Educational Initiatives</h3>
        
        <p>Digital technology is being used to document and share traditional Begena techniques. Online courses, video tutorials, and interactive apps are making it possible for people around the world to learn about this instrument, ensuring its techniques are preserved even as fewer young people in Ethiopia pursue traditional music education.</p>
        
        <h3>Looking Forward</h3>
        
        <p>The future of the Begena lies in this balance between preservation and innovation. By respecting its sacred origins while allowing it to evolve and converse with other musical traditions, today's musicians are ensuring that the voice of this ancient instrument will continue to resonate for generations to come.</p>
      `,
      author: "Bethlehem Tafesse",
      date: "2023-04-10",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "contemporary",
      tags: ["innovation", "modern artists", "fusion", "contemporary music"],
    },
    {
      id: "article-4",
      title: "Learning the Begena: A Student's Journey",
      excerpt:
        "Personal reflections on the challenges and rewards of studying this ancient Ethiopian instrument in the modern world.",
      author: "Abebe Kebede",
      date: "2023-02-18",
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "education",
      tags: [
        "learning",
        "personal journey",
        "music education",
        "student experience",
      ],
    },
    {
      id: "article-5",
      title: "The Role of Begena in Ethiopian Court Music Through History",
      excerpt:
        "How the Begena evolved from a spiritual instrument to also become an important element in royal court ceremonies and aristocratic entertainment.",
      author: "Dr. Francis Falceto",
      date: "2022-11-30",
      image:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "history",
      tags: ["royal court", "history", "aristocracy", "ceremonial music"],
      featured: true,
    },
    {
      id: "article-6",
      title:
        "Begena and Wellbeing: The Therapeutic Applications of Traditional Music",
      excerpt:
        "Research exploring how the meditative qualities of Begena music can contribute to mental health and spiritual wellbeing in contemporary contexts.",
      author: "Dr. Helen Mesfin",
      date: "2022-09-05",
      image:
        "https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "wellness",
      tags: ["therapy", "meditation", "mental health", "wellbeing"],
    },
    {
      id: "article-7",
      title: "Regional Variations: Begena Styles Across Ethiopia",
      excerpt:
        "An exploration of how Begena playing techniques and traditions vary across different regions and cultural groups within Ethiopia.",
      author: "Solomon Mulugeta",
      date: "2022-07-12",
      image:
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "regional",
      tags: [
        "regional styles",
        "cultural diversity",
        "musical traditions",
        "ethnomusicology",
      ],
    },
    {
      id: "article-8",
      title: "Digital Archives: Preserving Begena Music for Future Generations",
      excerpt:
        "How modern technology is being used to document, archive, and share traditional Begena performances and teaching materials.",
      author: "Tigist Abebe",
      date: "2022-05-03",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "technology",
      tags: [
        "digital preservation",
        "archives",
        "documentation",
        "cultural heritage",
      ],
    },
  ];

  // Get unique categories for filter
  const categories = [
    { id: "all", name: "All Articles" },
    { id: "history", name: "History & Heritage" },
    { id: "technique", name: "Technique & Craft" },
    { id: "contemporary", name: "Contemporary" },
    { id: "education", name: "Education" },
    { id: "wellness", name: "Wellness & Spirituality" },
    { id: "regional", name: "Regional Styles" },
    { id: "technology", name: "Technology" },
  ];

  // Filter articles by category and search query
  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    setSelectedArticle(null);
    // Small delay to ensure smooth scroll experience
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

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
            Articles & Blog
          </h1>
          <div className="w-20 h-1 bg-ethiopia-gold mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Explore insights, history, and stories about Begena music and
            Ethiopian cultural heritage
          </p>
        </div>
      </section>

      {selectedArticle ? (
        // Article Detail View
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <button
              onClick={handleBackClick}
              className="flex items-center text-ethiopia-gold hover:text-ethiopia-darkGold transition-colors mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Articles
            </button>

            <div className="bg-card rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-w-21 aspect-h-9">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h2 className="text-3xl md:text-4xl font-nyala text-ethiopia-gold mb-4">
                  {selectedArticle.title}
                </h2>

                <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8">
                  <span className="mr-6">By {selectedArticle.author}</span>
                  <span className="mr-6">
                    {formatDate(selectedArticle.date)}
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    {selectedArticle.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-muted px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  {selectedArticle.content ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedArticle.content,
                      }}
                    />
                  ) : (
                    <div>
                      <p className="text-lg mb-4">{selectedArticle.excerpt}</p>
                      <p className="text-muted-foreground italic">
                        Full article coming soon...
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-ethiopia-gold/10 mt-12 pt-8">
                  <h3 className="text-xl font-nyala text-ethiopia-gold mb-4">
                    About the Author
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedArticle.author} is a respected authority on
                    Ethiopian musical traditions, focusing on the preservation
                    and documentation of traditional Begena techniques and
                    repertoire.
                  </p>
                </div>

                <div className="mt-8 pt-6">
                  <h3 className="text-lg font-medium mb-4">
                    Share This Article
                  </h3>
                  <div className="flex space-x-4">
                    <button className="text-muted-foreground hover:text-ethiopia-gold transition-colors">
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
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </button>
                    <button className="text-muted-foreground hover:text-ethiopia-gold transition-colors">
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
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </button>
                    <button className="text-muted-foreground hover:text-ethiopia-gold transition-colors">
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
                      >
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Articles List View
        <>
          {/* Search and Filter Bar */}
          <section className="bg-ethiopia-night border-b border-ethiopia-gold/10 sticky top-16 z-30">
            <div className="container-custom py-4">
              <div className="flex flex-col md:flex-row justify-between gap-4">
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

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-muted text-foreground text-sm px-10 py-2 rounded-md w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-ethiopia-gold"
                  />
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  {searchQuery && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      onClick={() => setSearchQuery("")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Articles */}
          {activeCategory === "all" && !searchQuery && (
            <section className="py-16 bg-muted">
              <div className="container-custom">
                <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border mb-8">
                  Featured Articles
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {articles
                    .filter((article) => article.featured)
                    .map((article) => (
                      <div
                        key={article.id}
                        className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                        onClick={() => handleArticleClick(article)}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                          <div className="aspect-w-1 aspect-h-1 md:h-full">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 flex flex-col">
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="bg-ethiopia-gold/10 text-ethiopia-gold text-xs px-2 py-1 rounded-full">
                                  Featured
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {formatDate(article.date)}
                                </span>
                              </div>
                              <h3 className="text-xl font-nyala text-ethiopia-gold mb-2">
                                {article.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                {article.excerpt}
                              </p>
                            </div>
                            <div className="mt-auto flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                By {article.author}
                              </span>
                              <span className="text-ethiopia-gold text-sm flex items-center gap-1 hover:underline">
                                Read More
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
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          )}

          {/* All Articles */}
          <section className="py-16 bg-ethiopia-night relative pattern-overlay">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-nyala text-ethiopia-gold mb-8">
                {searchQuery
                  ? `Search Results for "${searchQuery}"`
                  : activeCategory === "all"
                  ? "All Articles"
                  : categories.find((c) => c.id === activeCategory)?.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
                    onClick={() => handleArticleClick(article)}
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="bg-muted text-xs px-2 py-1 rounded-full text-muted-foreground capitalize">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <h3 className="text-xl font-nyala text-ethiopia-gold mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">
                          By {article.author}
                        </span>
                        <span className="text-ethiopia-gold text-sm flex items-center gap-1 hover:underline">
                          Read More
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
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty state */}
              {filteredArticles.length === 0 && (
                <div className="bg-card rounded-lg p-8 text-center">
                  <p className="text-muted-foreground">
                    {searchQuery
                      ? "No articles match your search query."
                      : "No articles found in this category."}
                  </p>
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                    }}
                    className="mt-4 text-ethiopia-gold hover:text-ethiopia-darkGold transition-colors"
                  >
                    View all articles
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Subscribe Section */}
          <section className="py-16 bg-muted">
            <div className="container-custom">
              <div className="bg-card rounded-lg p-8 shadow-lg text-center">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-nyala text-ethiopia-gold mb-4">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Stay updated with our latest articles, upcoming
                    performances, and educational resources about Ethiopian
                    musical heritage
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 bg-muted text-foreground px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-ethiopia-gold"
                    />
                    <button className="btn-primary">Subscribe</button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    By subscribing, you agree to receive email communications
                    from us. We respect your privacy and will never share your
                    information.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Blog;
