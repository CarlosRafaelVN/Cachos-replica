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
          return (
            <article className="tarjeta" key={product.id}>
              {product.imagenes[0] && (
                <img src={product.imagenes[0]} alt={product.nombre} loading="lazy" />
              )}
              <h2>{product.nombre}</h2>
              {product.precio !== null && <p className="precio">{formatearPrecio(product.precio)}</p>}
              <p className="descripcion">{product.descripcion || 'Sin descripción'}</p>
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