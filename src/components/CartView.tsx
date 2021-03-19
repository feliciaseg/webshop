import { CSSProperties, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { saveCartToLocalStorage } from "../helper";
import CartCard from "./CartCard";

export default function CartView() {
  const context = useContext(CartContext);
  const cart = context.cart;

  const handleClick = (i: number) => {
    context.removeProduct(cart[i]);
  };

  const div: CSSProperties = {
    margin: "1rem 0 1rem 0",
  };

  const renderCartCards = () => {
    let cartCards: JSX.Element[] = [];

    for (let i = 0; i < cart.length; i++) {
      const imageUrl: string = cart[i].imageUrl;
      const name: string = cart[i].name;
      const price: number = cart[i].price * cart[i].quantity
      const numberOfProducts: number  = cart[i].quantity
      cartCards.push(
        <CartCard
          key={i}
          imageUrl={imageUrl}
          name={name}
          price={price}
          numberOfProducts={numberOfProducts}
          onClick={() => context.removeProduct(cart[i])}
          {...i}
        />
      );
    }
    return cartCards;
  };

  if (cart.length === 0) {
    return <p>Du har inte lagt till några produkter ännu!</p>;
  } else {
    return <div style={div}>{renderCartCards()}</div>;
  }
}
