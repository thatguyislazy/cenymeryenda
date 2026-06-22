import { useState } from 'react';
import { menuItems, categories, categoryInfo } from '../data/menuData';
import SectionHeader from './SectionHeader';
import MenuCard from './MenuCard';
import useInView from '../hooks/useInView';

function CategoryBanner({ catKey, info, count }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl mb-8 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div
        className={`bg-gradient-to-r ${info.gradient} px-8 py-6 flex items-center justify-between`}
      >
        <div className="flex items-center gap-4">
          <span className="text-4xl bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            {info.icon}
          </span>
          <div>
            <h3 className="font-heading text-2xl font-bold text-white">
              {info.title}
            </h3>
            <p className="text-white/80 text-sm mt-1">{info.subtitle}</p>
          </div>
        </div>
        <span className="hidden sm:block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm">
          {count} {count === 1 ? 'item' : 'items'}
        </span>
      </div>
    </div>
  );
}

export default function Menu() {
  const [filter, setFilter] = useState(categories[0].key);

  const filtered = menuItems.filter((i) => i.category === filter);

  return (
    <section id="menu" className="py-24 bg-cream relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          tag="What We Offer"
          icon="fas fa-utensils"
          title="Our"
          highlight="Meryenda Menu"
          desc="Discover our wide selection of authentic Filipino snacks, ulam, gulay, and group meals!"
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all flex items-center gap-2 ${
                filter === c.key
                  ? 'bg-gradient-to-r from-banana to-banana-light text-white border-banana shadow-lg shadow-banana/20 scale-105'
                  : 'bg-white text-charcoal border-gray-200 hover:border-banana hover:text-banana hover:shadow-md'
              }`}
            >
              <span>{c.icon}</span>
              {c.label}
            </button>
          ))}
        </div>

        {categoryInfo[filter] && (
          <CategoryBanner
            catKey={filter}
            info={categoryInfo[filter]}
            count={filtered.length}
          />
        )}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}