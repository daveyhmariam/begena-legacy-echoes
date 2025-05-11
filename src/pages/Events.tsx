import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  description: string;
  image: string;
  ticketLink?: string;
  featured: boolean;
  type: "upcoming" | "past";
}

const Events = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample events data
  const events: Event[] = [
    {
      id: "event-1",
      title: "Sacred Sounds: Begena Concert Series",
      date: "2023-09-21",
      time: "19:00",
      location: "Ethiopian Cultural Center",
      address: "123 Meskel Square, Addis Ababa",
      description:
        "Experience the transcendental sounds of the Begena in an intimate concert setting, featuring traditional spiritual melodies and contemporary compositions.",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ticketLink: "#",
      featured: true,
      type: "upcoming",
    },
    {
      id: "event-2",
      title: "Ethiopian Music Workshop",
      date: "2023-10-15",
      time: "14:00",
      location: "University of Addis Ababa",
      address: "Music Department, AAU Campus",
      description:
        "A hands-on workshop exploring the techniques and cultural significance of traditional Ethiopian instruments including the Begena, Krar, and Masinko.",
      image:
        "https://images.unsplash.com/photo-1588479839125-721aeaedb25a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ticketLink: "#",
      featured: false,
      type: "upcoming",
    },
    {
      id: "event-3",
      title: "Meditation Through Music",
      date: "2023-11-05",
      time: "10:00",
      location: "Lalibela Heritage Center",
      address: "456 Church Street, Lalibela",
      description:
        "A morning of spiritual reflection through the meditative sounds of the Begena, combined with guided meditation and historical context.",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ticketLink: "#",
      featured: false,
      type: "upcoming",
    },
    {
      id: "event-4",
      title: "Festival of Ethiopian Arts",
      date: "2023-12-02",
      time: "11:00",
      location: "National Museum",
      address: "789 Heritage Lane, Addis Ababa",
      description:
        "A day-long celebration of Ethiopian cultural heritage, featuring musical performances, art exhibitions, and traditional crafts.",
      image:
        "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ticketLink: "#",
      featured: true,
      type: "upcoming",
    },
    {
      id: "event-5",
      title: "Timkat Celebration Concert",
      date: "2024-01-19",
      time: "18:00",
      location: "Jan Meda",
      address: "Jan Meda Fields, Addis Ababa",
      description:
        "A special concert celebrating the Ethiopian Orthodox Timkat festival, featuring sacred Begena music and traditional ceremonial songs.",
      image:
        "https://images.unsplash.com/photo-1532089020453-c779e7f5ae30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ticketLink: "#",
      featured: false,
      type: "upcoming",
    },
    {
      id: "event-6",
      title: "Divine Harmonies Tour",
      date: "2023-05-10",
      time: "20:00",
      location: "Kennedy Center",
      address: "2700 F St NW, Washington, DC",
      description:
        "Part of an international tour showcasing the sacred sounds of the Begena to international audiences.",
      image:
        "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ticketLink: "#",
      featured: true,
      type: "past",
    },
    {
      id: "event-7",
      title: "Ethiopian Musical Heritage Conference",
      date: "2023-03-22",
      time: "09:00",
      location: "SOAS University of London",
      address: "Thornhaugh Street, London",
      description:
        "An academic conference exploring the historical development and cultural significance of Ethiopian sacred music.",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      ticketLink: "#",
      featured: false,
      type: "past",
    },
  ];

  // Filter events by type (upcoming or past)
  const filteredEvents = events.filter((event) => event.type === activeTab);

  // Further filter by selected month if not 'all'
  const filteredByMonth =
    selectedMonth === "all"
      ? filteredEvents
      : filteredEvents.filter(
          (event) =>
            new Date(event.date).getMonth().toString() === selectedMonth
        );

  // Get unique months from events for filter dropdown
  const getMonths = () => {
    const months: { value: string; label: string }[] = [];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    events.forEach((event) => {
      const month = new Date(event.date).getMonth();
      if (!months.find((m) => m.value === month.toString())) {
        months.push({ value: month.toString(), label: monthNames[month] });
      }
    });

    return months.sort((a, b) => parseInt(a.value) - parseInt(b.value));
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
            Events & Performances
          </h1>
          <div className="w-20 h-1 bg-ethiopia-gold mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Join us for live performances, workshops, and cultural events
            celebrating the ancient tradition of Begena music
          </p>
        </div>
      </section>

      {/* Featured Event */}
      {filteredEvents.find((e) => e.featured) && (
        <section className="py-16 bg-muted">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border inline-block mb-8">
              Featured Event
            </h2>

            {(() => {
              const featuredEvent = filteredEvents.find((e) => e.featured);
              if (!featuredEvent) return null;

              return (
                <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={featuredEvent.image}
                        alt={featuredEvent.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="bg-ethiopia-gold/10 text-ethiopia-gold text-sm px-3 py-1 rounded-full">
                            Featured
                          </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-nyala text-ethiopia-gold mb-2">
                          {featuredEvent.title}
                        </h3>
                        <div className="flex items-center mb-4 text-sm text-muted-foreground">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          {formatDate(featuredEvent.date)}
                        </div>
                        <div className="flex items-center mb-6 text-sm text-muted-foreground">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          {featuredEvent.time} • {featuredEvent.location}
                        </div>
                        <p className="text-muted-foreground mb-6">
                          {featuredEvent.description}
                        </p>
                        <div className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Location:</strong>{" "}
                          {featuredEvent.address}
                        </div>
                      </div>

                      {featuredEvent.ticketLink && (
                        <div className="mt-8">
                          <a
                            href={featuredEvent.ticketLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            Get Tickets
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      )}

      {/* Events List */}
      <section className="py-16 bg-ethiopia-night relative pattern-overlay">
        <div className="container-custom">
          {/* Tab navigation */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4 border-b border-ethiopia-gold/20">
              <button
                className={`pb-2 px-4 transition-colors ${
                  activeTab === "upcoming"
                    ? "border-b-2 border-ethiopia-gold text-ethiopia-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveTab("upcoming")}
              >
                Upcoming Events
              </button>
              <button
                className={`pb-2 px-4 transition-colors ${
                  activeTab === "past"
                    ? "border-b-2 border-ethiopia-gold text-ethiopia-gold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveTab("past")}
              >
                Past Events
              </button>
            </div>

            {/* Month filter */}
            <div className="relative">
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="bg-muted border border-ethiopia-gold/20 text-sm rounded-md p-2 pr-8 focus:outline-none focus:ring-1 focus:ring-ethiopia-gold appearance-none"
              >
                <option value="all">All Months</option>
                {getMonths().map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-ethiopia-gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredByMonth.map((event) => (
              <div
                key={event.id}
                className="bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-nyala text-ethiopia-gold mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center mb-2 text-xs text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center mb-3 text-xs text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {event.time} • {event.location}
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {event.ticketLink && activeTab === "upcoming" && (
                    <a
                      href={event.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ethiopia-gold hover:text-ethiopia-darkGold transition-colors flex items-center gap-1"
                    >
                      Get Tickets
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
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filteredByMonth.length === 0 && (
            <div className="bg-card rounded-lg p-8 text-center">
              <p className="text-muted-foreground">
                {activeTab === "upcoming"
                  ? "No upcoming events scheduled for this period."
                  : "No past events found for this period."}
              </p>
              <button
                onClick={() => setSelectedMonth("all")}
                className="mt-4 text-ethiopia-gold hover:text-ethiopia-darkGold transition-colors"
              >
                View all events
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Calendar Integration */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border inline-block mb-4">
              Event Calendar
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              View our complete schedule of performances, workshops, and
              cultural events
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg">
            {/* Calendar placeholder - in a real app, you'd integrate Google Calendar or another solution */}
            <div className="aspect-w-16 aspect-h-9 bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Calendar integration would appear here
                </p>
                <a href="#" className="btn-secondary">
                  Subscribe to Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-ethiopia-night relative pattern-overlay">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-muted to-muted/30 p-8 rounded-lg border border-ethiopia-gold/10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-nyala text-ethiopia-gold mb-4">
                  Host a Private Event
                </h2>
                <p className="text-muted-foreground mb-6">
                  Interested in hosting a private Begena performance or
                  educational workshop? Our artist is available for special
                  events, cultural programs, and educational institutions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-ethiopia-gold mr-2 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      Private concerts and performance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-ethiopia-gold mr-2 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      Educational workshops for schools and universities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-ethiopia-gold mr-2 mt-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      Cultural events and exhibitions
                    </span>
                  </li>
                </ul>
                <Link to="/contact" className="btn-primary">
                  Inquire Now
                </Link>
              </div>

              <div className="relative hidden md:block">
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Private event"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-ethiopia-gold rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
