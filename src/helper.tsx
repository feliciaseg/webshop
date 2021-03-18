import { products, Product } from "./products";

/* Saves products to localstorage */
export function saveCartToLocalStorage(cart: Product[]) {
  localStorage.setItem("cart", JSON.stringify([...cart]));
}

/* Saves products to localstorage */
export function saveProductListToLocalStorage(editedProducts?: Product[]) {
  let productList;
  if (localStorage.getItem("products") && editedProducts) {
    productList = editedProducts;
  } else if (localStorage.getItem("products")) {
    productList = JSON.parse(localStorage.getItem("products")!);
  } else {
    productList = products;
  }
  localStorage.setItem("products", JSON.stringify(productList));
}

/* Generates an unique order ID */
export function generateOrderID() {
  return Math.random().toString(16).substr(2, 9);
}
