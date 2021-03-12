import React, {  CSSProperties } from "react";
import { theme } from "../styling/colorTheme";
import CheckIcon from "@material-ui/icons/Check";
import "../styling/style.css";
import ReactDOM from "react-dom";
import { Box } from "@material-ui/core";

const boxStyle: CSSProperties = {
  backgroundColor: "white",
  zIndex: 1,
  position: "fixed",
  bottom: 50,
  margin: "auto",
  left: 0,
  right: 0,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Roboto",
  fontWeight: 700,
  color: theme.palette.primary.main,
};

export default function SmallModal() {
  return (
    <Box className={"smallModal"} style={boxStyle}>
      <CheckIcon />{" "}
      <p style={{ marginLeft: "1rem" }}>Varan är tillagd i varukorgen</p>
    </Box>
  );
}
