import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CartItem } from "../contexts/CartContext";

interface Props {
  products: CartItem[];
  totalCost?: number;
  name?: string;
  display: boolean;
  orderId: string;
}

export default function OrderConfirmationModal(props: Props) {
  if (props.display === true) {
    return (
      <div style={darkUnderlay}>
        <div className="modalContainer" style={modalContainer}>
          <p style={confirmationGreeting}>Tack för ditt köp, {props.name}!</p>
          <p style={ordernumber}>
            Ordernummer: <b>{props.orderId}</b>
          </p>
          <div style={productList}>
            {props.products.map((item: CartItem, index: number) =>
              index % 2 === 0 ? (
                <div
                  key={index}
                  style={{
                    ...productSection,
                    backgroundColor: theme.palette.secondary.main,
                  }}
                >
                  <p style={{ ...section, width: "10rem" }}>{item.name}</p>
                  <p style={section}>{item.quantity}st</p>
                  <p style={section}>{item.price * item.quantity}kr</p>
                </div>
              ) : (
                <div
                  style={{ ...productSection, backgroundColor: "#ffff" }}
                  key={index}
                >
                  <p style={{ ...section, width: "10rem" }}>{item.name}</p>
                  <p style={section}>{item.quantity}st</p>
                  <p style={section}>{item.price * item.quantity}kr</p>
                </div>
              )
            )}
          </div>
          <div style={summaryContainer}>
            <p>Total kostnad:</p>
            <p>
              <b>{props.totalCost} kr</b>
            </p>
          </div>
          <Link to={"/"}>
            <Button
              variant="contained"
              color="primary"
              style={confirmationButton}
            >
              Ok
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

const modalContainer: CSSProperties = {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  width: "85%",
  maxWidth: "40rem",
  minHeight: "30rem",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ffff",
  boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.3)",
  zIndex: 1,
};

const darkUnderlay: CSSProperties = {
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 90,
};

const confirmationGreeting: CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 600,
  textAlign: "center",
};

const ordernumber: CSSProperties = {
  fontSize: "1rem",
};

const productList: CSSProperties = {
  flex: 1,
  maxHeight: "12rem",
  overflowY: "scroll",
};

const productSection: CSSProperties = {
  display: "flex",
  padding: "0 0.5rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "0.8rem",
};

const section: CSSProperties = {
  padding: "0 0.5rem",
};

const summaryContainer: CSSProperties = {
  display: "flex",
  margin: "1rem 0 0.5rem 0",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const confirmationButton: CSSProperties = {
  width: "100%",
  fontWeight: 600,
  borderRadius: 0,
};
