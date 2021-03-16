import { Box } from "@material-ui/core";
import React from "react";
import DeliveryForm from "../components/DeliveryForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import KundKorgProduct from "../components/KundKorgProduct";
import PaymentForm from "../components/PaymentForm";
import UserForm from "../components/UserForm";

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
        <KundKorgProduct/>
         <p>Dina Uppgifter</p>
        <UserForm/>
        <p>Betalning</p>
        <PaymentForm />
        <p>Leveransmetod</p>
        <DeliveryForm />
      </Box>
      <Footer />
    </>

  );
}
