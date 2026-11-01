const navItems = [
  'Mujer',
  'Hombre',
  'Niños',
  'Ofertas',
  'Accesorios',
  'Mochilas',
  'Descuentos',
];

const bestSellers = [
  {
    name: 'TENIS MASCULINO HI-TEC FLASH TRAIL',
    price: 24400,
    oldPrice: 34900,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'TENIS NIÑO(A) DC SHOES COURT GRAFFIK',
    price: 27900,
    oldPrice: 39900,
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'TENIS MUJER ADIDAS COURT VISION',
    price: 32900,
    oldPrice: 49900,
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'TENIS UNISEX NIKE BLAZER LOW',
    price: 41900,
    oldPrice: 57900,
    image:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
  },
];

const brands = [
  'Converse',
  'Vans',
  'Dr. Martens',
  'Nike',
  'adidas',
  'Puma',
  'Timberland',
  'Columbia',
  'Quiksilver',
  'Volcom',
  'Keds',
  'Sperry',
];

const pairCards = [
  {
    title: 'New Balance 9060',
    subtitle: 'Suela chunky y diseño retro que está en todas partes.',
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80',
    action: 'VER 9060',
  },
  {
    title: 'Sperry Authentic Original',
    subtitle: 'El zapato náutico de cuero, un clásico desde 1935.',
    image:
      'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=1200&q=80',
    action: 'VER SPERRY A/O',
  },
  {
    title: 'Birkenstock Arizona Big Buckle',
    subtitle: 'La sandalia de siempre con hebillas XL.',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=80',
    action: 'VER ARIZONA',
  },
  {
    title: 'Element Topaz',
    subtitle: 'El tenis de skate en lona para el día a día.',
    image:
      'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80',
    action: 'VER TOPAZ',
  },
];

const personas = [
  { label: 'MUJER', title: 'Tenis, botas y sandalias de las marcas que más te gustan.', href: '#', accent: 'Mujer' },
  { label: 'HOMBRE', title: 'Del skate a la montaña: encontrá tu par para todos los días.', href: '#', accent: 'Hombre' },
  { label: 'NIÑOS', title: 'Tenis para la escuela y el juego, en todas las tallas.', href: '#', accent: 'Niños' },
  { label: 'OFERTAS', title: 'Estilos seleccionados con descuento, solo en línea.', href: '#', accent: 'Ver ofertas' },
];

