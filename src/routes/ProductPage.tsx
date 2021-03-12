import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

// interface Props {
// }

// interface State{

// }

export default function ProductPage() {
  return (
    <>
    <Header type={"white"}/>
  <Link to={{ pathname: "/checkout" }}>Gå till checkoutpage</Link>
  </>
  );
}
