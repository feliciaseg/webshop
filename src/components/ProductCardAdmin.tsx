import { useContext, useEffect, useState } from "react";
import { CSSProperties } from "@material-ui/styles";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import { ModalContext } from "../contexts/ModalContext";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../products";
import { theme } from "../styling/colorTheme";

export default function ProductCardAdmin(props: Product) {
  const modal = useContext(ModalContext);
  const products = useContext(ProductContext);
  const [iconHover, setIconHover] = useState({
    delete: false,
    edit: false,
  });
  const [iconColor, setIconColor] = useState({
    delete: "#ffff",
    edit: "#ffff",
  });

  useEffect(() => {
    iconHover.delete
      ? setIconColor({
          ...iconColor,
          delete: theme.palette.secondary.dark,
        })
      : setIconColor({
          ...iconColor,
          delete: "#ffff",
        });
  }, [iconHover.delete]);

  useEffect(() => {
    iconHover.edit
      ? setIconColor({
          ...iconColor,
          edit: theme.palette.secondary.dark,
        })
      : setIconColor({
          ...iconColor,
          edit: "#ffff",
        });
  }, [iconHover.edit]);

  return (
    <>
      <div style={productContainer}>
        <div style={imageContainer}>
          <img style={productImage} src={props.imageUrl} alt={props.name}></img>
          <Delete
            style={{ ...deleteIcon, color: iconColor.delete }}
            onMouseOver={() =>
              setIconHover({ ...iconHover, delete: !iconHover.delete })
            }
            onMouseOut={() =>
              setIconHover({ ...iconHover, delete: !iconHover.delete })
            }
            onClick={() => products.removeProduct(props)}
          />
          <Edit
            style={{ ...editIcon, color: iconColor.edit }}
            onMouseOver={() =>
              setIconHover({ ...iconHover, edit: !iconHover.edit })
            }
            onMouseOut={() =>
              setIconHover({ ...iconHover, edit: !iconHover.edit })
            }
            onClick={() => ((
              modal.setModalIsOpen(true),
              modal.setModalType("edit"),
              modal.setEditProduct(props)
              ))}
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
  fontSize: "2rem",
  filter: "drop-shadow(0px 0px 3px rgba(0,0,0,0.4))",
  cursor: "pointer",
};

const editIcon: CSSProperties = {
  position: "absolute",
  left: "1rem",
  bottom: "1rem",
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
