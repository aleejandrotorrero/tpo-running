import { formatPrice } from './format.js';
import { isOnSale, getDiscountPercent } from './catalog.js';

export function createProductCard(product, index) {
  const template = document.querySelector('#product-card-template');
  const card = template.content.firstElementChild.cloneNode(true);

  // Enlace a la ficha + ganchos para la medición
  const link = card.querySelector('[data-item-link]');
  link.href = `producto.html?id=${encodeURIComponent(product.id)}`;
  link.dataset.itemId = product.id;
  link.dataset.itemIndex = index;

  // Imagen principal; si no existe, se quita y queda el fondo gris
  const image = card.querySelector('[data-image]');
  image.src = product.images[0];
  image.addEventListener('error', () => image.remove(), { once: true });

  // Textos
  card.querySelector('[data-name]').textContent = product.name;
  card.querySelector('[data-meta]').textContent = product.categories.join(' · ');
  card.querySelector('[data-price]').textContent = formatPrice(product.price);

  // Precio anterior, solo si hay oferta
  const originalPrice = card.querySelector('[data-original-wrap]');
  if (isOnSale(product)) {
    card.querySelector('[data-original-price]').textContent = formatPrice(product.originalPrice);
  } else {
    originalPrice.remove();
  }

  // Etiquetas (máximo 2, según la guía)
  const badges = card.querySelector('[data-badges]');
  if (product.isNew) {
    badges.append(createBadge('Nuevo', 'new'));
  }
  if (isOnSale(product)) {
    badges.append(createBadge(`Oferta −${getDiscountPercent(product)} %`, 'sale'));
  }
  if (badges.children.length === 0) {
    badges.remove();
  }

  return card;
}

function createBadge(text, variant) {
  const badge = document.createElement('li');
  badge.className = `badge badge--${variant}`;
  badge.textContent = text;
  return badge;
}