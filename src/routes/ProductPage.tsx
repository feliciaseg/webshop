import { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { products } from "./products";

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

  return <Link to={{ pathname: "/checkout" }}>Gå till checkoutpage</Link>;
}
