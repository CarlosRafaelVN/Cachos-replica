import { staticCatalogProducts } from './staticCatalogProducts.js';

export function normalizeHomeProduct(product) {
  const staticProduct = staticCatalogProducts.find((item) => item.name === product.name);

  return {
    id: staticProduct?.id ?? product.name,
    staticProductId: staticProduct?.id,
    staticOnly: Boolean(staticProduct),
    nombre: product.name,
    marca: product.brand,
    precio: product.price,
    precioOriginal: product.oldPrice ?? null,
    imagenes: product.image ? [product.image] : [],
    tallas: staticProduct?.sizes ?? [],
  };
}
