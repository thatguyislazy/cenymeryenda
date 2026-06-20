import useInView from '../hooks/useInView';

export default function SectionHeader({ tag, icon, title, highlight, dark, desc }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`text-center mb-16 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-5 ${
          dark
            ? 'bg-white/15 text-white backdrop-blur border border-white/10'
            : 'bg-gradient-to-r from-banana to-banana-light text-white shadow-lg shadow-banana/20'
        }`}
      >
        <i className={`${icon} text-xs`}></i>
        {tag}
      </span>
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          dark ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}{' '}
        <span className={dark ? 'text-gold' : 'text-terracotta'}>{highlight}</span>
      </h2>
      <div className="flex items-center justify-center gap-3 mt-2">
        <span
          className={`block w-16 h-0.5 rounded-full ${
            dark ? 'bg-gold/40' : 'bg-terracotta/30'
          }`}
        ></span>
        <span
          className={`w-2 h-2 rounded-full ${
            dark ? 'bg-gold' : 'bg-terracotta'
          }`}
        ></span>
        <span
          className={`block w-16 h-0.5 rounded-full ${
            dark ? 'bg-gold/40' : 'bg-terracotta/30'
          }`}
        ></span>
      </div>
      {desc && (
        <p className={`mt-5 max-w-2xl mx-auto text-base leading-relaxed ${
          dark ? 'text-white/70' : 'text-charcoal/55'
        }`}>
          {desc}
        </p>
      )}
    </div>
  );
}