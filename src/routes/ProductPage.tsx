import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// interface Props {
// }

// interface State{

// }

export default function ProductPage() {
  return( 
    <>
  <Link to={{ pathname: "/checkout" }}>Gå till checkoutpage</Link>
  <Footer/>
  </>
  );
}
