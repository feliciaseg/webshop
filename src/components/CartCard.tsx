import { Box, Input } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  numberOfProducts?: number | undefined;
  onClick: React.MouseEventHandler<SVGSVGElement>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface MenuItem {
  value: number;
  label: number;

}

export default function CartCard(props: Props) {
  let quantities: MenuItem[] = []
  const shortenName = (name: string) => {
    if (name.length > 11) {
      const newName = name.slice(0, 11);
      return newName + "...";
    } else {
      return name;
    }
  };

  const getQuantities = () => {
    for (let i = 0; i < 20; i++){
      
    }
  }
  



  return (
    <Box style={box}>
      <div style={imgContainer}>
        <img style={productImg} src={props.imageUrl} alt="product" />
      </div>
      <div style={spaceBetween}>
        <div className={"flex-direction alignStart"}>
          <p style={itemSpacing}>{shortenName(props.name)}</p>
          
          <TextField
          id="quantity"
          select
          label="quantity"
          defaultValue={props.numberOfProducts}
          value = {quantitySelections}
          onChange={props.handleChange}
          
        >
       
        </TextField>
          
          {/* <Input
            type="number"
            defaultValue={props.numberOfProducts}
            inputProps={{ min: 0, style: selector, onKeyDown: (e) => {
              e.preventDefault();
              },}}
            onChange={props.handleChange}
          ></Input> */}
        
        
        
        
        </div>
        <div className={"flex-direction alignEnd"}>
          <p style={itemSpacing}>{props.price} kr</p>
          <DeleteIcon onClick={props.onClick} />
        </div>
      </div>
    </Box>
  );
}

const spaceBetween: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
  flexDirection: "row",
  padding: "1.5rem",
};

const itemSpacing: CSSProperties = {
  margin: "0",
};

const selector: CSSProperties = {
  width: "4rem",
};

const box: CSSProperties = {
  display: "flex",
  height: "6.5rem",
  width: "100%",
  marginBottom: "1rem",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.2)",
};

const productImg: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const imgContainer: CSSProperties = {
  height: "100%",
  width: "7.5rem",
};
