import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@material-ui/core";
import { DateTime } from "luxon";
import { CSSProperties } from "react";
import { theme } from "../styling/colorTheme";
import { Validation } from "../routes/CheckoutPage";

export interface DeliveryInfo {
  supplier?: string;
  date?: string;
  price?: number;
}
interface Props {
  delivery: DeliveryInfo;
  setDelivery: (delivery: DeliveryInfo) => void;
  validation: Validation;
  setValidation: (validation: Validation) => void;
}

export default function DeliveryForm({
  delivery,
  setDelivery,
  validation,
  setValidation,
}: Props) {
  const dt = DateTime.now();
  const postnordDelivery = dt
    .plus({ days: 1 })
    .toLocaleString(DateTime.DATE_FULL);
  const instaboxDelivery = dt
    .plus({ days: 2 })
    .toLocaleString(DateTime.DATE_FULL);
  const homeDelivery = dt.plus({ days: 3 }).toLocaleString(DateTime.DATE_FULL);

  function handleChange(supplier: string, date: string, price: number) {
    setDelivery({
      supplier: supplier,
      date: date,
      price: price,
    });
    setValidation({
      ...validation,
      deliveryValidation: true,
    });
  }

  return (
    <Box style={box}>
      <RadioGroup>
        <FormControl
          error={!validation.deliveryValidation}
          component="fieldset"
        >
          <FormControlLabel
            onChange={() => handleChange("postnord", postnordDelivery, 39)}
            value="postnord"
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <p style={label}>
                Postnord 39kr <br /> Levereras {postnordDelivery}
              </p>
            }
          />
          <FormControlLabel
            onChange={() => handleChange("instabox", instaboxDelivery, 49)}
            value="instabox"
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <p style={label}>
                Instabox 49kr <br /> Levereras {instaboxDelivery}
              </p>
            }
          />
          <FormControlLabel
            onChange={() => handleChange("klarna", homeDelivery, 59)}
            value="Klarna"
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <p style={label}>
                Hemleverans 59kr <br /> Levereras {homeDelivery}
              </p>
            }
          />
          <FormHelperText style={helperText}>
            {validation.deliveryValidation
              ? null
              : "Vänligen välj en leveransmetod"}
          </FormHelperText>
        </FormControl>
      </RadioGroup>
    </Box>
  );
}

const box: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
};

const label: CSSProperties = {
  margin: "0 0 1.5rem 0",
};

const helperText: CSSProperties = {
  margin: "0 0 0 3rem",
};
