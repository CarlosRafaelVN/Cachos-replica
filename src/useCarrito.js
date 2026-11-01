import { useEffect, useState } from "react";

const CLAVE = "tienda-carrito";

function leer() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) ?? [];
  } catch {
    return [];
  }
}

export function useCarrito() {
  const [items, setItems] = useState(leer);

  useEffect(() => {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(items));
    } catch {
      /* sin almacenamiento disponible: el carrito vive solo en memoria */
    }
  }, [items]);

  const llave = (id, talla) => `${id}__${talla ?? ""}`;

  const agregar = (producto, talla) =>
    setItems((prev) => {
      const k = llave(producto.id, talla);
      const existe = prev.find((i) => i.llave === k);
      if (existe)
        return prev.map((i) =>
          i.llave === k ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      return [
        ...prev,
        {
          llave: k,
          id: producto.id,
          nombre: producto.nombre,
          imagen: producto.imagenes[0] ?? null,
          precio: producto.precio ?? 0,
          talla: talla ?? null,
          cantidad: 1,
        },
      ];
    });

  const cambiarCantidad = (k, delta) =>
    setItems((prev) =>
      prev
        .map((i) => (i.llave === k ? { ...i, cantidad: i.cantidad + delta } : i))
        .filter((i) => i.cantidad > 0)
    );

  const quitar = (k) => setItems((prev) => prev.filter((i) => i.llave !== k));
  const vaciar = () => setItems([]);

  const cantidadTotal = items.reduce((s, i) => s + i.cantidad, 0);
  const total = items.reduce((s, i) => s + i.precio * i.cantidad, 0);

  return { items, agregar, cambiarCantidad, quitar, vaciar, cantidadTotal, total };
}
