import { useEffect, useState } from 'react';
import { obtenerCalzado } from '../catalogApi.js';
import { extraerProductos, formatearPrecio, normalizarProducto } from '../normalizeProduct.js';
import '../catalog.css';

export default function ProductCatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerCalzado()
      .then((data) => setProducts(extraerProductos(data)))
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="estado">Cargando productos...</p>;
  if (error) return <p className="estado error">Error: {error}</p>;
  if (products.length === 0) return <p className="estado">No se encontraron productos.</p>;

  return (
    <main className="catalogo">
      <h1>Calzado ({products.length})</h1>
      <div className="grilla">
        {products.map((rawProduct, index) => {
          const product = normalizarProducto(rawProduct, index);
          const href = product.referenceCode && product.colorCode
            ? `/product?${new URLSearchParams({
              referenceCode: String(product.referenceCode),
              colorCode: String(product.colorCode),
            })}`
            : null;
          return (
            <article className="tarjeta" key={product.id}>
              <div className="tarjeta__media">
                {product.imagenes[0] && (
                  <img src={product.imagenes[0]} alt={product.nombre} loading="lazy" />
                )}
              </div>
              <div className="tarjeta__body">
                {product.marca && <p className="tarjeta__brand">{product.marca}</p>}
                <h2>{product.nombre}</h2>
                <p className="descripcion">{product.descripcion || 'Sin descripción'}</p>
              </div>
              <div className="tarjeta__footer">
                {product.precio !== null && <p className="precio">{formatearPrecio(product.precio)}</p>}
                {href && <a className="tarjeta__action" href={href}>Ver producto</a>}
              </div>
            </article>
          );
        })}
      </div>
      <details className="debug">
        <summary>Ver estructura del primer producto (JSON)</summary>
        <pre>{JSON.stringify(products[0], null, 2)}</pre>
      </details>
    </main>
  );
}