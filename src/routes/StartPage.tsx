import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

// interface Props {
// }

// interface State{

// }

export default function StartPage() {

  return (
    <>
    <Box style={{ display: "flex", flexDirection: "column", }}>
      <Link to={{ pathname: "/product" }}>Gå till productPage</Link>
      <Link to={{ pathname: "/admin" }}>Gå till AdminPage</Link>
    </Box>
    <Footer/>
    </>
  );
}
