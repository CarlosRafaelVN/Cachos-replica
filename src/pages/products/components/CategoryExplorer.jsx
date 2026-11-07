const categories = [
  { name: 'Tenis', family: 'TENIS' },
  { name: 'Zapatos y botas', family: 'BOTAS' },
  { name: 'Sandalias', family: 'SANDALIA' },
  { name: 'Mochilas y bolsos', family: 'MOCHILA' },
  { name: 'Gorras', family: 'GORRA' },
  { name: 'Medias', family: 'MEDIA' },
  { name: 'Vasos y botellas', family: 'VASO' },
  { name: 'Billeteras', family: 'BILLETERA' },
  { name: 'Ropa', family: 'ROPA' },
];

export default function CategoryExplorer({ products = [] }) {
  const categoryImage = (category) => {
    const match = products.find((product) => {
      const family = String(product.crudo?.family || '').toUpperCase();
      const text = `${product.nombre} ${product.descripcion}`.toUpperCase();
      if (category.family) return family.includes(category.family) || text.includes(category.family);
      return false;
    });
    return match?.imagenes?.[0];
  };
  return (
    <section className="catalog-categories" aria-labelledby="categories-title">
      <div className="catalog-categories__header">
        <h2 id="categories-title">Explora por <span>categoría</span></h2>
        <a href="/products">Ver todo <b aria-hidden="true">→</b></a>
      </div>
      <div className="catalog-categories__list">
        {categories.map((category) => (
          <a className="catalog-category" href={`/products?category=${encodeURIComponent(category.name)}`} key={category.name}>
            <span className="catalog-category__image">
              {categoryImage(category) && <img src={categoryImage(category)} alt="" loading="lazy" />}
            </span>
            <strong>{category.name}</strong>
          </a>
        ))}
        <a className="catalog-category catalog-category--offers" href="/products?offers=1">
          <span><b>%</b></span>
          <strong>Ofertas</strong>
        </a>
      </div>
    </section>
  );
}
