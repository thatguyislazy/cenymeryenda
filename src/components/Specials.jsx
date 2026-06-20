import { specials } from '../data/menuData';
import useInView from '../hooks/useInView';
import SectionHeader from './SectionHeader';

function SpecialCard({ special, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`relative text-center transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`group rounded-2xl p-8 border backdrop-blur transition-all duration-500 hover:-translate-y-3 ${
          special.featured
            ? 'bg-gradient-to-br from-terracotta/20 to-gold/20 border-gold/40 md:scale-105 shadow-2xl shadow-gold/10'
            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-gold/30 hover:shadow-xl'
        }`}
      >
        {special.crown && (
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-4xl animate-bounce">
            {special.crown}
          </span>
        )}

        {/* Icon with glow */}
        <div className="relative inline-block mb-5">
          <span className="text-5xl block group-hover:scale-110 transition-transform duration-300">
            {special.icon}
          </span>
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <h3 className="font-heading text-xl font-bold text-white mb-2">
          {special.name}
        </h3>
        <p className="text-white/60 text-sm mb-6 leading-relaxed">
          {special.desc}
        </p>

        {/* Price */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="text-white/30 line-through text-lg">
            ₱{special.oldPrice}
          </span>
          <span className="font-heading text-4xl font-black text-gold">
            ₱{special.newPrice}
          </span>
        </div>

        {/* Savings badge */}
        <span
          className={`inline-block px-6 py-2 rounded-full text-sm font-bold shadow-lg ${
            special.featured
              ? 'bg-gradient-to-r from-banana to-gold text-white shadow-banana/30'
              : 'bg-gradient-to-r from-terracotta to-gold-dark text-white shadow-terracotta/30'
          }`}
        >
          {special.tag}
        </span>
      </div>
    </div>
  );
}

export default function Specials() {
  return (
    <section
      id="specials"
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1B4332 50%, #1a1a1a 100%)',
      }}
    >
      {/* Decorative glows */}
      <div
        className="absolute top-0 right-0 w-3/4 h-full opacity-10"
        style={{
          background:
            'radial-gradient(circle at 80% 50%, rgba(245,158,11,0.3), transparent 60%)',
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-1/2 h-full opacity-10"
        style={{
          background:
            'radial-gradient(circle at 20% 80%, rgba(194,65,12,0.3), transparent 50%)',
        }}
      ></div>

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M20 20c-5.523 0-10-4.477-10-10S14.477 0 20 0s10 4.477 10 10-4.477 10-10 10zm0-2c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          tag="Don't Miss"
          icon="fas fa-star"
          title="Today's"
          highlight="Specials"
          dark
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {specials.map((s, i) => (
            <SpecialCard key={s.id} special={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}