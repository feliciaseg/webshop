import React from "react";
import Grid from "@material-ui/core/Grid";

interface ProductProps {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
}
interface Props {
  products: {
    function: (prop: ProductProps) => JSX.Element;
    productProps: ProductProps[];
  };
}

function GridContainer(props: Props) {
  console.log(props);
  return (
    <div>
      <Grid container spacing={3}>
        {props.products.productProps.map((productProp: any) => (
          <Grid item sm={6} md={3} xl={2}>
            {React.createElement(props.products.function, productProp)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default GridContainer;
