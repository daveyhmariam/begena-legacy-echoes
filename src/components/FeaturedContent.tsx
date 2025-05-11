import React from "react";
import { Link } from "react-router-dom";

interface FeaturedItemProps {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  delay?: number;
}

const FeaturedItem: React.FC<FeaturedItemProps> = ({
  title,
  subtitle,
  image,
  link,
  delay = 0,
}) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg group card-hover"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ethiopia-night/90 via-ethiopia-night/50 to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl md:text-2xl font-nyala text-ethiopia-gold mb-1">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
        <Link
          to={link}
          className="inline-block text-sm text-ethiopia-gold hover:text-ethiopia-darkGold transition-colors"
        >
          Explore <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
};

const FeaturedContent = () => {
  const featuredItems = [
    {
      title: "The Begena Instrument",
      subtitle: "Discover the sacred harp of Ethiopia",
      image: "/assets/images/alemuaga1.jpg",
      link: "/gallery",
    },
    {
      title: "Upcoming Performances",
      subtitle: "Experience live Begena concerts",
      image: "/assets/images/Alemu_Aga2.jpeg",
      link: "/events",
    },
    {
      title: "Latest Recordings",
      subtitle: "Listen to traditional and modern compositions",
      image: "/assets/images/Alemu_Aga3.jpg",
      link: "/videos",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-nyala ethopian-border inline-block mb-4">
            Explore the Legacy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the rich heritage of Ethiopian Begena music
            through our curated collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <FeaturedItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              link={item.link}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
