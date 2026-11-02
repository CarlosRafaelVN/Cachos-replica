import { navItems } from '../../data/homePageData.js';

const utilityLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/50660651818' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@cachos_cr' },
  { label: 'Instagram', href: 'https://instagram.com/cachoscr' },
  { label: 'Facebook', href: 'https://facebook.com/cachoscr' },
  { label: 'Contacto', href: 'https://www.cachoscr.com/s/contacto' },
  { label: 'Ubicaciones tiendas', href: 'https://www.cachoscr.com/s/store-locations' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white">
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
          <button type="button" aria-label="Buscar" className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-lg transition hover:-translate-y-0.5">
            🔍
          </button>
          <button type="button" aria-label="Carrito" className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-lg transition hover:-translate-y-0.5">
            🛍️
          </button>
          <button type="button" className="hidden rounded-full border border-black/15 bg-white px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.08em] transition hover:-translate-y-0.5 sm:inline-flex">
            Ingresar
          </button>
        </div>
      </div>

      <nav className="flex items-center gap-6 overflow-x-auto border-t border-black/10 px-4 py-3 lg:justify-center lg:gap-10 lg:px-6" aria-label="Navegación principal">
        {navItems.map((item) => (
          <a
            href="#"
            key={item}
            className="shrink-0 text-[11px] font-bold uppercase tracking-[0.08em] text-black transition hover:opacity-70"
            style={item === 'Ofertas' ? { color: '#DF1F25' } : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}