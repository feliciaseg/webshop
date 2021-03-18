import { Component, createContext } from "react";
import { saveCartToLocalStorage } from "../helper";
import { Product } from "../products";

interface CartState {
  cart: Product[];
}
interface ContextState extends CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
}

export const CartContext = createContext<ContextState>({
  cart: [],
  addToCart: () => {},
});

export default class CartProvider extends Component<{}, CartState> {
  state: CartState = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  };

  addProductToCart = (product: Product) => {
    this.setState({ cart: [...this.state.cart, product] });
    saveCartToLocalStorage(product);
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addProductToCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
