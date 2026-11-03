const saleMessages = [
  'SALE',
  'OFERTAS',
  'DESCUENTOS EN TUS MARCAS FAVORITAS',
  'SALE',
  'PRECIOS REBAJADOS',
];

const saleCategories = [
  { label: 'Mujer', href: '/sale?gender=FEMENINO,UNISEX' },
  { label: 'Hombre', href: '/sale?gender=MASCULINO,UNISEX' },
  { label: 'Niños', href: '/sale?gender=NI%C3%91O(A)' },
];

function SaleTicker() {
  return (
    <div className="sale-feature__ticker" aria-label="Ofertas y precios rebajados">
      <div className="sale-feature__ticker-track">
        {[0, 1].map((copy) => (
          <div className="sale-feature__ticker-group" key={copy} aria-hidden={copy === 1}>
            {saleMessages.map((message, index) => (
              <span className="sale-feature__ticker-item" key={`${index}-${message}`}>
                {message}<i aria-hidden="true">✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SaleFeatureSection() {
  return (
    <section className="sale-feature" aria-label="Ofertas Cachos">
      <SaleTicker />

      <div className="sale-feature__main">
        <div className="sale-feature__copy">
          <span className="sale-feature__tag">Ofertas Cachos</span>
          <h2 className="sale-feature__title">
            TUS PARES
            <br />
            FAVORITOS
            <em>A MEJOR PRECIO</em>
          </h2>
          <p className="sale-feature__description">
            Tenis, botas, sandalias y accesorios con descuento. Cuando se acaban, se acaban.
          </p>
          <a className="sale-feature__cta" href="/sale">
            Ver todas las ofertas <span aria-hidden="true">→</span>
          </a>
          <div className="sale-feature__categories">
            <span>Todo para:</span>
            {saleCategories.map((category) => (
              <a href={category.href} key={category.label}>{category.label}</a>
            ))}
          </div>
        </div>

        <a className="sale-feature__art" href="/sale" aria-label="Ver todas las ofertas">
          <img
            src="https://cms.blumewebsites.com/cachos/website/cx-vans-oldskool.jpg"
            alt="Persona usando Vans Old Skool negras"
            loading="lazy"
          />
          <span className="sale-feature__badge">
            <span>SALE</span>
            <b>%</b>
          </span>
        </a>

        <span className="sale-feature__background-word" aria-hidden="true">SALE</span>
      </div>
    </section>
  );
}
