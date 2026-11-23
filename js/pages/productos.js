import { getAllProducts, getProductsByCategory, getProductsOnSale } from '../modules/catalog.js';
import { createProductCard } from '../modules/product-card.js';

// Categorías válidas en la URL y su nombre visible
const CATEGORY_NAMES = {
  calzado: 'Calzado',
  ropa: 'Ropa',
  accesorios: 'Accesorios',
  nutricion: 'Nutrición'
};

// Decide qué lista mostrar a partir de la URL
function getListFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get('categoria');
  const filter = params.get('filtro');

  if (category && CATEGORY_NAMES[category]) {
    return {
      id: category,
      name: CATEGORY_NAMES[category],
      products: getProductsByCategory(category)
    };
  }

  if (filter === 'ofertas') {
    return {
      id: 'ofertas',
      name: 'Ofertas',
      products: getProductsOnSale()
    };
  }

  return {
    id: 'todos',
    name: 'Todos los productos',
    products: getAllProducts()
  };
}

function renderList(list) {
  const title = document.querySelector('[data-list-title]');
  const count = document.querySelector('[data-list-count]');
  const grid = document.querySelector('[data-product-list]');
  const emptyMessage = document.querySelector('[data-list-empty]');

  title.textContent = list.name;
  document.title = `${list.name} · TPO.`;

  // Ganchos de la lista para la medición
  grid.dataset.listId = list.id;
  grid.dataset.listName = list.name;

  if (list.products.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  count.textContent = list.products.length === 1 ? '1 producto' : `${list.products.length} productos`;

  const cards = list.products.map((product, index) => createProductCard(product, index));
  grid.replaceChildren(...cards);
}

// Marca en el menú la sección activa
function markActiveNav(listId) {
  const link = document.querySelector(`[data-nav="header"][data-nav-item="${listId}"]`);
  if (link) {
    link.setAttribute('aria-current', 'page');
  }
}

const currentList = getListFromUrl();
renderList(currentList);
markActiveNav(currentList.id);