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
      <svg className="sale-feature__waves" viewBox="0 0 1440 82" preserveAspectRatio="none" aria-hidden="true">
        <path fill="#C8C8C8" fillOpacity=".76" d="M0 25C95 34 162 71 280 54S465 5 590 31s183 36 292 5 219-39 335-8 151 29 223 17V82H0Z" />
        <path fill="#969696" fillOpacity=".78" d="M0 38c100-3 177 44 278 30s198-43 312-17 191 39 293 13 211-37 328-9 157 27 229 13v27H0Z" />
        <path fill="#595959" fillOpacity=".82" d="M0 50c102-14 176 34 277 28s197-34 312-14 194 29 296 9 207-28 318-7 165 22 237 10v24H0Z" />
        <path fill="#1B191D" fillOpacity=".88" d="M0 64c106-17 177 20 278 17s198-25 311-13 198 20 296 8 205-19 318-4 165 16 237 8v20H0Z" />
        <path
          d="M0 64c106-17 177 20 278 17s198-25 311-13 198 20 296 8 205-19 318-4 165 16 237 8"
          fill="none"
          stroke="#0D0B10"
          strokeOpacity=".78"
          strokeWidth="3"
        />
      </svg>
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
