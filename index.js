let products = [];

function fetchData() {
    fetch("https://dummyjson.com/products?limit=30")
        .then(res => res.json())
        .then(data => {
            products = data.products;
            localStorage.setItem("products", JSON.stringify(products));
            renderProducts(products);
        });
}

function renderProducts(productsList) {
    const container = document.getElementById("containerBox");
    container.innerHTML = "";

    productsList.forEach(product => {
        container.innerHTML += `
            <main>
                <img src="${product.images[0]}" alt="${product.title}">
                <p id="title">${product.title}</p>
                <div id="rating">
                    <span id="rating-box">${product.rating.toFixed(1)}</span>
                    <i class="fa-solid fa-star" style="color: gold;"></i>
                </div>
                <div id="pricebox">
                    <span><b>₹${product.price}</b></span>
                    <button id="view" onclick="viewMore(${product.id})">View More</button>
                </div>
            </main>
        `;
    });
}

function viewMore(productId) {
    localStorage.setItem("selectedProductId", productId);
    window.location.href = "viewmore.html";
}

document.getElementById("searchproduct").addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
});

fetchData();
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const countSpan = document.getElementById("cartCount");
    if (countSpan) countSpan.textContent = cartItems.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
