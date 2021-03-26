import { DeliveryInfo } from "./components/DeliveryForm";
import { UserInfo } from "./components/UserForm";
import { CartItem } from "./contexts/CartContext";
import { Card } from "./components/PaymentForm";

export interface Order {
  cart: CartItem[];
  user: UserInfo;
  payment: { paymentOption: string; paymentInfo: Card | string };
  delivery: DeliveryInfo;
}

export async function sendOrderToApi(order: Order) {
  return new Promise((resolve) => {
    console.log(order);
    setTimeout(resolve, 1000);
  });
}
