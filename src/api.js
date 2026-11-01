// Con el proxy de vite.config.js, "/api" reenvía a https://xapi.madebyblume.com
const API_URL = "/api/v1/storefront/catalog";

export async function obtenerCatalogo({
  productType = "Calzado",
  gender = ["FEMENINO", "UNISEX"],
} = {}) {
  const params = new URLSearchParams();
  if (productType) params.append("productType", productType);
  // gender se repite: ?gender=FEMENINO&gender=UNISEX
  [].concat(gender).forEach((g) => params.append("gender", g));

  const token = import.meta.env.VITE_API_TOKEN;

  const response = await fetch(`${API_URL}?${params.toString()}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "x-store-host": "www.cachoscr.com",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  return response.json();
}

// Se mantiene por compatibilidad con la versión anterior
export const obtenerCalzado = (opts) =>
  obtenerCatalogo({ productType: "Calzado", ...opts });
