export function formatPrice(value) {
  return `¢${Number(value).toLocaleString('es-CR', {
    maximumFractionDigits: 0,
  })}`;
}