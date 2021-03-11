import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Grid from "../components/Grid";
import { products } from "./products";
import ProductCard from "../components/ProductCard";


interface Props {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
}
interface ProductList {
  function: (prop: Props) => JSX.Element;
  productProps: Props[];
}

export default function StartPage() {
  console.log(typeof ProductCard);
  const productList: ProductList = {
    function: ProductCard,
    productProps: [],
  };

  function mapProducts() {
    products.map((product) => {
      productList.productProps.push({
        imageUrl: product.imageUrl,
        id: product.id,
        name: product.name,
        price: product.price,
      });
    });
  }

  mapProducts();
  return (
    <>
    <Box style={{ display: "flex", flexDirection: "column", }}>
      <Link to={{ pathname: "/product" }}>Gå till productPage</Link>
      <Link to={{ pathname: "/admin" }}>Gå till AdminPage</Link>
      <div style={{ width: "100%", padding: "4rem" }}>
        <Grid products={productList} />
      </div>
    </Box>
    <Footer/>
    </>
  );
}
