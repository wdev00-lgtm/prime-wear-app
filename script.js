let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
}

function openCart() {
    document.getElementById("cartModal").style.display = "block";
}

function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}
