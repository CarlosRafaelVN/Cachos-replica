const API_BASE = '/api/v1/storefront';

async function postStorefront(path, body, signal) {
  const response = await fetch(`${API_BASE}/${path}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-store-host': 'www.cachoscr.com',
    },
    body: JSON.stringify(body),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Error al consultar Cachos (${response.status}).`);
  }

  const result = await response.json();
  if (!result || result.success === false || !result.data) {
    throw new Error(result?.error || 'La API de Cachos devolvió una respuesta inválida.');
  }

  return result.data;
}

export function obtenerDetalleProducto(referenceCode, colorCode, signal) {
  return postStorefront(
    'catalog/product/expand',
    { referenceCode, colorCode },
    signal,
  );
}

export function obtenerDisponibilidad(externalId, signal) {
  return postStorefront('catalog/product/availability', { externalId }, signal);
}

export function obtenerRecomendaciones(referenceCode, signal) {
  return postStorefront(
    'upsells/evaluate',
    { surface: 'pdp', referenceCode, cartItems: [] },
    signal,
  );
}
