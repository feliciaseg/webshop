import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@material-ui/core";
import React, { CSSProperties, useState } from "react";
import { theme } from "../styling/colorTheme";
import "../styling/style.css";

const textField: CSSProperties = {
  backgroundColor: "white",
  color: "black",
};

const cardInputs: CSSProperties = {
  display: "flex", 
  justifyContent: "space-between",
  margin: "1.2rem 0rem 0rem 3rem",
};

const textField2: CSSProperties = {
  backgroundColor: "white",
  color: "black",
};


const box: CSSProperties = {
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  //height: "25rem"
};

const p: CSSProperties = {
  fontFamily: "Roboto",
};

const errorText: CSSProperties = {
  fontFamily: "Roboto",
  color: "red"
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
              helperText= "Telefonnummer"
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
              helperText= "Kortnummber"
              variant="outlined"
              className={"inputPayment"}
            />
            <div className= {"cardInputs"} style = {cardInputs}>
            <TextField
              style={textField2}
              id="cvv"
              helperText= "CVVnummer"
              variant="outlined"
              className = {"inputSmallPayment"}
            />
            <TextField
              style={textField2}
              id="date"
              helperText= "Giltighetstid"
              variant="outlined"
              className = {"inputSmallPayment"}
              placeholder = {"MM/YY"}
            />
            </div>
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
              helperText="Personummer (12 siffror)"
              variant="outlined"
              className={"inputPayment"}
            />
          </div>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
