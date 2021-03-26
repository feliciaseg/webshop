import { CSSProperties } from "@material-ui/styles";
import AddCircle from "@material-ui/icons/AddCircle";
import { useState, useContext, useEffect } from "react";
import SmallModal from "./SmallModal";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { Product } from "../products";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  icon: {
    zIndex: 1,
    position: "absolute",
    fontSize: "2rem",
    filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.4))",
    cursor: "pointer",
    right: "1rem",
    bottom: "1rem",
    color: "#ffff",
    '&:hover': {
      color: theme.palette.secondary.dark
    },
  }
}),
);

export default function ProductCard(props: Product) {
  const cart = useContext(CartContext);
  const [modal, showModal] = useState(false);
  const classes = useStyles();

  const handleClick = (e: any) => {
    e.preventDefault();
    showModal(true);
    cart.addToCart(props);
    setTimeout(() => {
      showModal(false);
    }, 1000);
  };

  useEffect(() => {
        return () => {
            showModal(false)
        }
    }, [])

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
              <AddCircle className={classes.icon}
              onClick={(e) => handleClick(e)}
            />
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
