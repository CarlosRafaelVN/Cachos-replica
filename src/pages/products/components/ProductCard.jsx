const formatPrice = (value) => new Intl.NumberFormat('es-CR', {
  style: 'currency', currency: 'CRC', maximumFractionDigits: 0,
}).format(value);

const identifierValue = (value) => {
  if (typeof value === 'string' || typeof value === 'number') return value;
  return value?.code ?? value?.value ?? value?.name ?? null;
};

export default function ProductCard({ product }) {
  const raw = product.crudo ?? {};
  const referenceCode = identifierValue(product.referenceCode ?? raw.referenceCode ?? raw.reference);
  const colorCode = identifierValue(product.colorCode ?? raw.colorCode ?? raw.color);
  const detailUrl = referenceCode && colorCode
    ? `/product?${new URLSearchParams({ referenceCode: String(referenceCode), colorCode: String(colorCode) })}`
    : '/product';

  return (
    <article className="products-card">
      <a className="products-card__media" href={detailUrl} aria-label={`Ver ${product.nombre}`}>
        {product.imagenes[0]
          ? <img src={product.imagenes[0]} alt={product.nombre} loading="lazy" />
          : <span className="products-card__placeholder">{product.nombre}</span>}
        {product.precioOriginal && <span className="products-card__sale">Oferta</span>}
        <span className="products-card__quick-view" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2" /></svg>
        </span>
      </a>
      <a className="products-card__body" href={detailUrl} aria-label={`Ver detalles de ${product.nombre}`}>
        {product.marca && <p className="products-card__brand">{product.marca}</p>}
        <h2>{product.nombre}</h2>
        <div className="products-card__prices">
          {product.precio !== null && <strong>{formatPrice(product.precio)}</strong>}
          {product.precioOriginal && <del>{formatPrice(product.precioOriginal)}</del>}
        </div>
      </a>
    </article>
  );
}
