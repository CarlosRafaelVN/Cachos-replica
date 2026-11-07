import { useState } from 'react';
import { navItems } from '../../data/homePageData.js';
import { useCarrito } from '../../features/cart/useCarrito.js';
import CartDrawer from './CartDrawer.jsx';

const utilityLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/50660651818' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@cachos_cr' },
  { label: 'Instagram', href: 'https://instagram.com/cachoscr' },
  { label: 'Facebook', href: 'https://facebook.com/cachoscr' },
  { label: 'Contacto', href: 'https://www.cachoscr.com/s/contacto' },
  { label: 'Ubicaciones tiendas', href: 'https://www.cachoscr.com/s/store-locations' },
];

const navHrefs = {
  Novedades: '/products',
  Mujer: '/products?gender=femenino',
  Hombre: '/products?gender=masculino',
  Niños: '/products?gender=ninos',
  Marcas: '/#brands',
  Nosotros: '/#about',
  Ofertas: '/products?offers=1',
};

export default function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(
    () => new URLSearchParams(window.location.search).get('search') ?? '',
  );
  const { cantidadTotal, openCart } = useCarrito();

  const submitSearch = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set('search', searchTerm.trim());
    window.location.href = `/products${params.size ? `?${params.toString()}` : ''}`;
  };

  return (
    <>
    <header className="site-header sticky top-0 z-40 border-b border-black/10 bg-white">
      <nav className="overflow-x-auto bg-[#DF1F25] text-white" aria-label="Redes sociales y contacto">
        <div className="mx-auto flex w-max min-w-full max-w-[1600px] items-center justify-center gap-5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.06em] lg:gap-8">
          {utilityLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="shrink-0 whitespace-nowrap transition hover:opacity-75"
              target={link.href.startsWith('https://www.cachoscr.com') ? undefined : '_blank'}
              rel={link.href.startsWith('https://www.cachoscr.com') ? undefined : 'noreferrer'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-4 py-4 lg:px-6">
        <a href="/" className="col-start-2 justify-self-center" aria-label="Cachos inicio">
          <img
            src="https://cms.blumewebsites.com/cachos/website/logo.png"
            alt="Cachos"
            className="h-10 w-auto max-w-[150px] object-contain"
          />
        </a>

        <div className="col-start-3 flex items-center justify-self-end gap-3">
          <button type="button" aria-label="Buscar" aria-expanded={searchOpen} className="site-header__icon" onClick={() => setSearchOpen((value) => !value)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
          </button>
          <a aria-label="Mi cuenta" href="https://www.cachoscr.com/s/login" className="site-header__icon">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="7.5" r="3.5" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></svg>
          </a>
          <button type="button" aria-label={`Carrito${cantidadTotal ? `, ${cantidadTotal} productos` : ''}`} className="site-header__icon site-header__bag" onClick={openCart}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>
            {cantidadTotal > 0 && <span>{cantidadTotal}</span>}
          </button>
        </div>
      </div>

      {searchOpen && (
        <form className="site-header__search" role="search" onSubmit={submitSearch}>
          <input
            autoFocus
            type="search"
            aria-label="Buscar productos"
            placeholder="¿Qué estás buscando?"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit" aria-label="Buscar productos">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></svg>
            Buscar
          </button>
          <button type="button" className="site-header__search-close" aria-label="Cerrar búsqueda" onClick={() => setSearchOpen(false)}>×</button>
        </form>
      )}

      <nav className="flex items-center gap-6 overflow-x-auto border-t border-black/10 px-4 py-3 lg:justify-center lg:gap-10 lg:px-6" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a
            href={navHrefs[item] ?? '/products'}
            key={item}
            className="shrink-0 text-[11px] font-bold uppercase tracking-[0.08em] text-black transition hover:opacity-70"
            style={item === 'Ofertas' ? { color: '#DF1F25' } : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
    <CartDrawer />
    </>
  );
}