import { FormControl, TextField, Box } from "@material-ui/core";
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

  const handleChange = (field: string, fieldValue: string) => {
    if (field === "name") {
      if (fieldValue === "") {
        setError((prevState) => ({
          ...prevState,
          nameError: "Var god fyll i fältet.",
        }));
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

    if (field === "address") {
      if (fieldValue === " ") {
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

    if (field === "postalcode") {
      if (fieldValue === "") {
        console.log("tomt fält");
        setError((prevState) => ({
          ...prevState,
          postalError: "Var god fyll i fältet.",
        }));
      } else if (fieldValue.length !== 5) {
        console.log(fieldValue.length);
        //checks so that length is 6
        setError((prevState) => ({
          ...prevState,
          postalError:
            "Fyll i ett giltigt postnummer (6 siffror utan mellanrum)",
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

    if (field === "city") {
      if (fieldValue === "") {
        console.log("tomt fält");
        setError((prevState) => ({
          ...prevState,
          cityError: "Var god fyll i fältet.",
        }));
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

    if (field === "email") {
      if (fieldValue === "") {
        console.log("tomt fält");
        setError((prevState) => ({
          ...prevState,
          emailError: "Var god fyll i fältet.",
        }));
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

    if (field === "phone") {
      if (fieldValue === "") {
        console.log("tomt fält");
        setError((prevState) => ({
          ...prevState,
          phoneError: "Var god fyll i fältet.",
        }));
      } else if (containsLetters(fieldValue)) {
        setError((prevState) => ({
          ...prevState,
          phoneError: "Fältet får endast innehålla siffror!",
        }));
      } else if (fieldValue.length !== 10) {
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
      <TextField
        value={value.nameValue}
        onChange={(e) => (
          setValue((prevState) => ({
            ...prevState,
            nameValue: e.target.value,
          })),
          handleChange("name", e.target.value)
        )}
        inputProps={{ autoComplete: "name", style: textFieldBackground }}
        style={textField}
        placeholder="Namn"
        variant="outlined"
        className={"userInput"}
        error={Boolean(error.nameError)}
        helperText={error.nameError}
      />
      <TextField
        value={value.adressValue}
        onChange={(e) => (
          setValue((prevState) => ({
            ...prevState,
            adressValue: e.target.value,
          })),
          handleChange("address", e.target.value)
        )}
        error={Boolean(error.adressError)}
        helperText={error.adressError}
        style={textField}
        inputProps={{ autoComplete: "address", style: textFieldBackground }}
        placeholder="Adress"
        variant="outlined"
        className={"userInput"}
      />
      <TextField
        value={value.postalValue}
        onChange={(e) => (
          setValue((prevState) => ({
            ...prevState,
            postalValue: e.target.value,
          })),
          handleChange("postalcode", e.target.value)
        )}
        error={Boolean(error.postalError)}
        helperText={error.postalError}
        style={textField}
        inputProps={{
          autoComplete: "shipping postal-code",
          style: textFieldBackground,
        }}
        placeholder="Postnummer"
        variant="outlined"
        className={"userInput"}
      />
      <TextField
        value={value.cityValue}
        onChange={(e) => (
          setValue((prevState) => ({
            ...prevState,
            cityValue: e.target.value,
          })),
          handleChange("city", e.target.value)
        )}
        error={Boolean(error.cityError)}
        helperText={error.cityError}
        style={textField}
        inputProps={{
          autoComplete: "shipping locality",
          style: textFieldBackground,
        }}
        placeholder="Stad"
        variant="outlined"
        className={"userInput"}
      />
      <TextField
        value={value.emailValue}
        onChange={(e) => (
          setValue((prevState) => ({
            ...prevState,
            emailValue: e.target.value,
          })),
          handleChange("email", e.target.value)
        )}
        error={Boolean(error.emailError)}
        helperText={error.emailError}
        style={textField}
        inputProps={{ autoComplete: "email", style: textFieldBackground }}
        placeholder="Mail"
        variant="outlined"
        className={"userInput"}
      />
      <TextField
        value={value.phoneValue}
        onChange={(e) => (
          setValue((prevState) => ({
            ...prevState,
            phoneValue: e.target.value,
          })),
          handleChange("phone", e.target.value)
        )}
        error={Boolean(error.phoneError)}
        helperText={error.phoneError}
        style={textField}
        placeholder="Telefonnummer"
        variant="outlined"
        className={"userInput"}
        inputProps={{ autoComplete: "phone", style: textFieldBackground }}
      />
    </Box>
  );
}

const textField: CSSProperties = {
  margin: "2rem 1.5rem 0.3rem 1.5rem",
};

const textFieldBackground: CSSProperties = {
  backgroundColor: theme.palette.secondary.main,
};

const box: CSSProperties = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
};
