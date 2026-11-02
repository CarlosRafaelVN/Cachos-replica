import { personas } from '../../data/homePageData.js';

export default function AudienceSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
      <h2 className="mb-6 text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">¿PARA QUIÉN BUSCÁS?</h2>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {personas.map((persona) => (
          <article key={persona.label} className="relative min-h-[260px] overflow-hidden rounded-[22px] bg-cover bg-center">
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
  );
}