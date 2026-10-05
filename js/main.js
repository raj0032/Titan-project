/* Titan — main.js */

const PRODUCTS = [
  { id: "rolex-gmt-master", brand: "Rolex", name: "GMT-Master II", ref: "126710BLRO", price: 1618500, category: "luxury", maison: "Rolex", movement: "Automatic", complication: "GMT", condition: "Pre Owned", gender: "Men", image: "images/rolex-gmt-master.jpg" },
  { id: "omega-seamaster", brand: "Omega", name: "Seamaster Diver 300M", ref: "210.30.42.20.01.001", price: 431600, category: "luxury", maison: "Omega", movement: "Automatic", complication: "Diver", condition: "Pre Owned", gender: "Men", image: "images/omega-seamaster.jpg" },
  { id: "omega-speedmaster", brand: "Omega", name: "Speedmaster Professional Moonwatch", ref: "310.30.42.50.01.001", price: 556100, category: "luxury", maison: "Omega", movement: "Manual", complication: "Chronograph", condition: "Pre Owned", gender: "Men", image: "images/omega-speedmaster.jpg" },
  { id: "rolex-datejust", brand: "Rolex", name: "Datejust", ref: "126234", price: 813400, category: "luxury", maison: "Rolex", movement: "Automatic", complication: "Date", condition: "Pre Owned", gender: "Men", image: "images/rolex-datejust.jpg" },
  { id: "patek-nautilus", brand: "Patek Philippe", name: "Nautilus", ref: "5711/1A-014", price: 11205000, category: "luxury", maison: "Patek Philippe", movement: "Automatic", complication: "Date", condition: "Pre Owned", gender: "Men", image: "images/patek-nautilus.jpg" },
  { id: "patek-philippe-geneva", brand: "Patek Philippe", name: "Calatrava", ref: "5196P-001", price: 3486000, category: "luxury", maison: "Patek Philippe", movement: "Manual", complication: "Date", condition: "Pre Owned", gender: "Men", image: "images/patek-philippe-geneva.jpg" },
  { id: "breitling-navitimer", brand: "Breitling", name: "Navitimer", ref: "AB0138211B1A1", price: 747000, category: "luxury", maison: "Breitling", movement: "Automatic", complication: "Chronograph", condition: "Pre Owned", gender: "Men", image: "images/breitling-navitimer.jpg" },
  { id: "ap-royal-oak", brand: "Audemars Piguet", name: "Royal Oak", ref: "15500ST.OO.1220ST.01", price: 4025500, category: "luxury", maison: "Audemars Piguet", movement: "Automatic", complication: "Date", condition: "Pre Owned", gender: "Men", image: "images/ap-royal-oak.jpg" },
  { id: "iwc-portugieser", brand: "IWC", name: "Portugieser Chronograph", ref: "IW371605", price: 746950, category: "luxury", maison: "IWC", movement: "Automatic", complication: "Chronograph", condition: "Pre Owned", gender: "Men", image: "images/iwc-portugieser.jpg" },
  { id: "cartier-santos", brand: "Cartier", name: "Santos de Cartier", ref: "WSSA0029", price: 622500, category: "luxury", maison: "Cartier", movement: "Automatic", complication: "Date", condition: "Pre Owned", gender: "Men", image: "images/cartier-santos.jpg" },
  { id: "seiko-5-sports", brand: "Seiko", name: "5 Sports", ref: "SRPD55K1", price: 26560, category: "mid", maison: "Seiko", movement: "Automatic", complication: "Date", condition: "New", gender: "Men", image: "images/seiko-5-sports-srpd55k1.jpg" },
  { id: "seiko-presage", brand: "Seiko", name: "Presage Cocktail Time", ref: "SRPB43J1", price: 39840, category: "mid", maison: "Seiko", movement: "Automatic", complication: "Date", condition: "New", gender: "Men", image: "images/seiko-presage-cocktail-time-srpb43j1.jpg" },
  { id: "tissot-prx", brand: "Tissot", name: "PRX Quartz", ref: "T137.410.11.041.00", price: 31125, category: "mid", maison: "Tissot", movement: "Quartz", complication: "Date", condition: "New", gender: "Men", image: "images/tissot-prx-quartz.jpg" },
  { id: "tissot-gentleman", brand: "Tissot", name: "Gentleman Quartz", ref: "T127.410.16.041.01", price: 32785, category: "mid", maison: "Tissot", movement: "Quartz", complication: "Date", condition: "New", gender: "Men", image: "images/tissot-gentleman-quartz.jpg" },
  { id: "fossil-grant", brand: "Fossil", name: "Grant Chronograph", ref: "FS4735", price: 13695, category: "mid", maison: "Fossil", movement: "Quartz", complication: "Chronograph", condition: "New", gender: "Men", image: "images/fossil-grant-chronograph.jpg" },
  { id: "citizen-tsuyosa", brand: "Citizen", name: "Tsuyosa", ref: "NJ0150-81A", price: 29050, category: "mid", maison: "Citizen", movement: "Automatic", complication: "Date", condition: "New", gender: "Men", image: "images/citizen-tsuyosa-nj0150.jpg" },
  { id: "casio-edifice", brand: "Casio", name: "Edifice", ref: "ECB-2000", price: 23240, category: "mid", maison: "Casio", movement: "Quartz", complication: "Chronograph", condition: "New", gender: "Men", image: "images/casio-edifice-ecb-2000.jpg" },
  { id: "titan-maritime", brand: "Titan", name: "Maritime Automatic", ref: "90140WL01", price: 18260, category: "mid", maison: "Titan", movement: "Automatic", complication: "Date", condition: "New", gender: "Men", image: "images/titan-maritime-automatic-blue.jpg" },
  { id: "titan-stellar", brand: "Titan", name: "Stellar Automatic Skeleton", ref: "90140SL01", price: 24485, category: "mid", maison: "Titan", movement: "Automatic", complication: "Date", condition: "New", gender: "Men", image: "images/titan-stellar-automatic-skeleton.jpg" },
  { id: "titan-raga", brand: "Titan", name: "Raga Viva Diamond", ref: "2608QM01", price: 15355, category: "mid", maison: "Titan", movement: "Quartz", complication: "Date", condition: "New", gender: "Women", image: "images/titan-raga-viva-diamond.jpg" },
  { id: "mk-parker", brand: "Michael Kors", name: "Parker Crystal Rose Gold", ref: "MK5896", price: 17430, category: "mid", maison: "Michael Kors", movement: "Quartz", complication: "Chronograph", condition: "New", gender: "Women", image: "images/mk-parker-crystal-rose-gold.jpg" }
];

