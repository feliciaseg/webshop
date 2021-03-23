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
import { theme } from "../styling/colorTheme";
import "../styling/style.css";

export interface PaymentInfo {
  swish?: string;
  card?: Card;
  klarna?: string;
}

interface Card {
  cardNumber?: string;
  cvv?: string;
  validity?: string;
}

interface Props {
  payment: PaymentInfo;
  setPayment: (payment: PaymentInfo) => void;
  validation: Validation;
  setValidation: (validation: Validation) => void;
}

export default function PaymentForm({
  payment,
  setPayment,
  validation,
  setValidation,
}: Props) {
  const [checkedOption, setCheckedOption] = useState({
    isChecked: false,
    option: "",
  });

  const [error, setError] = useState({
    swishError: "",
    cardError: "",
    cvvError: "",
    validityError: "",
    klarnaError: "",
  });

  function resetState() {
    setPayment({
      swish: "",
      card: {
        cardNumber: "",
        cvv: "",
        validity: "",
      },
      klarna: "",
    });
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
    if (checkedOption.option === "swish") {
      if (error.swishError.length === 0 && payment?.swish) {
        setValidation({ ...validation, paymentValidation: true });
      }
    } else if (checkedOption.option === "card") {
      if (
        error.cardError.length +
          error.cvvError.length +
          error.validityError.length ===
          0 &&
        (payment?.card?.cardNumber, payment?.card?.cvv, payment?.card?.validity)
      ) {
        setValidation({ ...validation, paymentValidation: true });
      }
    } else if (checkedOption.option === "klarna") {
      if (error.klarnaError.length === 0 && payment?.klarna) {
        setValidation({ ...validation, paymentValidation: true });
      }
    }
  }, [payment, error]);

  function handleRadioChange(radio: string) {
    setCheckedOption({
      option: radio,
      isChecked: true,
    });
    resetState();
  }

  function handleInputChange(field: string, fieldValue: string) {
    if (field === "cardNumber" || field === "cvv" || field === "validity") {
      setPayment({ card: { ...payment.card, [field]: fieldValue } });
    } else {
      setPayment({ [field]: fieldValue });
    }

    if (field === "swish") {
      validateSwish(fieldValue);
    }
    if (field === "card") {
      validateCardNumber(fieldValue);
    }
    if (field === "cvv") {
      validateCVV(fieldValue);
    }
    if (field === "validity") {
      validateValidity(fieldValue);
    }
    if (field === "klarna") {
      validateKlarna(fieldValue);
    }
  }

  function validateSwish(fieldValue: string) {
    if (fieldValue === "") {
      setError((prevState) => ({
        ...prevState,
        swishError: "Var god fyll i fältet.",
      }));
    } else if (!/^[0-9]+$/.test(fieldValue) || fieldValue.length !== 10) {
      setError((prevState) => ({
        ...prevState,
        swishError: "Vänligen skriv in ett giltigt telefonnummer.",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        swishError: "",
      }));
    }
  }
  function validateCardNumber(fieldValue: string) {
    if (fieldValue === "") {
      setError((prevState) => ({
        ...prevState,
        cardError: "Var god fyll i fältet.",
      }));
    } else if (!/^[0-9]+$/.test(fieldValue)) {
      setError((prevState) => ({
        ...prevState,
        cardError: "Vänligen skriv in ett giltigt kortnummer",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        cardError: "",
      }));
    }
  }
  function validateCVV(fieldValue: string) {
    if (fieldValue === "") {
      setError((prevState) => ({
        ...prevState,
        cvvError: "Var god fyll i fältet.",
      }));
    } else if (!/^[0-9]+$/.test(fieldValue)) {
      setError((prevState) => ({
        ...prevState,
        cvvError: "Vänligen skriv in ett giltigt CVV/CVC nummer",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        cvvError: "",
      }));
    }
  }
  function validateValidity(fieldValue: string) {
    if (fieldValue === "") {
      setError((prevState) => ({
        ...prevState,
        validityError: "Var god fyll i fältet.",
      }));
    } else if (
      !/^[0-9/]+$/.test(fieldValue) ||
      fieldValue.length > 5 ||
      fieldValue.length < 4
    ) {
      setError((prevState) => ({
        ...prevState,
        validityError: "Vänligen skriv in giltighetsdatum i formatet MM/YY",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        validityError: "",
      }));
    }
  }
  function validateKlarna(fieldValue: string) {
    if (fieldValue === "") {
      setError((prevState) => ({
        ...prevState,
        klarnaError: "Var god fyll i fältet.",
      }));
    } else if (fieldValue.length !== 10) {
      setError((prevState) => ({
        ...prevState,
        klarnaError: "Vänligen skriv in ett 10-siffrigt personnummer",
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        klarnaError: "",
      }));
    }
  }

  return (
    <div style={paymentContainer}>
      <FormControl error={!checkedOption.isChecked}>
        <RadioGroup style={radioContainer}>
          <p style={heading}>Swish</p>
          <div style={radioContainer}>
            <FormControlLabel
              style={radioButton}
              className="radioButton"
              value="Swish"
              onChange={() => handleRadioChange("swish")}
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label={
                <TextField
                  style={textField}
                  id="swish"
                  type="tel"
                  helperText={error.swishError}
                  value={payment.swish}
                  error={Boolean(error.swishError)}
                  onChange={(e) => handleInputChange("swish", e.target.value)}
                  placeholder={"Telefonnummer"}
                  disabled={checkedOption.option === "swish" ? false : true}
                  variant="outlined"
                  required
                  inputProps={{ style: textFieldBackground }}
                />
              }
            />
          </div>
          <p style={heading}>Kort</p>
          <div style={radioContainer}>
            <FormControlLabel
              style={radioButton}
              className="radioButton"
              value="Kort"
              onChange={() => handleRadioChange("card")}
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label={
                <div style={columnContainer}>
                  <TextField
                    style={textField}
                    id="kort"
                    helperText={error.cardError}
                    value={payment.card?.cardNumber}
                    error={Boolean(error.cardError)}
                    onChange={(e) =>
                      handleInputChange("cardNumber", e.target.value)
                    }
                    placeholder={"Kortnummer"}
                    disabled={checkedOption.option === "card" ? false : true}
                    variant="outlined"
                    inputProps={{
                      style: textFieldBackground,
                      autoComplete: "cc-number",
                    }}
                  />
                  <div className="rowContainer">
                    <TextField
                      className="textFieldRow"
                      id="cvv"
                      helperText={error.cvvError}
                      value={payment.card?.cvv}
                      error={Boolean(error.cvvError)}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      placeholder={"CVV/CVC"}
                      disabled={checkedOption.option === "card" ? false : true}
                      variant="outlined"
                      inputProps={{
                        style: textFieldBackground,
                        autoComplete: "cc-csc",
                      }}
                    />
                    <TextField
                      className="textFieldRow"
                      id="date"
                      helperText={error.validityError}
                      value={payment.card?.validity}
                      error={Boolean(error.validityError)}
                      onChange={(e) =>
                        handleInputChange("validity", e.target.value)
                      }
                      disabled={checkedOption.option === "card" ? false : true}
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
              value="Klarna"
              onChange={() => handleRadioChange("klarna")}
              control={<Radio style={{ color: theme.palette.primary.main }} />}
              label={
                <TextField
                  style={textField}
                  id="klarna"
                  helperText={error.klarnaError}
                  value={payment.klarna}
                  error={Boolean(error.klarnaError)}
                  onChange={(e) => handleInputChange("klarna", e.target.value)}
                  placeholder={"Personnummer"}
                  disabled={checkedOption.option === "klarna" ? false : true}
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
          {checkedOption.isChecked ? null : "Vänligen välj en betalmetod"}
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
  padding: "2rem",
};

const radioButton: CSSProperties = {
  width: "100%",
  alignSelf: "flex-start",
  marginTop: "0.5rem",
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
  margin: "1rem 0 0 3rem",
};

const helperText: CSSProperties = {
  margin: "0.5rem 0 0 3rem",
};
