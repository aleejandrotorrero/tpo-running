import { products } from '../data/products.js';

console.log('[home.js] Script cargado');
console.log('[home.js] Productos en el catálogo:', products.length);
console.log('[home.js] Primer producto:', products[0].name);
console.log('[home.js] Segundo producto:', products[1].name);
console.log('[home.js] Producto 18:', products[products.length - 1].name, '-', products[products.length - 1].price);