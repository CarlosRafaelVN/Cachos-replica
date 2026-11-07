import { useEffect, useMemo, useState } from 'react';
import SiteFooter from '../../components/layout/SiteFooter.jsx';
import SiteHeader from '../../components/layout/SiteHeader.jsx';
import WhatsAppLink from '../../components/layout/WhatsAppLink.jsx';
import CatalogBreadcrumb from './components/CatalogBreadcrumb.jsx';
import CatalogFilters from './components/CatalogFilters.jsx';
import CategoryExplorer from './components/CategoryExplorer.jsx';
import CatalogPromotions from './components/CatalogPromotions.jsx';
import ProductCard from './components/ProductCard.jsx';
import { obtenerCalzado } from '../../features/catalog/catalogApi.js';
import { extraerProductos, normalizarProducto } from '../../features/catalog/normalizeProduct.js';
import '../../features/catalog/catalog.css';


export default function ProductCatalogPage() {
  const [rawProducts, setRawProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState(() => new URLSearchParams(window.location.search).get('brand') || '');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('relevance');
  const [visibleCount, setVisibleCount] = useState(16);

  useEffect(() => {
    obtenerCalzado()
      .then((data) => setRawProducts(extraerProductos(data)))
      .catch((requestError) => setError(requestError.message))
      .finally(() => setLoading(false));
  }, []);

  const products = useMemo(() => rawProducts.map((product, index) => normalizarProducto(product, index)), [rawProducts]);
  const filteredProducts = useMemo(() => products.filter((product) => {
    const brandMatch = !query || String(product.marca || '').toUpperCase() === query.toUpperCase();
    const text = `${product.nombre} ${product.marca || ''}`.toLowerCase();
    return brandMatch && (!search || text.includes(search.toLowerCase()));
  }).sort((a, b) => {
    if (sort === 'name') return a.nombre.localeCompare(b.nombre);
    if (sort === 'price-low') return (a.precio ?? 0) - (b.precio ?? 0);
    if (sort === 'price-high') return (b.precio ?? 0) - (a.precio ?? 0);
    return 0;
  }), [products, query, search, sort]);

  useEffect(() => {
    setVisibleCount(16);
  }, [query, search, sort]);

  const chooseBrand = (brand) => {
    setQuery(brand);
    const url = brand ? `/products?brand=${encodeURIComponent(brand)}` : '/products';
    window.history.replaceState({}, '', url);
  };

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <SiteHeader />
      <main>
        <CatalogPromotions />
        <CategoryExplorer products={products} />
        <section className="products-page">
          <CatalogBreadcrumb brand={query} />
          <CatalogFilters brand={query} setBrand={chooseBrand} sort={sort} setSort={setSort} />
          <div className="products-results" aria-live="polite">
            {loading && <div className="products-state">Cargando productos…</div>}
            {error && <div className="products-state products-state--error">No pudimos cargar el catálogo. {error}</div>}
            {!loading && !error && filteredProducts.length === 0 && <div className="products-state">No encontramos productos con estos filtros.</div>}
            <div className="products-grid">
              {filteredProducts.slice(0, visibleCount).map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
            {!loading && !error && filteredProducts.length > 0 && (
              <div className="catalog-pagination">
                <p className="catalog-pagination__count" aria-live="polite">
                  Mostrando {Math.min(visibleCount, filteredProducts.length)} de {filteredProducts.length}
                </p>
                <div className="catalog-pagination__progress" role="progressbar" aria-label="Productos mostrados" aria-valuemin="0" aria-valuemax={filteredProducts.length} aria-valuenow={Math.min(visibleCount, filteredProducts.length)}>
                  <span style={{ width: `${Math.min(100, (Math.min(visibleCount, filteredProducts.length) / filteredProducts.length) * 100)}%` }} />
                </div>
                {visibleCount < filteredProducts.length && (
                  <button type="button" className="catalog-pagination__more" onClick={() => setVisibleCount((current) => current + 16)}>
                    Mostrar más <span aria-hidden="true" />
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppLink />
    </div>
  );
}
