import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-near-black pt-20 pb-0 text-white/70 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-banana via-gold to-terracotta"></div>

      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 opacity-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.3), transparent 70%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.jpg"
                alt="Ceny's"
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/30"
              />
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Ceny's
                </h3>
                <span className="text-gold text-sm font-medium">Meryenda Corner</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-white/50">
              Serving authentic Filipino merienda with love. Your trusted source
              for delicious, affordable, and home-made snacks since day one.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/cenysmeryendacorner' },
                { icon: 'fab fa-facebook-messenger', href: '#' },
                { icon: 'fab fa-instagram', href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-banana hover:text-white hover:border-banana hover:-translate-y-1 transition-all"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gold rounded-full"></span>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {['Home', 'About Us', 'Menu', 'Specials', 'Contact'].map(
                (l, i) => (
                  <li key={i}>
                    <a
                      href={`#${
                        ['home', 'about', 'menu', 'specials', 'contact'][i]
                      }`}
                      className="text-sm text-white/45 hover:text-gold hover:translate-x-1 inline-block transition-all"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Popular Items */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-terracotta rounded-full"></span>
              Popular Items
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                'Turon',
                'Kwek-Kwek',
                'Lumpiang Shanghai',
                'Sisig',
                'Kaldereta',
              ].map((l, i) => (
                <li key={i}>
                  <a
                    href="#menu"
                    className="text-sm text-white/45 hover:text-gold hover:translate-x-1 inline-block transition-all"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-base font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-banana-light rounded-full"></span>
              Stay Updated
            </h4>
            <p className="text-sm mb-5 text-white/45 leading-relaxed">
              Get the latest news about our new menu items and promos!
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border-2 border-white/10 border-r-0 rounded-l-xl bg-white/5 text-white placeholder-white/30 outline-none focus:border-banana transition-all text-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-banana to-gold rounded-r-xl text-white hover:from-banana-light transition-all"
              >
                {subscribed ? (
                  <i className="fas fa-check"></i>
                ) : (
                  <i className="fas fa-arrow-right"></i>
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-green-400 text-xs mt-2 animate-fadeInUp">
                ✓ Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/30">
          <span>
            &copy; 2024 Ceny's Meryenda Corner. All Rights Reserved.
          </span>
          <span className="flex items-center gap-1">
            Made with <span className="text-red-400">❤️</span> in the Philippines 🇵🇭
          </span>
        </div>
      </div>
    </footer>
  );
}