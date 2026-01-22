import { useState } from 'react';
import { Heart, MapPin, Phone, Mail, Menu, X } from 'lucide-react';
import logo from './assets/veebeauty_logo-bg.png'
import instagram from './assets/instagram.svg'
import facebook from './assets/facebook.svg'
import tiktok from './assets/tiktok.svg'
import snapchat from './assets/snapchat.svg'
import veeHero from './assets/vee_hero1.jpeg'
import veeNails from './assets/vee_nails2.jpeg'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: '✨',
      title: 'Braiding & Extensions',
      description: 'Box braids, twists, cornrows, and various extension styles',
    },
    {
      icon: '💄',
      title: 'Makeup',
      description: 'Bridal, special events, and everyday makeup services',
    },
    {
      icon: '💅',
      title: 'Nail Services',
      description: 'Manicures, pedicures, and nail art for the perfect finish',
    },
    {
      icon: '🧖‍♀️',
      title: 'Wig Installation & Care',
      description: 'Professional wig installation and maintenance services',
    },
    {
      icon: '👁️',
      title: 'Lashes & Brows',
      description: 'Extensions, lifts, tints, and shaping services',
    },
    // {
    //   icon: '✂️',
    //   title: 'Specialized Care',
    //   description: 'Keratin treatments, coloring, and hair therapy',
    // },
  ];

  const testimonials = [
    {
      name: 'Sarah Idowu',
      role: 'Content Creator',
      text: 'Vee Beauty has completely transformed my look. The team is incredibly professional and the ambiance is so relaxing.',
      // image: '👩‍🦰',
    },
    {
      name: 'Alicia Temitayo',
      role: 'Model',
      text: 'Every visit feels like a spa day. The attention to detail and personalized care is unmatched.',
      // image: '👩‍🦱',
    },
    {
      name: 'Jessica Onoja',
      role: 'Wedding Planner',
      text: 'I trust Vee Beauty Concept for all my special event prep. They make you feel beautiful inside and out.',
      // image: '👩‍🦲',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <img src={logo} alt="Vee Beauty Concept Logo" className="h-20 w-20" />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-primary transition">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition">
                About
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition">
                Testimonials
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition">
                Contact
              </a>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition">
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-border">
              <a
                href="#services"
                className="block py-2 text-foreground hover:text-primary transition"
              >
                Services
              </a>
              <a
                href="#about"
                className="block py-2 text-foreground hover:text-primary transition"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block py-2 text-foreground hover:text-primary transition"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block py-2 text-foreground hover:text-primary transition"
              >
                Contact
              </a>
              <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition mt-4">
                Book Now
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-pretty">
                Elevate Your <span className="text-primary">Beauty</span>
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Experience luxury hair and beauty services in an ambiance designed for your
                ultimate relaxation. Our expert stylists deliver personalized care and premium
                treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:opacity-90 transition font-semibold">
                  Book Appointment
                </button>
                {/* <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary/10 transition font-semibold">
                  Learn More
                </button> */}
              </div>
            </div>
            <div className="relative">
              <div className="bg-linear-to-br from-primary to-accent rounded-2xl h-96 md:h-125 flex items-center justify-center text-6xl font-bold text-white shadow-lg">
                {/* <video className='absolute inset-0 w-full h-full object-cover' autoPlay loop muted playsInline preload="metadata">
                  <source src={heroVideo} type='video/mp4' />
                </video> */}
                <img src={veeHero} alt="Vee Beauty Concept Hero" className="rounded-2xl object-cover h-96 md:h-125" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary rounded-xl p-4 shadow-lg">
                <p className="text-sm font-semibold text-secondary-foreground">
                  5★ Rated Salon
                </p>
                <p className="text-xs text-secondary-foreground/70">100+ Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">
              Our Premium Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services crafted to
              enhance your natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl p-8 hover:shadow-lg hover:border-primary/50 border border-border transition cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-linear-to-br from-primary/20 to-accent/20 rounded-2xl h-96 md:h-125 flex items-center justify-center text-7xl font-bold">
              <img src={veeNails} alt="Vee Beauty Concept Nails" className="rounded-2xl object-cover h-96 md:h-125 w-full" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-pretty">
                About <span className="text-primary">Vee Beauty Concept</span>
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Since 2019, Vee Beauty Concept has been dedicated to providing exceptional beauty and
                wellness services. Our team of certified professionals combines expertise with
                passion to deliver transformative results.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Stylists</h4>
                    <p className="text-foreground/70">
                      Trained professionals with years of experience
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Premium Products</h4>
                    <p className="text-foreground/70">
                      Using only the finest brands and ingredients
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Luxurious Ambiance</h4>
                    <p className="text-foreground/70">
                      Relax in our serene and elegant setting
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">
              What Our Clients Say
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Hear from our satisfied clients about their transformative experiences at Luxe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salon Gallery Marquee Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty">
              Our Salon Experience
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              See our happy clients enjoying our premium beauty and wellness services
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex gap-4 marquee marquee-pause">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-80 h-96 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                >
                  <img
                    src={`/salon-${num}.jpeg`}
                    alt={`Salon client experience ${num}`}
                    width={320}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pretty">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="opacity-90">123 Beauty Close, Wuse Zone 7, Abuja 900287</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="opacity-90">+234 803 456 7890</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="opacity-90">hello@luxesalon.com</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Hours</h4>
                  <div className="text-sm opacity-90 space-y-1">
                    <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                    <p>Saturday: 10:00 AM - 6:00 PM</p>
                    <p>Sunday: 11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-foreground rounded-xl p-8 text-foreground">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Service Interested In</label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background">
                    <option>Select a service</option>
                    <option>Hair Styling</option>
                    <option>Makeup Artistry</option>
                    <option>Nail Services</option>
                    <option>Spa Treatments</option>
                    <option>Lash & Brow</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Tell us more about your needs"
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src={logo} alt="Luxe Salon Logo" className="w-24 h-auto mb-4" />
              <p className="text-sm opacity-75">
                Your destination for luxury beauty and wellness services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="text-sm space-y-2 opacity-75">
                <li>Hair Styling</li>
                <li>Makeup Artistry</li>
                <li>Nail Services</li>
                <li>Spa Treatments</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="text-sm space-y-2 opacity-75">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <ul className="text-sm space-x-4 opacity-75 flex">
                <li><img src={instagram} alt="Instagram" className="w-5 h-5 invert" /></li>
                <li><img src={facebook} alt="Facebook" className="w-5 h-5 invert" /></li>
                <li><img src={tiktok} alt="TikTok" className="w-5 h-5 invert" /></li>
                <li><img src={snapchat} alt="Snapchat" className="w-5 h-5 invert" /></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; {new Date().getFullYear()} Vee Beauty Concept. All rights reserved.</p>
            {/* <p>&copy; 2024 Luxe Salon. All rights reserved. | Privacy Policy | Terms of Service</p> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
