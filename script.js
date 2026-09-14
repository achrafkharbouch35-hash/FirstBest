/* =====================================================
   FirstBest — ORANGE EDITION
   ===================================================== */


/* =====================================================
   CONFIGURATION
   ===================================================== */

/*
   IMPORTANT :

   Remplace ce numéro par le vrai WhatsApp du vendeur.

   Exemple Maroc :

   0612345678

   devient :

   212612345678
*/

const WHATSAPP_NUMBER = "212723354542";
const INSTAGRAM_URL = "https://www.instagram.com/best2720f/";

/* =====================================================
   PRODUCTS
   ===================================================== */

const products = [

  {
    id: 1,
    name: "iPhone 16 Pro",
    brand: "Apple",
    category: "Smartphones",
    price: 12990,
    oldPrice: 13990,
    badge: "NEW",
    newest: true,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85",
    description:
      "Un smartphone premium avec performances exceptionnelles, caméra avancée et design élégant."
  },

  {
    id: 2,
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Smartphones",
    price: 11990,
    oldPrice: 12990,
    badge: "-8%",
    newest: true,
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=85",
    description:
      "Puissance, photographie et écran premium dans un smartphone conçu pour les utilisateurs exigeants."
  },

  {
    id: 3,
    name: "MacBook Pro",
    brand: "Apple",
    category: "PC Portables",
    price: 18990,
    oldPrice: 19990,
    badge: "PRO",
    newest: true,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
    description:
      "Un ordinateur portable puissant pour la création, le développement et la productivité."
  },

  {
    id: 4,
    name: "ASUS ROG Gaming",
    brand: "ASUS",
    category: "Gaming",
    price: 14990,
    oldPrice: 16990,
    badge: "-12%",
    newest: false,
    image:
      "https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?auto=format&fit=crop&w=900&q=85",
    description:
      "Laptop gaming performant avec puissance graphique et écran immersif."
  },

  {
    id: 5,
    name: "iPad Pro",
    brand: "Apple",
    category: "Tablettes",
    price: 9990,
    oldPrice: 10990,
    badge: "HOT",
    newest: true,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85",
    description:
      "Une tablette premium parfaite pour le travail, les études et la création."
  },

  {
    id: 6,
    name: "AirPods Pro",
    brand: "Apple",
    category: "Audio",
    price: 2490,
    oldPrice: 2790,
    badge: "-10%",
    newest: false,
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85",
    description:
      "Écouteurs sans fil avec réduction de bruit et expérience audio immersive."
  },

  {
    id: 7,
    name: "Sony Headphones",
    brand: "Sony",
    category: "Audio",
    price: 3290,
    oldPrice: 3790,
    badge: "SALE",
    newest: false,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    description:
      "Casque audio confortable avec qualité sonore premium."
  },

  {
    id: 8,
    name: "Xiaomi Pad",
    brand: "Xiaomi",
    category: "Tablettes",
    price: 3990,
    oldPrice: 4490,
    badge: "BEST",
    newest: false,
    image:
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=900&q=85",
    description:
      "Tablette moderne offrant un excellent équilibre entre performances et prix."
  },

  {
    id: 9,
    name: "Lenovo ThinkPad",
    brand: "Lenovo",
    category: "PC Portables",
    price: 7990,
    oldPrice: 8990,
    badge: "-11%",
    newest: false,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    description:
      "Ordinateur professionnel fiable pour le travail et les études."
  },

  {
    id: 10,
    name: "Mechanical Keyboard",
    brand: "Logitech",
    category: "Accessoires",
    price: 990,
    oldPrice: 1190,
    badge: "NEW",
    newest: true,
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    description:
      "Clavier mécanique moderne pour gaming et productivité."
  },

  {
    id: 11,
    name: "Smart Watch",
    brand: "Samsung",
    category: "Accessoires",
    price: 1990,
    oldPrice: 2290,
    badge: "HOT",
    newest: true,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    description:
      "Montre connectée élégante pour suivre votre activité quotidienne."
  },

  {
    id: 12,
    name: "Portable Speaker",
    brand: "JBL",
    category: "Audio",
    price: 1290,
    oldPrice: 1490,
    badge: "-13%",
    newest: false,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    description:
      "Enceinte Bluetooth compacte avec un son puissant."
  },

  {
  id: 13,
  name: "Pack complet vidéosurveillance",
  brand: "Dahua 5MP – Kit complet",
  category: "Packs",
  price: 1290,
  oldPrice: 1490,
  badge: "-13%",
  newest: false,
  image: "pack1.jpg",

  description:description: `📦 PACK COMPLET VIDÉOSURVEILLANCE — DAHUA & WDLINK

Une solution complète de vidéosurveillance professionnelle pour sécuriser votre maison, magasin, bureau, entrepôt ou local professionnel.

📦 CONTENU DU PACK

🎥 CAMÉRAS
• 4 × Caméras Dahua HDCVI 5MP
• Technologie Smart Dual Light
• Surveillance de jour et de nuit

🖥️ ENREGISTREUR
• 1 × Enregistreur vidéo Dahua HDCVI
• Technologie WizSense
• Fonction Two-Way Talk

⚡ ALIMENTATION
• 1 × Alimentation WDLink
• 12V
• 24CH
• Alimentation centralisée pour les caméras

🔌 CÂBLAGE
• 1 × Câble coaxial WDLink RG59 + DC + Jacket
• Longueur : 100 mètres
• 1 × Câble HDMI 2.0
• Compatible 4K

💾 STOCKAGE
• 1 × Disque dur Western Digital
• Capacité : 500GB

🔩 CONNECTIQUE
• Connecteurs BNC
• Connecteurs d'alimentation DC

🏠 IDÉAL POUR
Maison • Magasin • Bureau • Entrepôt • Entreprise

✅ UNE SOLUTION COMPLÈTE
Tout le nécessaire pour réaliser une installation de vidéosurveillance professionnelle.`
  }
];


