import React, { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  category: "music" | "instruments" | "books" | "merchandise";
  price: number;
  image: string;
  description: string;
  featured?: boolean;
  inStock: boolean;
}

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample products data
  const products: Product[] = [
    {
      id: "album-1",
      name: "Sacred Melodies of Ethiopia",
      category: "music",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "A collection of traditional Begena compositions performed by Alemu Aga, capturing the spiritual essence of Ethiopian Orthodox music.",
      featured: true,
      inStock: true,
    },
    {
      id: "album-2",
      name: "Meditation Through Begena",
      category: "music",
      price: 18.99,
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Contemporary interpretations of traditional melodies, designed to facilitate meditation and spiritual reflection.",
      inStock: true,
    },
    {
      id: "album-3",
      name: "Legacy: Ethiopian Classics",
      category: "music",
      price: 21.99,
      image:
        "https://images.unsplash.com/photo-1526142684086-7ebd69df27a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "A compilation album featuring historic recordings of Ethiopian master musicians spanning several decades.",
      inStock: false,
    },
    {
      id: "instr-1",
      name: "Begena Learning Model",
      category: "instruments",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "A smaller, student-friendly version of the traditional Begena, designed for beginners and educational purposes.",
      featured: true,
      inStock: true,
    },
    {
      id: "instr-2",
      name: "Begena Strings Set",
      category: "instruments",
      price: 39.99,
      image:
        "https://images.unsplash.com/photo-1551694674-c613f6da3230?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Replacement string set for traditional Begena instruments, handcrafted using traditional techniques.",
      inStock: true,
    },
    {
      id: "book-1",
      name: "The Art of Begena",
      category: "books",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "A comprehensive guide to the history, cultural significance, and playing techniques of Ethiopia's sacred harp.",
      inStock: true,
    },
    {
      id: "book-2",
      name: "Ethiopian Sacred Music",
      category: "books",
      price: 29.99,
      image:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "An academic exploration of the role of music in Ethiopian Orthodox spiritual practices throughout history.",
      inStock: true,
    },
    {
      id: "merch-1",
      name: "Ethiopian Pattern T-Shirt",
      category: "merchandise",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Premium cotton t-shirt featuring traditional Ethiopian patterns and a silhouette of the Begena instrument.",
      inStock: true,
    },
    {
      id: "merch-2",
      name: "Begena Canvas Print",
      category: "merchandise",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Museum-quality canvas print depicting a traditional Begena in an artistic style. Available in multiple sizes.",
      inStock: true,
    },
  ];

  // Filter products by category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  // Add to cart function
  const addToCart = (product: Product) => {
    setCartCount((prevCount) => prevCount + 1);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your shopping cart.`,
    });
  };

  // Format price as currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
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
            Music Shop
          </h1>
          <div className="w-20 h-1 bg-ethiopia-gold mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our collection of recordings, instruments, books, and
            merchandise celebrating Ethiopian musical heritage
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border mb-8">
            Featured Items
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products
              .filter((product) => product.featured)
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="aspect-w-1 aspect-h-1">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-ethiopia-gold/10 text-ethiopia-gold text-xs px-2 py-1 rounded-full">
                            Featured
                          </span>
                          <span className="text-sm font-medium text-ethiopia-gold">
                            {formatPrice(product.price)}
                          </span>
                        </div>
                        <h3 className="text-xl font-nyala text-ethiopia-gold mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {product.description}
                        </p>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        className={`btn-primary w-full ${
                          !product.inStock
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-ethiopia-night border-b border-ethiopia-gold/10 sticky top-16 z-30">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <nav className="flex overflow-x-auto scrollbar-none -mx-4 px-4">
              <button
                className={`px-6 py-2 whitespace-nowrap text-sm font-medium ${
                  activeCategory === "all"
                    ? "text-ethiopia-gold border-b-2 border-ethiopia-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveCategory("all")}
              >
                All Products
              </button>
              <button
                className={`px-6 py-2 whitespace-nowrap text-sm font-medium ${
                  activeCategory === "music"
                    ? "text-ethiopia-gold border-b-2 border-ethiopia-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveCategory("music")}
              >
                Music & Recordings
              </button>
              <button
                className={`px-6 py-2 whitespace-nowrap text-sm font-medium ${
                  activeCategory === "instruments"
                    ? "text-ethiopia-gold border-b-2 border-ethiopia-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveCategory("instruments")}
              >
                Instruments
              </button>
              <button
                className={`px-6 py-2 whitespace-nowrap text-sm font-medium ${
                  activeCategory === "books"
                    ? "text-ethiopia-gold border-b-2 border-ethiopia-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveCategory("books")}
              >
                Books
              </button>
              <button
                className={`px-6 py-2 whitespace-nowrap text-sm font-medium ${
                  activeCategory === "merchandise"
                    ? "text-ethiopia-gold border-b-2 border-ethiopia-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveCategory("merchandise")}
              >
                Merchandise
              </button>
            </nav>

            {/* Cart indicator */}
            <div className="relative">
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
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-ethiopia-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-ethiopia-night relative pattern-overlay">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-ethiopia-night/60 flex items-center justify-center">
                      <span className="bg-ethiopia-red text-white text-sm px-3 py-1 rounded">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-nyala text-ethiopia-gold">
                      {product.name}
                    </h3>
                    <span className="text-sm font-medium text-ethiopia-gold">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-2 text-sm rounded-md transition-colors ${
                      product.inStock
                        ? "bg-ethiopia-gold text-ethiopia-night hover:bg-ethiopia-darkGold"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="bg-card rounded-lg p-8 text-center">
              <p className="text-muted-foreground">
                No products found in this category.
              </p>
              <button
                onClick={() => setActiveCategory("all")}
                className="mt-4 text-ethiopia-gold hover:text-ethiopia-darkGold transition-colors"
              >
                View all products
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border inline-block mb-4">
              Shipping Information
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We ship our products worldwide. Please note the following shipping
              policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-ethiopia-gold/10 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-ethiopia-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-nyala text-ethiopia-gold mb-3 text-center">
                Domestic Shipping
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Standard: 3-5 business days</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Express: 1-2 business days</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Free shipping on orders over $75</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-ethiopia-gold/10 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-ethiopia-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-nyala text-ethiopia-gold mb-3 text-center">
                International Shipping
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Standard: 7-14 business days</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Express: 3-5 business days</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Customs fees may apply</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <div className="h-12 w-12 rounded-full bg-ethiopia-gold/10 flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-ethiopia-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <h3 className="text-xl font-nyala text-ethiopia-gold mb-3 text-center">
                Returns & Exchanges
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>30-day return policy</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Items must be unused</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-ethiopia-gold mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Original packaging required</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
