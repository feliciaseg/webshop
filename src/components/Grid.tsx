import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";

function Main() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item sm={6} md={3} xl={2}>
          <ProductCard id="" name="" imageUrl="" price={0} />
        </Grid>
        <Grid item sm={6} md={3} xl={2}>
          <ProductCard id="" name="" imageUrl="" price={0} />
        </Grid>
        <Grid item sm={6} md={3} xl={2}>
          <ProductCard id="" name="" imageUrl="" price={0} />
        </Grid>
        <Grid item sm={6} md={3} xl={2}>
          <ProductCard id="" name="" imageUrl="" price={0} />
        </Grid>
        <Grid item sm={6} md={3} xl={2}>
          <ProductCard id="" name="" imageUrl="" price={0} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Main;
