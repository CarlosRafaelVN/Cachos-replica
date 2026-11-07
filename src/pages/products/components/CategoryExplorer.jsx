import { useState } from 'react';

export const catalogCategories = [
  { name: 'Tenis', family: 'TENIS' },
  { name: 'Zapatos y botas', families: ['BOTAS', 'ZAPATOS'] },
  { name: 'Sandalias', families: ['SANDALIA', 'SANDALIAS'] },
  { name: 'Mochilas y bolsos', families: ['MOCHILA', 'MALETIN', 'BOLSO'] },
  { name: 'Gorras', families: ['GORRA', 'HEADWEAR'] },
  { name: 'Medias', families: ['MEDIA', 'MEDIAS'] },
  { name: 'Vasos y botellas', families: ['VASO', 'BOTELLA', 'TAZA', 'PORTALATA'] },
  { name: 'Billeteras', families: ['BILLETERA'] },
  { name: 'Ropa', families: ['ROPA', 'ABRIGOS'] },
];

function CategoryImage({ src, name }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <svg className="catalog-category__fallback" viewBox="0 0 24 24" role="img" aria-label={`Imagen de ${name} no disponible`}>
        <path d="M4 19V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm4.5-8.5 2.7 2.7 3.8-4.7 4 5.5H5l3.5-3.5Z" />
      </svg>
    );
  }

  return <img src={src} alt="" loading="lazy" onError={() => setFailed(true)} />;
}

export default function CategoryExplorer({ products = [] }) {
  const categoryImage = (category) => {
    const match = products.find((product) => {
      const family = String(product.crudo?.family || '').toUpperCase();
      const text = `${product.nombre} ${product.descripcion}`.toUpperCase();
      const families = category.families ?? (category.family ? [category.family] : []);
      return families.some((name) => family.includes(name) || text.includes(name));
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
        {catalogCategories.map((category) => (
          <a className="catalog-category" href={`/products?category=${encodeURIComponent(category.name)}`} key={category.name}>
            <span className="catalog-category__image">
              <CategoryImage src={categoryImage(category)} name={category.name} />
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
