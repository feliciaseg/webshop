import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@material-ui/core";
import React, { CSSProperties } from "react";
import { theme } from "../styling/colorTheme";
import "../styling/style.css";

const textField: CSSProperties = {
  backgroundColor: "white",
  color: "black",
};
const box: CSSProperties = {
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
};

const p: CSSProperties = {
  fontFamily: "Roboto",
};

export default function PaymentForm() {
  return (
    <Box className={"paymentBox"} style={box}>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1">
          <p className={"pInput"} style={p}>
            Swish
          </p>
          <div>
            <FormControlLabel
              value="Swish"
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label=""
            />
            <TextField
              style={textField}
              id="swish"
              helperText="Fyll i ditt telefonnummer"
              variant="outlined"
              required
              className={"inputPayment"}
            />
          </div>
          <p className={"pInput"} style={p}>
            Kort
          </p>
          <div>
            <FormControlLabel
              className={"radioButtonPayment"}
              value="Kort"
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label=""
            />
            <TextField
              style={textField}
              id="kort"
              helperText="Fyll i bank, kontonummer och CVC-nummer."
              variant="outlined"
              className={"inputPayment"}
            />
          </div>
          <p className={"pInput"} style={p}>
            Klarna
          </p>
          <div>
            <FormControlLabel
              className={"radioButtonPayment"}
              value="Klarna"
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label=""
            />
            <TextField
              style={textField}
              id="klarna"
              helperText="Fyll i ditt 12-siffriga personnummer."
              variant="outlined"
              className={"inputPayment"}
            />
          </div>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
