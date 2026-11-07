import { createContext, createElement, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'tienda-carrito';
const CartContext = createContext(null);

function readCart() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readCart);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // The cart remains available in memory when storage is unavailable.
    }
  }, [items]);

  useEffect(() => {
    const syncCart = (event) => {
      if (event.key === STORAGE_KEY) setItems(readCart());
    };
    window.addEventListener('storage', syncCart);
    return () => window.removeEventListener('storage', syncCart);
  }, []);

  const value = useMemo(() => {
    const makeKey = (id, size) => `${id}__${size ?? ''}`;
    const agregar = (product, size) => {
      setItems((previous) => {
        const key = makeKey(product.id, size);
        const existing = previous.find((item) => item.llave === key);
        if (existing) {
          return previous.map((item) =>
            item.llave === key
              ? { ...item, ...product, llave: key, talla: size ?? null, cantidad: item.cantidad + 1 }
              : item,
          );
        }
        return [
          ...previous,
          {
            ...product,
            llave: key,
            id: product.id,
            nombre: product.nombre,
            imagen: product.imagenes?.[0] ?? product.imagen ?? null,
            precio: product.precio ?? 0,
            talla: size ?? null,
            cantidad: 1,
          },
        ];
      });
    };
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

    return {
      items,
      agregar,
      cambiarCantidad,
      quitar,
      vaciar,
      cantidadTotal,
      total,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
    };
  }, [isCartOpen, items]);

  return createElement(CartContext.Provider, { value }, children);
}

export function useCarrito() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCarrito debe usarse dentro de CartProvider.');
  return context;
}
