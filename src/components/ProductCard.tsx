import { CSSProperties } from "@material-ui/styles";
import AddCircle from "@material-ui/icons/AddCircle";
import { addProductToCart } from "../helper";
import React, { useState } from "react";
import SmallModal from "./SmallModal";

interface Props {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
}

export default function ProductCard(props: Props) {
  const [modal, showModal] = useState(false);

  const handleClick = () => {
    showModal(true);
    addProductToCart(props);
    setTimeout(() => {
      showModal(false);
    }, 750);
  };

  return (
    <>
      {modal && <SmallModal />}
      <div style={productContainer}>
        <div style={imageContainer}>
          <img style={productImage} src={props.imageUrl}></img>
          <AddCircle style={addIcon} onClick={handleClick} />
        </div>
        <div style={productDescription}>
          <h2 style={productName}>{props.name}</h2>
          <p style={productPrice}>{props.price}&nbsp;kr</p>
        </div>
      </div>
    </>
  );
}

const productContainer: CSSProperties = {
  width: "100%",
  height: "18rem",
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
  position: "absolute",
  right: "1rem",
  bottom: "1rem",
  color: "#ffff",
  fontSize: "2rem",
  filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.4))",
  cursor: "pointer",
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
