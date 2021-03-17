import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { products } from "./products";
import ProductCard from "../components/ProductCard";
import Grid from "../components/Grid";
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

export default function AdminPage() {
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
      <Header type={"white"} />
      <div style={{ width: "100%", padding: "3.5rem" }}>
        <Grid products={productList} />
      </div>
    </>
  );
}
