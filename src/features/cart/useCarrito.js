import { useEffect, useState } from 'react';

const STORAGE_KEY = 'tienda-carrito';

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

export function useCarrito() {
  const [items, setItems] = useState(readCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // The cart remains available in memory when storage is unavailable.
    }
  }, [items]);

  const makeKey = (id, size) => `${id}__${size ?? ''}`;

  const agregar = (product, size) =>
    setItems((previous) => {
      const key = makeKey(product.id, size);
      const existing = previous.find((item) => item.llave === key);
      if (existing) {
        return previous.map((item) =>
          item.llave === key ? { ...item, cantidad: item.cantidad + 1 } : item,
        );
      }
      return [
        ...previous,
        {
          llave: key,
          id: product.id,
          nombre: product.nombre,
          imagen: product.imagenes[0] ?? null,
          precio: product.precio ?? 0,
          talla: size ?? null,
          cantidad: 1,
        },
      ];
    });

  const cambiarCantidad = (key, delta) =>
    setItems((previous) =>
      previous
        .map((item) => (item.llave === key ? { ...item, cantidad: item.cantidad + delta } : item))
        .filter((item) => item.cantidad > 0),
    );

  const quitar = (key) => setItems((previous) => previous.filter((item) => item.llave !== key));
  const vaciar = () => setItems([]);
  const cantidadTotal = items.reduce((sum, item) => sum + item.cantidad, 0);
  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return { items, agregar, cambiarCantidad, quitar, vaciar, cantidadTotal, total };
}