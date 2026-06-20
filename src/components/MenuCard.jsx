import { useState } from 'react';
import useInView from '../hooks/useInView';

const badgeColors = {
  'Best Seller': 'bg-terracotta text-white',
  Popular: 'bg-pink-500 text-white',
  'Must Try': 'bg-purple-600 text-white',
  'Meal Deal': 'bg-banana text-white',
  Premium: 'bg-gold-dark text-white',
  'Party Size': 'bg-terracotta-light text-white',
  Inquire: 'bg-charcoal text-white',
  '₱80 Only': 'bg-gradient-to-r from-green-500 to-emerald-600 text-white',
  Spicy: 'bg-gradient-to-r from-red-500 to-orange-500 text-white',
  'Good for 4-5': 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white',
  'Good for 6-8': 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white',
};

const categoryAccents = {
  merienda: 'from-orange-500/10 to-amber-500/10',
  ulam: 'from-terracotta/10 to-terracotta-light/10',
  gulay: 'from-green-500/10 to-emerald-500/10',
  group: 'from-purple-500/10 to-indigo-500/10',
  party: 'from-pink-500/10 to-rose-500/10',
};

const priceAccents = {
  merienda: 'text-gold-dark',
  ulam: 'text-terracotta',
  gulay: 'text-green-600',
  group: 'text-purple-600',
  party: 'text-pink-600',
};

export default function MenuCard({ item, index }) {
  const [ref, inView] = useInView(0.05);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {/* Image Area */}
      <div
        className={`relative bg-gradient-to-br ${categoryAccents[item.category] || 'from-cream to-cream-dark'} min-h-[12rem] overflow-hidden`}
      >
        {item.image && !imgError ? (
          <>
            {/* Shimmer loading placeholder */}
            {!imgLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 animate-pulse" />
            )}
            <img
              src={item.image}
              alt={item.name}
              className={`w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          </>
        ) : (
          <div className="w-full h-48 flex items-center justify-center p-8">
            <span
              className="text-6xl group-hover:scale-110 transition-transform duration-300"
              style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
            >
              {item.emoji}
            </span>
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {item.badge && (
          <span
            className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
              badgeColors[item.badge] || 'bg-banana text-white'
            }`}
          >
            {item.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-heading text-base font-bold text-charcoal leading-tight group-hover:text-banana transition-colors">
            {item.name}
          </h3>
          <span
            className={`font-heading text-lg font-black whitespace-nowrap ${priceAccents[item.category] || 'text-terracotta'}`}
          >
            {item.price !== null ? `₱${item.price}` : 'Inquire'}
          </span>
        </div>

        <p className="text-charcoal/55 text-sm leading-relaxed mb-3 line-clamp-2">
          {item.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-cream text-charcoal/60 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}