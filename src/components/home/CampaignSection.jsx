const campaignMessages = [
  'BLACK FRIDAY',
  'CACHOS IS THE NEW BLACK',
  'TODO NOVIEMBRE',
  'TUS MARCAS FAVORITAS EN OFERTA',
];

function CampaignTicker({ variant, messages, label }) {
  return (
    <div className={`campaign-ticker campaign-ticker--${variant}`} aria-label={label}>
      <div className="campaign-ticker__track">
        {[0, 1].map((copy) => (
          <div className="campaign-ticker__group" key={copy} aria-hidden={copy === 1}>
            {messages.map((message, index) => (
              <span className="campaign-ticker__item" key={`${index}-${message}`}>
                {message}<i aria-hidden="true">{variant === 'warning' ? '▲' : '✦'}</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CampaignSection() {
  return (
    <section className="campaign-section" aria-label="Promoción Black Friday">
      <CampaignTicker
        variant="headline"
        messages={campaignMessages}
        label="Black Friday, Cachos is the new black, todo noviembre"
      />

      <div className="campaign-section__main">
        <div className="campaign-section__art">
          <img
            src="https://cms.blumewebsites.com/cachos/website/cachos-new-black-logo.png"
            alt="Cachos is the new black: hasta 50 % off"
          />
        </div>

        <div className="campaign-section__content">
          <p className="campaign-section__eyebrow">
            <span aria-hidden="true" />
            Black Friday · Todo noviembre
          </p>
          <p className="campaign-section__description">
            Todo noviembre, hasta 50% de descuento en tus marcas favoritas de calzado y accesorios. Cuando se acaban, se acaban.
          </p>
          <img
            className="campaign-section__brands"
            src="https://cms.blumewebsites.com/cachos/website/cachos-new-black-marcas.png"
            alt="Marcas participantes: adidas, Converse, Puma, New Balance, Osiris, Sperry, Keds y Joma"
            loading="lazy"
          />
          <a className="campaign-section__action" href="#">
            Ver ofertas <span aria-hidden="true">→</span>
          </a>
          <p className="campaign-section__disclaimer">
            Promoción por tiempo limitado. Aplican restricciones.
          </p>
        </div>
      </div>

      <CampaignTicker
        variant="warning"
        messages={['BLACK FRIDAY', 'BLACK FRIDAY', 'BLACK FRIDAY', 'BLACK FRIDAY']}
        label="Black Friday"
      />
    </section>
  );
}
