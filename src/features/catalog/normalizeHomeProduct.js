export function normalizeHomeProduct(product) {
  const url = new URL(product.href ?? '/product', window.location.origin);

  return {
    id: url.searchParams.get('referenceCode') ?? product.name,
    referenceCode: url.searchParams.get('referenceCode'),
    colorCode: url.searchParams.get('colorCode'),
    nombre: product.name,
    marca: product.brand,
    precio: product.price,
    precioOriginal: product.oldPrice ?? null,
    imagenes: product.image ? [product.image] : [],
  };
}
