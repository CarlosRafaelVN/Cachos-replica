export default function CatalogFilters({ brand, setBrand, sort, setSort }) {
  const brands = ['', 'Converse', 'Vans', 'Dr. Martens', 'Nike', 'Adidas', 'Puma', 'Timberland', 'Columbia', 'Quiksilver', 'Volcom', 'Roxy'];

  const FilterSelect = ({ label, children }) => (
    <label className="catalog-toolbar__field">
      <select defaultValue="" aria-label={label}>
        <option value="">{label}</option>
        {children}
      </select>
    </label>
  );

  return (
    <div className="catalog-toolbar">
      <label className="catalog-toolbar__field">
        <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Ordenar por">
          <option value="relevance">Ordenar por</option>
          <option value="name">Nombre</option>
          <option value="price-low">Precio menor</option>
          <option value="price-high">Precio mayor</option>
        </select>
      </label>
      <FilterSelect label="Talla">
        {['34', '35', '36', '37', '38', '39', '40', '41', '42'].map((size) => <option value={size} key={size}>{size}</option>)}
      </FilterSelect>
      <FilterSelect label="Género">
        <option value="femenino">Femenino</option>
        <option value="masculino">Masculino</option>
        <option value="unisex">Unisex</option>
      </FilterSelect>
      <label className="catalog-toolbar__field">
        <select value={brand} onChange={(event) => setBrand(event.target.value)} aria-label="Marca">
          {brands.map((name) => <option value={name} key={name || 'all'}>{name || 'Marca'}</option>)}
        </select>
      </label>
      <button type="button" className="catalog-toolbar__all">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" /></svg>
        <span>Todos los filtros</span>
      </button>
    </div>
  );
}
