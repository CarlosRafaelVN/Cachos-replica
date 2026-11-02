export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white pt-10 pb-8">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-4 md:px-6 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1.1fr]">
        <div>
          <img src="https://cms.blumewebsites.com/cachos/website/logo.png" alt="Cachos logo" className="mb-4 w-[160px]" />
          <p className="max-w-[330px] text-[0.8rem] leading-6 text-black/70">Marcas 100% originales de calzado, accesorios y ropa. Más de 30 años caminando con vos.</p>
          <a href="https://wa.me/50660651818" className="mt-4 inline-block text-[11px] font-black uppercase tracking-[0.12em] text-black">WHATSAPP 6065-1818 →</a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-black">AYUDA</h2>
          <a href="#" className="text-[0.82rem] text-black/70">Preguntas frecuentes</a>
          <a href="#" className="text-[0.82rem] text-black/70">Conocé tu talla ideal</a>
          <a href="#" className="text-[0.82rem] text-black/70">Restricciones y reglamentos</a>
          <a href="#" className="text-[0.82rem] text-black/70">Ubicaciones de tiendas</a>
          <a href="#" className="text-[0.82rem] text-black/70">Contacto</a>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-black">CONTACTO</h2>
          <a href="tel:+50640003300" className="text-[0.82rem] text-black/70">Tel. 4000-3300</a>
          <a href="mailto:servicioalcliente@grupocachos.com" className="text-[0.82rem] text-black/70">servicioalcliente@grupocachos.com</a>
          <span className="text-[0.82rem] text-black/70">Guachipelín, Escazú, San José.</span>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-[10px] font-black uppercase tracking-[0.14em] text-black">PAGOS</h2>
          <span className="text-[0.82rem] text-black/70">Sinpe Móvil: 6065-1818</span>
          <span className="text-[0.82rem] text-black/70">BAC 900205006CR30010200009002050062</span>
          <span className="text-[0.82rem] text-black/70">BCR 001-0180817-6CR23015201001018081763</span>
          <span className="text-[0.82rem] text-black/70">BNCR 200-01-091-028159-3CR65015109120010281597</span>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-[1600px] flex-col gap-3 border-t border-black/10 px-4 pt-5 text-[0.8rem] text-black/60 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex flex-wrap gap-3">
          <a href="#">Política de privacidad</a>
          <a href="#">Política de devoluciones</a>
          <a href="#">Términos y condiciones</a>
        </div>
        <p>© Blume Apps 2026</p>
      </div>
    </footer>
  );
}