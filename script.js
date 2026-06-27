const categories = [
  { name: 'All Fish', image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=500&q=80' },
  { name: 'Freshwater', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=500&q=80' },
  { name: 'Sea Fish', image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?auto=format&fit=crop&w=500&q=80' },
  { name: 'Premium', image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=500&q=80' },
  { name: 'Small Fish', image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?auto=format&fit=crop&w=500&q=80' },
  { name: 'Boneless', image: 'https://images.unsplash.com/photo-1601314002592-b8734bca6604?auto=format&fit=crop&w=500&q=80' }
];

const fishImage = 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=700&q=80';
const products = [
  { id: 1, name: 'Rohu Fish Curry Cut', category: 'Freshwater', type: 'Curry Cut', weight: '500 g', pieces: '8-10 pieces', price: 259, mrp: 299, delivery: 'Today', tag: 'Top buy', bestseller: true, image: fishImage },
  { id: 2, name: 'Catla / Katla Fish Steaks', category: 'Freshwater', type: 'Steaks', weight: '500 g', pieces: '6-8 steaks', price: 279, mrp: 329, delivery: 'Today', tag: 'Popular', bestseller: true, image: fishImage },
  { id: 3, name: 'Hilsa / Ilish Fish Steaks', category: 'Premium', type: 'Steaks', weight: '450 g', pieces: '4-6 steaks', price: 1199, mrp: 1399, delivery: 'Tomorrow', tag: 'Premium', bestseller: true, image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=700&q=80' },
  { id: 4, name: 'Seer Fish / Vanjaram Steaks', category: 'Premium', type: 'Steaks', weight: '500 g', pieces: '5-7 steaks', price: 999, mrp: 1199, delivery: 'Today', tag: 'Bestseller', bestseller: true, image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=700&q=80' },
  { id: 5, name: 'Black Pomfret Whole Cleaned', category: 'Sea Fish', type: 'Whole Cleaned', weight: '500 g', pieces: '1-2 fish', price: 749, mrp: 849, delivery: 'Today', tag: 'Cleaned', bestseller: true, image: fishImage },
  { id: 6, name: 'White Pomfret Whole Cleaned', category: 'Premium', type: 'Whole Cleaned', weight: '450 g', pieces: '1-2 fish', price: 1299, mrp: 1499, delivery: 'Tomorrow', tag: 'Premium', bestseller: true, image: fishImage },
  { id: 7, name: 'Indian Salmon / Rawas Fillet', category: 'Premium', type: 'Boneless', weight: '300 g', pieces: '2 fillets', price: 899, mrp: 999, delivery: 'Today', tag: 'Boneless', bestseller: true, image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=700&q=80' },
  { id: 8, name: 'Bhetki / Barramundi Fillet', category: 'Boneless', type: 'Boneless', weight: '300 g', pieces: '2-3 fillets', price: 549, mrp: 649, delivery: 'Today', tag: 'Boneless', bestseller: true, image: 'https://images.unsplash.com/photo-1601314002592-b8734bca6604?auto=format&fit=crop&w=700&q=80' },
  { id: 9, name: 'Indian Mackerel / Bangda', category: 'Sea Fish', type: 'Whole Cleaned', weight: '500 g', pieces: '4-6 fish', price: 299, mrp: 349, delivery: 'Today', tag: 'Daily', bestseller: true, image: fishImage },
  { id: 10, name: 'Sardine / Mathi Whole Cleaned', category: 'Small Fish', type: 'Whole Cleaned', weight: '500 g', pieces: '10-14 fish', price: 219, mrp: 259, delivery: 'Today', tag: 'Value', bestseller: true, image: fishImage },
  { id: 11, name: 'Anchovy / Nethili Cleaned', category: 'Small Fish', type: 'Whole Cleaned', weight: '250 g', pieces: 'Small fish pack', price: 179, mrp: 219, delivery: 'Today', tag: 'Small fish', bestseller: false, image: fishImage },
  { id: 12, name: 'Bombay Duck / Bombil Cleaned', category: 'Sea Fish', type: 'Whole Cleaned', weight: '500 g', pieces: '6-10 fish', price: 329, mrp: 389, delivery: 'Tomorrow', tag: 'Coastal', bestseller: false, image: fishImage },
  { id: 13, name: 'Pabda Fish Whole Cleaned', category: 'Freshwater', type: 'Whole Cleaned', weight: '500 g', pieces: '4-6 fish', price: 499, mrp: 579, delivery: 'Tomorrow', tag: 'Bengal pick', bestseller: false, image: fishImage },
  { id: 14, name: 'Tilapia Fish Curry Cut', category: 'Freshwater', type: 'Curry Cut', weight: '500 g', pieces: '8-10 pieces', price: 239, mrp: 289, delivery: 'Today', tag: 'Budget', bestseller: false, image: fishImage },
  { id: 15, name: 'Basa Fish Fillet', category: 'Boneless', type: 'Boneless', weight: '400 g', pieces: '2-3 fillets', price: 349, mrp: 429, delivery: 'Today', tag: 'Easy cook', bestseller: false, image: 'https://images.unsplash.com/photo-1601314002592-b8734bca6604?auto=format&fit=crop&w=700&q=80' },
  { id: 16, name: 'Tuna Fish Steaks', category: 'Sea Fish', type: 'Steaks', weight: '500 g', pieces: '4-6 steaks', price: 599, mrp: 699, delivery: 'Tomorrow', tag: 'Protein', bestseller: false, image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=700&q=80' },
  { id: 17, name: 'Red Snapper Curry Cut', category: 'Sea Fish', type: 'Curry Cut', weight: '500 g', pieces: '8-10 pieces', price: 649, mrp: 749, delivery: 'Tomorrow', tag: 'Coastal', bestseller: false, image: fishImage },
  { id: 18, name: 'Koramenu / Snakehead Curry Cut', category: 'Freshwater', type: 'Curry Cut', weight: '500 g', pieces: '8-10 pieces', price: 679, mrp: 779, delivery: 'Today', tag: 'Regional', bestseller: false, image: fishImage },
  { id: 19, name: 'Pearl Spot / Karimeen Cleaned', category: 'Premium', type: 'Whole Cleaned', weight: '500 g', pieces: '2-4 fish', price: 799, mrp: 899, delivery: 'Tomorrow', tag: 'Kerala pick', bestseller: false, image: fishImage },
  { id: 20, name: 'Mrigal Fish Curry Cut', category: 'Freshwater', type: 'Curry Cut', weight: '500 g', pieces: '8-10 pieces', price: 249, mrp: 299, delivery: 'Today', tag: 'Freshwater', bestseller: false, image: fishImage }
];

const state = { category: 'All Fish', sort: 'popular', search: '', types: new Set(), delivery: 'all', maxPrice: 2499, cart: new Map() };
const categoryRow = document.querySelector('#categoryRow');
const productGrid = document.querySelector('#productGrid');
const resultSummary = document.querySelector('#resultSummary');
const emptyState = document.querySelector('#emptyState');
const priceRange = document.querySelector('#priceRange');
const priceValue = document.querySelector('#priceValue');
const cartPanel = document.querySelector('#cartPanel');
const scrim = document.querySelector('#scrim');
const cartItems = document.querySelector('#cartItems');
const cartCount = document.querySelector('#cartCount');
const subtotal = document.querySelector('#subtotal');
const total = document.querySelector('#total');
const discountModal = document.querySelector('#discountModal');

function formatPrice(value) { return 'Rs ' + value.toLocaleString('en-IN'); }
function showDiscount() { discountModal.classList.add('open'); scrim.classList.add('show'); }
function hideDiscount() { discountModal.classList.remove('open'); if (!cartPanel.classList.contains('open')) scrim.classList.remove('show'); }
function openCart() { cartPanel.classList.add('open'); scrim.classList.add('show'); }
function closeCart() { cartPanel.classList.remove('open'); if (!discountModal.classList.contains('open')) scrim.classList.remove('show'); }

function renderCategories() {
  categoryRow.innerHTML = '';
  categories.forEach(function(category) {
    const button = document.createElement('button');
    button.className = 'category-tile' + (category.name === state.category ? ' active' : '');
    button.dataset.category = category.name;
    button.innerHTML = '<img src="' + category.image + '" alt="" /><strong>' + category.name + '</strong>';
    categoryRow.append(button);
  });
}

function getFilteredProducts() {
  let list = products.filter(function(product) {
    const matchesCategory = state.category === 'All Fish' || product.category === state.category;
    const matchesSearch = product.name.toLowerCase().includes(state.search.toLowerCase());
    const matchesType = state.types.size === 0 || state.types.has(product.type);
    const matchesDelivery = state.delivery === 'all' || product.delivery === state.delivery;
    const matchesPrice = product.price <= state.maxPrice;
    return matchesCategory && matchesSearch && matchesType && matchesDelivery && matchesPrice;
  });
  if (state.sort === 'priceLow') list = list.slice().sort(function(a, b) { return a.price - b.price; });
  if (state.sort === 'fast') list = list.slice().sort(function(a, b) { return a.delivery.localeCompare(b.delivery); });
  if (state.sort === 'popular') list = list.slice().sort(function(a, b) { return Number(b.bestseller) - Number(a.bestseller); });
  return list;
}

function renderProducts() {
  const list = getFilteredProducts();
  productGrid.innerHTML = '';
  emptyState.style.display = list.length ? 'none' : 'block';
  resultSummary.textContent = list.length + ' fish item' + (list.length === 1 ? '' : 's') + ' ready for your basket.';
  list.forEach(function(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = '<div class="product-image"><img src="' + product.image + '" alt="' + product.name + '" /><span class="badge">' + product.tag + '</span></div><div class="product-body"><span class="product-meta">' + product.category + ' - ' + product.type + '</span><h3>' + product.name + '</h3><div class="product-details"><span>' + product.weight + '</span><span>' + product.pieces + '</span></div><div class="price-line"><div><strong>' + formatPrice(product.price) + '</strong><span class="price-note">' + formatPrice(product.mrp) + '</span></div><button class="add-button" data-add="' + product.id + '">Add</button></div></div>';
    productGrid.append(card);
  });
}

function renderCart() {
  cartItems.innerHTML = '';
  const lines = Array.from(state.cart.entries()).map(function(entry) { return { product: products.find(function(item) { return item.id === entry[0]; }), qty: entry[1] }; });
  if (!lines.length) cartItems.innerHTML = '<p class="empty-state" style="display:block">Your fish basket is empty.</p>';
  lines.forEach(function(lineItem) {
    const product = lineItem.product;
    const line = document.createElement('div');
    line.className = 'cart-line';
    line.innerHTML = '<img src="' + product.image + '" alt="" /><div><h3>' + product.name + '</h3><span>' + formatPrice(product.price) + ' - ' + product.weight + '</span></div><div class="stepper"><button data-decrease="' + product.id + '" aria-label="Decrease item">-</button><span>' + lineItem.qty + '</span><button data-increase="' + product.id + '" aria-label="Increase item">+</button></div>';
    cartItems.append(line);
  });
  const itemCount = lines.reduce(function(sum, line) { return sum + line.qty; }, 0);
  const subtotalValue = lines.reduce(function(sum, line) { return sum + line.product.price * line.qty; }, 0);
  cartCount.textContent = itemCount;
  subtotal.textContent = formatPrice(subtotalValue);
  total.textContent = formatPrice(subtotalValue ? subtotalValue + 29 : 0);
}

document.addEventListener('click', function(event) {
  const categoryButton = event.target.closest('[data-category]');
  const addButton = event.target.closest('[data-add]');
  const decreaseButton = event.target.closest('[data-decrease]');
  const increaseButton = event.target.closest('[data-increase]');
  const sortButton = event.target.closest('[data-sort]');
  const promoFilter = event.target.closest('[data-filter="bestseller"]');
  if (categoryButton) { state.category = categoryButton.dataset.category; renderCategories(); renderProducts(); }
  if (addButton) { const id = Number(addButton.dataset.add); state.cart.set(id, (state.cart.get(id) || 0) + 1); renderCart(); openCart(); }
  if (decreaseButton) { const id = Number(decreaseButton.dataset.decrease); const nextQty = (state.cart.get(id) || 0) - 1; if (nextQty <= 0) state.cart.delete(id); else state.cart.set(id, nextQty); renderCart(); }
  if (increaseButton) { const id = Number(increaseButton.dataset.increase); state.cart.set(id, (state.cart.get(id) || 0) + 1); renderCart(); }
  if (sortButton) { state.sort = sortButton.dataset.sort; document.querySelectorAll('.tab').forEach(function(button) { button.classList.toggle('active', button === sortButton); }); renderProducts(); }
  if (promoFilter) showDiscount();
});

document.querySelector('#searchInput').addEventListener('input', function(event) { state.search = event.target.value; renderProducts(); });
document.querySelectorAll('.type-filter').forEach(function(checkbox) { checkbox.addEventListener('change', function() { if (checkbox.checked) state.types.add(checkbox.value); else state.types.delete(checkbox.value); renderProducts(); }); });
document.querySelectorAll('input[name="delivery"]').forEach(function(radio) { radio.addEventListener('change', function() { state.delivery = radio.value; renderProducts(); }); });
priceRange.addEventListener('input', function() { state.maxPrice = Number(priceRange.value); priceValue.textContent = formatPrice(state.maxPrice); renderProducts(); });
document.querySelector('#resetFilters').addEventListener('click', function() { state.types.clear(); state.delivery = 'all'; state.maxPrice = 2499; document.querySelectorAll('.type-filter').forEach(function(checkbox) { checkbox.checked = false; }); document.querySelector('input[name="delivery"][value="all"]').checked = true; priceRange.value = 2499; priceValue.textContent = formatPrice(2499); renderProducts(); });
document.querySelector('#cartToggle').addEventListener('click', openCart);
document.querySelector('#closeCart').addEventListener('click', closeCart);
document.querySelector('#offerLogo').addEventListener('click', showDiscount);
document.querySelector('#discountClose').addEventListener('click', hideDiscount);
scrim.addEventListener('click', function() { closeCart(); hideDiscount(); });

renderCategories();
renderProducts();
renderCart();