import { Box, Input } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

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

const imgContainer: CSSProperties = {
  height: "100%",
  width: "7.25rem",
};

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  numberOfProducts?: number | undefined;
  onClick: React.MouseEventHandler<SVGSVGElement>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CartCard(props: Props) {
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
        <img style={productImg} src={props.imageUrl} alt="product" />
      </div>
      <div className={"flex-direction"}>
        <p>{shortenName(props.name)}</p>
        <Input
          type="number"
          defaultValue={props.numberOfProducts}
          inputProps={{ min: 0 }}
          className={"selector"}
          onChange={props.handleChange}
        ></Input>
      </div>
      <div className={"flex-direction"}>
        <p>{props.price} kr</p>
        <DeleteIcon onClick={props.onClick} />
      </div>
    </Box>
  );
}
