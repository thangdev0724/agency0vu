export function saveCartCookie(cartItems) {
  localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
}

export function getCartListLocal() {
  const carts = localStorage.getItem("CART_ITEMS");
  if (carts) {
    return JSON.parse(carts);
  }
  return [];
}

export function emptyCart() {
  localStorage.removeItem("CART_ITEMS");
}
