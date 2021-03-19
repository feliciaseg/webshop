import { Box, Button } from "@material-ui/core";
import React, { CSSProperties, useState } from "react";
import DeliveryForm from "../components/DeliveryForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PaymentForm from "../components/PaymentForm";
import UserForm from "../components/UserForm";
import CartView from "../components/CartView";

interface DeliveryInfo {
  supplier: string;
  date: string;
}

export default function CheckoutPage() {
  const [delivery, setDelivery] = useState<DeliveryInfo | undefined>();

  return (
    <>
      <Header type="white" />
      <Box
        style={{
          display: "flex",
          flex: 1,
          margin: "auto",
          padding: "2rem 0",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          maxWidth: "41rem",
        }}
      >
        <CartView />
        <p>Dina Uppgifter</p>
        <UserForm />
        <p>Betalning</p>
        <PaymentForm />
        <p>Leveransmetod</p>
        <DeliveryForm
          returnValues={(delivery: DeliveryInfo | undefined) =>
            setDelivery(delivery)
          }
        />
        <Button variant="contained" color="primary" style={confirmationButton}>
          Slutför köp
        </Button>
      </Box>
      <Footer />
    </>
  );
}

const confirmationButton: CSSProperties = {
  width: "100%",
  fontWeight: 600,
  borderRadius: 0,
  marginTop: "1rem",
};
