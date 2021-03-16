import { Box } from "@material-ui/core";
import React from "react";
import DeliveryForm from "../components/DeliveryForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PaymentForm from "../components/PaymentForm";

export default function CheckoutPage() {
  return (
    <>
      <Header type="white" />
      <Box
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p>Betalning</p>
        <PaymentForm />
        <p>Leveransmetod</p>
        <DeliveryForm />
      </Box>
      <Footer />
    </>
  );
}
