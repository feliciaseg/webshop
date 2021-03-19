import { FormControl, TextField, Box, Button } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";
import { useState } from "react";

export default function UserForm() {
  const [value, setValue] = useState({
    nameValue: "",
    adressValue: "",
    emailValue: "",
    phoneValue: "",
  });
  const [error, setError] = useState({
    nameError: "",
    adressError: "",
    emailError: "",
    phoneError: "",
  });

  const checkforLetters =(input: string) => 
  {
   var letters = /^[a-zA-Z]+$/;
   if((input.match(letters)) )
    {
     return true;
    }
  else
    { 
     return false; 
    }
    }




  const handleChange = (e: any, fieldValue: any, fieldError: any) => {
    
    if (fieldValue === value.nameValue) {
      if (fieldValue == "") {
        // setError((prevState) => ({ ...prevState, nameError: "Fältet måste fyllas i"}));
        console.log("tomt fält")
      } else if (/\d/.test(fieldValue)) {
        setError((prevState) => ({
          ...prevState,
          nameError: "Fältet kan endast innehålla bokstäver",
        }));
      } else {
          setError((prevState) => ({ ...prevState, nameError: ""}));
        }
    }
    
    
    
    if (fieldValue === value.adressValue) {
      if (fieldValue == "") {
        console.log("tomt fält")
        // setError((prevState) => ({
        //   ...prevState,
        //   adressError: "Var god fyll i fältet.",
        // }));
      }
    }



    if (fieldValue === value.emailValue) {
      if (fieldValue == "") {
        console.log("tomt fält")
        // setError((prevState) => ({
        //   ...prevState,
        //   emailError: "Var god fyll i fältet.",
        // }));
      }
    }



    if (fieldValue === value.phoneValue) {
      if (fieldValue == "") {
        console.log("tomt fält")
        // setError((prevState) => ({
        //   ...prevState,
        //   phoneError: "Var god fyll i fältet.",
        // }));
      }  else if (checkforLetters(fieldValue)) {
        setError((prevState) => ({
          ...prevState,
          phoneError: "Fältet får endast innehålla siffror!",
        }));
      }
    }

  };

  return (
    <Box className={"userBox"} style={box}>
      <form>
        <FormControl>
          <TextField
            value={value.nameValue}
            onChange={(e) => (
              handleChange(e.target.value, value.nameValue, error.nameError),
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
          <TextField
            value={value.adressValue}
            onChange={(e) => (
              handleChange(
                e.target.value,
                value.adressValue,
                error.adressError
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
          <TextField
            value={value.emailValue}
            onChange={(e) => (
              handleChange(e.target.value, value.emailValue, error.emailError),
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
          <TextField
            value={value.phoneValue}
            onChange={(e) => (
              handleChange(e.target.value, value.phoneValue, error.phoneError),
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
          <Button type="submit">Gå vidare</Button>
        </FormControl>
      </form>
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
