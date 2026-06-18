const API = "http://localhost:5000/api";

let cart = [];

/* 🔥 LOAD PRODUCTS */
fetch(`${API}/products`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">
          Add to Cart
        </button>
      `;

      container.appendChild(card);
    });
  });

/* 🔥 ADD TO CART */
function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cartCount").innerText = cart.length;
}

/* 🔥 SHOW CART */
function showCart() {
  const panel = document.getElementById("cartPanel");
  const items = document.getElementById("cartItems");

  panel.classList.toggle("hidden");

  items.innerHTML = "";

  cart.forEach(item => {
    items.innerHTML += `
      <p>${item.name} - ₹${item.price}</p>
    `;
  });
}

/* 🔥 SEARCH FILTER */
document.getElementById("search").addEventListener("input", function(e) {
  let value = e.target.value.toLowerCase();
  let cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

/* 🔥 CHECKOUT */
function checkout() {
  alert("Order placed successfully!");

  fetch(`${API}/orders/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: "user1",
      products: cart,
      total: cart.reduce((sum, i) => sum + i.price, 0)
    })
  });

  cart = [];
  document.getElementById("cartCount").innerText = 0;
  document.getElementById("cartItems").innerHTML = "";
}