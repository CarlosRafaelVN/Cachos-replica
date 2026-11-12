import { useMemo, useState } from 'react';
import SiteFooter from '../../components/layout/SiteFooter.jsx';
import SiteHeader from '../../components/layout/SiteHeader.jsx';
import WhatsAppLink from '../../components/layout/WhatsAppLink.jsx';
import CatalogBreadcrumb from './components/CatalogBreadcrumb.jsx';
import CatalogFilters from './components/CatalogFilters.jsx';
import CategoryExplorer, { catalogCategories } from './components/CategoryExplorer.jsx';
import CatalogPagination from '../../features/catalog/components/CatalogPagination.jsx';
import CatalogPromotions from './components/CatalogPromotions.jsx';
import ProductCard from './components/ProductCard.jsx';
import { normalizarProducto } from '../../features/catalog/normalizeProduct.js';
import { staticCatalogProducts } from '../../features/catalog/staticCatalogProducts.js';
import '../../features/catalog/catalog.css';


export default function ProductCatalogPage() {
  const catalogParams = new URLSearchParams(window.location.search);
  const [query, setQuery] = useState(() => catalogParams.get('brand') || '');
  const [category, setCategory] = useState(() => catalogParams.get('category') || '');
  const [offersOnly, setOffersOnly] = useState(() => catalogParams.has('offers'));
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('relevance');
  const [size, setSize] = useState('');
  const [gender, setGender] = useState(() => catalogParams.get('gender') || (catalogParams.get('category') === 'Niños' ? 'ninos' : ''));
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;

  const products = useMemo(
    () => staticCatalogProducts.map((product, index) => normalizarProducto(product, index)),
    [],
  );
  const filteredProducts = useMemo(() => products.filter((product) => {
    const brandMatch = !query || String(product.marca || '').toUpperCase() === query.toUpperCase();
    const sizeMatch = !size || product.tallas.some((item) => String(item) === String(size));
    const normalizeGender = (value) => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    const productGender = normalizeGender(typeof product.genero === 'object' ? product.genero?.name ?? '' : product.genero);
    const selectedGender = normalizeGender(gender);
    const genderMatch = !selectedGender
      || productGender === selectedGender
      || (productGender === 'UNISEX' && ['FEMENINO', 'MASCULINO'].includes(selectedGender));
    const categoryDefinition = catalogCategories.find((item) => item.name === category);
    const categoryFamilies = categoryDefinition?.families ?? (categoryDefinition?.family ? [categoryDefinition.family] : []);
    const family = String(product.crudo?.family || '').toUpperCase();
    const categoryText = `${product.nombre} ${product.descripcion}`.toUpperCase();
    const categoryMatch = !categoryDefinition || categoryFamilies.some((item) => family.includes(item) || categoryText.includes(item));
    const offerMatch = !offersOnly || Boolean(product.precioOriginal);
    const text = `${product.nombre} ${product.marca || ''}`.toLowerCase();
    return brandMatch && sizeMatch && genderMatch && categoryMatch && offerMatch && (!search || text.includes(search.toLowerCase()));
  }).sort((a, b) => {
    if (sort === 'name') return a.nombre.localeCompare(b.nombre);
    if (sort === 'price-low') return (a.precio ?? 0) - (b.precio ?? 0);
    if (sort === 'price-high') return (b.precio ?? 0) - (a.precio ?? 0);
    return 0;
  }), [products, query, search, sort, size, gender, category, offersOnly]);

  const chooseBrand = (brand) => {
    setQuery(brand);
    setCurrentPage(1);
    const url = brand ? `/products?brand=${encodeURIComponent(brand)}` : '/products';
    window.history.replaceState({}, '', url);
  };

  const chooseSort = (value) => {
    setSort(value);
    setCurrentPage(1);
  };

  const chooseSize = (value) => {
    setSize(value);
    setCurrentPage(1);
  };

  const chooseGender = (value) => {
    setGender(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setQuery('');
    setSize('');
    setGender('');
    setCategory('');
    setOffersOnly(false);
    setSort('relevance');
    setCurrentPage(1);
    window.history.replaceState({}, '', '/products');
  };

  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const displayedPage = Math.min(currentPage, Math.max(totalPages, 1));
  const pageProducts = filteredProducts.slice(
    (displayedPage - 1) * pageSize,
    displayedPage * pageSize,
  );

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <SiteHeader />
      <main>
        <CatalogPromotions />
        <CategoryExplorer products={products} />
        <section className="products-page">
          <CatalogBreadcrumb brand={query} />
          <CatalogFilters
            brand={query}
            setBrand={chooseBrand}
            sort={sort}
            setSort={chooseSort}
            size={size}
            setSize={chooseSize}
            gender={gender}
            setGender={chooseGender}
            products={products}
            resetFilters={resetFilters}
          />
          <div className="products-results" aria-live="polite">

            {filteredProducts.length === 0 && <div className="products-state">No encontramos productos con estos filtros.</div>}
            <div className="products-grid">
              {pageProducts.map((product) => <ProductCard key={product.id} product={product} staticOnly />)}
            </div>
            {filteredProducts.length > 0 && (
              <CatalogPagination
                currentPage={displayedPage}
                pageSize={pageSize}
                totalItems={filteredProducts.length}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppLink />
    </div>
  );
}
