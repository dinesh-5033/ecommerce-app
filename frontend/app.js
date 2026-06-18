fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(p => {
      container.innerHTML += `
        <div>
          <h3>${p.name}</h3>
          <p>${p.price}</p>
        </div>
      `;
    });
  });