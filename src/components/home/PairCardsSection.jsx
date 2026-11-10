import { useEffect, useState } from 'react';
import { appUrl } from '../../utils/routes.js';

const trendingPairs = [
  {
    title: 'Dr. Martens Zebzag',
    description: 'Dr. Martens Zebzag Mule: el clog de gamuza con la suela y la costura amarilla de siempre.',
    image: 'https://cms.blumewebsites.com/cachos/website/mb-drmartens.jpg',
    href: '/product?referenceCode=20DRM31737439&colorCode=SAVANNAH%20TAN',
    action: 'Ver Zebzag Mule',
  },
  {
    title: 'New Balance 9060',
    description: 'New Balance 9060: suela chunky y diseño retro que está en todas partes.',
    image: 'https://cms.blumewebsites.com/cachos/website/mb-newbalance3.jpg',
    href: '/product?referenceCode=10NBU9060&colorCode=2FD-GREY',
    action: 'Ver 9060',
  },
  {
    title: 'Sperry A/O 2-Eye',
    description: 'Sperry Authentic Original: el zapato náutico de cuero, un clásico desde 1935.',
    image: 'https://cms.blumewebsites.com/cachos/website/mb-sperry.jpg',
    href: '/product?referenceCode=10SP13934343&colorCode=BROWN%20PRIMARY%2FMULTI',
    action: 'Ver Sperry A/O',
  },
  {
    title: 'Birkenstock Arizona',
    description: 'Birkenstock Arizona Big Buckle: la sandalia de siempre con hebillas XL.',
    image: 'https://cms.blumewebsites.com/cachos/website/mb-birkenstock.jpg',
    href: '/product?referenceCode=30BI1030504&colorCode=STONE%20COIN',
    action: 'Ver Arizona',
  },
  {
    title: 'Element Topaz',
    description: 'Element Topaz: el tenis de skate en lona para el día a día.',
    image: 'https://cms.blumewebsites.com/cachos/website/mb-element.jpg',
    href: '/product?referenceCode=10ELMELSH200002&colorCode=IND-INDIGO',
    action: 'Ver Topaz',
  },
];

export default function PairCardsSection() {
  const [activePair, setActivePair] = useState(1);
  const pair = trendingPairs[activePair];

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const timer = window.setInterval(() => {
      setActivePair((current) => (current + 1) % trendingPairs.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="trending-pair" aria-label="Pares que marcan tendencia">
      <div className="trending-pair__inner">
        <div className="trending-pair__copy" aria-live="polite">
          <span className="trending-pair__eyebrow">Las marcas que marcan tendencia</span>
          <h2 className="trending-pair__title">Elegí tu<br /><em>próximo par</em></h2>
          <p className="trending-pair__description">{pair.description}</p>
          <div className="trending-pair__actions">
            <a className="trending-pair__primary" href={appUrl(pair.href)}>{pair.action}</a>
            <a className="trending-pair__secondary" href={appUrl('/products')}>Ver catálogo</a>
          </div>
          <div className="trending-pair__pagination" aria-label="Elegir par destacado">
            {trendingPairs.map((item, index) => (
              <button
                className={`trending-pair__dot${index === activePair ? ' is-active' : ''}`}
                key={item.title}
                type="button"
                aria-label={`Ver ${item.title}`}
                aria-pressed={index === activePair}
                onClick={() => setActivePair(index)}
              >
                <span />
              </button>
            ))}
          </div>
        </div>

        <div className="trending-pair__stage">
          <div className="trending-pair__circle" />
          <img
            key={pair.title}
            className={`trending-pair__product trending-pair__product--${activePair + 1}`}
            src={pair.image}
            alt={pair.title}
          />
          <img className="trending-pair__star trending-pair__star--one" src="https://cms.blumewebsites.com/cachos/website/ck-star-negra.png" alt="" />
          <img className="trending-pair__star trending-pair__star--two" src="https://cms.blumewebsites.com/cachos/website/ck-star-negra.png" alt="" />
          <img className="trending-pair__star trending-pair__star--three" src="https://cms.blumewebsites.com/cachos/website/ck-star-negra.png" alt="" />
          <span className="trending-pair__product-name">{pair.title}</span>
        </div>
      </div>
    </section>
  );
}
