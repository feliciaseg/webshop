import { CSSProperties } from "@material-ui/styles";
import { CartItem } from "../contexts/CartContext";
import { DeliveryInfo } from "./DeliveryForm";

export interface Props {
  products: CartItem[];
  delivery?: DeliveryInfo[];
  totalCost?: number;
  display: boolean;
  momsResoult?: number;
  deliveryPrice?: number;
  deliveryValidation?: boolean;
}

export default function SubTotal(props: Props) {
  if (props.display === true) {
    return (
      <div style={container}>
        <div style={subTotal}>
          <p> Totalsumma inkl frakt: </p>
          <p>
            <b>{props.totalCost}kr</b>
          </p>
        </div>
        <div style={moms}>
          <p style={text}>
            Varav moms:
            <b>&nbsp;{props.momsResoult}kr</b>
          </p>
          <p style={text}>
            Frakt:
            <b>&nbsp;{props.deliveryPrice}kr</b>
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const container: CSSProperties = {
  width: "100%",
  margin: "1rem 0 0.5rem 0",
};
const subTotal: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "solid 0.1rem",
};

const moms: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const text: CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",

  fontSize: "0.7rem",
};
