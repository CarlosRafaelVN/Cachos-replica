import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { obtenerRecomendaciones } from '../../features/product/productApi.js';
import { useCarrito } from '../../features/cart/useCarrito.js';
import { formatPrice } from '../../utils/formatPrice.js';

function productDetails(item) {
  const product = item.product ?? item;
  const firstImage = Array.isArray(product.images) ? product.images[0] : null;
  return {
    id: product.externalId ?? product.id ?? product.referenceCode,
    referenceCode: product.referenceCode,
    colorCode: product.colorCode,
    nombre: product.title ?? product.nombre ?? product.name ?? 'Producto',
    imagen: product.imageUrl ?? product.image ?? (typeof firstImage === 'string' ? firstImage : firstImage?.url) ?? '',
    precio: Number(product.discountPrice > 0 ? product.discountPrice : product.price ?? product.precio ?? 0),
    talla: product.size ?? null,
  };
}

export default function CartDrawer() {
  const {
    items,
    cantidadTotal,
    total,
    cambiarCantidad,
    quitar,
    agregar,
    isCartOpen,
    closeCart,
  } = useCarrito();
  const [recommendation, setRecommendation] = useState({ referenceCode: '', items: [], loading: false, error: '' });
  const [discountExpanded, setDiscountExpanded] = useState(false);
  const referenceCode = items.find((item) => item.referenceCode)?.referenceCode ?? '';

  useEffect(() => {
    if (!isCartOpen || !referenceCode || recommendation.referenceCode === referenceCode) return undefined;
    const controller = new AbortController();
    obtenerRecomendaciones(referenceCode, controller.signal)
      .then((data) => setRecommendation({
        referenceCode,
        items: Array.isArray(data.items) ? data.items.slice(0, 3) : [],
        loading: false,
        error: '',
      }))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setRecommendation({ referenceCode, items: [], loading: false, error: error.message });
        }
      });
    return () => controller.abort();
  }, [isCartOpen, recommendation.referenceCode, referenceCode]);

  useEffect(() => {
    if (!isCartOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') closeCart();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [closeCart, isCartOpen]);

  if (!isCartOpen) return null;

  const drawer = (
    <div className="cart-drawer" onMouseDown={(event) => {
      if (event.target === event.currentTarget) closeCart();
    }}>
      <aside className="cart-drawer__panel" role="dialog" aria-modal="true" aria-labelledby="cart-drawer-title">
        <div className="cart-drawer__header">
          <h2 id="cart-drawer-title">Carrito <span>{cantidadTotal}</span></h2>
          <button type="button" className="cart-drawer__close" aria-label="Cerrar carrito" onClick={closeCart}>×</button>
        </div>
        <p className="cart-drawer__login">¿Tiene una cuenta? <a href="https://www.cachoscr.com/s/login">Inicie sesión</a> para pagar más rápido.</p>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <p>Tu carrito está vacío.</p>
              <a href="/products" onClick={closeCart}>Explorar productos</a>
            </div>
          ) : (
            <>
              <ul className="cart-drawer__items">
                {items.map((item) => (
                  <li className="cart-drawer__item" key={item.llave}>
                    {item.imagen
                      ? <img src={item.imagen} alt="" />
                      : <span className="cart-drawer__image-placeholder" aria-hidden="true" />}
                    <div className="cart-drawer__item-info">
                      <strong>{item.nombre}</strong>
                      {item.talla && <span>Talla: {item.talla}</span>}
                      <div className="cart-drawer__quantity">
                        <button type="button" aria-label={`Disminuir cantidad de ${item.nombre}`} disabled={item.cantidad <= 1} onClick={() => cambiarCantidad(item.llave, -1)}>−</button>
                        <output aria-label="Cantidad">{item.cantidad}</output>
                        <button type="button" aria-label={`Aumentar cantidad de ${item.nombre}`} onClick={() => cambiarCantidad(item.llave, 1)}>＋</button>
                      </div>
                    </div>
                    <div className="cart-drawer__item-end">
                      <strong>{formatPrice(item.precio)}</strong>
                      <button type="button" aria-label={`Quitar ${item.nombre} del carrito`} onClick={() => quitar(item.llave)}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m3 0-1 13H7L6 7m4 3v7m4-7v7" /></svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <section className="cart-drawer__upsells" aria-label="Productos para sumar al pedido">
                <h3>Sumale a tu pedido</h3>
                {isCartOpen && referenceCode && recommendation.referenceCode !== referenceCode && (
                  <p role="status">Buscando recomendaciones…</p>
                )}
                {recommendation.referenceCode === referenceCode && recommendation.loading && (
                  <p role="status">Buscando recomendaciones…</p>
                )}
                {recommendation.referenceCode === referenceCode && recommendation.error && (
                  <p className="cart-drawer__error">{recommendation.error}</p>
                )}
                {recommendation.referenceCode === referenceCode && !recommendation.loading && !recommendation.error && recommendation.items.map((item, index) => {
                  const product = productDetails(item);
                  return (
                    <article className="cart-drawer__upsell" key={`${product.id}-${index}`}>
                      {product.imagen ? <img src={product.imagen} alt="" loading="lazy" /> : <span className="cart-drawer__image-placeholder" />}
                      <div><strong>{product.nombre}</strong><b>{formatPrice(product.precio)}</b></div>
                      <button type="button" onClick={() => agregar(product, product.talla)}>Agregar</button>
                    </article>
                  );
                })}
              </section>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__summary">
            <button type="button" className="cart-drawer__discount" aria-expanded={discountExpanded} onClick={() => setDiscountExpanded((value) => !value)}>
              Descuento <span>{discountExpanded ? '−' : '+'}</span>
            </button>
            {discountExpanded && <p>Los descuentos disponibles se aplican al finalizar la compra.</p>}
            <div className="cart-drawer__total"><span>Total estimado</span><strong>{formatPrice(total)}</strong></div>
            <small>Aranceles e impuestos aplicables incluidos.</small>
            <a className="cart-drawer__checkout" href="https://www.cachoscr.com/checkout">Pagar</a>
          </div>
        )}
      </aside>
    </div>
  );

  return createPortal(drawer, document.body);
}
