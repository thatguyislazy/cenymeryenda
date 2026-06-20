import { useState } from 'react';
import useInView from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import { galleryItems } from '../data/menuData';

function GalleryItem({ item, index, onClick }) {
  const [ref, inView] = useInView(0.05);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${item.large ? 'col-span-2 row-span-2' : ''} ${
        item.tall ? 'row-span-2' : ''
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Shimmer placeholder */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      <img
        src={item.src}
        alt={item.title}
        className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
          item.large || item.tall ? 'min-h-[420px]' : 'min-h-[200px]'
        } ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.target.src = '/food/lumpiang-shanghai.jpg';
          setLoaded(true);
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <i className="fas fa-expand text-white text-xs"></i>
          </span>
          <span className="text-white font-medium text-sm">{item.title}</span>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  if (currentIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
      >
        <i className="fas fa-times text-xl"></i>
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
      >
        <i className="fas fa-chevron-left text-lg"></i>
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
      >
        <i className="fas fa-chevron-right text-lg"></i>
      </button>

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={items[currentIndex].src}
          alt={items[currentIndex].title}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
          onError={(e) => {
            e.target.src = '/food/lumpiang-shanghai.jpg';
          }}
        />
        <div className="text-center mt-4">
          <p className="text-white font-medium text-lg">
            {items[currentIndex].title}
          </p>
          <p className="text-white/50 text-sm mt-1">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex(
      (i) => (i - 1 + galleryItems.length) % galleryItems.length
    );
  const nextImage = () =>
    setLightboxIndex((i) => (i + 1) % galleryItems.length);

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div
        className="absolute top-0 left-0 w-64 h-64 opacity-5"
        style={{
          background:
            'radial-gradient(circle, #F59E0B 0%, transparent 70%)',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          tag="Visual Feast"
          icon="fas fa-camera"
          title="Our"
          highlight="Gallery"
          desc="A glimpse into the delicious world of Ceny's Meryenda Corner"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <GalleryItem
              key={i}
              item={item}
              index={i}
              onClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={galleryItems}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </section>
  );
}