export const SIZE_SYSTEMS = ['US', 'CM', 'EU'];

export function formatProductSize(item, system) {
  if (system === 'EU') {
    const europeanSize = String(item.style ?? '').replace(/\s*EUR$/i, '').trim();
    return europeanSize || '—';
  }
  if (system === 'CM') {
    const centimeterSize = String(item.customValueA ?? '').replace(/\s*cm$/i, '').trim();
    return centimeterSize ? `${centimeterSize} cm` : '—';
  }
  return String(item.size ?? '—');
}
