import Cancel from "@material-ui/icons/Cancel";
import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";
import { Button } from "@material-ui/core";

interface Product {
  name: string;
  price: number;
  number: number;
  imageUrl?: string;
  id?: string;
  description?: string;
}

interface Order {
  ordernumber: string;
  products: Product[];
  totalCost: number;
}

interface Props {
  order: Order;
  closeModal: () => void;
}

export default function OrderConfirmationModal(props: Props) {
  return (
    <div style={modalContainer}>
      <Cancel style={closeIcon} onClick={props.closeModal} />
      <p style={confirmationGreeting}>Tack för ditt köp!</p>
      <p style={ordernumber}>
        Ordernummer: <b>{props.order.ordernumber}</b>
      </p>
      <div style={productList}>
        {props.order.products.map((item: Product, index: number) =>
          index % 2 === 0 ? (
            <div
              style={{
                ...productSection,
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              <p>{item.name}</p>
              <p>{item.number}</p>
              <p>{item.price}</p>
            </div>
          ) : (
            <div style={{ ...productSection, backgroundColor: "#ffff" }}>
              <p>{item.name}</p>
              <p>{item.number}</p>
              <p>{item.price}</p>
            </div>
          )
        )}
      </div>
      <div style={summaryContainer}>
        <p>Total kostnad:</p>
        <p>
          <b>{props.order.totalCost} kr</b>
        </p>
      </div>
      <Button variant="contained" color="primary" style={confirmationButton}>
        Ok
      </Button>
    </div>
  );
}

const modalContainer: CSSProperties = {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  top: "calc(50% + 3.5rem)",
  left: "50%",
  width: "90%",
  maxWidth: "40rem",
  minHeight: "30rem",
  transform: "translate(-50%, -50%)",
  padding: "2rem",
  backgroundColor: "#ffff",
  boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.3)",
};

const closeIcon: CSSProperties = {
  position: "absolute",
  top: "1rem",
  right: "1rem",
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
  padding: "0 1rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "0.8rem",
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
