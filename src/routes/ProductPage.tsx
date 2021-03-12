import { Button } from "@material-ui/core";
import Footer from "../components/Footer";
import { useEffect, useState, useContext } from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { products } from "./products";
import Header from "../components/Header";
import { CSSProperties } from "@material-ui/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { CartContext } from "../contexts/CartContext";

interface Product {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
  description: string;
}

interface Id {
  id: string;
}

interface Props extends RouteComponentProps<Id> {}

export default function ProductPage(props: Props) {
  const cart = useContext(CartContext);

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    products.map((item) => {
      if (item.id === props.match.params.id) {
        setProduct({
          imageUrl: item.imageUrl,
          id: item.id,
          name: item.name,
          price: item.price,
          description: item.description,
        });
      } else {
      }
    });
  }, []);

  return (
    <>
      <Header type={"white"} />
      <div style={productContainer}>
        <div style={imageContainer}>
          <Link to="/">
            <Button
              variant="contained"
              color="secondary"
              style={goBackButton}
              startIcon={<ArrowBack />}
            >
              Tillbaka
            </Button>
          </Link>
          <img
            style={productImage}
            src={product?.imageUrl}
            alt={product?.name}
          ></img>
        </div>
        <div style={infoContainer}>
          <h2 style={productName}>{product?.name}</h2>
          <p style={productPrice}>{product?.price}&nbsp;kr</p>
          <Button
            variant="contained"
            color="primary"
            style={addToCartButton}
            onClick={() => {
              cart.addToCart(product!);
            }}
          >
            Lägg i varukorgen
          </Button>
          <p style={productDescription}>{product?.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

const productContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  height: "calc(100% - 7rem)",
};

const imageContainer: CSSProperties = {
  width: "50%",
  height: "100%",
};

const goBackButton: CSSProperties = {
  position: "absolute",
  borderRadius: 0,
  margin: "1.5rem 3.5rem",
};

const productImage: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const infoContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  padding: "4rem 3.5rem",
};

const productName: CSSProperties = {
  margin: 0,
  fontWeight: 400,
  fontSize: "1.5rem",
};

const productPrice: CSSProperties = {
  margin: "1rem 0",
  fontWeight: 700,
  fontSize: "1.2rem",
};

const productDescription: CSSProperties = {
  fontSize: "0.8rem",
};

const addToCartButton: CSSProperties = {
  width: "100%",
  margin: "3rem 0 2rem 0",
  fontWeight: 600,
  borderRadius: 0,
};
