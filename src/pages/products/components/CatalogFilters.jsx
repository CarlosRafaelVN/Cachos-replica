export default function CatalogFilters({ brand, setBrand, sort, setSort, size, setSize, gender, setGender, products = [], resetFilters }) {
  const brands = [...new Set(['', ...products.map((product) => product.marca).filter(Boolean)])];
  const sizes = [...new Set(products.flatMap((product) => product.tallas ?? []))]
    .sort((a, b) => Number(a) - Number(b));

  const FilterSelect = ({ label, value, onChange, children }) => (
    <label className="catalog-toolbar__field">
      <select value={value} onChange={(event) => onChange(event.target.value)} aria-label={label}>
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
      <FilterSelect label="Talla" value={size} onChange={setSize}>
        {sizes.map((item) => <option value={item} key={item}>{item}</option>)}
      </FilterSelect>
      <FilterSelect label="Género" value={gender} onChange={setGender}>
        {['FEMENINO', 'MASCULINO', 'UNISEX', 'NIÑOS'].map((item) => (
          <option value={item.toLowerCase()} key={item}>{item[0] + item.slice(1).toLowerCase()}</option>
        ))}
      </FilterSelect>
      <label className="catalog-toolbar__field">
        <select value={brand} onChange={(event) => setBrand(event.target.value)} aria-label="Marca">
          {brands.map((name) => <option value={name} key={name || 'all'}>{name || 'Marca'}</option>)}
        </select>
      </label>
      <button type="button" className="catalog-toolbar__all" onClick={resetFilters}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z" /></svg>
        <span>Todos los filtros</span>
      </button>
    </div>
  );
}
