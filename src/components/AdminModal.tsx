import Cancel from "@material-ui/icons/Cancel";
import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import AddModalContent from "./AddModalContent";
import EditModalContent from "./EditModalContent";

export default function AdminModal() {
  const modal = useContext(ModalContext);
  return (
    <div style={darkUnderlay}>
      <div className="modalContainer" style={modalContainer}>
        <Cancel
          style={cancelIcon}
          onClick={() => modal.setModalIsOpen(false)}
        />
        {modal.modalType === "add" ? <AddModalContent /> : <EditModalContent />}
      </div>
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
  backgroundColor: "#ffff",
  boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.3)",
  zIndex: 100,
};

const cancelIcon: CSSProperties = {
  alignSelf: "flex-end",
  color: theme.palette.primary.main,
};

const darkUnderlay: CSSProperties = {
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 90,
};