/* =====================================================
   CATEGORIES
   ===================================================== */

const categories = [

   {
    name: "Écrans & Moniteurs",
    icon: "🖥️",
    description: "Une image claire, des couleurs éclatantes et des performances adaptées à tous vos besoins"
  },
   
  {
    name: "Smartphones",
    icon: "📱",
    description: "Les dernières générations"
  },

  {
    name: "PC Portables",
    icon: "💻",
    description: "Performance & productivité"
  },

  {
    name: "Tablettes",
    icon: "▣",
    description: "Travail & créativité"
  },

  {
    name: "Audio",
    icon: "🎧",
    description: "Un son immersif"
  },

  {
    name: "Packs",
    icon: "📦📹",
    description: "Packs de vidéosurveillance complets, prêts à installer"
  },

    {
    name: "Cameras",
    icon: "📹",
    description: "Protégez vos espaces avec des caméras fiables, performantes et adaptées à tous vos besoins"
  },
   
  {
    name: "Câbles, Accessoires & Électronique",
    icon: "🔌🔋🛠️📡",
    description: "Complétez votre setup"
  },

   {
    name: "Trottinettes",
    icon: "🛴⚡🔋",
    description: "Trottinettes électriques"
  }
];


/* =====================================================
   STATE
   ===================================================== */

let currentCategory = "Tous";

let searchTerm = "";

let cart = JSON.parse(
  localStorage.getItem("firstbest_cart") || "[]"
);

let favorites = JSON.parse(
  localStorage.getItem("firstbesta_favorites") || "[]"
);


/* =====================================================
   DOM
   ===================================================== */

const productsContainer =
  document.getElementById("products");

const filtersContainer =
  document.getElementById("filters");

const catGrid =
  document.getElementById("catGrid");

const empty =
  document.getElementById("empty");

const sort =
  document.getElementById("sort");

const cartDrawer =
  document.getElementById("drawer");

