import { pairCards } from '../../data/homePageData.js';

export default function PairCardsSection() {
  return (
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
  );
}