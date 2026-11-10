export default function ContentCardsSection({ title, items }) {
  return (
    <section className="content-cards-section" aria-label={title}>
      <h2 className="content-cards-section__title">
        MÁS QUE <span>CALZADO</span>
      </h2>
      <div className="content-cards-section__grid">
        {items.map((item) => (
          <a className="content-cards-section__card" href={item.href} key={item.title}>
            <img
              className="content-cards-section__image"
              src={item.image}
              alt={item.alt}
              loading="lazy"
            />
            <div className="content-cards-section__shade" aria-hidden="true" />
            <div className="content-cards-section__copy">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="content-cards-section__button">
                {item.link} <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}