function formatINR(n) {
  return "₹" + n.toLocaleString("en-IN");
}

function getCart() {
  try { return JSON.parse(localStorage.getItem("titan_cart") || "[]"); }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem("titan_cart", JSON.stringify(cart));
  updateCartCount();
}
function getWishlist() {
  try { return JSON.parse(localStorage.getItem("titan_wishlist") || "[]"); }
  catch { return []; }
}
function saveWishlist(list) {
  localStorage.setItem("titan_wishlist", JSON.stringify(list));
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) existing.qty = (existing.qty || 1) + 1;
  else cart.push({ ...product, qty: 1 });
  saveCart(cart);
  showToast(product);
}

function removeFromCart(productId) {
  saveCart(getCart().filter(i => i.id !== productId));
  if (typeof renderCart === "function") renderCart();
}

function updateCartCount() {
  const count = getCart().reduce((s, i) => s + (i.qty || 1), 0);
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = count > 0 ? count : "";
  });
}

function showToast(product) {
  let toast = document.getElementById("cart-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cart-toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<strong>Added to bag</strong>${product.brand} ${product.name}<br>Ref. ${product.ref} · ${formatINR(product.price)}<div style="margin-top:0.6rem"><a href="cart.html" style="color:#fff;border-bottom:1px solid rgba(255,255,255,0.4);font-size:12px">View Bag →</a></div>`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

function toggleWishlist(productId) {
  let list = getWishlist();
  if (list.includes(productId)) list = list.filter(id => id !== productId);
  else list.push(productId);
  saveWishlist(list);
  return list.includes(productId);
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

function productCardHTML(p) {
  const inWish = isInWishlist(p.id);
  return `<article class="product-card" data-id="${p.id}" data-maison="${p.maison}" data-movement="${p.movement}" data-complication="${p.complication}" data-condition="${p.condition}" data-gender="${p.gender}">
      <a class="product-card-link" href="product.html?id=${p.id}">
        <div class="img-wrap">
          <img src="${p.image}" alt="${p.brand} ${p.name}" width="400" height="400">
          <button type="button" class="wishlist-btn" aria-label="Save" onclick="event.preventDefault(); event.stopPropagation(); handleWishlist('${p.id}', this)">${inWish ? "♥" : "♡"}</button>
        </div>
        <div class="brand">${p.brand}</div>
        <div class="name">${p.name}</div>
        <div class="ref">${p.ref}</div>
        <div class="price">${formatINR(p.price)}</div>
      </a>
    </article>`;
}

function handleWishlist(id, btn) {
  btn.textContent = toggleWishlist(id) ? "♥" : "♡";
}


function updateBrandCounts() {
  const counts = {};
  PRODUCTS.forEach(p => { counts[p.maison] = (counts[p.maison] || 0) + 1; });
  document.querySelectorAll("[data-filter=maison]").forEach(cb => {
    const label = cb.closest("label");
    if (!label) return;
    let badge = label.querySelector(".count");
    const n = counts[cb.value] || 0;
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "count";
      badge.style.cssText = "margin-left:auto;opacity:0.5;font-size:11px";
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.appendChild(badge);
    }
    badge.textContent = n;
  });
}

function initCollectionFilters() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  document.querySelectorAll(".filters input[type=checkbox]").forEach(cb => cb.addEventListener("change", applyFilters));
  ["price-min","price-max","search-input","sort-select"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(id.includes("sort") ? "change" : "input", applyFilters);
  });

  updateBrandCounts();

  // Apply maison from ?maison= (House of houses Explore)
  const urlMaison = new URLSearchParams(window.location.search).get("maison");
  if (urlMaison) {
    const cb = document.querySelector(`[data-filter=maison][value="${urlMaison}"]`);
    if (cb) cb.checked = true;
  }

  // Single render path — same as search/filter
  applyFilters();
}

