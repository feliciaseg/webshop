import Cancel from "@material-ui/icons/Cancel";
import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { Button, TextField } from "@material-ui/core";

export default function AdminModal() {
  const modal = useContext(ModalContext);
  return (
    <div style={modalContainer}>
      <Cancel style={cancelIcon} onClick={() => modal.setModalIsOpen(false)} />
      {modal.modalType === "add" ? (
        <form autoComplete="off">
          <TextField
            id="name"
            label="Produktnamn"
            margin="normal"
            variant="outlined"
            fullWidth
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
            fullWidth
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
            InputLabelProps={{
              margin: "dense",
              variant: "outlined",
            }}
          />
          <Button variant="contained" color="primary" style={createButton}>
            Lägg till produkt
          </Button>
        </form>
      ) : (
        "Ändra produkt"
      )}
    </div>
  );
}

const modalContainer: CSSProperties = {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  width: "85%",
  maxWidth: "40rem",
  minHeight: "30rem",
  transform: "translate(-50%, -50%)",
  padding: "2rem",
  backgroundColor: "#ffff",
  boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.3)",
  zIndex: 100,
};

const cancelIcon: CSSProperties = {
  alignSelf: "flex-end",
  color: theme.palette.primary.main,
};

const createButton: CSSProperties = {
  width: "100%",
  fontWeight: 600,
  borderRadius: 0,
  marginTop: "0.5rem",
};
