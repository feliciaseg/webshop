import React from "react";
import Grid from "@material-ui/core/Grid";

interface Props {
  products: any;
}

function GridContainer(props: Props) {
  return (
    <div>
      <Grid container spacing={3}>
        {props.products.list.map((productProps: any) => (
          <Grid item sm={6} md={3} xl={2}>
            {React.createElement(props.products.function, productProps)}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default GridContainer;
