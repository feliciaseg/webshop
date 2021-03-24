import { TextField, Box } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";
import { useEffect, useState } from "react";
import { Validation } from "../routes/CheckoutPage";
import {
  validateAddress,
  validateCity,
  validateName,
  validatePostalcode,
  validatePhone,
  validateEmail,
} from "../routes/validation";

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

  const handleChange = (field: string, fieldValue: string) => {
    setUser({ ...user, [field]: fieldValue });

    if (field === "name") {
      setError((prevState) => ({
        ...prevState,
        nameError: validateName(fieldValue),
      }));
    }
    if (field === "address") {
      setError((prevState) => ({
        ...prevState,
        adressError: validateAddress(fieldValue),
      }));
    }
    if (field === "postalcode") {
      setError((prevState) => ({
        ...prevState,
        postalError: validatePostalcode(fieldValue),
      }));
    }
    if (field === "city") {
      setError((prevState) => ({
        ...prevState,
        cityError: validateCity(fieldValue),
      }));
    }
    if (field === "email") {
      setError((prevState) => ({
        ...prevState,
        emailError: validateEmail(fieldValue),
      }));
    }
    if (field === "phone") {
      setError((prevState) => ({
        ...prevState,
        phoneError: validatePhone(fieldValue),
      }));
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
        inputProps={{ autoComplete: "street-address", style: inputField }}
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
          autoComplete: "postal-code",
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
          autoComplete: "address-level2",
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
        inputProps={{ autoComplete: "tel", style: inputField }}
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
