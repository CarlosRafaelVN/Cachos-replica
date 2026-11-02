export default function ContentCardsSection({ title, items }) {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
      <h2 className="mb-6 text-[1.9rem] font-black uppercase leading-none tracking-[-0.07em] text-black md:text-[2.5rem]">{title}</h2>
      <div className="grid gap-4 xl:grid-cols-3">
        {items.map((item) => (
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
  );
}