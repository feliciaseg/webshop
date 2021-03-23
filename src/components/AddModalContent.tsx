import { CSSProperties } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ModalContext } from "../contexts/ModalContext";
import { Product } from "../products";

export default function AddModalContent() {
  const products = useContext(ProductContext);
  const modal = useContext(ModalContext);

  const [error, setError] = useState({
    name: "",
    id: "",
    imageUrl: "",
    price: "",
    description: "",
  });

  const [inputValues, setInputValues] = useState<Product>({
    imageUrl: "",
    id: "",
    name: "",
    price: 0,
    description: "",
  });

  function handleChange(field: string, fieldValue: string | number) {
    setInputValues({ ...inputValues, [field]: fieldValue });

    if (!fieldValue || fieldValue === 0) {
      setError({ ...error, [field]: "Vänligen fyll i fältet." });
    } else {
      setError({ ...error, [field]: "" });
    }
  }

  function createProduct(e: any) {
    if (
      error.imageUrl.length +
        error.name.length +
        error.id.length +
        error.price.length +
        error.name.length +
        error.description.length ===
        0 &&
      (inputValues.description,
      inputValues.name,
      inputValues.id,
      inputValues.price,
      inputValues.imageUrl)
    ) {
      products.addProduct(inputValues);
      modal.setModalIsOpen(false);
    }
    e.preventDefault();
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
        error={Boolean(error.name)}
        helperText={error.name}
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
        error={Boolean(error.id)}
        helperText={error.id}
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
        error={Boolean(error.imageUrl)}
        helperText={error.imageUrl}
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
        error={Boolean(error.price)}
        helperText={error.price}
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
        error={Boolean(error.description)}
        helperText={error.description}
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
