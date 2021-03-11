import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Grid from "../components/Grid";
import { products } from "./products";
import ProductCard from "../components/ProductCard";

// interface Props {
// }

// interface State{

// }

export default function StartPage() {
  const productList: any = {
    function: "",
    list: [],
  };

  function mapProducts() {
    productList.function = ProductCard;
    products.map((product) => {
      productList.list.push({
        imageUrl: product.imageUrl,
        id: product.id,
        name: product.name,
        price: product.price,
      });
    });
  }

  mapProducts();

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Link to={{ pathname: "/product" }}>Gå till productPage</Link>
      <Link to={{ pathname: "/admin" }}>Gå till AdminPage</Link>
      <div style={{ width: "100%", padding: "4rem" }}>
        <Grid products={productList} />
      </div>
    </Box>
  );
}
