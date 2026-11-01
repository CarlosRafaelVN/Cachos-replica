import { useEffect, useState } from "react";
import { obtenerCalzado } from "./api";
import "./Productos.css";

// La API puede devolver un array directo o un objeto que contiene el array
// (products, items, data...). Esta función encuentra la lista en cualquier caso.
function extraerProductos(data) {
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

const limpiarHtml = (texto) =>
  String(texto ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Lee los campos más comunes. Si la API usa otros nombres, se ajustan aquí.
function leerProducto(p) {
  const imagen =
    p.image ??
    p.imageUrl ??
    p.thumbnail ??
    p.mainImage ??
    p.images?.[0]?.url ??
    p.images?.[0] ??
    p.media?.[0]?.url ??
    null;

  const precioCrudo = p.price ?? p.salePrice ?? p.variants?.[0]?.price ?? null;

  return {
    id: p.id ?? p._id ?? p.sku ?? p.slug,
    nombre: p.name ?? p.title ?? p.productName ?? "Sin nombre",
    descripcion: limpiarHtml(p.description ?? p.shortDescription ?? p.details),
    imagen: typeof imagen === "string" ? imagen : imagen?.url ?? null,
    precio:
      typeof precioCrudo === "number" || typeof precioCrudo === "string"
        ? precioCrudo
        : null,
  };
}

function formatearPrecio(valor) {
  const n = Number(valor);
  if (Number.isNaN(n)) return String(valor);
  return n.toLocaleString("es-CR", {
    style: "currency",
    currency: "CRC",
    maximumFractionDigits: 0,
  });
}

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerCalzado()
      .then((data) => setProductos(extraerProductos(data)))
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <p className="estado">Cargando productos...</p>;
  if (error) return <p className="estado error">Error: {error}</p>;
  if (productos.length === 0)
    return <p className="estado">No se encontraron productos.</p>;

  return (
    <main className="catalogo">
      <h1>Calzado ({productos.length})</h1>

      <div className="grilla">
        {productos.map((p, i) => {
          const prod = leerProducto(p);
          return (
            <article className="tarjeta" key={prod.id ?? i}>
              {prod.imagen && (
                <img src={prod.imagen} alt={prod.nombre} loading="lazy" />
              )}
              <h2>{prod.nombre}</h2>
              {prod.precio !== null && (
                <p className="precio">{formatearPrecio(prod.precio)}</p>
              )}
              <p className="descripcion">
                {prod.descripcion || "Sin descripción"}
              </p>
            </article>
          );
        })}
      </div>

      <details className="debug">
        <summary>Ver estructura del primer producto (JSON)</summary>
        <pre>{JSON.stringify(productos[0], null, 2)}</pre>
      </details>
    </main>
  );
}
