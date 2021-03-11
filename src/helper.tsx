interface Product {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
}

export function addProductToCart(product: Product) {
  /* Save products to localstorage */
  console.log(product);
}
