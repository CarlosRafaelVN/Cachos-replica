import { appUrl } from '../../utils/routes.js';

export default function CartHeader({ busqueda, setBusqueda, cantidad, abrirCarrito }) {
  return (
    <header className="header">
      <a className="logo" href={appUrl('/')}>
        Mi<span>Tienda</span>
      </a>
      <input
        className="buscador"
        type="search"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
        aria-label="Buscar productos"
      />
      <button className="btn-carrito" onClick={abrirCarrito}>
        🛒 Carrito
        {cantidad > 0 && <span className="badge">{cantidad}</span>}
      </button>
    </header>
  );
}