const backdrop =
  document.getElementById("backdrop");

const cartList =
  document.getElementById("cartList");

const cartEmpty =
  document.getElementById("cartEmpty");

const cartBottom =
  document.getElementById("cartBottom");

const cartCount =
  document.getElementById("cartCount");

const favCount =
  document.getElementById("favCount");

const total =
  document.getElementById("total");

const toast =
  document.getElementById("toast");

const modal =
  document.getElementById("modal");

const modalBody =
  document.getElementById("modalBody");


/* =====================================================
   SAVE
   ===================================================== */

function saveData() {

  localStorage.setItem(
    "firstbest_cart",
    JSON.stringify(cart)
  );

  localStorage.setItem(
    "firstbest_favorites",
    JSON.stringify(favorites)
  );

}


/* =====================================================
   FORMAT PRICE
   ===================================================== */

function formatPrice(price) {

  return new Intl.NumberFormat("fr-FR").format(price) + " DH";

}


/* =====================================================
   RENDER CATEGORIES
   ===================================================== */

function renderCategories() {

  catGrid.innerHTML = categories.map(category => `

    <article
      class="category reveal"
      data-category="${category.name}"
    >

      <div class="category-bg"></div>

      <div class="category-icon">
        ${category.icon}
      </div>

      <h3>
        ${category.name}
      </h3>

      <p>
        ${category.description}
      </p>

    </article>

  `).join("");

  document
    .querySelectorAll(".category")
    .forEach(card => {

      card.addEventListener("click", () => {

        currentCategory =
          card.dataset.category;

        document
          .getElementById("shop")
          .scrollIntoView({
            behavior: "smooth"
          });

        renderFilters();

        renderProducts();

      });

    });

}


/* =====================================================
   FILTERS
   ===================================================== */

function renderFilters() {

  const names = [
    "Tous",
    ...categories.map(c => c.name)
  ];

  filtersContainer.innerHTML =
    names.map(name => `

      <button
        class="filter-btn ${
          currentCategory === name
            ? "active"
            : ""
        }"
        data-filter="${name}"
      >
        ${name}
      </button>

    `).join("");

  document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          currentCategory =
            button.dataset.filter;

          renderFilters();
          renderProducts();

        }
      );

    });

}


/* =====================================================
   FILTER PRODUCTS
   ===================================================== */

function getFilteredProducts() {

  let list = [...products];

  if (currentCategory !== "Tous") {

    list = list.filter(
      product =>
        product.category === currentCategory
    );

  }

  if (searchTerm.trim()) {

    const query =
      searchTerm.toLowerCase().trim();

    list = list.filter(product =>

      product.name.toLowerCase().includes(query) ||

      product.brand.toLowerCase().includes(query) ||

      product.category.toLowerCase().includes(query)

    );

  }

  switch (sort.value) {

    case "priceAsc":

      list.sort(
        (a, b) => a.price - b.price
      );

      break;

    case "priceDesc":

      list.sort(
        (a, b) => b.price - a.price
      );

      break;

    case "newest":

      list.sort(
        (a, b) =>
          Number(b.newest) -
          Number(a.newest)
      );

      break;

    default:

      break;

  }

  return list;

}


/* =====================================================
   RENDER PRODUCTS
   ===================================================== */

