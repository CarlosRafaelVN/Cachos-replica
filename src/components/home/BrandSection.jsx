import { brands } from '../../data/homePageData.js';

export default function BrandSection() {
  return (
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
  );
}