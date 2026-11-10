import { personas } from '../../data/homePageData.js';

export default function AudienceSection() {
  return (
    <section className="audience-section" aria-label="Comprá por categoría">
      <div className="audience-section__inner">
        <h2 className="audience-section__title">¿PARA QUIÉN <span>BUSCÁS?</span></h2>
        <div className="audience-section__grid">
          {personas.map((persona) => (
            <a className="audience-section__card" href={persona.href} key={persona.label}>
              <span className="audience-section__image">
                <img src={persona.image} alt={persona.alt} loading="lazy" />
                {persona.badge && (
                  <span className="audience-section__badge">
                    HASTA <b>{persona.badge}</b>
                  </span>
                )}
              </span>
              <span className="audience-section__label">{persona.label}</span>
              <span className="audience-section__description">{persona.title}</span>
              <span className="audience-section__action">{persona.accent}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}