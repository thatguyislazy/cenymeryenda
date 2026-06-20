import useScrollPosition from '../hooks/useScrollPosition';

export default function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 500;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-banana to-gold text-white shadow-xl shadow-banana/20 z-50 flex items-center justify-center transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-banana/30 ${
        visible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-5 scale-75 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}