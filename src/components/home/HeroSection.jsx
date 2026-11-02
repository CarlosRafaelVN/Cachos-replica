export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-[1600px] gap-6 px-4 py-8 md:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:py-10">
      <div className="max-w-[640px] py-4 lg:py-8">
        <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0D0B10]/70">NUEVO DROP</p>
        <h1 className="max-w-[620px] text-[2.7rem] font-black leading-[0.92] tracking-[-0.09em] text-black md:text-[4.2rem] lg:text-[5rem]">
          CONVERSE × HELLO KITTY® &amp; FRIENDS
        </h1>
        <p className="mt-5 max-w-[540px] text-[1.08rem] leading-7 text-[#0D0B10]/80">
          Chuck Taylor con My Melody, Kuromi y toda la pandilla. Edición limitada.
        </p>
        <a href="#" className="mt-7 inline-flex items-center justify-center rounded-full bg-[#0D0B10] px-6 py-4 text-[11px] font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5">
          COMPRAR LA COLECCIÓN →
        </a>
        <p className="mt-4 text-[11px] font-medium text-black/60">© 2026 SANRIO CO., LTD. Used Under License.</p>
      </div>

      <div className="overflow-hidden rounded-[28px] bg-[#0D0B10] shadow-[0_25px_70px_rgba(13,11,16,0.12)]">
        <img
          src="https://cms.blumewebsites.com/cachos/website/cx-converse-hero-desk3.webp"
          alt="Converse Hello Kitty collection"
          className="h-[420px] w-full object-cover md:h-[520px] lg:h-[620px]"
        />
      </div>
    </section>
  );
}