import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserForms from "../components/UserForms";


// interface Props {
// }

// interface State{

// }

export default function CheckoutPage() {
  return (
    <>
   <Header type="white"/> 
  <UserForms/>
  <Link to={{ pathname: "/" }}>Gå till startPage</Link>
  <Footer/>
  </>
  
  );
}
