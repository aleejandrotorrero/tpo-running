const priceFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
});

// 140 → "140,00 €"
export function formatPrice(value) {
  return priceFormatter.format(value);
}

// Redondea a 2 decimales para evitar errores como 0.1 + 0.2 = 0.30000000000000004
export function roundMoney(value) {
  return Math.round(value * 100) / 100;
}

// "Nutrición" → "nutricion"
export function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}