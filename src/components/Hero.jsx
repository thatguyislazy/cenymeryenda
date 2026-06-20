import { useState, useEffect } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';

const particles = [
  { size: 8, color: '#F59E0B', top: '20%', left: '10%', delay: 0, opacity: 0.6 },
  { size: 12, color: '#C2410C', top: '60%', left: '80%', delay: 1, opacity: 0.4 },
  { size: 6, color: '#fff', top: '80%', left: '20%', delay: 2, opacity: 0.3 },
  { size: 10, color: '#F59E0B', top: '30%', left: '70%', delay: 3, opacity: 0.5 },
  { size: 14, color: '#FCD34D', top: '70%', left: '50%', delay: 4, opacity: 0.3 },
  { size: 8, color: '#FCD34D', top: '45%', left: '15%', delay: 2.5, opacity: 0.4 },
  { size: 10, color: '#F59E0B', top: '15%', left: '60%', delay: 1.5, opacity: 0.35 },
];

export default function Hero() {
  const scrollY = useScrollPosition();
  const [count, setCount] = useState({ items: 0, customers: 0 });

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount({
        items: Math.floor(ease * 50),
        customers: Math.floor(ease * 1000),
      });
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F2B1E 0%, #1B4332 40%, #2D6A4F 100%)',
      }}
    >
      {/* Background Image with parallax */}
      <img
        src="/coverphoto.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        style={{ transform: `scale(1.1) translateY(${scrollY * 0.1}px)` }}
      />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

      {/* Glow effects */}
      <div
        className="absolute -top-1/2 -left-1/2 w-full h-full animate-heroGlow"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(245,158,11,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(194,65,12,0.1) 0%, transparent 40%)',
        }}
      ></div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            top: p.top,
            left: p.left,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
          }}
        ></div>
      ))}

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: Math.max(0, 1 - scrollY / 700),
        }}
      >
        {/* Tagline pill */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm text-gold text-sm font-medium mb-8 animate-fadeInDown">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          Authentic Filipino Flavors
        </div>

        {/* Main heading */}
        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-6 animate-fadeInUp delay-200">
          Ceny's{' '}
          <span className="relative inline-block">
            <span className="gradient-text">Meryenda</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8c30-6 60-6 90-2s70 2 106-4"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>
          </span>{' '}
          Corner
        </h1>

        {/* Description */}
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fadeInUp delay-400 leading-relaxed">
          Your go-to spot for delicious, home-made Filipino merienda! From
          classic street food to hearty rice meals — made with love, served with
          a smile. 🇵🇭
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 animate-fadeInUp delay-600">
          <a
            href="#menu"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-terracotta to-gold-dark text-white font-semibold rounded-full shadow-lg shadow-terracotta/30 hover:shadow-xl hover:shadow-terracotta/40 hover:-translate-y-1 transition-all"
          >
            <i className="fas fa-utensils group-hover:rotate-12 transition-transform"></i>
            View Our Menu
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white border-2 border-white/25 backdrop-blur-sm font-semibold rounded-full hover:bg-white/20 hover:border-white/40 hover:-translate-y-1 transition-all"
          >
            <i className="fas fa-phone group-hover:rotate-12 transition-transform"></i>
            Order Now
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 md:gap-14 animate-fadeInUp delay-800">
          <div className="text-center">
            <span className="block font-heading text-4xl md:text-5xl font-black text-gold">
              {count.items}+
            </span>
            <span className="text-white/60 text-sm mt-1 block">Menu Items</span>
          </div>
          <div className="w-px h-12 bg-white/15"></div>
          <div className="text-center">
            <span className="block font-heading text-4xl md:text-5xl font-black text-gold">
              {count.customers.toLocaleString()}+
            </span>
            <span className="text-white/60 text-sm mt-1 block">Happy Customers</span>
          </div>
          <div className="w-px h-12 bg-white/15 hidden md:block"></div>
          <div className="text-center hidden md:block">
            <span className="block font-heading text-4xl md:text-5xl font-black text-gold">
              5⭐
            </span>
            <span className="text-white/60 text-sm mt-1 block">Star Rating</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold transition-colors z-10 animate-bounceDown"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <i className="fas fa-chevron-down text-lg"></i>
      </a>
    </section>
  );
}