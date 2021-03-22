import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@material-ui/core";
import { DateTime } from "luxon";
import React, { CSSProperties, useEffect, useState } from "react";
import { theme } from "../styling/colorTheme";

interface DeliveryInfo {
  supplier: string;
  date: string;
}
interface Props {
  returnValues: (delivery: DeliveryInfo | undefined) => DeliveryInfo | void;
}

export default function DeliveryForm(props: Props) {
  const [delivery, setDelivery] = useState<DeliveryInfo>();
  const [validation, setValidation] = useState<boolean | undefined>(true);
  const dt = DateTime.now();
  const postnordDelivery = dt
    .plus({ days: 1 })
    .toLocaleString(DateTime.DATE_FULL);
  const instaboxDelivery = dt
    .plus({ days: 2 })
    .toLocaleString(DateTime.DATE_FULL);
  const homeDelivery = dt.plus({ days: 3 }).toLocaleString(DateTime.DATE_FULL);

  function handleChange(supplier: string, date: string) {
    setDelivery({ supplier: supplier, date: date });
    setValidation(false);
  }

  useEffect(() => {
    if (!validation) {
      props.returnValues(delivery);
    }
  }, [delivery]);

  return (
    <Box className={"deliveryBox"} style={box}>
      <FormControl error={validation} component="fieldset">
        <RadioGroup>
          <div>
            <FormControlLabel
              onChange={() => handleChange("postnord", postnordDelivery)}
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
              onChange={() => handleChange("instabox", instaboxDelivery)}
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
              onChange={() => handleChange("klarna", homeDelivery)}
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
          <FormHelperText>Vänligen välj en leveransmetod</FormHelperText>
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
  marginLeft: "2.5rem",
};