function applyFilters() {
  const getChecked = f => [...document.querySelectorAll(`[data-filter=${f}]:checked`)].map(c => c.value);
  const maisons = getChecked("maison"), movements = getChecked("movement"), complications = getChecked("complication");
  const conditions = getChecked("condition"), genders = getChecked("gender");
  const minPrice = parseFloat(document.getElementById("price-min")?.value) || 0;
  const maxPrice = parseFloat(document.getElementById("price-max")?.value) || Infinity;
  const query = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  const sortVal = document.getElementById("sort-select")?.value || "featured";

  let filtered = PRODUCTS.filter(p => {
    if (maisons.length && !maisons.includes(p.maison)) return false;
    if (movements.length && !movements.includes(p.movement)) return false;
    if (complications.length && !complications.includes(p.complication)) return false;
    if (conditions.length && !conditions.includes(p.condition)) return false;
    if (genders.length && !genders.includes(p.gender)) return false;
    if (p.price < minPrice || p.price > maxPrice) return false;
    if (query && !(`${p.brand} ${p.name} ${p.ref}`.toLowerCase().includes(query))) return false;
    return true;
  });
  if (sortVal === "price-asc") filtered.sort((a,b) => a.price - b.price);
  else if (sortVal === "price-desc") filtered.sort((a,b) => b.price - a.price);
  else if (sortVal === "newest") filtered = filtered.slice().reverse();

  const grid = document.getElementById("product-grid");
  if (grid) grid.innerHTML = filtered.length ? filtered.map(productCardHTML).join("") : `<p style="grid-column:1/-1;color:var(--muted);padding:2rem 0">No pieces match your filters.</p>`;
  updatePieceCount(filtered.length);
}

