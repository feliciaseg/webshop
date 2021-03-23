import { Box, Button } from "@material-ui/core";
import { CSSProperties, useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserForm, { UserInfo } from "../components/UserForm";
import PaymentForm, { PaymentInfo } from "../components/PaymentForm";
import DeliveryForm, { DeliveryInfo } from "../components/DeliveryForm";
import CartView from "../components/CartView";
import { CartContext } from "../contexts/CartContext";

export interface Validation {
  cartValidation: boolean;
  paymentValidation: boolean;
  userValidation: boolean;
  deliveryValidation: boolean;
}

export default function CheckoutPage() {
  const cartContext = useContext(CartContext);
  const [user, setUser] = useState<UserInfo>({});
  const [payment, setPayment] = useState<PaymentInfo>({});
  const [delivery, setDelivery] = useState<DeliveryInfo>({});
  const [validation, setValidation] = useState<Validation>({
    cartValidation: Boolean(cartContext.cart.length),
    paymentValidation: false,
    userValidation: false,
    deliveryValidation: false,
  });

  useEffect(() => {
    setValidation({
      ...validation,
      cartValidation: Boolean(cartContext.cart.length),
    });
  }, [cartContext]);

  return (
    <>
      <Header type="white" />
      <Box style={checkoutContainer}>
        <form>
          <CartView />
          <div style={formContainer}>
            <p style={heading}>Dina Uppgifter</p>
            <UserForm
              user={user}
              setUser={setUser}
              validation={validation}
              setValidation={setValidation}
            />
          </div>
          <div style={formContainer}>
            <p style={heading}>Betalning</p>
            <PaymentForm
              payment={payment}
              setPayment={setPayment}
              validation={validation}
              setValidation={setValidation}
            />
          </div>
          <div style={formContainer}>
            <p style={heading}>Leveransmetod</p>
            <DeliveryForm
              delivery={delivery}
              setDelivery={setDelivery}
              validation={validation}
              setValidation={setValidation}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={confirmationButton}
          >
            Slutför köp
          </Button>
        </form>
      </Box>
      <Footer />
    </>
  );
}

const checkoutContainer: CSSProperties = {
  display: "flex",
  flex: 1,
  margin: "auto",
  padding: "2rem 1rem 4rem 1rem",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  maxWidth: "41rem",
};

const formContainer: CSSProperties = {
  width: "100%",
  padding: "1rem 0",
};

const heading: CSSProperties = {
  margin: "1rem 0 1.5rem 0",
  textAlign: "center",
};

const confirmationButton: CSSProperties = {
  width: "100%",
  fontWeight: 600,
  borderRadius: 0,
  marginTop: "1rem",
};
