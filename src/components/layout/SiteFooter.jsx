const footerNotes = [
  'Las compras con tarjeta se entregan solo al dueño de la tarjeta.',
  'Retiro en tienda: indicá la tienda en el mensaje al vendedor (traslados hasta 2 días hábiles).',
  'Tasa 0 y Credix aplican a 3 meses en compras en línea.',
  'No hay entregas los fines de semana.',
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__panel">
        <div className="site-footer__columns">
          <div className="site-footer__brand">
            <img
              src="https://cms.blumewebsites.com/cachos/website/logo.png"
              alt="Cachos"
              className="site-footer__logo"
            />
            <p>Marcas 100% originales de calzado, accesorios y ropa. Más de 30 años caminando con vos.</p>
            <a className="site-footer__whatsapp" href="https://wa.me/50660651818">
              WHATSAPP 6065-1818 <span aria-hidden="true">→</span>
            </a>
          </div>

          <nav className="site-footer__group" aria-label="Ayuda">
            <h2>AYUDA</h2>
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Conocé tu talla ideal</a>
            <a href="#">Restricciones y reglamentos</a>
            <a href="#">Restricciones Plusshop</a>
            <a href="#">Ubicaciones de tiendas</a>
            <a href="#">Contacto</a>
          </nav>

          <div className="site-footer__group">
            <h2>CONTACTO</h2>
            <a href="tel:+50640003300">Tel. 4000-3300</a>
            <a href="mailto:servicioalcliente@grupocachos.com">servicioalcliente@grupocachos.com</a>
            <p>Guachipelín, Escazú, San José. 400 m norte de Construplaza, Blum Business Center, bodega #5.</p>
          </div>

          <div className="site-footer__group site-footer__payments">
            <h2>PAGOS</h2>
            <p><strong>Sinpe Móvil:</strong> 6065-1818</p>
            <p><strong>BAC</strong> 900205006</p>
            <small>CR30010200009002050062</small>
            <p><strong>BCR</strong> 001-0180817-6</p>
            <small>CR23015201001018081763</small>
            <p><strong>BNCR</strong> 200-01-091-028159-3</p>
            <small>CR65015109120010281597</small>
          </div>
        </div>

        <ul className="site-footer__notes">
          {footerNotes.map((note) => <li key={note}>{note}</li>)}
        </ul>

        <p className="site-footer__company">Grupo Cachos S.A. · Céd. jurídica 3-101-138218</p>
      </div>

      <div className="site-footer__bottom">
        <nav className="site-footer__legal" aria-label="Información legal">
          <a href="#">Política de privacidad</a>
          <a href="#">Política de devoluciones</a>
          <a href="#">Términos y condiciones</a>
        </nav>
        <p>© Blume Apps 2026</p>
        <a className="site-footer__back-to-top" href="#top" aria-label="Volver arriba">
          <img src="https://cms.blumewebsites.com/cachos/website/logo.png" alt="" />
        </a>
      </div>
    </footer>
  );
}
