import { Component, createContext } from "react";
import { saveCartToLocalStorage } from "../helper";

interface Product {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
  description?: string;
  quantity?: number;
}

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
