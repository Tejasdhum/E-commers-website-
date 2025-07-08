document.addEventListener("DOMContentLoaded", function () {
    let productId = localStorage.getItem("selectedProductId");
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (!productId) {
        document.getElementById("productDetails").innerHTML = "<p>Product not found.</p>";
        return;
    }

    let products = JSON.parse(localStorage.getItem("products"));
    let selectedProduct = products.find((p) => p.id == productId);

    if (!selectedProduct) {
        document.getElementById("productDetails").innerHTML = "<p>Product not found.</p>";
        return;
    }

    document.getElementById("productDetails").innerHTML = `
        <img src="${selectedProduct.images[0]}" alt="${selectedProduct.title}">
        <h2 id="title">${selectedProduct.title}</h2>
        <p id="description">${selectedProduct.description}</p>
        <p id="rating"><i class="fa-solid fa-star"></i> ${selectedProduct.rating.toFixed(1)}</p>
        <p id="price">Price: ₹${selectedProduct.price}</p>
        <button onclick="addToCart(${selectedProduct.id})">Add to Cart</button>
        <button onclick="goBack()">Back to Products</button>
    `;
});

function goBack() {
    window.location.href = "index.html";
}

function addToCart(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    let selectedProduct = products.find((p) => p.id == id);
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    cartItems.push(selectedProduct);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert("Product added to cart!");
}
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const countSpan = document.getElementById("cartCount");
    if (countSpan) countSpan.textContent = cartItems.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
