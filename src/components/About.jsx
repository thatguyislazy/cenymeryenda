import useInView from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const features = [
  { icon: '🥘', title: 'Home-Made Quality', desc: 'Every snack is freshly prepared daily with love and care', color: 'from-orange-400 to-amber-500' },
  { icon: '🌿', title: 'Fresh Ingredients', desc: 'We source the finest local ingredients for authentic taste', color: 'from-green-400 to-emerald-500' },
  { icon: '💰', title: 'Affordable Prices', desc: "Delicious merienda that won't break the bank", color: 'from-yellow-400 to-amber-500' },
  { icon: '❤️', title: 'Made with Love', desc: 'Each snack carries our passion for Filipino cuisine', color: 'from-pink-400 to-rose-500' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-banana/5 to-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-56 h-56 bg-gradient-to-br from-terracotta/5 to-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          tag="Our Story"
          icon="fas fa-heart"
          title="About"
          highlight="Ceny's Meryenda Corner"
        />

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Image Side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/coverphoto.jpg"
                alt="Ceny's Meryenda Corner"
                className="w-full h-[28rem] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-floatCard border border-cream-dark">
              <span className="text-4xl">🏆</span>
              <div>
                <span className="font-bold text-charcoal text-sm block">
                  Best Meryenda
                </span>
                <span className="text-gold font-bold text-sm">in Town!</span>
              </div>
            </div>
            {/* Decorative corner */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-l-4 border-t-4 border-gold/30 rounded-tl-2xl"></div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-charcoal mb-5 leading-tight">
              Serving Happiness,
              <br />
              <span className="text-terracotta">One Snack at a Time</span>
            </h3>
            <p className="text-charcoal/60 mb-4 leading-relaxed">
              Ceny's Meryenda Corner started with a simple love for Filipino
              snacks and a passion for sharing those flavors with the community.
              What began as a small home-based venture has grown into a beloved
              local favorite.
            </p>
            <p className="text-charcoal/60 mb-8 leading-relaxed">
              Every item on our menu is crafted using traditional recipes passed
              down through generations, combined with the freshest ingredients to
              bring you authentic Filipino merienda that tastes just like{' '}
              <em className="text-terracotta font-semibold">lola's</em> (grandma's) cooking.
            </p>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group flex gap-3 items-start p-4 rounded-xl hover:bg-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {f.icon}
                  </span>
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-sm mb-1">
                      {f.title}
                    </h4>
                    <p className="text-charcoal/50 text-xs leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}