const cartModal = document.getElementById("cartModal");
const cartIcon = document.querySelector(".nav-icons span:last-child");

cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
});

function closeCart() {
    cartModal.style.display = "none";
}

