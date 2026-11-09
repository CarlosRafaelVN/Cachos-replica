import { useRef } from 'react';
import ProductCard from '../../pages/products/components/ProductCard.jsx';
import { normalizeHomeProduct } from '../../features/catalog/normalizeHomeProduct.js';

const columnClasses = {
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
};

export default function ProductGridSection({
  title,
  products,
  subtitle,
  columns = 4,
  variant,
}) {
  const bestSellersTrack = useRef(null);
  const isBestSellers = title === 'Lo más buscado';
  const isLook = variant === 'look';
  const isCarousel = isBestSellers || isLook;

  const headerClass = isCarousel
    ? 'best-sellers__header'
    : 'mb-6 flex items-end justify-between gap-4';

  return (
    <section className={`mx-auto ${isBestSellers ? 'best-sellers-section' : isLook ? 'look-section' : 'max-w-[1600px] px-4 py-8 md:px-6 lg:py-12'}`}>
      <div className={headerClass}>
        <div>
          <h2 className={isCarousel ? 'best-sellers__title' : 'text-[1.8rem] font-black uppercase leading-[1.1] tracking-[-0.07em] text-black md:text-[2.5rem]'}>
            {title}
          </h2>
          {subtitle && (
            isCarousel ? (
              <p className="best-sellers__subtitle">{subtitle}</p>
            ) : (
              <span className="text-[11px] uppercase tracking-[0.12em] text-black/60">{subtitle}</span>
            )
          )}
        </div>
      </div>

      {isCarousel ? (
        <div className="best-sellers__carousel">
          <button
            className="best-sellers__arrow best-sellers__arrow--previous"
            type="button"
            aria-label="Productos anteriores"
            onClick={() => bestSellersTrack.current?.scrollBy({ left: -bestSellersTrack.current.clientWidth, behavior: 'smooth' })}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <div className="best-sellers__track" ref={bestSellersTrack}>
            {products.map((product) => (
              <ProductCard
                key={product.name}
                className="home-product-card"
                product={normalizeHomeProduct(product)}
              />
            ))}
          </div>
          <button
            className="best-sellers__arrow best-sellers__arrow--next"
            type="button"
            aria-label="Siguientes productos"
            onClick={() => bestSellersTrack.current?.scrollBy({ left: bestSellersTrack.current.clientWidth, behavior: 'smooth' })}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      ) : (
        <div className={`grid gap-5 md:grid-cols-2 ${columnClasses[columns] ?? columnClasses[4]}`}>
          {products.map((product) => (
            <ProductCard key={product.name} product={normalizeHomeProduct(product)} />
          ))}
        </div>
      )}
      {isLook && (
        <a className="look-section__all" href="https://www.cachoscr.com/catalog?productType=ACCESORIO">
          Ver todos los accesorios <span aria-hidden="true">→</span>
        </a>
      )}
    </section>
  );
}