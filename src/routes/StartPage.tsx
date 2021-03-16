import { Box } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import { products } from "./products";
import ProductCard from "../components/ProductCard";
import HeroBanner from "../components/HeroBanner";
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
      <Header type={"transparent"} />
      <HeroBanner />
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: "100%", padding: "3.5rem" }}>
          <Grid products={productList} />
        </div>
      </Box>
      <Footer />
    </>
  );
}
