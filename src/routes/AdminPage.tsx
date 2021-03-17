import Header from "../components/Header";
import { products } from "./products";
import ProductCardAdmin from "../components/ProductCardAdmin";
import Grid from "../components/Grid";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";

interface Props {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
}
interface ProductList {
  component: (props: Props) => JSX.Element;
  productProps: Props[];
}

export default function AdminPage() {
  const [productList, setProductList] = useState<ProductList>({
    component: ProductCardAdmin,
    productProps: [],
  });

  useEffect(() => {
    products.map((product) => {
      setProductList((productList: ProductList) => ({
        ...productList,
        productProps: [
          ...productList.productProps,
          {
            imageUrl: product.imageUrl,
            id: product.id,
            name: product.name,
            price: product.price,
          },
        ],
      }));
    });
  }, []);

  return (
    <>
      <Header type={"white"} />
      <div style={adminContainer}>
        <Button style={addButton} variant="contained" color="primary">
          Lägg till produkt
        </Button>
        <Grid products={productList} />
      </div>
    </>
  );
}

const adminContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "3.5rem",
};
const addButton: CSSProperties = {
  width: "100%",
  maxWidth: "20rem",
  marginBottom: "2rem",
  alignSelf: "flex-end",
  borderRadius: 0,
};
