const formatPrice = (value) => new Intl.NumberFormat('es-CR', {
  style: 'currency', currency: 'CRC', maximumFractionDigits: 0,
}).format(value);

export default function ProductCard({ product }) {
  return (
    <article className="products-card">
      <a className="products-card__media" href="#" aria-label={`Ver ${product.nombre}`}>
        {product.imagenes[0]
          ? <img src={product.imagenes[0]} alt={product.nombre} loading="lazy" />
          : <span className="products-card__placeholder">{product.nombre}</span>}
        {product.precioOriginal && <span className="products-card__sale">Oferta</span>}
      </a>
      <div className="products-card__body">
        {product.marca && <p className="products-card__brand">{product.marca}</p>}
        <h2>{product.nombre}</h2>
        <div className="products-card__prices">
          {product.precio !== null && <strong>{formatPrice(product.precio)}</strong>}
          {product.precioOriginal && <del>{formatPrice(product.precioOriginal)}</del>}
        </div>
      </div>
    </article>
  );
}
