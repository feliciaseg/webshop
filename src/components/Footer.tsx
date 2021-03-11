import { Button, StylesProvider } from "@material-ui/core";
import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { theme } from "../styling/colorTheme";
import "../styling/style.css";

const buttonStyle: CSSProperties = {
  width: "9.5rem",
  height: "1.8rem",
  fontSize: "0.75rem",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  borderRadius: 0,
  fontFamily: "Roboto",
  textTransform: "capitalize", //Margin ska anpassas efter mediaqueries, återkommer till detta efter handledning med David
  fontWeight: 500,
};

const boxStyle: CSSProperties = {
  width: "100%",
  position: "static",
  bottom: 0,
  display: "flex",
  justifyContent: "flex-end",
  backgroundColor: theme.palette.primary.main,

};

export default function Footer() {
  return (
    <div className={"footerDiv"} style={boxStyle}>
      <Link style={{ textDecoration: "none" }} to={{ pathname: "/admin" }}>
        <StylesProvider injectFirst>
          <Button style={buttonStyle}>Adminstratörssidan</Button>
        </StylesProvider>
      </Link>
    </div>
  );
}
