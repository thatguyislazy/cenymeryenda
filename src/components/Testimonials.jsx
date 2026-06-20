import { useState, useEffect, useRef, useCallback } from 'react';
import { testimonials } from '../data/menuData';
import SectionHeader from './SectionHeader';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAuto = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % testimonials.length),
      5000
    );
  }, []);

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, [startAuto]);

  const goTo = (i) => {
    setCurrent(i);
    startAuto();
  };
  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    startAuto();
  };
  const next = () => {
    setCurrent((c) => (c + 1) % testimonials.length);
    startAuto();
  };

  const touchRef = useRef(0);
  const onTouchStart = (e) => {
    touchRef.current = e.touches[0].screenX;
  };
  const onTouchEnd = (e) => {
    const diff = touchRef.current - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-banana/5 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-gold/5 to-transparent rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          tag="What People Say"
          icon="fas fa-quote-left"
          title="Customer"
          highlight="Reviews"
          desc="Don't just take our word for it — hear what our happy customers have to say!"
        />

        <div
          className="max-w-3xl mx-auto overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="transition-transform duration-500 ease-out flex"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-full px-4">
                <div className="bg-gradient-to-br from-cream to-cream-dark rounded-3xl p-10 md:p-12 text-center relative overflow-hidden">
                  {/* Quote icon */}
                  <div className="absolute top-6 left-8 text-6xl text-banana/10 font-serif leading-none">
                    "
                  </div>

                  {/* Stars */}
                  <div className="text-xl tracking-widest mb-5">
                    ⭐⭐⭐⭐⭐
                  </div>

                  {/* Quote text */}
                  <p className="text-charcoal text-lg md:text-xl italic leading-relaxed mb-8 max-w-xl mx-auto relative z-10">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-banana to-gold flex items-center justify-center text-white font-heading font-bold text-xl shadow-lg shadow-banana/20">
                      {t.initial}
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-charcoal text-base">
                        {t.name}
                      </h4>
                      <span className="text-terracotta text-sm font-medium">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white text-charcoal flex items-center justify-center hover:border-banana hover:text-banana hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <i className="fas fa-chevron-left text-sm"></i>
            </button>
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all rounded-full ${
                    i === current
                      ? 'w-8 h-2.5 bg-gradient-to-r from-banana to-gold'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-banana'
                  }`}
                ></button>
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gray-200 bg-white text-charcoal flex items-center justify-center hover:border-banana hover:text-banana hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <i className="fas fa-chevron-right text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}