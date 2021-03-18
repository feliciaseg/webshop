import { Component, createContext } from "react";
import { saveCartToLocalStorage } from "../helper";
import { Product } from "../products";

interface CartState {
  cart: Product[];
}
interface ContextState extends CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

export const CartContext = createContext<ContextState>({
  cart: [],
  addToCart: () => {},
  removeProduct: () => {},
});

export default class CartProvider extends Component<{}, CartState> {
  state: CartState = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  };

  addProductToCart = (product: Product) => {
    if (this.state.cart.find((item) => item.id === product.id)) {
      const targetIndex: number = this.state.cart.findIndex(
        (item) => item.id === product.id
      );
      let updatedCart = [...this.state.cart];
      if (!updatedCart[targetIndex].quantity) {
        updatedCart[targetIndex].quantity = 2;
      } else {
        updatedCart[targetIndex].quantity! += 1;
      }
      saveCartToLocalStorage(updatedCart);
    } else {
      this.setState({ cart: [...this.state.cart, product] });
      const updatedCart = [...this.state.cart, product];
      saveCartToLocalStorage(updatedCart);
    }
  };

  removeProductfromCart = (product: Product) => {
    const updatedList: Product[] = this.state.cart.filter(
      (item) => item.id !== product.id
    );
    this.setState({ cart: [...updatedList] });
    localStorage.setItem("cart", JSON.stringify([...updatedList]));
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addProductToCart,
          removeProduct: this.removeProductfromCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
