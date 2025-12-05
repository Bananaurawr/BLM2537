
// Script for filtering menu items based on category
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((btn) => {
btn.addEventListener("click", () => {
    // 1. Remove active class from all buttons
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    // 2. Filter items
    menuCards.forEach((card) => {
    const category = card.getAttribute("data-category");

    if (filter === "all" || category === filter) {
        card.style.display = "flex"; // or "block", but flex works for your grid
    } else {
        card.style.display = "none";
    }
    });
});
});

// Script for searching
const searchInput = document.querySelector(".menu-search");
const cards = document.querySelectorAll(".menu-card");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  // find the active category filter
  const activeFilter = document.querySelector(".filter-btn.active").dataset.filter;

  cards.forEach(card => {
    const title = card.querySelector("h4").textContent.toLowerCase();
    const category = card.dataset.category;

    // conditions:
    const matchesSearch = title.includes(query);
    const matchesCategory = activeFilter === "all" || activeFilter === category;

    if (matchesSearch && matchesCategory) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

// Script for "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

// ADD TO CART
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1500);
}

document.querySelectorAll(".add-to-cart").forEach(btn => {
btn.addEventListener("click", () => {
    const item = {
    name: btn.dataset.name,
    price: Number(btn.dataset.price),
    image: btn.dataset.image,
    quantity: 1
    };

    // if already exis then only increase quantity
    const existing = cart.find(p => p.name === item.name);
    if (existing) {
    existing.quantity++;
    } else {
    cart.push(item);
    }

    saveCart();
    showToast(item.name + " added to cart!");
});
});
})();


// GO TO THE CART PAGEEEEEEAAA AAAAA
const goToCart = document.getElementById('go-to-cart');
if (goToCart) {
    goToCart.addEventListener('click', () => {
    window.location.href = 'cart_en.html';
});
}