import { Box } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import HeroBanner from "../components/HeroBanner";
import { useEffect, useState, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../products";
import "../styling/style.css";

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
        <div className="paddingContainer" style={{ width: "100%" }}>
          <Grid products={productList} />
        </div>
      </Box>
      <Footer />
    </>
  );
}