const viralProducts = [
  {
    name: 'TENIS UNISEX NEW BALANCE 9060',
    price: 94900,
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'TENIS FEMENINO ADIDAS VL COURT BOLD',
    price: 49900,
    image:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'TENIS MASCULINO NIKE INITIATOR',
    price: 53900,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
];

const saleProducts = [
  {
    name: 'TENIS EN OFERTA PUMA',
    price: 27900,
    oldPrice: 42900,
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'BOTAS CONVERSE LOW',
    price: 34900,
    oldPrice: 48900,
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'SANDALIA VANS OLD SKOOL',
    price: 39900,
    oldPrice: 57900,
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'GORRA QUIKSILVER',
    price: 14900,
    oldPrice: 21900,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
];

const moreThanShoes = [
  {
    title: 'Lista para la U',
    text: 'Mochilas y bolsos de Dakine, Volcom, New Wave y más para clases, trabajo o playa.',
    link: 'Ver maletines →',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cubrite con estilo',
    text: 'Gorras trucker, snapback y sombreros para el sol de todos los días.',
    link: 'Ver gorras →',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Siempre fría',
    text: 'Vasos y botellas New Wave que mantienen tu bebida helada todo el día.',
    link: 'Ver vasos y botellas →',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80',
  },
];

const lookProducts = [
  {
    name: 'MALETIN MASCULINO QUIKSILVER MOJAVE',
    price: 20900,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'GORRA MASCULINO QUIKSILVER DECADES FOAM',
    price: 14900,
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'VASO UNISEX NEW WAVE BIG TRAVEL TUMBLER',
    price: 12900,
    image:
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  },
];

const communityPosts = [
  {
    quote: 'Llegué en tacones y salí con unas tennis Keds preciosas @keds @cachoscr',
    author: 'Natalia Castillo',
  },
  {
    quote: 'Converse con mami en @cachoscr 👟 Me encantan los modelos que les muestro por acá.',
    author: 'Camila Moro',
  },
  {
    quote: 'RUN STAR CRUSH, nuevas tenis de Converse, hechas para tus looks más llamativos.',
    author: 'Fiorella Ramírez',
  },
];

const formatPrice = (value) =>
  `¢${Number(value).toLocaleString('es-CR', { maximumFractionDigits: 0 })}`;

function App() {
  return (
    <div className="min-h-screen bg-[#f5f2ee] text-[#111111] antialiased">
      <div className="bg-[#111111] text-white">
        <div className="mx-auto flex min-h-[52px] max-w-[1600px] flex-wrap items-center justify-center gap-4 px-4 py-2 text-center text-[11px] md:text-[12px]">
          <span>Entregas a todo el país, de 2 a 4 días hábiles dependiendo de tu lugar de entrega.</span>
          <span>Tenemos sistemas para cambio de producto.</span>
          <span>Aceptamos todas las tarjetas de crédito y débito, EMMA, Transferencia o Sinpe, Zunify, Credix, tasa 0 BAC.</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-4 py-4 lg:px-6">
          <div className="flex items-center gap-3 font-black tracking-[0.08em]" aria-label="Cachos logo">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#111111] text-[1.1rem] text-white">C</div>
            <div className="text-[1.4rem] uppercase tracking-[-0.04em] text-black">CACHOS</div>
          </div>

          <nav className="hidden items-center justify-center gap-5 lg:flex" aria-label="Navegación principal">
            {navItems.map((item) => (
              <a href="#" key={item} className="text-[11px] font-bold uppercase tracking-[0.08em] text-black/80 transition hover:opacity-100">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button type="button" aria-label="Buscar" className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-lg transition hover:-translate-y-0.5">
              🔍
            </button>
            <button type="button" aria-label="Carrito" className="grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-lg transition hover:-translate-y-0.5">
              🛍️
            </button>
            <button type="button" className="rounded-full border border-black/15 bg-white px-5 py-3 text-[10px] font-extrabold uppercase tracking-[0.08em] transition hover:-translate-y-0.5">
              Ingresar
            </button>
          </div>
        </div>
      </header>

      <main className="pb-16">
        <section className="mx-auto grid max-w-[1600px] gap-6 px-4 py-8 md:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:py-10">
          <div className="max-w-[640px] py-4 lg:py-8">
            <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#6d6966]">NUEVO DROP</p>
            <h1 className="max-w-[620px] text-[2.7rem] font-black leading-[0.92] tracking-[-0.09em] text-black md:text-[4.2rem] lg:text-[5rem]">
              CONVERSE × HELLO KITTY® &amp; FRIENDS
            </h1>
            <p className="mt-5 max-w-[540px] text-[1.08rem] leading-7 text-[#2d2a28]">
              Chuck Taylor con My Melody, Kuromi y toda la pandilla. Edición limitada.
            </p>
            <a href="#" className="mt-7 inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-4 text-[11px] font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5">
              COMPRAR LA COLECCIÓN →
            </a>
            <p className="mt-4 text-[11px] font-medium text-black/60">© 2026 SANRIO CO., LTD. Used Under License.</p>
          </div>

          <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#2a1e38] via-[#3d203d] to-[#f7c7e0] shadow-[0_25px_70px_rgba(17,17,17,0.12)]">
            <img
              src="https://cms.blumewebsites.com/cachos/website/cx-converse-hero-desk3.webp"
              alt="Converse Hello Kitty collection"
              className="h-[420px] w-full object-cover md:h-[520px] lg:h-[620px]"
            />
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-[1.8rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">Lo más buscado</h2>
            <span className="text-[11px] uppercase tracking-[0.12em] text-black/60">Los pares que más se están llevando esta semana.</span>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {bestSellers.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-[18px] border border-black/10 bg-white transition hover:-translate-y-1">
                <img src={product.image} alt={product.name} loading="lazy" className="h-[260px] w-full object-cover" />
                <h3 className="px-4 pt-4 text-[0.88rem] font-bold uppercase leading-[1.35] tracking-[0.03em] text-black">{product.name}</h3>
                <div className="flex items-center gap-3 px-4 pb-4 pt-3 text-sm font-extrabold">
                  <strong className="text-black">{formatPrice(product.price)}</strong>
                  <span className="text-black/40 line-through">{formatPrice(product.oldPrice)}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <div className="overflow-hidden rounded-[28px] bg-[#111111] p-6 text-white md:p-8 lg:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_2fr_auto]">
              <div className="flex justify-center lg:justify-start">
                <img src="https://cms.blumewebsites.com/cachos/website/cachos-new-black-logo.png" alt="Cachos: Hasta 50% off" className="w-[250px] max-w-full" />
              </div>
              <div>
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/75">BLACK FRIDAY · TODO NOVIEMBRE</p>
                <h2 className="max-w-[700px] text-[2rem] font-black leading-[1.1] tracking-[-0.07em] text-white md:text-[2.5rem]">
                  Todo noviembre, hasta 50% de descuento en tus marcas favoritas de calzado y accesorios.
                </h2>
                <p className="mt-2 text-[0.82rem] text-white/70">Cuando se acaban, se acaban.</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#f3efe9] px-5 py-3 text-[10px] font-black uppercase tracking-[0.1em] text-black transition hover:-translate-y-0.5">VER OFERTAS →</a>
            </div>
            <div className="mt-6 overflow-hidden rounded-[18px]">
              <img src="https://cms.blumewebsites.com/cachos/website/cachos-new-black-marcas.png" alt="Marcas destacadas" className="w-full" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.4rem]">Nuestras marcas</h2>
            <a href="#" className="text-[10px] font-black uppercase tracking-[0.12em] text-black">Ver catálogo →</a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {brands.map((brand) => (
              <a href="#" key={brand} className="grid min-h-[86px] place-items-center rounded-[18px] border border-black/10 bg-white text-[0.8rem] font-black uppercase tracking-[0.08em] text-black transition hover:-translate-y-1">
                {brand}
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <h2 className="mb-6 text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">Elegí tu próximo par</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pairCards.map((pair) => (
              <article key={pair.title} className="overflow-hidden rounded-[20px] border border-black/10 bg-white">
                <div className="px-4 pb-3 pt-4">
                  <h3 className="text-[1.05rem] font-black leading-tight tracking-[-0.04em] text-black">{pair.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-5 text-black/70">{pair.subtitle}</p>
                  <a href="#" className="mt-4 inline-block text-[10px] font-black uppercase tracking-[0.12em] text-black">{pair.action}</a>
                </div>
                <img src={pair.image} alt={pair.title} loading="lazy" className="h-[260px] w-full object-cover" />
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <h2 className="mb-6 text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">¿PARA QUIÉN BUSCÁS?</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {personas.map((persona) => (
              <article key={persona.label} className="relative overflow-hidden rounded-[22px] min-h-[260px] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />
                <div className="relative flex h-full flex-col justify-end p-5 text-white">
                  <span className="mb-3 text-[10px] font-black uppercase tracking-[0.16em]">{persona.label}</span>
                  <p className="mb-4 text-[0.95rem] leading-6 text-white/90">{persona.title}</p>
                  <a href={persona.href} className="text-[10px] font-black uppercase tracking-[0.12em] text-white">{persona.accent}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <h2 className="mb-6 text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">Los más virales</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {viralProducts.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-[18px] border border-black/10 bg-white transition hover:-translate-y-1">
                <img src={product.image} alt={product.name} loading="lazy" className="h-[260px] w-full object-cover" />
                <h3 className="px-4 pt-4 text-[0.9rem] font-bold uppercase leading-[1.35] tracking-[0.03em] text-black">{product.name}</h3>
                <div className="px-4 pb-4 pt-3 text-sm font-extrabold text-black">{formatPrice(product.price)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">TUS PARES FAVORITOS A MEJOR PRECIO</h2>
              <p className="mt-2 text-[0.84rem] text-black/70">Tenis, botas, sandalias y accesorios con descuento.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#f3efe9] px-5 py-3 text-[10px] font-black uppercase tracking-[0.1em] text-black transition hover:-translate-y-0.5">VER TODAS LAS OFERTAS →</a>
          </div>

          <div className="mb-5 flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.12em] text-black">
            <a href="#">MUJER</a>
            <a href="#">HOMBRE</a>
            <a href="#">NIÑOS</a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {saleProducts.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-[18px] border border-black/10 bg-[#f8f5f2] transition hover:-translate-y-1">
                <img src={product.image} alt={product.name} loading="lazy" className="h-[260px] w-full object-cover" />
                <h3 className="px-4 pt-4 text-[0.88rem] font-bold uppercase leading-[1.35] tracking-[0.03em] text-black">{product.name}</h3>
                <div className="flex items-center gap-3 px-4 pb-4 pt-3 text-sm font-extrabold">
                  <strong className="text-black">{formatPrice(product.price)}</strong>
                  <span className="text-black/40 line-through">{formatPrice(product.oldPrice)}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <h2 className="mb-6 text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">MÁS QUE CALZADO</h2>
          <div className="grid gap-4 xl:grid-cols-3">
            {moreThanShoes.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[20px] border border-black/10 bg-white">
                <img src={item.image} alt={item.title} loading="lazy" className="h-[260px] w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-[1.08rem] font-black tracking-[-0.04em] text-black">{item.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-6 text-black/70">{item.text}</p>
                  <a href="#" className="mt-4 inline-block text-[10px] font-black uppercase tracking-[0.12em] text-black">{item.link}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">Completá tu look</h2>
            <span className="text-[11px] uppercase tracking-[0.12em] text-black/60">BOLSOS, GORRAS, FAJAS, VASOS Y MÁS PARA ACOMPAÑAR TUS PARES.</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {lookProducts.map((product) => (
              <article key={product.name} className="overflow-hidden rounded-[18px] border border-black/10 bg-white transition hover:-translate-y-1">
                <img src={product.image} alt={product.name} loading="lazy" className="h-[260px] w-full object-cover" />
                <h3 className="px-4 pt-4 text-[0.88rem] font-bold uppercase leading-[1.35] tracking-[0.03em] text-black">{product.name}</h3>
                <div className="px-4 pb-4 pt-3 text-sm font-extrabold text-black">{formatPrice(product.price)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
          <h2 className="mb-6 text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">Cachos estilizado por nuestra comunidad</h2>
          <div className="grid gap-4 xl:grid-cols-3">
            {communityPosts.map((post) => (
              <blockquote key={post.author} className="min-h-[170px] rounded-[18px] border border-black/10 bg-white p-5">
                <p className="text-[0.95rem] leading-6 text-black/80">{post.quote}</p>
                <footer className="mt-5 text-[10px] font-black uppercase tracking-[0.12em] text-black">{post.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-[#efebe6] pt-10 pb-8">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-4 md:px-6 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.1fr]">
          <div>
            <img src="https://cms.blumewebsites.com/cachos/website/logo.png" alt="Cachos logo" className="mb-4 w-[160px]" />
            <p className="max-w-[330px] text-[0.8rem] leading-6 text-black/70">Marcas 100% originales de calzado, accesorios y ropa. Más de 30 años caminando con vos.</p>
            <a href="https://wa.me/50660651818" className="mt-4 inline-block text-[11px] font-black uppercase tracking-[0.12em] text-black">WHATSAPP 6065-1818 →</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-black">AYUDA</h3>
            <a href="#" className="text-[0.82rem] text-black/70">Preguntas frecuentes</a>
            <a href="#" className="text-[0.82rem] text-black/70">Conocé tu talla ideal</a>
            <a href="#" className="text-[0.82rem] text-black/70">Restricciones y reglamentos</a>
            <a href="#" className="text-[0.82rem] text-black/70">Ubicaciones de tiendas</a>
            <a href="#" className="text-[0.82rem] text-black/70">Contacto</a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-black">CONTACTO</h3>
            <a href="tel:+50640003300" className="text-[0.82rem] text-black/70">Tel. 4000-3300</a>
            <a href="mailto:servicioalcliente@grupocachos.com" className="text-[0.82rem] text-black/70">servicioalcliente@grupocachos.com</a>
            <span className="text-[0.82rem] text-black/70">Guachipelín, Escazú, San José.</span>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-black">PAGOS</h3>
            <span className="text-[0.82rem] text-black/70">Sinpe Móvil: 6065-1818</span>
            <span className="text-[0.82rem] text-black/70">BAC 900205006CR30010200009002050062</span>
            <span className="text-[0.82rem] text-black/70">BCR 001-0180817-6CR23015201001018081763</span>
            <span className="text-[0.82rem] text-black/70">BNCR 200-01-091-028159-3CR65015109120010281597</span>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-[1600px] flex-col gap-3 border-t border-black/10 px-4 pt-5 text-[0.8rem] text-black/60 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex flex-wrap gap-3">
            <a href="#">Política de privacidad</a>
            <a href="#">Política de devoluciones</a>
            <a href="#">Términos y condiciones</a>
          </div>
          <p>© Blume Apps 2026</p>
        </div>
      </footer>

      <a href="https://wa.me/50660651818" className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25d366] px-4 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-white shadow-[0_12px_25px_rgba(37,211,102,0.35)]">
        WhatsApp
      </a>
    </div>
  );
}

export default App;