function renderProducts() {

  const list =
    getFilteredProducts();

  productsContainer.innerHTML = "";

  empty.hidden = list.length !== 0;

  list.forEach(product => {

    const discount =
      product.oldPrice
        ? Math.round(
            (1 - product.price / product.oldPrice) * 100
          )
        : 0;

    const isFavorite =
      favorites.includes(product.id);

    const article =
      document.createElement("article");

    article.className =
      "product reveal";

    article.innerHTML = `

      <div class="product-image">

        ${
          product.badge
            ? `
              <span class="product-badge">
                ${product.badge}
              </span>
            `
            : ""
        }

        <button
          class="heart ${
            isFavorite ? "active" : ""
          }"
          data-favorite="${product.id}"
          aria-label="Ajouter aux favoris"
        >
          ${isFavorite ? "♥" : "♡"}
        </button>

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

      </div>

      <div class="info">

        <div class="brand">
          ${product.brand}
        </div>

        <h3>
          ${product.name}
        </h3>

        <div class="prices">

          <span class="now">
            ${formatPrice(product.price)}
          </span>

          ${
            product.oldPrice
              ? `
                <span class="old">
                  ${formatPrice(product.oldPrice)}
                </span>
              `
              : ""
          }

          ${
            discount > 0
              ? `
                <span class="off">
                  -${discount}%
                </span>
              `
              : ""
          }

        </div>

        <div class="product-actions">

          <button
            class="details"
            data-details="${product.id}"
          >
            Détails
          </button>

          <button
            class="add"
            data-add="${product.id}"
          >
            Ajouter
          </button>

        </div>

      </div>

    `;

    productsContainer.appendChild(article);

  });

  bindProductButtons();

  observeReveal();

}


/* =====================================================
   PRODUCT BUTTONS
   ===================================================== */

function bindProductButtons() {

  document
    .querySelectorAll("[data-add]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(button.dataset.add);

          addToCart(id);

        }
      );

    });


  document
    .querySelectorAll("[data-details]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(button.dataset.details);

          openProductModal(id);

        }
      );

    });


  document
    .querySelectorAll("[data-favorite]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const id =
            Number(button.dataset.favorite);

          toggleFavorite(id);

        }
      );

    });

}


/* =====================================================
   CART
   ===================================================== */

function addToCart(id) {

  const product =
    products.find(
      item => item.id === id
    );

  if (!product) return;

  const existing =
    cart.find(
      item => item.id === id
    );

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      id,
      quantity: 1
    });

  }

  saveData();

  renderCart();

  showToast(
    `${product.name} ajouté au panier ✓`
  );

}


function removeFromCart(id) {

  cart =
    cart.filter(
      item => item.id !== id
    );

  saveData();

  renderCart();

}


function clearCart() {

  cart = [];

  saveData();

  renderCart();

  showToast(
    "Panier vidé"
  );

}


function renderCart() {

  const quantity =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );

  cartCount.textContent =
    quantity;

  if (cart.length === 0) {

    cartList.innerHTML = "";

    cartEmpty.style.display =
      "flex";

    cartBottom.style.display =
      "none";

    total.textContent =
      "0 DH";

    return;

  }

  cartEmpty.style.display =
    "none";

  cartBottom.style.display =
    "block";

  let totalPrice = 0;

  cartList.innerHTML =
    cart.map(item => {

      const product =
        products.find(
          p => p.id === item.id
        );

      if (!product) return "";

      const itemTotal =
        product.price *
        item.quantity;

      totalPrice += itemTotal;

      return `

        <div class="cart-item">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

          <div>

            <h4>
              ${product.name}
            </h4>

            <small>
              Quantité : ${item.quantity}
            </small>

            <div class="cart-item-price">
              ${formatPrice(itemTotal)}
            </div>

          </div>

          <button
            class="cart-remove"
            data-remove="${product.id}"
          >
            ×
          </button>

        </div>

      `;

    }).join("");

  total.textContent =
    formatPrice(totalPrice);

  document
    .querySelectorAll("[data-remove]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          removeFromCart(
            Number(
              button.dataset.remove
            )
          );

        }
      );

    });

}


/* =====================================================
   FAVORITES
   ===================================================== */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        item => item !== id
      );

    showToast(
      "Retiré des favoris"
    );

  } else {

    favorites.push(id);

    showToast(
      "Ajouté aux favoris ♥"
    );

  }

  saveData();

  updateFavoriteCount();

  renderProducts();

}


function updateFavoriteCount() {

  favCount.textContent =
    favorites.length;

}


/* =====================================================
   OPEN CART
   ===================================================== */

