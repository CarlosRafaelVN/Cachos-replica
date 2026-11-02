export default function CampaignSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 py-8 md:px-6 lg:py-12">
      <div className="overflow-hidden rounded-[28px] bg-[#0D0B10] p-6 text-white md:p-8 lg:p-10">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_2fr_auto]">
          <div className="flex justify-center lg:justify-start">
            <img src="https://cms.blumewebsites.com/cachos/website/cachos-new-black-logo.png" alt="Cachos: Hasta 50% off" className="w-[250px] max-w-full" />
          </div>
          <div>
            <p className="mb-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/75">BLACK FRIDAY · TODO NOVIEMBRE</p>
            <h2 className="max-w-[700px] text-[2rem] font-black leading-[1.1] tracking-[-0.07em] text-white md:text-[2.5rem]">
              Todo noviembre, hasta 50% de descuento en tus marcas favoritas de calzado y accesorios.
            </h2>
            <p className="mt-2 text-[0.82rem] text-white/70">Cuando se acaban, se acaban.</p>
          </div>
          <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#DF1F25] px-5 py-3 text-[10px] font-black uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5">VER OFERTAS →</a>
        </div>
        <div className="mt-6 overflow-hidden rounded-[18px]">
          <img src="https://cms.blumewebsites.com/cachos/website/cachos-new-black-marcas.png" alt="Marcas destacadas" className="w-full" />
        </div>
      </div>
    </section>
  );
}