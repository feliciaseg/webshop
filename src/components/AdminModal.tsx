import Cancel from "@material-ui/icons/Cancel";
import { CSSProperties } from "@material-ui/styles";
import { theme } from "../styling/colorTheme";

interface Props {
  closeModal: () => void;
}

export default function OrderConfirmationModal(props: Props) {
  return (
    <div style={modalContainer}>
      <Cancel style={cancelIcon} onClick={props.closeModal} />
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
