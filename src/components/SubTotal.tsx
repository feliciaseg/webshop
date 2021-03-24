import { CSSProperties } from "@material-ui/styles";
import {  CartItem } from "../contexts/CartContext";
import { DeliveryInfo } from "./DeliveryForm";


export interface Props {
    products: CartItem[];
    delivery?: DeliveryInfo[];
    totalCost?: number;
    display: boolean
    
}  

export default function SubTotal(props: Props) {
  
    if (props.display === true) {
    return (
        
        <div style={subTotal}>
                <p> Totalsumma inkl frakt: </p>
                <p>
                    <b>{props.totalCost}kr</b>
                </p>  
            </div>
        );
    } else {
        return null;
    }
       }


const subTotal: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    margin: "1rem 0 0.5rem 0",
    borderBottom: "solid 0.1rem"

};