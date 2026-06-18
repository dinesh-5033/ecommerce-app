const API = "http://localhost:5000/api";

// LOAD PRODUCTS
fetch(`${API}/products`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(p => {
      container.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
          <button onclick='addToCart("${p.name}", ${p.price})'>
            Add to Cart
          </button>
        </div>
      `;
    });
  });

// ADD TO CART (FIXED)
function addToCart(name, price) {
  fetch(`${API}/cart/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: "user1",
      product: { name, price },
    }),
  })
  .then(res => res.json())
  .then(() => alert("Added to cart"));
}