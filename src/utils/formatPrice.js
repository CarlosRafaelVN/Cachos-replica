export function formatPrice(value) {
  return `¢${Number(value).toLocaleString('en-US', {
    maximumFractionDigits: 0,
  })}`;
}