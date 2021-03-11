import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

// interface Props {
// }

// interface State{

// }

export default function StartPage() {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <img src= "https://assets.ellosgroup.com/i/ellos/b?$eg$&$emr$&$ep$&$ed$&n=ell_1612828-01_Fm_M0046628&mw=500&rw=500&qlt=80"/>
      <Link to={{ pathname: "/product" }}>Gå till productPage</Link>
      <Link to={{ pathname: "/admin" }}>Gå till AdminPage</Link>
    </Box>
  );
}
