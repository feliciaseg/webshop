import { CSSProperties } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ModalContext } from "../contexts/ModalContext";
import { Product } from "../products";

export default function AddModalContent() {
  const products = useContext(ProductContext);
  const modal = useContext(ModalContext);

  const [formValidation, setFormValidation] = useState(false);
  const [nameValidation, setNameValidation] = useState<undefined | boolean>(
    undefined
  );
  const [idValidation, setIdValidation] = useState<undefined | boolean>(
    undefined
  );
  const [urlValidation, setUrlValidation] = useState<undefined | boolean>(
    undefined
  );
  const [priceValidation, setPriceValidation] = useState<undefined | boolean>(
    undefined
  );
  const [descriptionValidation, setDescriptionValidation] = useState<
    undefined | boolean
  >(undefined);

  const [inputValues, setInputValues] = useState<Product>({
    imageUrl: "",
    id: "",
    name: "",
    price: 0,
    description: "",
  });

  function handleChange(key: string, value: string | number) {
    setInputValues({ ...inputValues, [key]: value });
    if (value !== 0 && value !== "") {
      switch (key) {
        case "name":
          return setNameValidation(false);
        case "id":
          return setIdValidation(false);
        case "imageUrl":
          return setUrlValidation(false);
        case "price":
          return setPriceValidation(false);
        case "description":
          return setDescriptionValidation(false);
      }
    }
  }

  function createProduct(e: any) {
    if (formValidation) {
      products.addProduct(inputValues);
      modal.setModalIsOpen(false);
    }
    e.preventDefault();
  }

  function checkValidation() {
    if (
      nameValidation &&
      idValidation &&
      urlValidation &&
      priceValidation &&
      descriptionValidation
    ) {
      setFormValidation(false);
    } else {
      setFormValidation(true);
    }

    if (!inputValues.name) {
      setNameValidation(true);
    }
    if (!inputValues.id) {
      setIdValidation(true);
    }
    if (!inputValues.imageUrl) {
      setUrlValidation(true);
    }
    if (!inputValues.price) {
      setPriceValidation(true);
    }
    if (!inputValues.description) {
      setDescriptionValidation(true);
    }
  }

  return (
    <form onSubmit={(e) => createProduct(e)} autoComplete="off">
      <TextField
        id="name"
        label="Produktnamn"
        margin="normal"
        variant="outlined"
        fullWidth
        required={true}
        error={nameValidation}
        onChange={(event) => handleChange("name", event.target.value)}
        InputLabelProps={{
          margin: "dense",
          variant: "outlined",
        }}
      />
      <TextField
        id="id"
        label="Produkt-ID"
        margin="normal"
        variant="outlined"
        fullWidth
        error={idValidation}
        required={true}
        onChange={(event) => handleChange("id", event.target.value)}
        InputLabelProps={{
          margin: "dense",
          variant: "outlined",
        }}
      />
      <TextField
        id="url"
        label="Bild-url"
        margin="normal"
        variant="outlined"
        fullWidth
        error={urlValidation}
        required={true}
        onChange={(event) => handleChange("imageUrl", event.target.value)}
        InputLabelProps={{
          margin: "dense",
          variant: "outlined",
        }}
      />
      <TextField
        id="price"
        label="Pris"
        margin="normal"
        variant="outlined"
        type="number"
        fullWidth
        error={priceValidation}
        required={true}
        onChange={(event) => handleChange("price", Number(event.target.value))}
        InputLabelProps={{
          margin: "dense",
          variant: "outlined",
        }}
      />
      <TextField
        id="description"
        label="Beskrivning"
        multiline
        rows="4"
        margin="normal"
        variant="outlined"
        fullWidth
        error={descriptionValidation}
        required={true}
        onChange={(event) => handleChange("description", event.target.value)}
        InputLabelProps={{
          margin: "dense",
          variant: "outlined",
        }}
      />
      <Button
        variant="contained"
        color="primary"
        style={createButton}
        type="submit"
        onClick={() => checkValidation()}
      >
        Lägg till produkt
      </Button>
    </form>
  );
}

const createButton: CSSProperties = {
  width: "100%",
  fontWeight: 600,
  borderRadius: 0,
  marginTop: "0.5rem",
};
