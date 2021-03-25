import { CSSProperties } from "@material-ui/styles";
import AddCircle from "@material-ui/icons/AddCircle";
import { useState, useContext, useEffect } from "react";
import SmallModal from "./SmallModal";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { Product } from "../products";
import { theme } from "../styling/colorTheme";

export default function ProductCard(props: Product) {
  const cart = useContext(CartContext);
  const [modal, showModal] = useState(false);
  const [iconHover, setIconHover] = useState(false);
  const [iconColor, setIconColor] = useState("#ffff");

  useEffect(() => {
    iconHover
      ? setIconColor(theme.palette.secondary.dark)
      : setIconColor("#ffff");
  }, [iconHover]);

  const handleClick = (e: any) => {
    e.preventDefault();
    showModal(true);
    cart.addToCart(props);
    setTimeout(() => {
      showModal(false);
    }, 1000);
  };

  return (
    <>
      {modal && <SmallModal />}
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        to={`/products/${props.id}`}
      >
        <div style={productContainer}>
          <div style={imageContainer}>
            <img
              style={productImage}
              src={props.imageUrl}
              alt={props.name}
            ></img>
            <div
              onMouseOver={() => setIconHover(!iconHover)}
              onMouseOut={() => setIconHover(!iconHover)}
              style={iconContainer}
            >
              <AddCircle
                style={{ ...addIcon, color: iconColor }}
                onClick={(e) => handleClick(e)}
              />
            </div>
          </div>
          <div style={productDescription}>
            <h2 style={productName}>{props.name}</h2>
            <p style={productPrice}>{props.price}&nbsp;kr</p>
          </div>
        </div>
      </Link>
    </>
  );
}

const productContainer: CSSProperties = {
  width: "100%",
  height: "23rem",
};

const imageContainer: CSSProperties = {
  position: "relative",
  width: "100%",
  height: "75%",
};

const productImage: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const addIcon: CSSProperties = {
  position: "relative",
  fontSize: "2rem",
  filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.4))",
  cursor: "pointer",
  zIndex: -100,
};

const iconContainer: CSSProperties = {
  position: "absolute",
  right: "1rem",
  bottom: "1rem",
  height: "2rem",
  width: "2rem",
  borderRadius: 50,
  zIndex: 150,
};

const productDescription: CSSProperties = {
  padding: "1rem 0",
};

const productName: CSSProperties = {
  margin: 0,
  fontSize: "1.2rem",
  fontWeight: 400,
};

const productPrice: CSSProperties = {
  marginTop: "0.5rem",
  fontSize: "0.9rem",
  fontWeight: 700,
};