function openCart() {

  cartDrawer.classList.add("open");

  backdrop.classList.add("open");

  document.body.classList.add("lock");

}


function closeCart() {

  cartDrawer.classList.remove("open");

  backdrop.classList.remove("open");

  document.body.classList.remove("lock");

}


/* =====================================================
   WHATSAPP
   ===================================================== */

function createWhatsAppMessage() {

  if (cart.length === 0) {

    return "Bonjour FirstBest, je souhaite avoir plus d'informations sur vos produits.";

  }

  let message =
    "Bonjour FirstBest 👋%0A%0A";

  message +=
    "Je souhaite commander les produits suivants :%0A%0A";

  let totalPrice = 0;

  cart.forEach(item => {

    const product =
      products.find(
        p => p.id === item.id
      );

    if (!product) return;

    const subtotal =
      product.price *
      item.quantity;

    totalPrice += subtotal;

    message +=
      `• ${product.name} x${item.quantity} — ${formatPrice(subtotal)}%0A`;

  });

  message +=
    `%0A💰 Total estimé : ${formatPrice(totalPrice)}%0A%0A`;

  message +=
    "Je souhaite confirmer la disponibilité et finaliser la commande avec vous.";

  return message;

}


function openWhatsApp(message) {

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  window.open(
    url,
    "_blank",
    "noopener"
  );

}


/* =====================================================
   PRODUCT MODAL
   ===================================================== */

function openProductModal(id) {

  const product =
    products.find(
      p => p.id === id
    );

  if (!product) return;

  modalBody.innerHTML = `

    <div class="modal-product">

      <div class="modal-product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

      </div>

      <div>

        <div class="kicker">

          <span></span>

          ${product.brand}

        </div>

        <h2>
          ${product.name}
        </h2>

        <div class="modal-price">
          ${formatPrice(product.price)}
        </div>

        <p>
          ${product.description}
        </p>

        <button
          class="btn primary"
          id="modalAdd"
        >
          Ajouter au panier
          ↗
        </button>

      </div>

    </div>

  `;

  modal.classList.add("open");

  document.body.classList.add("lock");

  document
    .getElementById("modalAdd")
    .addEventListener(
      "click",
      () => {

        addToCart(product.id);

        closeModal();

        openCart();

      }
    );

}


function closeModal() {

  modal.classList.remove("open");

  document.body.classList.remove("lock");

}


/* =====================================================
   SEARCH
   ===================================================== */

function openSearch() {

  document
    .getElementById("searchOverlay")
    .classList.add("open");

  document.body.classList.add("lock");

  setTimeout(() => {

    document
      .getElementById("searchInput")
      .focus();

  }, 100);

}


function closeSearch() {

  document
    .getElementById("searchOverlay")
    .classList.remove("open");

  document.body.classList.remove("lock");

}


/* =====================================================
   TOAST
   ===================================================== */

let toastTimeout;

function showToast(message) {

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);

}


/* =====================================================
   COUNTDOWN
   ===================================================== */

function startCountdown() {

  const target =
    new Date();

  target.setDate(
    target.getDate() + 3
  );

  target.setHours(
    23,
    59,
    59,
    0
  );

  function update() {

    const now =
      new Date();

    const difference =
      target - now;

    if (difference <= 0) {

      document.getElementById("dd")
        .textContent = "00";

      document.getElementById("hh")
        .textContent = "00";

      document.getElementById("mm")
        .textContent = "00";

      document.getElementById("ss")
        .textContent = "00";

      return;

    }

    const days =
      Math.floor(
        difference /
        (1000 * 60 * 60 * 24)
      );

    const hours =
      Math.floor(
        (difference /
          (1000 * 60 * 60)) %
          24
      );

    const minutes =
      Math.floor(
        (difference /
          (1000 * 60)) %
          60
      );

    const seconds =
      Math.floor(
        (difference / 1000) %
          60
      );

    document.getElementById("dd")
      .textContent =
      String(days).padStart(2, "0");

    document.getElementById("hh")
      .textContent =
      String(hours).padStart(2, "0");

    document.getElementById("mm")
      .textContent =
      String(minutes).padStart(2, "0");

    document.getElementById("ss")
      .textContent =
      String(seconds).padStart(2, "0");

  }

  update();

  setInterval(
    update,
    1000
  );

}


