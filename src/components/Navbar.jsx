import { useState } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';

const navItems = [
  { label: 'Home', href: '#home', icon: 'fas fa-home' },
  { label: 'About', href: '#about', icon: 'fas fa-heart' },
  { label: 'Menu', href: '#menu', icon: 'fas fa-utensils' },
  { label: 'Specials', href: '#specials', icon: 'fas fa-star' },
  { label: 'Gallery', href: '#gallery', icon: 'fas fa-camera' },
  { label: 'Contact', href: '#contact', icon: 'fas fa-envelope' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 50;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 z-50 group">
            <div className="relative">
              <img
                src="/logo.jpg"
                alt="Ceny's Meryenda Corner"
                className="w-11 h-11 rounded-full object-cover border-2 border-gold/50 group-hover:border-gold transition-colors"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <span
              className={`font-heading text-xl font-bold transition-colors ${
                scrolled ? 'text-banana' : 'text-white'
              }`}
            >
              Ceny's{' '}
              <span className="text-gold">Meryenda</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    scrolled
                      ? 'text-charcoal/80 hover:text-banana hover:bg-banana/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3 z-50">
            <a
              href="https://www.facebook.com/cenysmeryendacorner"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-7 h-0.5 rounded-full transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                } ${scrolled ? 'bg-charcoal' : 'bg-white'}`}
              ></span>
              <span
                className={`block w-7 h-0.5 rounded-full transition-all duration-300 ${
                  menuOpen ? 'opacity-0 scale-0' : ''
                } ${scrolled ? 'bg-charcoal' : 'bg-white'}`}
              ></span>
              <span
                className={`block w-7 h-0.5 rounded-full transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                } ${scrolled ? 'bg-charcoal' : 'bg-white'}`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-80 h-screen bg-white shadow-2xl transition-all duration-500 lg:hidden ${
            menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          {/* Mobile menu header */}
          <div className="px-6 pt-24 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Ceny's"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-heading font-bold text-charcoal">Ceny's Meryenda</h3>
                <p className="text-xs text-charcoal/50">Authentic Filipino Flavors</p>
              </div>
            </div>
          </div>

          <div className="px-4 py-6 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-charcoal/80 font-medium hover:bg-cream hover:text-banana transition-all group"
              >
                <span className="w-9 h-9 rounded-lg bg-cream group-hover:bg-banana/10 flex items-center justify-center transition-colors">
                  <i className={`${item.icon} text-sm text-charcoal/40 group-hover:text-banana`}></i>
                </span>
                {item.label}
              </a>
            ))}

            <div className="mt-6 pt-6 border-t border-gray-100">
              <a
                href="https://www.facebook.com/cenysmeryendacorner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                <i className="fab fa-facebook-f"></i> Visit Facebook Page
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}