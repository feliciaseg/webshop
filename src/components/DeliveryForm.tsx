import { Box, FormControl, RadioGroup, FormControlLabel, Radio, TextField } from "@material-ui/core";
import React, { Component, CSSProperties } from "react";
import { theme } from "../styling/colorTheme";



export default function PaymentForm() {
let date = new Date()
let postnordDeliveryDate = date.setDate(date.getDate() + 1);





console.log(postnordDeliveryDate.toLocaleString())
    return (
      <Box className={"paymentBox"} style={box}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1">
         
            <div>
              <FormControlLabel
                value="postnord"
                control={<Radio style={{ color: theme.palette.primary.main }} />}
                label={<p style = {p}>Postnord 39kr <br/> Leveras då</p>}
              />
            </div>
           
            <div>
              <FormControlLabel
                className={"radioButtonPayment"}
                value="Kort"
                control={<Radio style={{ color: theme.palette.primary.main }} />}
                label={<p style = {p}>Instabox 39kr <br/> Leveras då</p>}
              />
              
            </div>
           
            <div>
              <FormControlLabel
                className={"radioButtonPayment"}
                value="Klarna"
                control={<Radio style={{ color: theme.palette.primary.main }} />}
                label={<p style = {p}>Hemleverans 59kr <br/> Leveras då</p>}
              />

            </div>
          </RadioGroup>
        </FormControl>
      </Box>
    );
  }
  


const textField: CSSProperties = {
    backgroundColor: "white",
    color: "black",
  };
  const box: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  };
  
  const p: CSSProperties = {
    fontFamily: "Roboto",
  };