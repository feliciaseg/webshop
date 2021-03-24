const containsLetters = (input: string) => {
  const letters = /^[a-zA-Z]+$/;
  if (input.match(letters)) {
    return true;
  } else {
    return false;
  }
};

export function validateName(fieldValue: string): string {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (/\d/.test(fieldValue)) {
    //Checks if name contains numbers
    return "Fältet kan endast innehålla bokstäver";
  } else if (!/\s/.test(fieldValue)) {
    //Checks if there is a space in the string (to see if both first and last name is written)
    return "Skriv in både för- och efternamn.";
  } else {
    return "";
  }
}

export function validateAddress(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (!/\d/.test(fieldValue)) {
    // Checks so that the adress contains a number.
    return "Skriv in gatunumret.";
  } else if (!/\s/.test(fieldValue)) {
    //Checks if the adress contains a space
    return "Skriv in en giltig postadress.";
  } else {
    return "";
  }
}

export function validatePostalcode(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (fieldValue.length < 5 || fieldValue.length > 6) {
    //checks so that length is 6
    return "Fyll i ett giltigt postnummer";
  } else if (containsLetters(fieldValue)) {
    return "Postnumret kan ej innehålla bokstäver.";
  } else {
    return "";
  }
}

export function validateCity(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (/\d/.test(fieldValue)) {
    //checks so that there is no numbers
    return "Får ej innehålla siffror.";
  } else {
    return "";
  }
}

export function validateEmail(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (!fieldValue.includes("@")) {
    //checks that an "@" is included
    return "Skriv en giltig email-adress.";
  } else if (!fieldValue.includes(".")){
    return "Skriv en giltig email-adress."
  } else {
    return "";
  }
}

export function validatePhone(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (containsLetters(fieldValue)) {
    return "Fältet får endast innehålla siffror!";
  } else if (fieldValue.length !== 10) {
    return "Ange ditt telefonnummer";
  } else {
    return "";
  }
}

export function validateSwish(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (!/^[0-9]+$/.test(fieldValue) || fieldValue.length !== 10) {
    return "Vänligen skriv in ett giltigt telefonnummer.";
  } else {
    return "";
  }
}

export function validateCardNumber(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (
    !/^[0-9]+$/.test(fieldValue) ||
    fieldValue.length < 10 ||
    fieldValue.length > 14
  ) {
    return "Vänligen skriv in ett giltigt kortnummer";
  } else {
    return "";
  }
}

export function validateCVV(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (
    !/^[0-9]+$/.test(fieldValue) ||
    fieldValue.length < 3 ||
    fieldValue.length > 4
  ) {
    return "Vänligen skriv in ett giltigt CVV/CVC nummer";
  } else {
    return "";
  }
}

export function validateValidity(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (
    !/^[0-9/]+$/.test(fieldValue) ||
    fieldValue.length !== 5 ||
    !/^[/\/(\w+)/ig]+$/.test(fieldValue)
  ) {
    return "Vänligen skriv in giltighetsdatum i formatet MM/YY";
  } else {
    return "";
  }
}

export function validateKlarna(fieldValue: string) {
  if (fieldValue === "") {
    return "Var god fyll i fältet.";
  } else if (fieldValue.length !== 10 || !/^[0-9/]+$/.test(fieldValue)) {
    return "Vänligen skriv in ett 10-siffrigt personnummer";
  } else {
    return "";
  }
}
