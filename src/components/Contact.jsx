import { useState } from 'react';
import useInView from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const infoCards = [
  { icon: 'fas fa-location-dot', title: 'Location', desc: 'Technopark Square, Nuvali Rd, Biñan, Laguna', color: 'from-red-400 to-pink-500' },
  { icon: 'fas fa-clock', title: 'Operating Hours', desc: 'Monday - Sunday: 6:00 AM - 8:00 PM', color: 'from-blue-400 to-indigo-500' },
  { icon: 'fas fa-phone', title: 'Phone', desc: 'Contact us for orders and inquiries', color: 'from-green-400 to-emerald-500' },
];

const socials = [
  { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/cenysmeryendacorner', color: 'bg-blue-600 hover:bg-blue-700', label: 'Facebook' },
  { icon: 'fab fa-facebook-messenger', href: '#', color: 'bg-sky-400 hover:bg-sky-500', label: 'Messenger' },
  { icon: 'fab fa-instagram', href: '#', color: 'bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600', label: 'Instagram' },
  { icon: 'fab fa-viber', href: '#', color: 'bg-purple-500 hover:bg-purple-600', label: 'Viber' },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [ref, inView] = useInView();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-banana/5 to-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-br from-terracotta/5 to-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          tag="Get In Touch"
          icon="fas fa-envelope"
          title="Contact"
          highlight="Us"
          desc="We'd love to hear from you! Place an order, ask about our menu, or just say hello."
        />

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Info Side */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-charcoal mb-3">
              We'd Love to Hear From You!
            </h3>
            <p className="text-charcoal/55 mb-8 leading-relaxed">
              Whether you want to place an order, ask about our menu, or just say
              hello — reach out to us through any of the channels below.
            </p>

            {/* Info Cards */}
            <div className="flex flex-col gap-4 mb-8">
              {infoCards.map((c, i) => (
                <div
                  key={i}
                  className="group flex gap-4 items-start p-5 bg-cream/50 rounded-2xl hover:bg-cream hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-cream-dark"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <i className={c.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal text-sm mb-1">
                      {c.title}
                    </h4>
                    <p className="text-charcoal/50 text-sm">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-charcoal/60 mb-3 uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className={`w-12 h-12 rounded-xl ${s.color} text-white flex items-center justify-center hover:-translate-y-1 transition-all shadow-md hover:shadow-lg`}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-banana to-gold flex items-center justify-center text-white">
                <i className="fas fa-paper-plane text-sm"></i>
              </div>
              <div>
                <h4 className="font-heading font-bold text-charcoal">Send us a Message</h4>
                <p className="text-xs text-charcoal/40">We'll get back to you ASAP!</p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-charcoal/70 flex items-center gap-2">
                  <i className="fas fa-user text-banana text-xs"></i> Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="px-4 py-3.5 border-2 border-gray-100 rounded-xl text-charcoal bg-gray-50/50 focus:border-banana focus:bg-white focus:ring-4 focus:ring-banana/10 outline-none transition-all font-body placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-charcoal/70 flex items-center gap-2">
                  <i className="fas fa-envelope text-banana text-xs"></i> Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="px-4 py-3.5 border-2 border-gray-100 rounded-xl text-charcoal bg-gray-50/50 focus:border-banana focus:bg-white focus:ring-4 focus:ring-banana/10 outline-none transition-all font-body placeholder:text-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-sm font-medium text-charcoal/70 flex items-center gap-2">
                  <i className="fas fa-tag text-banana text-xs"></i> Subject
                </label>
                <select className="px-4 py-3.5 border-2 border-gray-100 rounded-xl text-charcoal bg-gray-50/50 focus:border-banana focus:bg-white focus:ring-4 focus:ring-banana/10 outline-none transition-all font-body">
                  <option>Place an Order</option>
                  <option>Menu Inquiry</option>
                  <option>Catering / Bulk Order</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-sm font-medium text-charcoal/70 flex items-center gap-2">
                  <i className="fas fa-comment text-banana text-xs"></i> Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell us what you need..."
                  className="px-4 py-3.5 border-2 border-gray-100 rounded-xl text-charcoal bg-gray-50/50 focus:border-banana focus:bg-white focus:ring-4 focus:ring-banana/10 outline-none transition-all font-body resize-y placeholder:text-gray-300"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sent}
                className={`sm:col-span-2 w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  sent
                    ? 'bg-green-500 shadow-lg shadow-green-500/30'
                    : 'bg-gradient-to-r from-banana to-gold hover:shadow-xl hover:shadow-banana/30 hover:-translate-y-0.5'
                }`}
              >
                {sent ? (
                  <>
                    <i className="fas fa-check"></i> Message Sent Successfully!
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}