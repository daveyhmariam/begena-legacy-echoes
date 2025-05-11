import React, { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    purpose: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description:
          "We've received your message and will respond soon. Thank you!",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        purpose: "general",
      });
    }, 1500);
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
            Contact & Booking
          </h1>
          <div className="w-20 h-1 bg-ethiopia-gold mx-auto mb-8"></div>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with us to learn more about performances, educational
            opportunities, or to schedule a private event
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-nyala ethiopian-border mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-nyala text-ethiopia-gold mb-2">
                    Contact Information
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-ethiopia-gold mr-3 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          +251 123 456 789
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-ethiopia-gold mr-3 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">
                          contact@begenalegacy.com
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-ethiopia-gold mr-3 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <div>
                        <p className="font-medium">Office Location</p>
                        <p className="text-sm text-muted-foreground">
                          123 Meskel Square
                          <br />
                          Kirkos Sub-City
                          <br />
                          Addis Ababa, Ethiopia
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-nyala text-ethiopia-gold mb-2">
                    Business Hours
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-nyala text-ethiopia-gold mb-2">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-ethiopia-gold transition-colors"
                    >
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
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-ethiopia-gold transition-colors"
                    >
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
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-ethiopia-gold transition-colors"
                    >
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
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                    <a
                      href="https://spotify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-ethiopia-gold transition-colors"
                    >
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14.5a1 1 0 0 0 2 0"></path>
                        <path d="M8 12.5a2 2 0 0 0 4 0"></path>
                        <path d="M8 10.5a3 3 0 0 0 6 0"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <h2 className="text-2xl font-nyala text-ethiopia-gold mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Name <span className="text-ethiopia-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ethiopia-gold"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email <span className="text-ethiopia-red">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ethiopia-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-muted border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ethiopia-gold"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="purpose"
                        className="block text-sm font-medium mb-1"
                      >
                        Inquiry Type{" "}
                        <span className="text-ethiopia-red">*</span>
                      </label>
                      <select
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        required
                        className="w-full bg-muted border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ethiopia-gold"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="booking">Performance Booking</option>
                        <option value="workshop">Workshop/Educational</option>
                        <option value="media">Media/Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject <span className="text-ethiopia-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ethiopia-gold"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message <span className="text-ethiopia-red">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-muted border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-ethiopia-gold"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-ethiopia-night relative pattern-overlay">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border inline-block mb-4">
              Find Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our office in Addis Ababa for in-person consultations and
              inquiries
            </p>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              {/* Map placeholder - in a real app, you'd integrate Google Maps or another solution */}
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-ethiopia-gold/50 mx-auto mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-muted-foreground">
                    Interactive map would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-nyala ethiopian-border inline-block mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about performances, booking, and
              more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-nyala text-ethiopia-gold mb-3">
                How far in advance should I book a performance?
              </h3>
              <p className="text-muted-foreground">
                We recommend booking at least 2-3 months in advance for private
                events to ensure availability. For larger events or
                international performances, 4-6 months notice is preferred.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-nyala text-ethiopia-gold mb-3">
                Do you offer workshops for schools?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer educational workshops for schools, universities,
                and cultural institutions. These can be customized to suit the
                age group and educational objectives.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-nyala text-ethiopia-gold mb-3">
                What is the typical length of a performance?
              </h3>
              <p className="text-muted-foreground">
                Standard performances range from 45-90 minutes, but we can adapt
                to your event's schedule. We also offer shorter demonstration
                performances and full concert programs.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-nyala text-ethiopia-gold mb-3">
                Do you travel internationally for performances?
              </h3>
              <p className="text-muted-foreground">
                Yes, we are available for international performances and
                cultural festivals. International bookings require additional
                lead time for visa arrangements and travel logistics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
