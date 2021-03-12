interface Product {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
}

/* Saves products to localstorage */
export function saveCartToLocalStorage(product: Product) {
  const cart: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
  localStorage.setItem("cart", JSON.stringify([...cart, product]));
}
