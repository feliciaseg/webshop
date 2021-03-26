import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { CSSProperties, useEffect, useState } from "react";
import { Validation } from "../routes/CheckoutPage";
import {
  validateCardNumber,
  validateCVV,
  validateKlarna,
  validateSwish,
  validateValidity,
} from "../../src/validation";
import { theme } from "../styling/colorTheme";
import "../styling/style.css";

export interface PaymentInfo {
  swish: string;
  card: Card;
  klarna: string;
}

export interface Card {
  cardNumber: string;
  cvv: string;
  validity: string;
}

interface Props {
  userPhone: string;
  paymentInfo: PaymentInfo;
  setPaymentInfo: (paymentInfo: PaymentInfo) => void;
  paymentOption: string;
  setPaymentOption: (paymentOption: string) => void;
  validation: Validation;
  setValidation: (validation: Validation) => void;
}

export default function PaymentForm({
  userPhone,
  paymentInfo,
  setPaymentInfo,
  paymentOption,
  setPaymentOption,
  validation,
  setValidation,
}: Props) {
  const [error, setError] = useState({
    swishError: "",
    cardError: "",
    cvvError: "",
    validityError: "",
    klarnaError: "",
  });

  function resetState() {
    setError({
      swishError: "",
      cardError: "",
      cvvError: "",
      validityError: "",
      klarnaError: "",
    });
    setValidation({ ...validation, paymentValidation: false });
  }

  useEffect(() => {
    if (paymentOption === "swish") {
      if (error.swishError.length === 0 && paymentInfo?.swish) {
        setValidation({ ...validation, paymentValidation: true });
      }
    } else if (paymentOption === "card") {
      if (
        error.cardError.length +
          error.cvvError.length +
          error.validityError.length ===
          0 &&
        (paymentInfo.card.cardNumber,
        paymentInfo.card.cvv,
        paymentInfo.card.validity)
      ) {
        setValidation({ ...validation, paymentValidation: true });
      }
    } else if (paymentOption === "klarna") {
      if (error.klarnaError.length === 0 && paymentInfo.klarna) {
        setValidation({ ...validation, paymentValidation: true });
      }
    }
  }, [paymentInfo, error]);

  function handleRadioChange(radio: string) {
    setPaymentOption(radio);
    resetState();
  }

  function handleInputChange(field: string, fieldValue: string) {
    if (field === "cardNumber" || field === "cvv" || field === "validity") {
      setPaymentInfo({
        ...paymentInfo,
        card: { ...paymentInfo.card, [field]: fieldValue },
      });
    } else {
      setPaymentInfo({ ...paymentInfo, [field]: fieldValue });
    }

    if (field === "swish") {
      setError((prevState) => ({
        ...prevState,
        swishError: validateSwish(fieldValue),
      }));
    }
    if (field === "cardNumber") {
      setError((prevState) => ({
        ...prevState,
        cardError: validateCardNumber(fieldValue),
      }));
    }
    if (field === "cvv") {
      setError((prevState) => ({
        ...prevState,
        cvvError: validateCVV(fieldValue),
      }));
    }
    if (field === "validity") {
      setError((prevState) => ({
        ...prevState,
        validityError: validateValidity(fieldValue),
      }));
    }
    if (field === "klarna") {
      setError((prevState) => ({
        ...prevState,
        klarnaError: validateKlarna(fieldValue),
      }));
    }
  }

  return (
    <div className="modalContainer" style={paymentContainer}>
      <FormControl error={Boolean(!paymentOption)}>
        <RadioGroup style={radioContainer} value={paymentOption}>
          <p style={heading}>Swish</p>
          <div style={radioContainer}>
            <FormControlLabel
              style={radioButton}
              className="radioButton"
              value="swish"
              onChange={() => {
                handleRadioChange("swish");
                handleInputChange("swish", userPhone);
              }}
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label={
                <TextField
                  style={textField}
                  helperText={error.swishError}
                  value={paymentInfo.swish}
                  error={Boolean(error.swishError)}
                  onChange={(e) => handleInputChange("swish", e.target.value)}
                  placeholder={"Telefonnummer"}
                  disabled={paymentOption === "swish" ? false : true}
                  variant="outlined"
                  required
                  inputProps={{
                    style: textFieldBackground,
                    autoComplete: "tel",
                  }}
                />
              }
            />
          </div>
          <p style={heading}>Kort</p>
          <div style={radioContainer}>
            <FormControlLabel
              style={radioButton}
              className="radioButton"
              value="card"
              onChange={() => {
                handleRadioChange("card");
                handleInputChange("cardNumber", "");
                handleInputChange("cvv", "");
                handleInputChange("validity", "");
              }}
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label={
                <div style={columnContainer}>
                  <TextField
                    style={textField}
                    helperText={error.cardError}
                    value={paymentInfo.card.cardNumber}
                    error={Boolean(error.cardError)}
                    onChange={(e) =>
                      handleInputChange("cardNumber", e.target.value)
                    }
                    placeholder={"Kortnummer"}
                    disabled={paymentOption === "card" ? false : true}
                    variant="outlined"
                    inputProps={{
                      style: textFieldBackground,
                      autoComplete: "cc-number",
                    }}
                  />
                  <div className="rowContainer">
                    <TextField
                      className="textFieldRow"
                      helperText={error.cvvError}
                      value={paymentInfo.card.cvv}
                      error={Boolean(error.cvvError)}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      placeholder={"CVV/CVC"}
                      disabled={paymentOption === "card" ? false : true}
                      variant="outlined"
                      inputProps={{
                        style: textFieldBackground,
                        autoComplete: "cc-csc",
                      }}
                    />
                    <TextField
                      className="textFieldRow"
                      helperText={error.validityError}
                      value={paymentInfo.card.validity}
                      error={Boolean(error.validityError)}
                      onChange={(e) =>
                        handleInputChange("validity", e.target.value)
                      }
                      disabled={paymentOption === "card" ? false : true}
                      variant="outlined"
                      placeholder={"Giltighetsperiod MM/YY"}
                      inputProps={{
                        style: textFieldBackground,
                        autoComplete: "cc-exp",
                      }}
                    />
                  </div>
                </div>
              }
            />
          </div>
          <p style={heading}>Klarna</p>
          <div style={radioContainer}>
            <FormControlLabel
              style={radioButton}
              className="radioButton"
              value="klarna"
              onChange={() => {
                handleRadioChange("klarna");
                handleInputChange("klarna", "");
              }}
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label={
                <TextField
                  style={textField}
                  helperText={error.klarnaError}
                  value={paymentInfo.klarna}
                  error={Boolean(error.klarnaError)}
                  onChange={(e) => handleInputChange("klarna", e.target.value)}
                  placeholder={"Personnummer"}
                  disabled={paymentOption === "klarna" ? false : true}
                  variant="outlined"
                  className={"inputPayment"}
                  inputProps={{
                    style: textFieldBackground,
                    autoComplete: "on",
                  }}
                />
              }
            />
          </div>
        </RadioGroup>
        <FormHelperText style={helperText}>
          {paymentOption ? null : "Vänligen välj en betalmetod."}
        </FormHelperText>
      </FormControl>
    </div>
  );
}

const paymentContainer: CSSProperties = {
  width: "100%",
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const radioButton: CSSProperties = {
  width: "100%",
  alignSelf: "flex-start",
  margin: "0.5rem 0 0 0",
};

const textField: CSSProperties = {
  width: "100%",
  margin: "0.5rem 0",
};

const textFieldBackground: CSSProperties = {
  backgroundColor: "#ffff",
  borderRadius: 0,
};

const radioContainer: CSSProperties = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
};

const columnContainer: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const heading: CSSProperties = {
  margin: "1rem 0 0 2.5rem",
};

const helperText: CSSProperties = {
  margin: "0.5rem 0 0 2.5rem",
};
