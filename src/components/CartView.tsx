
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartCard from "./CartCard";

interface ProductProps {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
}

interface ProductViewArray{
  imageUrl: string;
  id: string;
  name: string;
  price: number;
  times?: number;
}


export default function CartView() {
  const cart = useContext(CartContext);
  let addedProducts: Array<ProductProps> = cart.cart;
  let newAddedProducts: Array<ProductViewArray> = [];
  let uniqueNames: any = {};

  /** Loops through the current cart and checks for multiple occurances of the same product.
   * Creates a new array but with a new property ''times'' which shows the number of occurances.  */
  for (let i = 0; i < addedProducts.length; i++) {
    if (!uniqueNames[addedProducts[i].name]) {
      newAddedProducts.push(addedProducts[i]);
    }
    uniqueNames[addedProducts[i].name] =
      (uniqueNames[addedProducts[i].name] || 0) + 1;
      console.log(uniqueNames)
  }
  for (let j = 0; j < newAddedProducts.length; j++) {
     newAddedProducts[j].times = uniqueNames[newAddedProducts[j].name];
  }
  
  // Object.assign(newAddedProducts[j], { times:  uniqueNames[newAddedProducts[j].name] });
  
  const handleClick = () => {
    console.log(
      "Den här console loggen ligger i CartView, och är till för att ta bort produkten...."
    );
  };

  const renderCartCards = () => {
    let cartCards: JSX.Element[] = [];

    for (let i = 0; i < newAddedProducts.length; i++) {
      const imageUrl: string = newAddedProducts[i].imageUrl;
      const name: string = newAddedProducts[i].name;
      const price: number = newAddedProducts[i].price;
      const numberOfProducts: number | undefined  = newAddedProducts[i].times;
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

  if (cart.cart.length === 0) {
    return <p>Du har inte lagt till några produkter ännu!</p>;
  } else {
    return (
      <div>
        {renderCartCards()}
      </div>
    );
  }
}
