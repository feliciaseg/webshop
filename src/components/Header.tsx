import { CSSProperties } from "@material-ui/styles";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { theme } from "../styling/colorTheme";

interface Props {
  type: "transparent" | "white";
}

export default function Header(props: Props) {
  let bgColor: string;
  let textColor: string;

  if (props.type === "transparent") {
    bgColor = "transparent";
    textColor = theme.palette.secondary.main;
  } else {
    bgColor = "white";
    textColor = theme.palette.primary.main;
  }

  return (
    <div style={{ ...headerStyling, backgroundColor: bgColor }}>
      <Link style={{ textDecoration: "none" }} to={{ pathname: "/" }}>
        <h1 style={{ ...h1, color: textColor }}>HEMMA</h1>
      </Link>
      <Link style={{ textDecoration: "none" }} to={{ pathname: "/checkout" }}>
        <ShoppingCartIcon style={{ ...iconStyling, color: textColor }} />
      </Link>
    </div>
  );
}

const headerStyling: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "7rem",
  width: "100%",
  position: "sticky",
};

const iconStyling: CSSProperties = {
  margin: "1rem",
};

const h1: CSSProperties = {
  margin: "1rem",
};
