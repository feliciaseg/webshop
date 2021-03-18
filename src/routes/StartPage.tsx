import { Box } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import { ProductContext } from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard";
import HeroBanner from "../components/HeroBanner";
import { useEffect, useState, useContext } from "react";
import { Product } from "../products";
interface ProductList {
  component: (props: Product) => JSX.Element;
  productProps: Product[];
}

export default function StartPage() {
  const list = useContext(ProductContext);
  const [productList, setProductList] = useState<ProductList>({
    component: ProductCard,
    productProps: list.productList,
  });

  useEffect(() => {
    setProductList({ ...productList, productProps: list.productList });
  }, [list.productList]);

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
