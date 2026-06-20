import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Specials />
      <Testimonials />
      <Gallery />
      <Contact />
      <CTA />
      <Footer />
      <BackToTop />
    </div>
  );
}