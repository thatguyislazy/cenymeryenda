export default function CTA() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #F59E0B 100%)',
      }}
    >
      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M20 20c-5.523 0-10-4.477-10-10S14.477 0 20 0s10 4.477 10 10-4.477 10-10 10zm0-2c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-20"
        style={{
          background: 'radial-gradient(ellipse, rgba(252,211,77,0.4), transparent 70%)',
        }}
      ></div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        {/* Emoji */}
        <div className="text-6xl mb-6 animate-bounce">🤤</div>

        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Craving for Meryenda?
        </h2>
        <p className="text-white/85 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Follow us on Facebook for the latest updates, promos, and new menu
          items! Don't miss out on our delicious offerings.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/cenysmeryendacorner"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-white text-banana font-bold rounded-full shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all text-lg"
          >
            <i className="fab fa-facebook-f group-hover:scale-110 transition-transform"></i>
            Follow Us on Facebook
          </a>
          <a
            href="#menu"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/15 text-white border-2 border-white/25 backdrop-blur font-semibold rounded-full hover:bg-white/25 hover:-translate-y-1 transition-all"
          >
            <i className="fas fa-utensils group-hover:rotate-12 transition-transform"></i>
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}