/* =====================================================
   SCROLL HEADER
   ===================================================== */

function handleHeader() {

  const header =
    document.getElementById("header");

  if (window.scrollY > 30) {

    header.classList.add(
      "scrolled"
    );

  } else {

    header.classList.remove(
      "scrolled"
    );

  }

}


/* =====================================================
   REVEAL ANIMATION
   ===================================================== */

function observeReveal() {

  const elements =
    document.querySelectorAll(
      ".reveal"
    );

  if (!("IntersectionObserver" in window)) {

    elements.forEach(
      element =>
        element.classList.add(
          "visible"
        )
    );

    return;

  }

  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "visible"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: .08
      }
    );

  elements.forEach(
    element =>
      observer.observe(element)
  );

}


/* =====================================================
   MOBILE MENU
   ===================================================== */

function toggleMobileMenu() {

  const mobileNav =
    document.getElementById(
      "mobileNav"
    );

  mobileNav.classList.toggle(
    "open"
  );

}


/* =====================================================
   EVENTS
   ===================================================== */

document
  .getElementById("cartBtn")
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


backdrop.addEventListener(
  "click",
  closeCart
);


document
  .getElementById("clearCart")
  .addEventListener(
    "click",
    clearCart
  );


document
  .getElementById("modalClose")
  .addEventListener(
    "click",
    closeModal
  );


modal.addEventListener(
  "click",
  event => {

    if (event.target === modal) {

      closeModal();

    }

  }
);


document
  .getElementById("searchBtn")
  .addEventListener(
    "click",
    openSearch
  );


document
  .getElementById("closeSearch")
  .addEventListener(
    "click",
    closeSearch
  );


document
  .getElementById("searchInput")
  .addEventListener(
    "input",
    event => {

      searchTerm =
        event.target.value;

      renderProducts();

    }
  );


document
  .getElementById("sort")
  .addEventListener(
    "change",
    renderProducts
  );


document
  .getElementById("hamb")
  .addEventListener(
    "click",
    toggleMobileMenu
  );


document
  .querySelectorAll("#mobileNav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        document
          .getElementById(
            "mobileNav"
          )
          .classList.remove(
            "open"
          );

      }
    );

  });


document
  .getElementById("allProducts")
  .addEventListener(
    "click",
    () => {

      currentCategory = "Tous";

      searchTerm = "";

      renderFilters();

      renderProducts();

    }
  );


document
  .getElementById("orderWa")
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      openWhatsApp(
        createWhatsAppMessage()
      );

    }
  );


document
  .getElementById("contactWa")
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      openWhatsApp(
        "Bonjour FirstBest 👋 Je souhaite avoir des informations sur vos produits."
      );

    }
  );


document
  .getElementById("footerWa")
  .addEventListener(
    "click",
    event => {

      event.preventDefault();

      openWhatsApp(
        "Bonjour FirstBest 👋 Je souhaite avoir des informations sur vos produits."
      );

    }
  );


window.addEventListener(
  "scroll",
  handleHeader
);


/* =====================================================
   ESCAPE KEY
   ===================================================== */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeCart();

      closeModal();

      closeSearch();

    }

  }
);


/* =====================================================
   INITIALIZATION
   ===================================================== */

function init() {

  renderCategories();

  renderFilters();

  renderProducts();

  renderCart();

  updateFavoriteCount();

  startCountdown();

  handleHeader();

  observeReveal();

}


init();
document.addEventListener("DOMContentLoaded", () => {
    const instagramLinks = document.querySelectorAll('a[href="#instagram"]');

    instagramLinks.forEach(link => {
        link.href = INSTAGRAM_URL;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
    });
});
