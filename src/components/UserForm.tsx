import { TextField, Box } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";
import { useEffect, useState } from "react";
import { Validation } from "../routes/CheckoutPage";

export interface UserInfo {
  name?: string;
  adress?: string;
  postal?: string;
  city?: string;
  email?: string;
  phone?: string;
}

interface Props {
  user: UserInfo;
  setUser: (user: UserInfo) => void;
  validation: Validation;
  setValidation: (validation: Validation) => void;
}

export default function UserForm({
  user,
  setUser,
  validation,
  setValidation,
}: Props) {
  const [error, setError] = useState({
    nameError: "",
    adressError: "",
    postalError: "",
    cityError: "",
    emailError: "",
    phoneError: "",
  });

  useEffect(() => {
    if (
      error.nameError.length +
        error.adressError.length +
        error.postalError.length +
        error.cityError.length +
        error.emailError.length +
        error.phoneError.length ===
        0 &&
      (user!.name,
      user!.adress,
      user!.postal,
      user!.city,
      user!.email,
      user!.phone)
    ) {
      setValidation({ ...validation, userValidation: true });
    }
  }, [user, error]);

  const containsLetters = (input: string) => {
    const letters = /^[a-zA-Z]+$/;
    if (input.match(letters)) {
      return true;
    } else {
      return false;
    }
  };

  const validateName = (fieldValue: string) => {
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
  };

  const handleChange = (field: string, fieldValue: string) => {
    setUser({ ...user, [field]: fieldValue });

    if (field === "name") {
      validateName(fieldValue);
    }

    if (field === "address") {
      if (fieldValue === "") {
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
        setError((prevState) => ({
          ...prevState,
          postalError: "Var god fyll i fältet.",
        }));
      } else if (fieldValue.length !== 5) {
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
    <Box style={box}>
      <TextField
        value={user.name}
        onChange={(e) => handleChange("name", e.target.value)}
        inputProps={{ autoComplete: "name", style: inputField }}
        style={textField}
        placeholder="Namn"
        variant="outlined"
        error={Boolean(error.nameError)}
        helperText={error.nameError}
      />
      <TextField
        value={user.adress}
        onChange={(e) => handleChange("address", e.target.value)}
        error={Boolean(error.adressError)}
        helperText={error.adressError}
        style={textField}
        inputProps={{ autoComplete: "address", style: inputField }}
        placeholder="Adress"
        variant="outlined"
      />
      <TextField
        value={user.postal}
        onChange={(e) => handleChange("postalcode", e.target.value)}
        error={Boolean(error.postalError)}
        helperText={error.postalError}
        style={textField}
        inputProps={{
          autoComplete: "shipping postal-code",
          style: inputField,
        }}
        name="ZipCode"
        placeholder="Postnummer"
        variant="outlined"
      />
      <TextField
        value={user.city}
        onChange={(e) => handleChange("city", e.target.value)}
        error={Boolean(error.cityError)}
        helperText={error.cityError}
        style={textField}
        inputProps={{
          autoComplete: "shipping locality",
          style: inputField,
        }}
        placeholder="Stad"
        variant="outlined"
      />
      <TextField
        value={user.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={Boolean(error.emailError)}
        helperText={error.emailError}
        style={textField}
        inputProps={{ autoComplete: "email", style: inputField }}
        placeholder="Mail"
        variant="outlined"
      />
      <TextField
        value={user.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={Boolean(error.phoneError)}
        helperText={error.phoneError}
        style={textField}
        placeholder="Telefonnummer"
        variant="outlined"
        inputProps={{ autoComplete: "phone", style: inputField }}
      />
    </Box>
  );
}

const textField: CSSProperties = {
  margin: "0 0 1.5rem 0",
  width: "100%",
};

const inputField: CSSProperties = {
  backgroundColor: theme.palette.secondary.main,
};

const box: CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
};
