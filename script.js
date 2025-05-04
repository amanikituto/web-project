const products = [
    { id: 1, name: "Wireless Headphones", price: 49.99, image: "https://via.placeholder.com/200x200?text=Headphones" },
    { id: 2, name: "Smartwatch", price: 89.99, image: "https://via.placeholder.com/200x200?text=Smartwatch" },
    { id: 3, name: "Bluetooth Speaker", price: 29.99, image: "https://via.placeholder.com/200x200?text=Speaker" },
    { id: 4, name: "Portable Charger", price: 19.99, image: "https://via.placeholder.com/200x200?text=Charger" },
  ];
  
  let cart = [];
  
  function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
      const productEl = document.createElement("div");
      productEl.classList.add("product");
      productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productEl);
    });
  }
  
  function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
  }
  
  function updateCartUI() {
    const cartItemsEl = document.getElementById("cart-items");
    const cartCountEl = document.getElementById("cart-count");
    const totalPriceEl = document.getElementById("total-price");
  
    cartItemsEl.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})">Remove</button>
      `;
      cartItemsEl.appendChild(li);
      total += item.price;
    });
  
    cartCountEl.textContent = cart.length;
    totalPriceEl.textContent = total.toFixed(2);
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
  }
  
  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Checkout successful! Thank you for your purchase.");
    cart = [];
    updateCartUI();
  });
  
  renderProducts();
  