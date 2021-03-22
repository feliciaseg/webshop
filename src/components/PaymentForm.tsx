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

export default function PaymentForm() {
  const [checkedOption, setCheckedOption] = useState({
    isChecked: false,
    option: "",
  });

  const [value, setValue] = useState({
    swish: "",
    card: {
      cardNumber: "",
      cvv: "",
      validity: "",
    },
    klarna: "",
  });

  const [error, setError] = useState({
    swishError: "",
    cardError: "",
    cvvError: "",
    validityError: "",
    klarnaError: "",
  });

  function resetState() {
    setValue({
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
  }

  function handleChange(field: string, fieldValue: string) {
    console.log(fieldValue);
    console.log(field);
    if (field === "swish") {
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
    if (field === "card") {
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
    if (field === "cvv") {
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
    if (field === "validity") {
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
    if (field === "klarna") {
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
  }

  return (
    <div style={paymentContainer}>
      <RadioGroup style={radioContainer}>
        <p style={heading}>Swish</p>
        <div style={radioContainer}>
          <FormControlLabel
            style={radioButton}
            className="radioButton"
            value="Swish"
            onChange={() => (
              setCheckedOption({ isChecked: true, option: "swish" }),
              resetState()
            )}
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <TextField
                style={textField}
                id="swish"
                type="tel"
                helperText={error.swishError}
                value={String(value.swish)}
                error={Boolean(error.swishError)}
                onChange={(e) => (
                  handleChange("swish", e.target.value),
                  setValue({
                    ...value,
                    swish: e.target.value,
                  })
                )}
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
            onChange={() => (
              setCheckedOption({ isChecked: true, option: "card" }),
              resetState()
            )}
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <div style={columnContainer}>
                <TextField
                  style={textField}
                  id="kort"
                  helperText={error.cardError}
                  value={value.card.cardNumber}
                  error={Boolean(error.cardError)}
                  onChange={(e) => (
                    handleChange("card", e.target.value),
                    setValue({
                      ...value,
                      card: { ...value.card, cardNumber: e.target.value },
                    })
                  )}
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
                    value={value.card.cvv}
                    error={Boolean(error.cvvError)}
                    onChange={(e) => (
                      handleChange("cvv", e.target.value),
                      setValue({
                        ...value,
                        card: { ...value.card, cvv: e.target.value },
                      })
                    )}
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
                    value={value.card.validity}
                    error={Boolean(error.validityError)}
                    onChange={(e) => (
                      handleChange("validity", e.target.value),
                      setValue({
                        ...value,
                        card: { ...value.card, validity: e.target.value },
                      })
                    )}
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
            onChange={() => (
              setCheckedOption({ isChecked: true, option: "klarna" }),
              resetState()
            )}
            control={<Radio style={{ color: theme.palette.primary.main }} />}
            label={
              <TextField
                style={textField}
                id="klarna"
                helperText={error.klarnaError}
                value={value.klarna}
                error={Boolean(error.klarnaError)}
                onChange={(e) => (
                  handleChange("klarna", e.target.value),
                  setValue({
                    ...value,
                    klarna: e.target.value,
                  })
                )}
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
  margin: "1rem 0 0 2rem",
};
