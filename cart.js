document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartContainer = document.getElementById("cartContainer");

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `<h2>Your cart is empty.</h2>`;
        return;
    }

    let total = 0;
    cartItems.forEach(item => {
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.images[0]}" alt="${item.title}">
                <div class="details">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p><strong>₹${item.price}</strong></p>
                </div>
            </div>
        `;
        total += item.price;
    });

    cartContainer.innerHTML += `<h3>Total: ₹${total}</h3>`;
});
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const countSpan = document.getElementById("cartCount");
    if (countSpan) countSpan.textContent = cartItems.length;
}

document.addEventListener("DOMContentLoaded", updateCartCount);

