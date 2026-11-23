import { products } from '../data/products.js';
import { roundMoney, slugify } from './format.js';

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === id) ?? null;
}

// Filtra por la categoría principal: "calzado" → productos con categories[0] = "Calzado"
export function getProductsByCategory(categorySlug) {
  return products.filter((product) => slugify(product.categories[0]) === categorySlug);
}

export function getProductsOnSale() {
  return products.filter(isOnSale);
}

export function isOnSale(product) {
  return product.originalPrice !== null;
}

// Descuento por unidad en euros (irá a `discount` en GA4)
export function getUnitDiscount(product) {
  return isOnSale(product) ? roundMoney(product.originalPrice - product.price) : 0;
}

// Porcentaje para la etiqueta: 160 → 140 da 13
export function getDiscountPercent(product) {
  if (!isOnSale(product)) {
    return 0;
  }
  return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
}