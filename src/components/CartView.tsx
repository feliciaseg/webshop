
import { CSSProperties, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartCard from "./CartCard";


export default function CartView() {
  const context = useContext(CartContext);
  const cart = context.cart

  const handleClick = () => {
    console.log(
      "Den här console loggen ligger i CartView, och är till för att ta bort produkten...."
    );
  };

  const div: CSSProperties = {
    margin: "1rem 0 1rem 0"
  }

  const renderCartCards = () => {
    let cartCards: JSX.Element[] = [];

    for (let i = 0; i < cart.length; i++) {
      const imageUrl: string = cart[i].imageUrl;
      const name: string =cart[i].name;
      const price: number = cart[i].price;
      const numberOfProducts: number | undefined  = cart[i].quantity;
      cartCards.push(
        <CartCard
          key={i}
          imageUrl={imageUrl}
          name={name}
          price={price}
          numberOfProducts={numberOfProducts}
          onClick={handleClick}
        ></CartCard>
      );
    }
    return cartCards;
  };

  if (cart.length === 0) {
    return <p>Du har inte lagt till några produkter ännu!</p>;
  } else {
    return (
      <div style= {div}>
        {renderCartCards()}
      </div>
    );
  }

  



}
