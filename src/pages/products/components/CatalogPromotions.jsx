export default function CatalogPromotions() {
  return (
    <>
      <div className="catalog-marquee catalog-marquee--messages" aria-label="Información de compra">
        <div className="catalog-marquee__track">
          <span>Aceptamos todas las tarjetas de crédito y débito, EMMA, Transferencia o Sinpe, Zunify, Credix, tasa 0 BAC.</span>
          <span>Entregas a todo el país, de 2 a 4 días hábiles dependiendo de tu lugar de entrega.</span>
          <span>Aceptamos todas las tarjetas de crédito y débito, EMMA, Transferencia o Sinpe, Zunify, Credix, tasa 0 BAC.</span>
          <span>Entregas a todo el país, de 2 a 4 días hábiles dependiendo de tu lugar de entrega.</span>
        </div>
      </div>
      <div className="catalog-marquee catalog-marquee--tags" aria-hidden="true">
        <div className="catalog-marquee__track">
          {[...Array(2)].flatMap((_, repeat) => [
            'BLACK FRIDAY', 'CACHOS IS THE NEW BLACK', 'TODO NOVIEMBRE', 'TUS MARCAS FAVORITAS EN OFERTA',
          ].map((label) => <span key={`${repeat}-${label}`}>✦ {label}</span>))}
        </div>
      </div>
      <section className="catalog-hero">
        <div className="catalog-hero__inner">
          <div className="catalog-hero__badge"><small>cachos</small><span>IS THE NEW</span><strong>BLACK</strong><em>HASTA 50%</em></div>
          <div className="catalog-hero__offer">
            <h1>Hasta 50% en tus marcas favoritas</h1>
            <div className="catalog-hero__brands">
              <span>adidas</span><span>CONVERSE</span><span>PUMA</span><span>new balance</span>
              <span>OSIRIS</span><span>SPERRY</span><span>Keds</span><span>Joma</span>
            </div>
          </div>
          <a className="catalog-hero__cta" href="/products?offers=1">Ver ofertas <b>→</b></a>
        </div>
        <div className="catalog-tape" aria-hidden="true">
          <div className="catalog-tape__track">
            {Array.from({ length: 12 }, (_, index) => <span key={index}>▲ BLACK FRIDAY</span>)}
          </div>
        </div>
      </section>
    </>
  );
}
