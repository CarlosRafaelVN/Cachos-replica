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
  const [processedSrc, setProcessedSrc] = useState('');

  if (!src || failed) {
    return (
      <svg className="catalog-category__fallback" viewBox="0 0 24 24" role="img" aria-label={`Imagen de ${name} no disponible`}>
        <path d="M4 19V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm4.5-8.5 2.7 2.7 3.8-4.7 4 5.5H5l3.5-3.5Z" />
      </svg>
    );
  }

  const removeImageBackground = (event) => {
    const image = event.currentTarget;
    if (processedSrc || image.naturalWidth === 0) return;

    const canvas = document.createElement('canvas');
    const scale = Math.min(1, 480 / image.naturalWidth);
    canvas.width = Math.round(image.naturalWidth * scale);
    canvas.height = Math.round(image.naturalHeight * scale);
    const context = canvas.getContext('2d', { willReadFrequently: true });
    if (!context) {
      console.error(`No se pudo preparar la imagen de la categoría ${name}.`);
      return;
    }

    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const { data } = imageData;
    const width = canvas.width;
    const height = canvas.height;
    const cornerIndices = [0, width - 1, (height - 1) * width, height * width - 1];
    const backgroundColors = cornerIndices
      .map((index) => {
        const offset = index * 4;
        return data[offset + 3] > 10
          ? [data[offset], data[offset + 1], data[offset + 2]]
          : null;
      })
      .filter(Boolean);

    if (!backgroundColors.length) return;

    const visited = new Uint8Array(width * height);
    const queue = new Uint32Array(width * height);
    let head = 0;
    let tail = 0;
    let removedPixels = 0;
    cornerIndices.forEach((index) => {
      if (data[index * 4 + 3] > 10 && !visited[index]) {
        visited[index] = 1;
        queue[tail] = index;
        tail += 1;
      }
    });

    while (head < tail) {
      const index = queue[head];
      head += 1;
      const offset = index * 4;
      const matchesBackground = backgroundColors.some(([red, green, blue]) => {
        const redDiff = data[offset] - red;
        const greenDiff = data[offset + 1] - green;
        const blueDiff = data[offset + 2] - blue;
        return redDiff * redDiff + greenDiff * greenDiff + blueDiff * blueDiff <= 48 * 48;
      });

      if (!matchesBackground) continue;
      data[offset + 3] = 0;
      removedPixels += 1;

      const neighbors = [
        index % width > 0 ? index - 1 : -1,
        index % width < width - 1 ? index + 1 : -1,
        index >= width ? index - width : -1,
        index < width * (height - 1) ? index + width : -1,
      ];
      neighbors.forEach((neighbor) => {
        if (neighbor >= 0 && !visited[neighbor]) {
          visited[neighbor] = 1;
          queue[tail] = neighbor;
          tail += 1;
        }
      });
    }

    if (removedPixels) {
      context.putImageData(imageData, 0, 0);
      setProcessedSrc(canvas.toDataURL('image/png'));
    }
  };

  return (
    <img
      src={processedSrc || src}
      alt=""
      loading="lazy"
      crossOrigin="anonymous"
      onLoad={removeImageBackground}
      onError={() => setFailed(true)}
    />
  );
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
