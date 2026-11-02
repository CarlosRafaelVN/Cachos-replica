export default function AnnouncementBar() {
  return (
    <div className="announcement-bar" role="region" aria-label="Información de entregas, cambios y pagos">
      <div className="announcement-track">
        <div className="announcement-group">
          <span>Entregas a todo el país, de 2 a 4 días hábiles dependiendo de tu lugar de entrega.</span>
          <span>Tenemos sistemas para cambio de producto.</span>
          <span>Aceptamos todas las tarjetas de crédito y débito, EMMA, Transferencia o Sinpe, Zunify, Credix, tasa 0 BAC.</span>
        </div>
        <div className="announcement-group" aria-hidden="true">
          <span>Entregas a todo el país, de 2 a 4 días hábiles dependiendo de tu lugar de entrega.</span>
          <span>Tenemos sistemas para cambio de producto.</span>
          <span>Aceptamos todas las tarjetas de crédito y débito, EMMA, Transferencia o Sinpe, Zunify, Credix, tasa 0 BAC.</span>
        </div>
      </div>
    </div>
  );
}