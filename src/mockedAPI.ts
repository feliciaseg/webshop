
import { DeliveryInfo } from "./components/DeliveryForm";
import { PaymentInfo } from "./components/PaymentForm";
import { UserInfo } from "./components/UserForm"
import { CartItem } from "./contexts/CartContext";

export interface Order {
    cart: CartItem[],
    user: UserInfo,
    payment: PaymentInfo,
    delivery: DeliveryInfo,
}

export async function sendOrderToApi(order: Order) {
    return new Promise((resolve) => {
        console.log(( order) )
        setTimeout(resolve, 1000)
    })
}