function updatePieceCount(n) {
  const el = document.getElementById("piece-count");
  if (el) el.textContent = `${n} piece${n !== 1 ? "s" : ""}`;
}

function clearAllFilters() {
  document.querySelectorAll(".filters input[type=checkbox]").forEach(c => c.checked = false);
  ["price-min","price-max","search-input"].forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
  applyFilters();
}

function initProductPage() {
  // Only on product detail page — never touch collection/home cards
  const img = document.getElementById("product-image");
  if (!img) return;

  const params = new URLSearchParams(window.location.search);
  const product = PRODUCTS.find(p => p.id === params.get("id")) || PRODUCTS[0];
  img.src = product.image;
  img.alt = `${product.brand} ${product.name}`;
  img.onerror = function(){ this.style.opacity="0.4"; };

  const set = (sel, val) => {
    const el = document.querySelector(".product-detail " + sel) || document.querySelector(sel);
    // Never overwrite product-card elements
    if (el && !el.closest(".product-card")) el.textContent = val;
  };
  set("[data-brand]", product.brand);
  set("[data-name]", product.name);
  set("[data-ref]", `Ref. ${product.ref}`);
  set("[data-price]", formatINR(product.price));
  const specs = { Reference: product.ref, Year: "2022", "Case size": "41 mm", "Case material": "Stainless steel", Dial: "Black", Movement: product.movement, Complications: product.complication, Condition: product.condition, "Box & Papers": "Both", Gender: product.gender };
  const tbody = document.getElementById("specs-body");
  if (tbody) tbody.innerHTML = Object.entries(specs).map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");
  const addBtn = document.getElementById("add-to-cart");
  if (addBtn) addBtn.onclick = () => addToCart(product.id);
  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.textContent = isInWishlist(product.id) ? "♥ Saved" : "♡ Save";
    saveBtn.onclick = () => { saveBtn.textContent = toggleWishlist(product.id) ? "♥ Saved" : "♡ Save"; };
  }
  const pcLink = document.getElementById("private-client-link");
  if (pcLink) pcLink.href = `private-client.html?id=${product.id}`;
  const requestLink = document.getElementById("request-link");
  if (requestLink) requestLink.href = `private-client.html?id=${product.id}`;
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const summary = document.getElementById("order-summary");
  if (!container) return;
  if (cart.length === 0) {
    container.innerHTML = `<p style="color:var(--muted);padding:2rem 0">Your bag is empty. <a href="collections.html" style="border-bottom:1px solid">Browse the collection</a></p>`;
    if (summary) summary.style.display = "none";
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.style.opacity='0.3'; this.style.background='#111'">
      <div class="cart-item-info">
        <div class="brand">${item.brand}</div>
        <div class="name">${item.name}</div>
        <div class="ref">${item.ref}</div>
        <button type="button" class="remove" onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
      <div class="cart-item-price">${formatINR(item.price)}</div>
    </div>`).join("");
  const subtotal = cart.reduce((s,i) => s + i.price * (i.qty||1), 0);
  const insurance = Math.round(subtotal * 0.005);
  const total = subtotal + insurance;
  if (summary) {
    summary.style.display = "block";
    summary.innerHTML = `
      <h3>Order Summary</h3>
      <div class="summary-row"><span>Subtotal</span><span>${formatINR(subtotal)}</span></div>
      <div class="summary-row"><span>Shipping insurance</span><span>${formatINR(insurance)}</span></div>
      <div class="summary-row total"><span>Total</span><span>${formatINR(total)}</span></div>
      <p class="summary-note">Any customs or import duties are the buyer's responsibility, quoted separately by our private client team post-order.</p>
      <div class="payment-block">
        <div class="payment-label">Payment method</div>
        <label class="pay-option"><input type="radio" name="pay" checked> Card (Stripe · 3DS)</label>
        <label class="pay-option"><input type="radio" name="pay"> Bank wire (high-ticket · recommended)</label>
      </div>
      <button class="btn btn-dark" style="width:100%;margin-top:1rem" onclick="alert('Order placed (demo). Our private client team will contact you.')">Complete Order</button>
      <p style="font-size:12px;color:var(--muted);margin-top:0.75rem;text-align:center">Guest checkout · Sign in for order history</p>`;
  }
}

function renderWishlist() {
  const list = getWishlist();
  const container = document.getElementById("wishlist-grid");
  if (!container) return;
  if (list.length === 0) {
    container.innerHTML = `<div class="wishlist-empty" style="grid-column:1/-1"><p>You have not saved any pieces.</p><a href="collections.html" class="btn btn-ghost" style="margin-top:1.25rem">Browse the collection</a></div>`;
    return;
  }
  container.innerHTML = PRODUCTS.filter(p => list.includes(p.id)).map(p => `
    <article class="product-card">
      <a href="product.html?id=${p.id}">
        <div class="img-wrap"><img src="${p.image}" alt="${p.brand} ${p.name}" onerror="this.style.opacity='0.4'"></div>
        <div class="brand">${p.brand}</div>
        <div class="name">${p.name}</div>
        <div class="ref">${p.ref}</div>
        <div class="price">${formatINR(p.price)}</div>
      </a>
      <button class="btn btn-ghost" style="width:100%;margin-top:0.75rem;font-size:11px" onclick="toggleWishlist('${p.id}'); renderWishlist()">Remove</button>
    </article>`).join("");
}

function initPrivateClient() {
  const params = new URLSearchParams(window.location.search);
  const product = PRODUCTS.find(p => p.id === params.get("id"));
  const selectedWrap = document.getElementById("selected-watch");
  const selectedImg = document.getElementById("selected-watch-img");
  const selectedMeta = document.getElementById("selected-watch-meta");
  if (product && selectedWrap && selectedImg && selectedMeta) {
    selectedWrap.style.display = "block";
    selectedImg.src = product.image;
    selectedImg.alt = `${product.brand} ${product.name}`;
    selectedImg.onerror = function(){ this.style.opacity="0.35"; };
    selectedMeta.innerHTML = `
      <div style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;opacity:0.65;margin-bottom:0.35rem">${product.brand}</div>
      <div style="font-family:var(--font-serif);font-size:1.35rem;margin-bottom:0.25rem">${product.name}</div>
      <div style="font-size:13px;opacity:0.75">${product.ref}</div>
      <div style="font-size:16px;margin-top:0.5rem;font-weight:500">${formatINR(product.price)}</div>`;
  }
  const regarding = document.getElementById("regarding");
  if (regarding && product) regarding.value = `Regarding · ${product.brand} ${product.name} · ${product.ref}`;
  const form = document.getElementById("private-client-form");
  if (form) form.addEventListener("submit", e => { e.preventDefault(); alert("Inquiry sent. A specialist will respond within one business day."); form.reset(); });
  document.querySelectorAll(".request-type button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".request-type button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  grid.innerHTML = PRODUCTS.filter(p => p.category === "luxury").slice(0, 8).map(productCardHTML).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderFeatured();
  initCollectionFilters();
  initProductPage();
  renderCart();
  renderWishlist();
  initPrivateClient();
});

/* ============================================
   jQuery + Bootstrap usage
   ============================================ */

$(document).ready(function () {
  // Smooth fade-in for product cards
  $(".product-card").hide().fadeIn(600);

  // Bootstrap tooltips for icon buttons
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
  tooltipTriggerList.forEach(function (el) {
    if (typeof bootstrap !== "undefined") {
      new bootstrap.Tooltip(el);
    }
  });

  // jQuery: highlight active nav link
  var path = window.location.pathname.split("/").pop() || "index.html";
  $(".lux-nav-left a").each(function () {
    var href = $(this).attr("href");
    if (href === path) {
      $(this).addClass("active").css("font-weight", "600");
    }
  });

  // jQuery: soft scroll for internal links
  $('a[href^="#"]').on("click", function (e) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: target.offset().top - 80 }, 500);
    }
  });

  // jQuery: button press feedback
  $(".btn, .icon-btn").on("mousedown", function () {
    $(this).css("transform", "scale(0.97)");
  }).on("mouseup mouseleave", function () {
    $(this).css("transform", "");
  });
});
