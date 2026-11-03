import { useEffect, useState } from 'react';

const slides = [
  {
    brand: 'Converse',
    eyebrow: 'Nueva colección',
    title: <>CONVERSE ×<br />HELLO KITTY®<br />&amp; FRIENDS</>,
    description: 'Chuck Taylor con My Melody, Kuromi y toda la pandilla. Edición limitada.',
    action: 'Comprar la colección',
    image: 'https://cms.blumewebsites.com/cachos/website/cx-converse-hero-desk3.webp',
    imageAlt: 'Tenis Converse de la colección Hello Kitty',
    accent: '#F178B9',
    imagePosition: 'center',
  },
  {
    brand: 'Dr. Martens',
    eyebrow: 'Dr. Martens · Originales',
    title: <>HECHAS<br />PARA<br /><span>DURAR.</span></>,
    description: 'La bota 1460 de toda la vida y las Mary Jane, con la costura amarilla de siempre.',
    action: 'Comprar Dr. Martens',
    image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Botas de cuero estilo Dr. Martens',
    accent: '#F7C52B',
    imagePosition: 'center 58%',
  },
  {
    brand: 'Vans',
    eyebrow: 'Vans · Skate',
    title: <>OFF THE<br /><span>WALL.</span></>,
    description: 'La Old Skool de siempre y la Hylane, con su silueta acolchada de los 2000.',
    action: 'Comprar Vans',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Tenis clásicos de skate en lona',
    accent: '#DF1F25',
    imagePosition: 'center 58%',
  },
  {
    brand: 'HI-TEC',
    eyebrow: 'HI-TEC · Outdoor',
    title: <>HI-TEC<br /><span>-30%</span></>,
    description: 'Flash Trail y más estilos para la montaña o la ciudad, con hasta 30 % menos en línea.',
    action: 'Comprar HI-TEC',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=2000&q=85',
    imageAlt: 'Tenis deportivos para actividades al aire libre',
    accent: '#B9F22E',
    imagePosition: 'center 58%',
  },
];

const tickerBrands = [
  'HI-TEC',
  'TIMBERLAND',
  'NEW BALANCE',
  'NIKE',
  'DC SHOES',
  'CONVERSE',
  'DR. MARTENS',
  'VANS',
];

export default function BrandCarouselSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = slides[activeSlide];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [activeSlide]);

  const showSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section className="brand-carousel" aria-label="Campañas destacadas" aria-roledescription="carrusel">
      <div className="brand-carousel__hero" style={{ '--slide-accent': slide.accent }}>
        <img
          key={slide.brand}
          className="brand-carousel__image"
          src={slide.image}
          alt={slide.imageAlt}
          style={{ objectPosition: slide.imagePosition }}
        />
        <div className="brand-carousel__shade" />

        <div className="brand-carousel__content" aria-live="polite">
          <span className="brand-carousel__eyebrow">{slide.eyebrow}</span>
          <h1 className="brand-carousel__title">{slide.title}</h1>
          <p className="brand-carousel__description">{slide.description}</p>
          <a className="brand-carousel__action" href="#">
            {slide.action} <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="brand-carousel__controls">
          <button
            className="brand-carousel__arrow"
            type="button"
            aria-label="Campaña anterior"
            onClick={() => showSlide(activeSlide - 1)}
          >
            ←
          </button>
          <span className="brand-carousel__count">
            {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <button
            className="brand-carousel__arrow"
            type="button"
            aria-label="Campaña siguiente"
            onClick={() => showSlide(activeSlide + 1)}
          >
            →
          </button>
        </div>

        <nav className="brand-carousel__tabs" aria-label="Elegir campaña">
          {slides.map((item, index) => (
            <button
              className={`brand-carousel__tab${index === activeSlide ? ' is-active' : ''}`}
              key={item.brand}
              type="button"
              aria-pressed={index === activeSlide}
              onClick={() => showSlide(index)}
            >
              <span>{item.brand}</span>
              <span className="brand-carousel__tab-track" aria-hidden="true">
                <span />
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="brand-ticker" aria-label="Marcas disponibles">
        <div className="brand-ticker__track">
          {[0, 1].map((copy) => (
            <div className="brand-ticker__group" key={copy} aria-hidden={copy === 1}>
              {tickerBrands.map((brand) => (
                <span className="brand-ticker__item" key={brand}>
                  {brand}<i aria-hidden="true">✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
