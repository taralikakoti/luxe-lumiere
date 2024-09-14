function shopNow() {
    alert("Redirecting to the shop page!");
}

let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    alert(${product} has been added to your cart.);
}