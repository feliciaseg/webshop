import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

// interface Props {
// }

// interface State{

// }

export default function StartPage() {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Link to={{ pathname: "/product" }}>Gå till productPage</Link>
      <Link to={{ pathname: "/admin" }}>Gå till AdminPage</Link>
      <div style={{ width: "15rem" }}>
        <ProductCard imageUrl="" id="" name="" price={0} />
      </div>
    </Box>
  );
}
