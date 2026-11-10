
const API_URL = '/api/v1/storefront/catalog';

export async function obtenerCatalogo({
  productType = 'Calzado',
  gender = ['FEMENINO', 'UNISEX'],
} = {}) {
  const params = new URLSearchParams();
  if (productType) params.append('productType', productType);
  [].concat(gender).forEach((value) => params.append('gender', value));

  const response = await fetch(`${API_URL}?${params.toString()}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'x-store-host': 'www.cachoscr.com',
    },
  });

  if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
  return response.json();
}

export const obtenerCalzado = (options) =>
  obtenerCatalogo({ productType: 'Calzado', ...options });
