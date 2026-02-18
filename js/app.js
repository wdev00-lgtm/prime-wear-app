function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name, price });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart!");
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let total = 0;

    cartContainer.innerHTML = "";

    cart.forEach(item => {
        total += parseInt(item.price.replace(/[^\d]/g, ""));
        cartContainer.innerHTML += `
            <p>${item.name} - ${item.price}</p>
        `;
    });

    document.getElementById("total").innerText = "₹" + total;
}

function clearCart() {
    localStorage.removeItem("cart");
    location.reload();
}

