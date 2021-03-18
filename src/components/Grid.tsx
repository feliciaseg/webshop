import React from "react";
import Grid from "@material-ui/core/Grid";

interface ProductProps {
  imageUrl: string;
  id: string;
  name: string;
  price: number;
  quantity?: number;
}
interface Props {
  products: {
    component: (prop: ProductProps) => JSX.Element;
    productProps: ProductProps[];
  };
}

function GridContainer(props: Props) {
  return (
    <div>
      <Grid container spacing={3}>
        {props.products.productProps.map((productProp: any) => (
          <Grid item sm={6} md={3} xl={2} key={productProp.id}>
            {React.createElement(props.products.component, productProp)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default GridContainer;
