import { CSSProperties, useContext } from "react";
import { CartContext, CartItem } from "../contexts/CartContext";
import CartCard from "./CartCard";

export default function CartView() {
  let cartCards: JSX.Element[] = [];
  const context = useContext(CartContext);

  const cart = context.cart;

  const updateCart = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: CartItem
  ): void => {
    let currentValue = parseInt(e.currentTarget.value, 10);

    if (currentValue === 0 ) {
      context.removeProduct(product);
    } else {
      context.updateQuantity(product, currentValue)
    }
  };

  const div: CSSProperties = {
    width: "100%",
    margin: "1rem 0 1rem 0",
  };

  const sumDiv: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  };

  const renderCartCards = () => {
    for (let i = 0; i < cart.length; i++) {
      const imageUrl: string = cart[i].imageUrl;
      const name: string = cart[i].name;
      const price: number = cart[i].price * cart[i].quantity;
      const numberOfProducts: number = cart[i].quantity;
      cartCards.push(
        <CartCard
          key={cart[i].id}
          imageUrl={imageUrl}
          name={name}
          price={price}
          numberOfProducts={numberOfProducts}
          onClick={() => context.removeProduct(cart[i])}
          {...i}
          handleChange={(e) => updateCart(e, cart[i])}
        />
      );
    }
    return cartCards;
  };

  if (cart.length === 0) {
    return (
      <p style={{ textAlign: "center" }}>
        Du har inte lagt till några produkter ännu!
      </p>
    );
  } else {
    return (
      <>
        <div style={div}>{renderCartCards()}</div>
        <div style={sumDiv}>
          <p>Summa </p> <p> {context.getTotalPriceOfCart()}kr</p>
        </div>
      </>
    );
  }
}
