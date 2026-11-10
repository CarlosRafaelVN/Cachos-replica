import { bestSellers, lookProducts, viralProducts } from '../../data/homePageData.js';

const getGender = (name) => {
  const normalizedName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  if (normalizedName.includes('FEMENINO') || normalizedName.includes('MUJER')) return 'FEMENINO';
  if (normalizedName.includes('MASCULINO') || normalizedName.includes('HOMBRE')) return 'MASCULINO';
  if (normalizedName.includes('NINO')) return 'NIÑOS';
  return 'UNISEX';
};

const getFamily = (name) => {
  const normalizedName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
  if (normalizedName.includes('SANDALIA')) return 'SANDALIAS';
  if (normalizedName.includes('BOTA') || normalizedName.includes('ZAPATO')) return 'ZAPATOS';
  if (normalizedName.includes('MALETIN') || normalizedName.includes('MOCHILA') || normalizedName.includes('BOLSO')) return 'MALETIN';
  if (normalizedName.includes('GORRA')) return 'GORRA';
  if (normalizedName.includes('MEDIA') || normalizedName.includes('CALCETIN')) return 'MEDIAS';
  if (normalizedName.includes('VASO') || normalizedName.includes('BOTELLA') || normalizedName.includes('TAZA')) return 'VASO';
  if (normalizedName.includes('BILLETERA') || normalizedName.includes('CARTERA')) return 'BILLETERA';
  if (normalizedName.includes('ROPA') || normalizedName.includes('CAMISETA') || normalizedName.includes('ABRIGO')) return 'ROPA';
  if (normalizedName.includes('FAJA')) return 'ACCESORIO';
  return 'TENIS';
};

const descriptionsByFamily = {
  TENIS: 'Calzado versátil para acompañarte en tus actividades diarias. Producto de muestra del catálogo de pruebas.',
  ZAPATOS: 'Diseño cómodo y resistente para tus salidas y actividades cotidianas. Producto de muestra del catálogo de pruebas.',
  SANDALIAS: 'Calzado ligero para disfrutar con comodidad. Producto de muestra del catálogo de pruebas.',
  MALETIN: 'Espacio práctico para llevar tus artículos esenciales. Producto de muestra del catálogo de pruebas.',
  GORRA: 'Un accesorio casual para completar tu estilo. Producto de muestra del catálogo de pruebas.',
  MEDIAS: 'Un básico cómodo para usar todos los días. Producto de muestra del catálogo de pruebas.',
  VASO: 'Ideal para llevar tu bebida contigo. Producto de muestra del catálogo de pruebas.',
  BILLETERA: 'Un accesorio práctico para guardar tus artículos personales. Producto de muestra del catálogo de pruebas.',
  ROPA: 'Una prenda cómoda y versátil para tu día a día. Producto de muestra del catálogo de pruebas.',
};

const homeProducts = [...bestSellers, ...viralProducts, ...lookProducts]
  .filter((product) => getFamily(product.name) !== 'TENIS' || [...bestSellers, ...viralProducts].includes(product));

const additionalTestProducts = [
  {
    name: 'MEDIAS UNISEX CACHOS CLASSIC',
    brand: 'CACHOS',
    price: 5900,
    image: '/catalog/medias.svg',
    gender: 'UNISEX',
    family: 'MEDIAS',
    sizes: ['Única'],
  },
  {
    name: 'BILLETERA MASCULINO CACHOS EVERYDAY',
    brand: 'CACHOS',
    price: 9900,
    image: '/catalog/billetera.svg',
    gender: 'MASCULINO',
    family: 'BILLETERA',
    sizes: ['Única'],
  },
  {
    name: 'CAMISETA UNISEX CACHOS BASIC',
    brand: 'CACHOS',
    price: 14900,
    image: '/catalog/ropa.svg',
    gender: 'UNISEX',
    family: 'ROPA',
    sizes: ['S', 'M', 'L'],
  },
];

export const staticCatalogProducts = [
  ...homeProducts.map((product, index) => ({
    id: `static-${index}`,
    staticOnly: true,
    name: product.name,
    brand: product.brand,
    price: product.price,
    compareAtPrice: product.oldPrice,
    image: product.image,
    gender: getGender(product.name),
    family: getFamily(product.name),
    description: descriptionsByFamily[getFamily(product.name)],
    sizes: ['TENIS', 'ZAPATOS', 'SANDALIAS'].includes(getFamily(product.name))
      ? ['6', '7', '8', '9', '10']
      : ['Única'],
  })),
  ...additionalTestProducts.map((product, index) => ({
    ...product,
    id: `static-extra-${index}`,
    staticOnly: true,
    description: descriptionsByFamily[product.family],
  })),
];

export function getStaticProductHref(name) {
  const product = staticCatalogProducts.find((item) => item.name === name);
  return product ? `/product?staticProduct=${encodeURIComponent(product.id)}` : '/products';
}

export function createStaticProductDetail(productId) {
  const product = staticCatalogProducts.find((item) => item.id === productId);
  if (!product) return null;

  const images = product.image ? [{ url: product.image, position: 0 }] : [];
  const variants = product.sizes.map((size, index) => {
    const numericSize = Number.parseFloat(size);
    return {
      externalId: `${product.id}-${index}`,
      referenceCode: product.id,
      colorCode: 'TEST',
      title: product.name,
      brand: product.brand,
      model: product.name,
      color: 'Muestra',
      gender: product.gender,
      size,
      style: Number.isNaN(numericSize) ? size : `${numericSize + 33} EUR`,
      customValueA: Number.isNaN(numericSize) ? size : `${(numericSize * 2.54).toFixed(1)} cm`,
      stock: 10,
      price: product.compareAtPrice ?? product.price,
      discountPrice: product.compareAtPrice ? product.price : 0,
      imageUrl: product.image,
      htmlDescription: product.description,
      staticOnly: true,
    };
  });

  return {
    staticOnly: true,
    products: variants,
    images,
    colorVariations: [{
      colorCode: 'TEST',
      color: 'Muestra',
      imageUrl: product.image,
      outOfStock: false,
    }],
  };
}
