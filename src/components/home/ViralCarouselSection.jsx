import { useState } from 'react';
import ProductCard from '../../pages/products/components/ProductCard.jsx';
import { normalizeHomeProduct } from '../../features/catalog/normalizeHomeProduct.js';

export default function ViralCarouselSection({ products }) {
  const [activeIndex, setActiveIndex] = useState(3);
  const [soundEnabledId, setSoundEnabledId] = useState(null);
  const previousIndex = (activeIndex - 1 + products.length) % products.length;
  const nextIndex = (activeIndex + 1) % products.length;
  const visibleProducts = [
    { product: products[previousIndex], index: previousIndex },
    { product: products[activeIndex], index: activeIndex },
    { product: products[nextIndex], index: nextIndex },
  ];

  const changeSlide = (direction) => {
    setActiveIndex((current) => (current + direction + products.length) % products.length);
    setSoundEnabledId(null);
  };

  return (
    <section className="viral-section" aria-label="Los más virales">
      <h2 className="viral-section__title">Los más virales</h2>
      <div className="viral-carousel">
        <div className="viral-carousel__slides">
          {visibleProducts.map(({ product, index }) => {
            const isActive = index === activeIndex;

            return (
              <article
                className={`viral-carousel__slide${isActive ? ' is-active' : ''}`}
                key={product.name}
                aria-label={product.name}
              >

                <ProductCard
                  className="viral-carousel__product-card"
                  product={normalizeHomeProduct(product)}
                />
                <a className="viral-carousel__more" href={product.catalogHref}>
                  Ver todos ({product.count})
                </a>
              </article>
            );
          })}
        </div>

        <button
          className="viral-carousel__arrow viral-carousel__arrow--previous"
          type="button"
          aria-label="Videos virales anteriores"
          onClick={() => changeSlide(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button
          className="viral-carousel__arrow viral-carousel__arrow--next"
          type="button"
          aria-label="Siguientes videos virales"
          onClick={() => changeSlide(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
    </section>
  );
}
