import { useState, useContext } from "react";
import { CSSProperties } from "@material-ui/styles";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { ModalContext } from "../contexts/ModalContext";

interface Props {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
}

export default function ProductCardAdmin(props: Props) {
  const modal = useContext(ModalContext);

  return (
    <>
      <div style={productContainer}>
        <div style={imageContainer}>
          <img style={productImage} src={props.imageUrl} alt={props.name}></img>
          <Delete style={deleteIcon} />
          <Edit
            style={editIcon}
            onClick={() => (
              modal.setModalIsOpen(true), modal.setModalType("edit")
            )}
          />
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

const deleteIcon: CSSProperties = {
  position: "absolute",
  right: "1rem",
  bottom: "1rem",
  color: "#ffff",
  fontSize: "2rem",
  filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.4))",
  cursor: "pointer",
};

const editIcon: CSSProperties = {
  position: "absolute",
  left: "1rem",
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
