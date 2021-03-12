import { Box } from "@material-ui/core";
import Header from '../components/Header';
import { Link } from "react-router-dom";
import Grid from "../components/Grid";
import { products } from "./products";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

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

export default function StartPage() {
  const [productList, setProductList] = useState<ProductList>({
    component: ProductCard,
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
    <Header type={"transparent"}/>
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Link to={{ pathname: "/product" }}>Gå till productPage</Link>
      <Link to={{ pathname: "/admin" }}>Gå till AdminPage</Link>
      <div style={{ width: "100%", padding: "4rem" }}>
        <Grid products={productList} />
      </div>
    </Box>

  );
}
