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
  emptyCart: () => void;
  getTotalPriceOfCart: () => number;
  updateQuantity: (product: CartItem, quantity: number) => void;
}

export const CartContext = createContext<ContextState>({
  cart: [],
  addToCart: () => {},
  removeProduct: () => {},
  updateQuantity: () => {},
  emptyCart: () => {},
  getTotalPriceOfCart: () => 0,
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
    saveCartToLocalStorage(newCart);
  };

  updateQuantity = (product: CartItem, quantity: number) => {
    let newCart = [...this.state.cart];
    const cartItem = newCart.find((cartItem) => cartItem.id === product.id);
    cartItem!.quantity = quantity;
    this.setState({ cart: newCart });
    saveCartToLocalStorage(newCart);
  };

  emptyCart = () => {
    let emptyCart: CartItem[] = [];
    this.setState({ cart: emptyCart });
    saveCartToLocalStorage(emptyCart);
  };

  getTotalPriceOfCart = (): number => {
    let arrayOfSums: number[] = [];
    let sum: number;
    for (let i = 0; i < this.state.cart.length; i++) {
      arrayOfSums.push(this.state.cart[i].price * this.state.cart[i].quantity);
    }
    sum = arrayOfSums.reduce((a, b) => a + b, 0);

    return sum;
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
          emptyCart: this.emptyCart,
          getTotalPriceOfCart: this.getTotalPriceOfCart,
          updateQuantity: this.updateQuantity,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
