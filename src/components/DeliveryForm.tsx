import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { DateTime } from "luxon";
import React, { CSSProperties } from "react";
import { theme } from "../styling/colorTheme";

export default function PaymentForm() {
  const dt = DateTime.now();

  const postnordDelivery = dt.plus({ days: 1 }).toLocaleString(DateTime.DATE_FULL);
  const instaboxDelivery = dt.plus({ days: 2 }).toLocaleString(DateTime.DATE_FULL);
  const homeDelivery = dt.plus({ days: 3 }).toLocaleString(DateTime.DATE_FULL);

  return (
    <Box className={"paymentBox"} style={box}>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1">
          <div>
            <FormControlLabel
              value="postnord"
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label={
                <p style={p}>
                  Postnord 39kr <br /> Leveras {postnordDelivery}
                </p>
              }
            />
          </div>

          <div>
            <FormControlLabel
              className={"radioButtonPayment"}
              value="instabox"
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              
              label={
                <p style={p}>
                  Instabox 39kr <br /> Levereras {instaboxDelivery}
                </p>
              }
            />
          </div>

          <div>
            <FormControlLabel
              className={"radioButtonPayment"}
              value="Klarna"
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label={
                <p style={p}>
                  Hemleverans 59kr <br /> Leveras {homeDelivery}
                </p>
              }
            />
          </div>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}


const box: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

const p: CSSProperties = {
  fontFamily: "Roboto",
  marginLeft:"2.5rem"
};
