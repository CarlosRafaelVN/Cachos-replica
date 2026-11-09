export default function CatalogPagination({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const firstItem = (currentPage - 1) * pageSize + 1;
  const lastItem = Math.min(currentPage * pageSize, totalItems);
  const firstPage = Math.max(1, Math.min(currentPage - 2, totalPages - 4));
  const pages = Array.from(
    { length: Math.min(5, totalPages) },
    (_, index) => firstPage + index,
  );

  return (
    <div className="catalog-pagination">
      <p className="catalog-pagination__count" aria-live="polite">
        Mostrando {firstItem}–{lastItem} de {totalItems}
      </p>
      {totalPages > 1 && (
        <>
          <nav className="catalog-pagination__pages" aria-label="Paginación del catálogo">
            <button
              type="button"
              className="catalog-pagination__page"
              aria-label="Página anterior"
              disabled={currentPage === 1}
              onClick={() => onPageChange(currentPage - 1)}
            >
              Anterior
            </button>
            {pages.map((page) => (
              <button
                type="button"
                key={page}
                className="catalog-pagination__page"
                aria-label={`Página ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            ))}
            <button
              type="button"
              className="catalog-pagination__page"
              aria-label="Página siguiente"
              disabled={currentPage === totalPages}
              onClick={() => onPageChange(currentPage + 1)}
            >
              Siguiente
            </button>
          </nav>
          <p className="catalog-pagination__current">
            Página {currentPage} de {totalPages}
          </p>
        </>
      )}
    </div>
  );
}
