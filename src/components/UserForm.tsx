import { FormControl, TextField, Box} from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";
import { useState } from "react";

export default function UserForm() {
  const [value, setValue] = useState({
    nameValue: "",
    adressValue: "",
    postalValue: "",
    cityValue: "",
    emailValue: "",
    phoneValue: "",
  });
  const [error, setError] = useState({
    nameError: "",
    adressError: "",
    postalError: "",
    cityError: "",
    emailError: "",
    phoneError: "",
  });

  const containsLetters = (input: string) => {
    const letters = /^[a-zA-Z]+$/;
    if (input.match(letters)) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (e: any, fieldValue: string) => {
    if (fieldValue === value.nameValue) {
      if (fieldValue === "") {
        setError((prevState) => ({ ...prevState, nameError: "Var god fyll i fältet."}));
        console.log("tomt fält");
      } else if (/\d/.test(fieldValue)) {
        //Checks if name contains numbers
        setError((prevState) => ({
          ...prevState,
          nameError: "Fältet kan endast innehålla bokstäver",
        }));
      } else if (!/\s/.test(fieldValue)) {
        //Checks if there is a space in the string (to see if both first and last name is written)
        setError((prevState) => ({
          ...prevState,
          nameError: "Skriv in både för- och efternamn.",
        }));
      } else {
        setError((prevState) => ({ ...prevState, nameError: "" }));
      }
    }

    if (fieldValue === value.adressValue) {
      if (fieldValue === " ") {
        console.log("tomt fält");
        setError((prevState) => ({
          ...prevState,
          adressError: "Var god fyll i fältet.",
        }));
      } else if (!/\d/.test(fieldValue)) {
        // Checks so that the adress contains a number.
        setError((prevState) => ({
          ...prevState,
          adressError: "Skriv in gatunumret.",
        }));
      } else if (!/\s/.test(fieldValue)) {
        //Checks if the adress contains a space
        setError((prevState) => ({
          ...prevState,
          adressError: "Skriv in en giltig postadress.",
        }));
      } else {
        setError((prevState) => ({ ...prevState, adressError: "" }));
      }
    }

    if (fieldValue === value.postalValue) {
      if (fieldValue === "") {
        console.log("tomt fält");
        setError((prevState) => ({
          ...prevState,
          postalError: "Var god fyll i fältet.",
        }));
      } else if (fieldValue.length > 4 || fieldValue.length < 4) {
        //checks so that length is 5
        setError((prevState) => ({
          ...prevState,
          postalError:
            "Fyll i ett giltigt postnummer (5 siffror utan mellanrum)",
        }));
      } else if (containsLetters(fieldValue)) {
        setError((prevState) => ({
          ...prevState,
          postalError: "Postnumret kan ej innehålla bokstäver.",
        }));
      } else {
        setError((prevState) => ({ ...prevState, postalError: "" }));
      }
    }

    if (fieldValue === value.cityValue) {
      if (fieldValue === "") {
        console.log("tomt fält");
        // setError((prevState) => ({
        //   ...prevState,
        //   cityError: "Var god fyll i fältet.",
        // }));
      } else if (/\d/.test(fieldValue)) {
        //checks so that there is no numbers
        setError((prevState) => ({
          ...prevState,
          cityError: "Får ej innehålla siffror.",
        }));
      } else {
        setError((prevState) => ({ ...prevState, cityError: "" }));
      }
    }

    if (fieldValue === value.emailValue) {
      if (fieldValue === "") {
        console.log("tomt fält");
        // setError((prevState) => ({
        //   ...prevState,
        //   emailError: "Var god fyll i fältet.",
        // }));
      } else if (!fieldValue.includes("@")) {
        //checks that an "@" is included
        setError((prevState) => ({
          ...prevState,
          emailError: "Skriv en giltig email-adress.",
        }));
      } else {
        setError((prevState) => ({ ...prevState, emailError: "" }));
      }
    }

    if (fieldValue === value.phoneValue) {
      if (fieldValue === "") {
        console.log("tomt fält");
        // setError((prevState) => ({
        //   ...prevState,
        //   phoneError: "Var god fyll i fältet.",
        // }));
      } else if (containsLetters(fieldValue)) {
        setError((prevState) => ({
          ...prevState,
          phoneError: "Fältet får endast innehålla siffror!",
        }));
      } else if (fieldValue.length > 9 || fieldValue.length < 9) {
        setError((prevState) => ({
          ...prevState,
          phoneError: "Ange ditt telefonnummer",
        }));
      } else {
        setError((prevState) => ({ ...prevState, phoneError: "" }));
      }
    }
  };

  return (
    <Box className={"userBox"} style={box}>
        <FormControl>
          <TextField
            value={value.nameValue}
            onChange={(e) => (
              handleChange(e.target.value, value.nameValue),
              setValue((prevState) => ({
                ...prevState,
                nameValue: e.target.value,
              }))
            )}
            inputProps={{ autoComplete: "name" }}
            style={textField}
            id="name"
            placeholder="Namn"
            variant="outlined"
            className={"userInput"}
            error={Boolean(error.nameError)}
            helperText={error.nameError}
          />
          </FormControl>
          <FormControl>
          <TextField
            value={value.adressValue}
            onChange={(e) => (
              handleChange(
                e.target.value,
                value.adressValue
              ),
              setValue((prevState) => ({
                ...prevState,
                adressValue: e.target.value,
              }))
            )}
            error={Boolean(error.adressError)}
            helperText={error.adressError}
            style={textField}
            inputProps={{ autoComplete: "address" }}
            id="address"
            placeholder="Adress"
            variant="outlined"
            className={"userInput"}
          />
          </FormControl>
          <FormControl>
          <TextField
            value={value.postalValue}
            onChange={(e) => (
              handleChange(
                e.target.value,
                value.postalValue
              ),
              setValue((prevState) => ({
                ...prevState,
                postalValue: e.target.value,
              }))
            )}
            error={Boolean(error.postalError)}
            helperText={error.postalError}
            style={textField}
            inputProps={{ autoComplete: "shipping postal-code" }}
            id="postalcode"
            placeholder="Postnummer"
            variant="outlined"
            className={"userInput"}
          />
          </FormControl>
          <FormControl>
          <TextField
            value={value.cityValue}
            onChange={(e) => (
              handleChange(e.target.value, value.cityValue),
              setValue((prevState) => ({
                ...prevState,
                cityValue: e.target.value,
              }))
            )}
            error={Boolean(error.cityError)}
            helperText={error.cityError}
            style={textField}
            inputProps={{ autoComplete: "shipping locality"}}
            placeholder="Stad"
            variant="outlined"
            className={"userInput"}
          />
</FormControl>
<FormControl>
          <TextField
            value={value.emailValue}
            onChange={(e) => (
              handleChange(e.target.value, value.emailValue),
              setValue((prevState) => ({
                ...prevState,
                emailValue: e.target.value,
              }))
            )}
            error={Boolean(error.emailError)}
            helperText={error.emailError}
            style={textField}
            inputProps={{ autoComplete: "email" }}
            id="email"
            placeholder="Mail"
            variant="outlined"
            className={"userInput"}
          />
          </FormControl>
          <FormControl>
          <TextField
            value={value.phoneValue}
            onChange={(e) => (
              handleChange(e.target.value, value.phoneValue),
              setValue((prevState) => ({
                ...prevState,
                phoneValue: e.target.value,
              }))
            )}
            error={Boolean(error.phoneError)}
            helperText={error.phoneError}
            style={textField}
            id="phone"
            placeholder="Telefonnummer"
            variant="outlined"
            className={"userInput"}
            inputProps={{ autoComplete: "phone" }}
          />
        </FormControl>
    
    </Box>
  );
}

const textField: CSSProperties = {
  backgroundColor: theme.palette.secondary.main,
  margin: "2rem 1.5rem 0.3rem 1.5rem",
};

const box: CSSProperties = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
};
