import { Component, createContext } from "react";
import { saveCartToLocalStorage } from "../helper";
import { Product } from "../products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}
interface ContextState extends CartState {
  cart: CartItem[];
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
    let newCart = [...this.state.cart];
    const cartItem = this.state.cart.find(
      (cartItem) => cartItem.id === product.id
    );

    if (cartItem) {
      cartItem.quantity++;
    } else {
      newCart = [...newCart, { ...product, quantity: 1 }];
    }

    this.setState({ cart: newCart });
    localStorage.setItem("cart", JSON.stringify([...newCart]));
  };

  removeProductfromCart = (product: Product) => {
    const updatedList: CartItem[] = this.state.cart.filter(
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
