export default function CatalogBreadcrumb({ brand }) {
  return (
    <nav className="products-breadcrumb" aria-label="Migas de pan">
      <a href="/">Inicio</a>
      <span aria-hidden="true">›</span>
      <span aria-current="page">{brand || 'Catálogo'}</span>
    </nav>
  );
}
