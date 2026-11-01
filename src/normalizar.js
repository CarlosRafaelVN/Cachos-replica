// Convierte la respuesta de la API en objetos simples para la interfaz.
// Como no conocemos la estructura exacta, se prueban los nombres de campo más comunes.
// Si algo sale vacío, mira el JSON en "Ver datos crudos" (pie de página) y ajusta aquí.

export function extraerProductos(data) {
  if (Array.isArray(data)) return data;
  if (!data || typeof data !== "object") return [];

  for (const key of ["products", "items", "data", "results", "catalog", "content"]) {
    const valor = data[key];
    if (Array.isArray(valor)) return valor;
    if (valor && typeof valor === "object") {
      const anidado = extraerProductos(valor);
      if (anidado.length) return anidado;
    }
  }
  return Object.values(data).find(Array.isArray) ?? [];
}

const limpiarHtml = (t) =>
  String(t ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const aUrl = (x) => (typeof x === "string" ? x : x?.url ?? x?.src ?? null);

const aNumero = (x) => {
  if (x === null || x === undefined || x === "") return null;
  if (typeof x === "object") return aNumero(x.amount ?? x.value ?? x.price);
  const n = Number(x);
  return Number.isNaN(n) ? null : n;
};

export function normalizarProducto(p, indice = 0) {
  const listaImagenes = [
    ...(Array.isArray(p.images) ? p.images : []),
    ...(Array.isArray(p.media) ? p.media : []),
    p.image,
    p.imageUrl,
    p.thumbnail,
    p.mainImage,
  ]
    .map(aUrl)
    .filter(Boolean);

  const variantes = Array.isArray(p.variants) ? p.variants : [];
  const tallas = [
    ...new Set(
      [
        ...(Array.isArray(p.sizes) ? p.sizes : []),
        ...variantes.map((v) => v.size ?? v.talla ?? v.name),
      ]
        .map((t) => (typeof t === "object" ? t?.name ?? t?.label : t))
        .filter((t) => t !== undefined && t !== null && t !== "")
        .map(String)
    ),
  ];

  const precio =
    aNumero(p.price) ??
    aNumero(p.salePrice) ??
    aNumero(variantes[0]?.price) ??
    null;
  const original = aNumero(p.compareAtPrice ?? p.originalPrice ?? p.regularPrice);

  return {
    id: String(p.id ?? p._id ?? p.sku ?? p.slug ?? `producto-${indice}`),
    nombre: p.name ?? p.title ?? p.productName ?? "Sin nombre",
    descripcion: limpiarHtml(p.description ?? p.shortDescription ?? p.details),
    imagenes: [...new Set(listaImagenes)],
    precio,
    precioOriginal: original && precio && original > precio ? original : null,
    marca: typeof p.brand === "object" ? p.brand?.name : p.brand ?? null,
    genero: p.gender ?? null,
    tallas,
    crudo: p,
  };
}

export function formatearPrecio(valor) {
  if (valor === null || valor === undefined) return "";
  return Number(valor).toLocaleString("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  });
}
