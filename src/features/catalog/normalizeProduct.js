export function extraerProductos(data) {
  if (Array.isArray(data)) return data;
  if (!data || typeof data !== 'object') return [];

  for (const key of ['products', 'items', 'data', 'results', 'catalog', 'content']) {
    const value = data[key];
    if (Array.isArray(value)) return value;
    if (value && typeof value === 'object') {
      const nested = extraerProductos(value);
      if (nested.length) return nested;
    }
  }
  return Object.values(data).find(Array.isArray) ?? [];
}

const cleanHtml = (value) =>
  String(value ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

const toUrl = (value) =>
  typeof value === 'string' ? value : value?.url ?? value?.src ?? null;

const toNumber = (value) => {
  if (value === null || value === undefined || value === '') return null;
  if (typeof value === 'object') return toNumber(value.amount ?? value.value ?? value.price);
  const number = Number(value);
  return Number.isNaN(number) ? null : number;
};

export function normalizarProducto(product, index = 0) {
  const images = [
    ...(Array.isArray(product.images) ? product.images : []),
    ...(Array.isArray(product.media) ? product.media : []),
    product.image,
    product.imageUrl,
    product.thumbnail,
    product.mainImage,
  ].map(toUrl).filter(Boolean);

  const variants = Array.isArray(product.variants) ? product.variants : [];
  const sizes = [
    ...(Array.isArray(product.sizes) ? product.sizes : []),
    ...variants.map((variant) => variant.size ?? variant.talla ?? variant.name),
  ]
    .map((size) => (typeof size === 'object' ? size?.name ?? size?.label : size))
    .filter((size) => size !== undefined && size !== null && size !== '')
    .map(String);

  const price =
    toNumber(product.price) ??
    toNumber(product.salePrice) ??
    toNumber(variants[0]?.price) ??
    null;
  const originalPrice = toNumber(
    product.compareAtPrice ?? product.originalPrice ?? product.regularPrice,
  );

  return {
    id: String(product.id ?? product._id ?? product.sku ?? product.slug ?? `producto-${index}`),
    nombre: product.name ?? product.title ?? product.productName ?? 'Sin nombre',
    descripcion: cleanHtml(product.description ?? product.shortDescription ?? product.details),
    imagenes: [...new Set(images)],
    precio: price,
    precioOriginal: originalPrice && price && originalPrice > price ? originalPrice : null,
    marca: typeof product.brand === 'object' ? product.brand?.name : product.brand ?? null,
    genero: product.gender ?? null,
    tallas: [...new Set(sizes)],
    crudo: product,
  };
}

export function formatearPrecio(value) {
  if (value === null || value === undefined) return '';
  return Number(value).toLocaleString('es-CR', {
    style: 'currency',
    currency: 'CRC',
    maximumFractionDigits: 0,
  });
}