import { CSSProperties, useContext } from "react";
import { CartContext, CartItem } from "../contexts/CartContext";
import CartCard from "./CartCard";

export default function CartView() {
  let cartCards: JSX.Element[] = [];
  const context = useContext(CartContext);

  const cart = context.cart;

  const calculateSum = ():number => {
    let arrayofsums:number[] = [];
    let sum:number;
    for (let i = 0; i < cart.length; i++) {
      arrayofsums.push(
      cart[i].price * cart[i].quantity
      )
    }
    console.log(arrayofsums)
  return 0;
  };

  const updateCart = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: CartItem
  ): void => {
    let currentValue = parseInt(e.currentTarget.value, 10);

    if (currentValue === 0) {
      context.removeProduct(product);
    } else if (currentValue === product.quantity + 1) {
      context.addToCart(product);
    } else if (currentValue === product.quantity - 1) {
      context.removeQuantity(product);
    }
  };

  const div: CSSProperties = {
    margin: "1rem 0 1rem 0",
  };
  const sumDiv: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "41rem"
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
    return <p>Du har inte lagt till några produkter ännu!</p>;
  } else {
    calculateSum()
    return (
      <>
        <div style={div}>{renderCartCards()}</div>
        <div style= {sumDiv}>
          <p>Summa </p> <p> 5989 </p>
        </div>
      </>
    );
  }
}
