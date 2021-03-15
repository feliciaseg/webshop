import { Box } from "@material-ui/core";
import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PaymentForm from "../components/PaymentForm";
export default function CheckoutPage() {
  return (
    <>
    <Header type= "white"/>
    <Box style = {{display: "flex", justifyContent:"center"}}>
  <PaymentForm/>
  </Box>
  <Footer/>
  </>);
}
