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
    // if (this.state.cart.some(p => p.id === product.id)){
    //   //öka quantity.
    // } else {
    //   this.setState({ cart: [...this.state.cart, product] });
    //   saveCartToLocalStorage(product);
    //   //spara som ny produkt (och öka quantity med 1)
    // }

    this.setState({ cart: [...this.state.cart, product] });
    saveCartToLocalStorage(product);
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
