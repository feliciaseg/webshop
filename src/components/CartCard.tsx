import { Box, FormControl, Input, MenuItem, Select } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { isUndefined } from "node:util";

const box: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
};

const productImg: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const selector: CSSProperties = {
  width: "7.6rem",
  display: "flex",
};

const imgContainer: CSSProperties = {
  height: "100%",
  width: "7.25rem",
};

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  numberOfProducts?: number | undefined;
  onClick: React.MouseEventHandler;
}

export default function CartCard(props: Props) {
  let numberOfProducts: number | undefined;
  if (props.numberOfProducts === undefined) {
    numberOfProducts = 1;
  } else {
    numberOfProducts = props.numberOfProducts;
  }

  let defaultValue = numberOfProducts.toString();

  const shortenName = (name: string) => {
    if (name.length > 11) {
      const newName = name.slice(0, 11);
      return newName + "...";
    } else {
      return name;
    }
  };

  return (
    <Box style={box} className={"cartCardBox"}>
      <div style={imgContainer}>
        <img style={productImg} src={props.imageUrl} />
      </div>
      <div className={"flex-direction"}>
        <p>{shortenName(props.name)}</p>
        <Input
          style={selector}
          type="number"
          defaultValue={defaultValue}
          inputProps={{ min: 0 }}
        ></Input>
      </div>
      <div className={"flex-direction"}>
        <p>{props.price} kr</p>
        <DeleteIcon onClick={props.onClick} />
      </div>
    </Box>
  );
}
