import {
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
} from "@material-ui/core";
import { DateTime } from "luxon";
import { CSSProperties, useEffect, useState } from "react";
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
  const [validation, setValidation] = useState(false);
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
    setValidation(true);
  }

  useEffect(() => {
    if (validation) {
      props.returnValues(delivery);
    }
  }, [delivery]);

  return (
    <Box style={box}>
      <RadioGroup>
        <FormControl error={!validation} component="fieldset">
          <FormControlLabel
            onChange={() => handleChange("postnord", postnordDelivery)}
            value="postnord"
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <p style={label}>
                Postnord 39kr <br /> Levereras {postnordDelivery}
              </p>
            }
          />
          <FormControlLabel
            onChange={() => handleChange("instabox", instaboxDelivery)}
            value="instabox"
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <p style={label}>
                Instabox 39kr <br /> Levereras {instaboxDelivery}
              </p>
            }
          />
          <FormControlLabel
            onChange={() => handleChange("klarna", homeDelivery)}
            value="Klarna"
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <p style={label}>
                Hemleverans 59kr <br /> Levereras {homeDelivery}
              </p>
            }
          />
          <FormHelperText style={helperText}>
            {validation ? null : "Vänligen välj en leveransmetod"}
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
